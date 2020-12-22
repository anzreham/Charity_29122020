import axios from 'axios';
import React, {useState, useEffect} from 'react';
import AddNews from './AddNews';
import AddActivity from './AddActivity';
import AddCharityLocation from './AddCharityLocation';

const CharityInfo = (props) => {  
    const [charityData, setCharityData]= useState({})

    useEffect(() => {
        axios
        .get(`http://localhost:7000/api/charity/${props.id}/?format=json`)
        .then((res) => {
            setCharityData(res.data)
          } )
        .catch((err) => console.error(err));
      }, [props.id]);

    return (
        <>
          <h3>Charity Name: {charityData.name}</h3>
          <AddNews charityData={charityData}/>
          <AddActivity charityData={charityData}/>
          <AddCharityLocation charityData={charityData}/>
        </>
    );
};

export default CharityInfo;