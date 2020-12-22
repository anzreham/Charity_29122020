import axios from 'axios';
import React, {useState} from 'react';

const AddActivity = (props) => {  
    const { charityData  } = props;
    const [name, setName]               = useState("");
    const [date, setDate]               = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const charity_id= charityData.id
        const addActivities={ name, description,date,charity_id}
        axios
          .post(`http://localhost:7000/api/activities/?format=json`, addActivities)
          .then((res) => {
              console.log(addActivities)
            } )
          .catch((err) => console.error(err));
      };

    console.log(charityData)
    return (
        <>
        <form onSubmit={handleSubmit} method = "post" >
          <h3>Add Activity</h3>
          <label className="">Name: </label>
          <input type="text" className="" onChange={(e) => setName(e.target.value)} value={name}/>
          <label className="">Description: </label>
          <textarea className="" onChange={(e) => setDescription(e.target.value)} value={description}/>
          <label className="">Date: </label>
          <input type="date" className="" onChange={(e) => setDate(e.target.value)} value={date}/>
          <button type="submit" className="">Add Activity</button>
        </form>
        </>
    );
};

export default AddActivity;