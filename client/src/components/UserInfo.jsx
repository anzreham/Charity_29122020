import axios from 'axios';
import React, {useState, useEffect} from 'react';
import AddVolunteering from './AddVolunteering';
import AddUserLocation from './AddUserLocation';
import AddBookAppointment from './AddBookAppointment';

const UserInfo = (props) => {  
    const [userData, setuserData]= useState({})

    useEffect(() => {
        axios
        .get(`http://localhost:7000/api/user/${props.id}/?format=json`)
        .then((res) => {
            setuserData(res.data)
          } )
        .catch((err) => console.error(err));
      }, [props.id]);

    return (
        <>
          <h3>User First Name: {userData.first_name}</h3>
          <AddUserLocation userData={userData}/>
          <AddVolunteering userData={userData}/>
		  <AddBookAppointment userData={userData} />
        </>
    );
};

export default UserInfo;