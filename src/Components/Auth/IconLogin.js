import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useHistory, useLocation } from 'react-router';
import { TourContext } from '../../Context/dataContext';
import { FirebaseInit, LoginWithGoogleIcon } from '../firebase/FirebaseAuth';

function IconLogin() {
	const { setUserInformation } = useContext(TourContext);

	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };

	FirebaseInit();
	const googleSinIn = () => {
		LoginWithGoogleIcon().then((res) => {
			setUserInformation(res);
			history.replace(from);
		});
	};

	return (
		<div className="d-flex flex-column align-items-center googleLogin mt-5">
			<h6>Or</h6>
			<button className="btn googleLogin" onClick={googleSinIn}>
				<FcGoogle />
			</button>
		</div>
	);
}

export default IconLogin;
