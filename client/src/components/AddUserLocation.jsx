import axios from 'axios';
import React, {useState} from 'react';

const AddUserLocation = (props) => {  
    const { userData  } = props;
    const [address_1, setAddress1] = useState("");
    const [address_2, setAddress2] = useState("");
    const [city, setCity]          = useState("");
    const [post, setPost]          = useState("");
    const [country, setCountry]    = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const user_id= userData.id
        const addUserLocation={ address_1, address_2, city, post, country,user_id}
        axios
          .post(`http://localhost:7000/api/user_location/?format=json`, addUserLocation)
          .then((res) => {
              console.log(addUserLocation)
            } )
          .catch((err) => console.error(err));
      };
    return (
        <>
        <form onSubmit={handleSubmit} method = "post" >
          <h3>Add User Location</h3>
          <label className="">Address 1: </label>
          <input type="text" className="" onChange={(e) => setAddress1(e.target.value)} value={address_1}/>

          <label className="">Address 2: </label>
          <input type="text" className="" onChange={(e) => setAddress2(e.target.value)} value={address_2}/>

          <label className="">City: </label>
          <input type="text" className="" onChange={(e) => setCity(e.target.value)} value={city}/>

          <label className="">Post: </label>
          <input type="text" className="" onChange={(e) => setPost(e.target.value)} value={post}/>

          <label className="">Country: </label>
          <input type="text" className="" onChange={(e) => setCountry(e.target.value)} value={country}/>

          <button type="submit" className="">Add Location</button>
        </form>
        </>
    );
};

export default AddUserLocation;