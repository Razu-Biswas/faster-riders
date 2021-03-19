import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import IconLogin from './IconLogin';
import { useForm } from 'react-hook-form';
// import { FirebaseInit, SignUpWithForm } from '../../firebase/FirebaseAuth';
import { FirebaseInit, SignUpWithForm } from '../firebase/FirebaseAuth';

function SignUp() {
	const { register, errors } = useForm();
	const history = useHistory();

	const createUser = {
		email: '',
		password: '',
		confirmPassword: '',
		fullName: '',
	};

	const validatePass = () => {
		return createUser.confirmPassword.length > 8 &&
			createUser.confirmPassword === createUser.password
			? true
			: false;
	};

	const fromInput = (e) => {
		e.target.name === 'email'
			? (createUser.email = e.target.value.trim())
			: e.target.name === 'password'
			? (createUser.password = e.target.value.toString())
			: e.target.name === 'confirmPassword'
			? (createUser.confirmPassword = e.target.value.toString())
			: (createUser.fullName = e.target.value);
	};

	FirebaseInit();
	const onSubmit = (e) => {
		const { email, confirmPassword, fullName } = createUser;
		if (validatePass) {
			SignUpWithForm(email, confirmPassword, fullName).then((res) => {
				res ? history.push('/login') : errMsg('something wrong');
			});
		}

		e.preventDefault();
	};
	const errMsg = (e) => {
		console.log(e);
	};
	return (
		<div className="container  mt-5 ">
			<div className="w-75 d-block m-auto Auth">
				<Form
					onSubmit={onSubmit}
					className="d-flex flex-column align-items-center"
				>
					<Form.Group controlId="formBasicName" className="w-75 mt-3">
						<Form.Control
							type="text"
							placeholder="Enter Full Name"
							name="firstName"
							required
							ref={register({ required: true, maxLength: 20 })}
							onChange={fromInput}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicEmail" className="w-75 mt-3">
						<Form.Control
							type="email"
							name="email"
							placeholder="Enter email"
							required
							ref={register(
								{ required: true },
								{
									pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
								}
							)}
							onChange={fromInput}
						/>
					</Form.Group>
					{errors.email && errMsg()}
					<Form.Group controlId="formBasicPassword" className="w-75 mt-3">
						<Form.Control
							type="password"
							placeholder="Password"
							name="password"
							required
							onChange={fromInput}
						/>
					</Form.Group>
					{errors.password && <span>Please Type Correct Email</span>}
					<Form.Group
						controlId="formBasicConfirmPassword"
						className="w-75 mt-3"
					>
						<Form.Control
							type="password"
							placeholder="Confirm Password"
							onKeyUp={fromInput}
							required
							name="confirmPassword"
						/>
					</Form.Group>
					<Button variant="warning" type="submit" className="w-75 mt-3">
						SignUp
					</Button>
					<p className="mt-5 d-flex w-75 flex-wrap">
						Already have an Account?
						<Link to="/login" className="text-warning">
							Login
						</Link>
					</p>
				</Form>
			</div>

			<IconLogin />
		</div>
	);
}

export default SignUp;
