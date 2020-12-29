import React ,{useEffect, useState} from 'react';
import './details.css';
import Loc from './Loc'
import axios from 'axios';
import { Router, Link } from '@reach/router';


 const CharityActivities = () => {
    // const { charityData  } = props;
    const [name, setName]               = useState("");
    const [date, setDate]               = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // const charity_id= charityData.id
        // const addActivities={ name, description,date,charity_id}
        const addActivities={ name, description,date}

        axios
          .post(`http://localhost:7000/api/activities/?format=json`, addActivities)
          .then((res) => {
              console.log(addActivities)
            } )
          .catch((err) => console.error(err));
      };

    // console.log(charityData)



   
     
             
    return (
        <>
<nav class="navbar navbar-expand-lg navbar-light ">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
      
		<Link className = "nav-link text-white" to="/">Home <span class="sr-only">(current)</span> </Link>
      </li>
      <li class="nav-item">
		<Link className ="nav-link text-white "  to="/charity-dashboard">Dashboard </Link>
      </li>
      <li class="nav-item">
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li>
      <Link className ="nav-link text-white "  to="/"> <span class="glyphicon glyphicon-user"></span>  Sign Out</Link>
      </li> 
    </ul>
   </div>
  </nav>
  <div className = "Dbody" style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/char3.jpg'})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover' 
}}> 
    <div className="formD">
    <div className="header">
    <h1>Welcome!</h1>
             <p>Please provide your information below.</p>
    </div> 
        <form onSubmit={handleSubmit}>
    <div className="inputcontainer">
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="" onChange = {(e)=>setName(e.target.value)}  value = {name}/>
            </div>
        </div>
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Date and Time</label>
            <div class="col-sm-10">
                <input class="form-control" type="datetime-local" value="2011-08-19T13:45:00" onChange = {(e)=>setDate(e.target.value)}  value = {date}/>
           </div>
        </div>
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-10">
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control"  rows="3" onChange = {(e)=> setDescription(e.target.value)}  value = {description}></textarea>
            </div>
           </div>
        </div>
 
       
      <button className="btn mb-4 btn-info btn-lg btn-block" type='submit'>Submit</button>
</div>
</form>

</div>
</div>
</>
      );
 };

 export default CharityActivities;


