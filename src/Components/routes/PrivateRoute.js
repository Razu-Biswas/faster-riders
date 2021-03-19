import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { TourContext } from '../../Context/dataContext';

function PrivateRoute({ children, ...rest }) {
	const { userLogin } = useContext(TourContext);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				userLogin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
