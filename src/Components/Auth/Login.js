import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TourContext } from '../../Context/dataContext';
// import { FirebaseInit, SignInWithForm } from '../../firebase/FirebaseAuth';
import {FirebaseInit, SignInWithForm, SignUpWithForm } from '../firebase/FirebaseAuth';
import IconLogin from './IconLogin';
import { useHistory, useLocation } from 'react-router';
import './Auth.css';

function Login() {
	FirebaseInit();
	const { setUserInformation } = useContext(TourContext);
	
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };

	const userEmailNPass = {
		email: '',
		password: '',
	};

	const fromInput = (e) => {
		e.target.name === 'email'
			? (userEmailNPass.email = e.target.value.trim())
			: (userEmailNPass.password = e.target.value.toString());
	};
	
	const SignInForm = (e) => {
		const { email, password } = userEmailNPass;
		SignInWithForm(email, password).then((res) => {
			setUserInformation(res);
			history.replace(from);
		});
		e.preventDefault();
	};
	return (
		<div className="container mt-5 ">
			<div className="w-75 d-block m-auto Auth">
				<Form
					onSubmit={SignInForm}
					className="d-flex flex-column align-items-center"
				>
					<Form.Group controlId="formBasicEmail" className="w-75 mt-3">
						<Form.Control
							type="email"
							placeholder="Enter email"
							onChange={fromInput}
							required
							name="email"
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword" className="w-75 mt-3">
						<Form.Control
							type="password"
							placeholder="Password"
							onChange={fromInput}
							required
							name="password"
						/>
					</Form.Group>
					<Form.Group
						controlId="formBasicCheckbox"
						className="d-flex justify-content-between w-75 flex-wrap"
					>
						<Form.Check type="checkbox" label="Remember Me" />
						<Form.Label>
							<Link className="text-success" to="#">
								Forgot Password
							</Link>
						</Form.Label>
					</Form.Group>
					<Button variant="danger" type="submit" className="w-75 mt-3">
						Login
					</Button>
					<p className="mt-5 d-flex w-75 flex-wrap">
						Don't have an account?
						<Link to="/signup" className="text-success">
							Create an account
						</Link>
					</p>
				</Form>
			</div>

			<IconLogin />
		</div>
	);
}

export default Login;
