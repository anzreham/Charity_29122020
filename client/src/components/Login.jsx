import axios from 'axios';
import React, {useState} from 'react';
import { Link } from '@reach/router';
import HomeLogo from '../images/home.png';


const Login = () => { 
    const [email, setEmail]          = useState("") 
    const [password, setPassword]    = useState("")       
   
  	const handleLogin = (e) => {
      e.preventDefault();
      const addCharity={ email, password}
      axios
        .post('http://localhost:7000/api/charity/?format=json', addCharity)
        .then((res) => {
            console.log(addCharity)
          } )
        .catch((err) => console.error(err));
    };
    return (
        <div className="container register">
            <div className="row">
                <div className="col-md-3 register-left">
                    <img src={`${HomeLogo}`} alt="logo"/>
                    <h3>Welcome</h3>
                    <p>Thank you for joining us </p>
                </div>
                <div className="col-md-9 register-right">
                    <h3 className="register-heading">Login</h3>
                    <div className="row register-form ">
                        <div className="col-md-12">
                            <div className="form-group col-md-6 mx-auto">
                                <input type="email" className="form-control" placeholder="Email Address*" onChange={(e) => setEmail(e.target.value)} value={email}/>
                            </div>
                            <div className="form-group col-md-6 mx-auto">
                                <input type="password" className="form-control" placeholder="Password *" onChange={(e) => setPassword(e.target.value)} value={password}/>
                            </div>
                            <div className="form-group col-md-6 mx-auto">
                                <input type="submit" className="btnRegister" value="Login" onClick={handleLogin}/>
                            </div>
                        </div>
                    </div> 
                    <p className="have-account">Not a member? <Link to="/register"><span>Sign up</span></Link></p>
                </div>
            </div>
        </div>
    )
};

export default Login;