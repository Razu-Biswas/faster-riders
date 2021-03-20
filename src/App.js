import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Components/routes/PrivateRoute';
import Home from './Components/Home/Home';
import SearchDestination from './Components/LocationSearch/SearchDestination';
import Header from './Components/Header/Header';
import IfLoginRoute from './Components/routes/IfLoginRoute';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import './App.css';
function App() {
	return (
		<div className="App">
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
