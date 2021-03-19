import firebaseConfig from './firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/auth';

export const FirebaseInit = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
};
const userData = (info) => {
	const userInfo = {
		name: info.displayName,
		email: info.email,
		isLoggedIn: true,
	};
	return userInfo;
};

export const LoginWithGoogleIcon = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	return firebase
		.auth()
		.signInWithPopup(provider)
		.then((res) => userData(res.user));
};

export const SignUpWithForm = (email, password, name) => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			updateUserName(name);
			return true;
		});
};

export const SignInWithForm = (email, password) => {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((res) => userData(res.user));
};

export const Logout = () => {
	return firebase
		.auth()
		.signOut()
		.then(() => {
			return true;
		});
};
const updateUserName = (name) => {
	const user = firebase.auth().currentUser;
	return user.updateProfile({
		displayName: name,
	});
};