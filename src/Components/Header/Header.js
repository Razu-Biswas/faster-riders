import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TourContext } from '../../Context/dataContext';
import './Header.css';
import { RiLogoutCircleRLine } from 'react-icons/ri';
// import { FirebaseInit, Logout } from '../../firebase/FirebaseAuth';
import { FirebaseInit, Logout } from '../firebase/FirebaseAuth';

function Header() {
	const { userLogin, userInformation, setUserInformation } = useContext(
		TourContext
	);
	const history = useHistory();

	FirebaseInit();
	const logOutBtn = () => {
		Logout().then((res) => {
			setUserInformation({});
			history.push('/');
		});
	};

	return (
		<div className="navbar navbar-expand-lg  container Header">
			<div className="container-fluid">
				<Link className="navbar-brand brandName" to="/">
					<h4>CITY TOUR TRACK</h4>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="#">
								Destination
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="#">
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="#">
								Contact
							</Link>
						</li>
						{!userLogin ? (
							<li className="nav-item">
								<Link className="nav-link  btn btn-warning" to="/login">
									Login
								</Link>
							</li>
						) : (
							<li className="nav-item d-flex">
								<button
									className="btn btn-warning logoutBtn"
									onClick={logOutBtn}
								>
									{userInformation?.name}
									<RiLogoutCircleRLine />
								</button>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
