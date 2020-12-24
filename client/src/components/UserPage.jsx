import React, {useState} from 'react';
import {Link } from '@reach/router';
import Male from '../images/male.png';
import EditUser from './EditUser';
import EditUserLocation from './EditUserLocation';
import UserActivities from './UserActivities';
import UserAppointments from './UserAppointments';
import UserInfo from './UserInfo';

const UserPage = () => {
    const [currentTab, setCurrentTab] = useState('home')
    
    return (
        <>
        <div className="container">
            <div className="user-body">
              <nav className="main-breadcrumb" >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"> <Link className="link-user-breadcrumb" to="/user-dashboard" onClick={()=>setCurrentTab('home')}>Home</Link></li>
                  <li className="breadcrumb-item"><Link className="link-user-breadcrumb" to="/user-dashboard" onClick={()=>setCurrentTab('edit')}>Edit Profile</Link></li>
                  <li className="breadcrumb-item"><Link className="link-user-breadcrumb" to="/user-dashboard" onClick={()=>setCurrentTab('location')}>Edit Location</Link></li>
                  <li className="breadcrumb-item"> <Link className="link-user-breadcrumb" to="/user-dashboard" onClick={()=>setCurrentTab('activities')}>Activities</Link></li>
                  <li className="breadcrumb-item"><Link className="link-user-breadcrumb" to="/user-dashboard" onClick={()=>setCurrentTab('appointments')}>Appointments</Link></li>
                </ol>
              </nav>
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card card-body card-shadow card-user-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img src={`${Male}`} alt="Admin" className="rounded-circle" width="150"/>
                          <h4 className="mt-3 user-page-font">James Milner</h4>
                      </div>
                  </div>
                  <div className="card mt-3 card-shadow">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0 user-page-font">Email:</h6>
                        <span className="text-secondary">James_lfc@example.com</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0 user-page-font">Phone:</h6>
                        <span className="text-secondary">05342323</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0 user-page-font">Address:</h6>
                        <span className="text-secondary text-break">United Kingdom, Liverpool</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row gutters-sm">
                   {currentTab === 'home' && <UserInfo/>} 
                   {currentTab === 'edit' && <EditUser/>} 
                   {currentTab === 'location' && <EditUserLocation/>} 
                   {currentTab === 'activities' && <UserActivities/>} 
                   {currentTab === 'appointments' && <UserAppointments/>} 
                  </div>
                </div>
              </div>
            </div>
        </div>
        </>
    )
};

export default UserPage;