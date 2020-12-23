import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Router, Link } from '@reach/router';
import Register from './components/Register';
import Login from './components/Login';
import UserPage from './components/UserPage';

function App() {
	return (
		<div className="">
			<Link to="/">Home </Link>
			<Link to="/register">Register </Link>
			<Link to="/login">Login </Link>
			<Link to="/user-dashboard">User Page </Link>
			<Router>
				<Register path="/register/" />
				<Login path="/login/" />
				<UserPage path="/user-dashboard/" />
			</Router>
		</div>
	);
}

export default App;
