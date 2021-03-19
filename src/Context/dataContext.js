import { createContext, useEffect, useState } from 'react';

export const TourContext = createContext();

export const TourContextProvider = (props) => {
	const [userInformation, setUserInformation] = useState({});
	const [userLogin, setUserLogin] = useState(false);

	useEffect(() => {
		userInformation?.isLoggedIn ? setUserLogin(true) : setUserLogin(false);
	}, [userInformation]);

	const ContextInfo = {
		userInformation,
		setUserInformation,
		userLogin,
	};
	return (
		<TourContext.Provider value={ContextInfo}>
			{props.children}
		</TourContext.Provider>
	);
};
