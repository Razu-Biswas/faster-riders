import React from 'react';
import { Redirect, Route } from 'react-router';

function IfLoginRoute({ children, ...rest }) {
	return (
		<Route
			{...rest}
			render={() =>
				true ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/',
						}}
					/>
				)
			}
		/>
	);
}

export default IfLoginRoute;
