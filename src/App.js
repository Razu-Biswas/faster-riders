import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import PrivateRoute from './components/routes/PrivateRoute';
import PrivateRoute from './Components/routes/PrivateRoute';
// import Home from './components/Home/Home';
import Home from './Components/Home/Home';
// import SearchDestination from './components/LocationSearch/SearchDestination';
import SearchDestination from './Components/LocationSearch/SearchDestination';
// import Header from './components/Header/Header';
import Header from './Components/Header/Header';
// import IfLoginRoute from './components/routes/IfLoginRoute';
import IfLoginRoute from './Components/routes/IfLoginRoute';
// import Login from './components/Auth/Login';
import Login from './Components/Auth/Login';
// import SignUp from './components/Auth/SignUp';
import SignUp from './Components/Auth/SignUp';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<PrivateRoute path="/destination/:type">
						<SearchDestination />
					</PrivateRoute>
					<IfLoginRoute path="/login">
						<Login />
					</IfLoginRoute>
					<IfLoginRoute path="/signup">
						<SignUp />
					</IfLoginRoute>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
