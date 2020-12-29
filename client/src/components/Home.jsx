import React from 'react';
import { Router, Link } from '@reach/router';

import SimpleSlider from './SimpleSlider'
import {withGoogleMap, withScriptjs,GoogleMap, MarkerInfoWindow} from "react-google-maps";
import Map from './Map';

const MapWrapped = withScriptjs(withGoogleMap(Map));




const Home = () => {
    return (
<>
  <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#012615", color: "white"}}  >

  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
      
		<Link className = "nav-link text-white" to="/">Home <span class="sr-only">(current)</span> </Link>
      </li>
      <li class="nav-item">
		<Link className ="nav-link text-white"  to="/register">Register </Link>

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
<div className = "Hbody">
		<div className="shadow-lg  mb-5 bg-black rounded" style={{ width: "87.5vw", height: "80vh", marginbottom: "400px", margin:"10px" }}>
    <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAT8FoYfqPANHxoQNVPbhFaQoO6Ex2wtcc`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
           
        </div> 
    
  
   
    <div className="row secNav">
    <div class="col-12  ">
  
      <div className = " "> 
      <nav class=" navbar-light navbar-inline d-flex flex-row-reverse  "  >
    <button class="btn btn-outline-light text-black-50 align-self-baseline" type="button"><h5>Main button</h5></button>
    <button class="btn btn-outline-light text-black-50 align-self-baseline" type="button"><h5>Smaller button</h5></button>
</nav>
      </div>
    </div>
    <div class="col text-lg-start">
      <h1 >Categories</h1>
    </div>
   
  </div>


<SimpleSlider  />
</div>    
        </>
    );
};

export default Home;