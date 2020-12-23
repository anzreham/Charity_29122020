import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Router, Link } from '@reach/router';
import Register from './components/Register';
import Login from './components/Login';

function App() {
	return (
		<div className="">
			<Link to="/">Home </Link>
			<Link to="/register">Register </Link>
			<Link to="/login">Login</Link>
			<Router>
				<Register path="/register/" />
				<Login path="/login/" />
			</Router>
		</div>
	);
}

export default App;
