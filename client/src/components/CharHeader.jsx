import React ,{useEffect, useState} from 'react';
import './details.css';
import Loc from './Loc'
import axios from 'axios';
import { Router, Link } from '@reach/router';


const CharHeader = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-light" style={{ }} >
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" 
  aria-controls="navbarTogglerDemo01" aria-expanded="false"
   aria-label="Toggle navigation">
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
    );
};

export default CharHeader;