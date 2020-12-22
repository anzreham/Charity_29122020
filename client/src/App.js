import React from 'react';
import { Router, Link } from '@reach/router';
import User from './components/User';
import Charity from './components/Charity';
import UserInfo from './components/UserInfo';
import AddCategory from './components/AddCategory';
import CharityInfo from './components/CharityInfo';

function App() {
	return (
		<div className="">
			<h1>Welcome</h1>
			<ul>
				<li>
					<Link to="/api/category">Add Category</Link>
				</li>
				<li>
					<Link to="/api/charity">Add And View Charities</Link>
				</li>
				<li>
					<Link to="/api/user">Add User And View Users</Link>
				</li>
			</ul>
			<Router>
				<AddCategory path="/api/category" />
				<Charity path="/api/charity" />
				<CharityInfo path="/api/charity/:id/" />
				<User path="/api/user" />
				<UserInfo path="/api/user/:id" />
			</Router>
		</div>
	);
}

export default App;
