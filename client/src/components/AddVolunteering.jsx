import axios from 'axios';
import React, {useState,useEffect} from 'react';

const AddVolunteering = (props) => {  
    const { userData} = props;
    const [activity, setActivity] = useState("");
    const [all_activites, setAllActivites]  = useState([]);

    useEffect(() => {
      getAllActivites();
    }, [ ]);

    function getAllActivites() {
      axios
        .get('http://localhost:7000/api/activities/?format=json')
        .then((res) => {
          console.log(res.data);
          setAllActivites(res.data)
        })
        .catch((err) => console.error(err));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const user= userData.id
        const addVolunteer={user, activity}
        axios
          .post(`http://localhost:7000/api/volunteering/?format=json`, addVolunteer)
          .then((res) => {
              console.log(addVolunteer)
            } )
          .catch((err) => console.error(err));
      };
    return (
        <>
        <form onSubmit={handleSubmit} method = "post" >
          <h3>Volunteer</h3>
          
          <select className="" value={activity} onChange={e => setActivity(e.target.value)}>
          <option value="" disabled selected>Select your option</option>
            {all_activites.map((act,i)=>{
              return(
                <option key={i} value={act.id}>{act.name}</option>
              )
            })}
          </select>
          <button type="submit" className="">Volunteer</button>
        </form>
        </>
    );
};

export default AddVolunteering;