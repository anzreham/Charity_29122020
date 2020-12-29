// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import { Router, Link } from '@reach/router';
// import Register from './components/Register';
// import Login from './components/Login';
// import UserPage from './components/UserPage';
import React from 'react';
import { Router, Link } from '@reach/router';
import Register from './components/Register';
import Login from './components/Login';
import UserPage from './components/UserPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import CharityPage from './components/CharityPage';
import CharityDetail from './components/CharityDetail';
import CharityActivities from './components/CharityActivities'
import CharityNews from './components/CharityNews';


function App() {
	return (
		<div className="">
			{/* <Link to="/">Home </Link>
			<Link to="/register">Register </Link>
			<Link to="/login">Login </Link>
			<Link to="/user-dashboard">User Page </Link>
			<Router>
				<Register path="/register/"/>
				<Login path="/login/" />
				<UserPage path="/user-dashboard"/>
			</Router> */}
			<Router>
		    <Home path="/" />
		 	<Register path="/register/"/>
	 		<Login path="/login/" />
			<UserPage path="/user-dashboard"/>
			<CharityPage path="/charity-dashboard"/>
			<CharityDetail path="/charity-detail"/>
			<CharityActivities path="/CharityActivities"/>
			<CharityNews path="/CharityNews"/>
			
		</Router> 
		</div>
	);
}

export default App;
