import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const User = () => {
    const [first_name, setFirstName]  = useState("")   
    const [last_name, setLastName]    = useState("") 
    const [email, setEmail]           = useState("")        
    const [phone_number, setPhone]    = useState("")     
    const [gender, setGender]         = useState("")     
    const [password, setPassword]     = useState("")  
    const [all_userss, setAllUsers]   = useState([])

    useEffect(() => {
      getAllUsers();
    }, [ ]);

    function getAllUsers() {
      axios
        .get('http://localhost:7000/api/user/?format=json')
        .then((res) => {
          console.log(res.data);
          setAllUsers(res.data)
        })
        .catch((err) => console.error(err));
    }

  	const handleSubmit = (e) => {
      e.preventDefault();
      const addUser={ first_name, last_name, email, phone_number, gender, password}
      axios
        .post('http://localhost:7000/api/user/?format=json', addUser)
        .then((res) => {
            console.log(addUser)
          } )
        .catch((err) => console.error(err));
    };

    return (
        <>
        <form onSubmit={handleSubmit} method = "post" >
          <label className="">First Name: </label>
          <input type="text" className="" onChange={(e) => setFirstName(e.target.value)} value={first_name}/>
      
          <label className="">Last Name: </label>
          <input type="text" className="" onChange={(e) => setLastName(e.target.value)} value={last_name}/>
          
          <label className="">Email: </label>
          <input type="email" className="" onChange={(e) => setEmail(e.target.value)} value={email}/>

          <label className="">Phone Number: </label>
          <input type="number" className="" onChange={(e) => setPhone(e.target.value)} value={phone_number}/>

          <label className="">Gender: </label>
          <input type="text" className="" onChange={(e) => setGender(e.target.value)} value={gender}/>

          <label className="">Password: </label>
          <input type="password" className="" onChange={(e) => setPassword(e.target.value)} value={password}/>
   
          <button type="submit" className="">Register User</button>
        </form>
        <div>
            {all_userss.map((user,i)=>{
            return(
              <>
                <p key={i}>User First Name: {user.first_name}</p>
                <p><Link to={`/api/user/${user.id}/`}>Visit User Page</Link></p>
                <p>----------------------------------------</p>
              </>
            )
            })}
        </div>
        </>
    );
};

export default User;