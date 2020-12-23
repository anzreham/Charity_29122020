import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Router, Link } from '@reach/router';
import Register from './components/Register';

function App() {
	return (
		<div className="">
			<Link to="/">Home </Link>
			<Link to="/register">Register</Link>
			<Router>
				<Register path="/register/" />
			</Router>
		</div>
	);
}

export default App;
