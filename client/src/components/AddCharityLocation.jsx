import axios from 'axios';
import React, {useState} from 'react';

const AddCharityLocation = (props) => {  
    const { charityData  } = props;
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude]   = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const charity_id= charityData.id
        const addCharityLocation={ longitude, latitude,charity_id}
        axios
          .post(`http://localhost:7000/api/charity_location/?format=json`, addCharityLocation)
          .then((res) => {
              console.log(addCharityLocation)
            } )
          .catch((err) => console.error(err));
      };

    console.log(charityData)
    return (
        <>
        <form onSubmit={handleSubmit} method = "post" >
          <h3>Add Charity Location</h3>
          <label className="">Longitude: </label>
          <input type="text" className="" onChange={(e) => setLongitude(e.target.value)} value={longitude}/>

          <label className="">latitude: </label>
          <input type="text" className="" onChange={(e) => setLatitude(e.target.value)} value={latitude}/>
          
          <button type="submit" className="">Add Location</button>
        </form>
        </>
    );
};

export default AddCharityLocation;