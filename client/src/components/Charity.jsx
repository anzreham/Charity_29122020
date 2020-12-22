import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AddCharity = (props) => {
    const [name, setName]            = useState("")           
    const [description, setDes]      = useState("")    
    const [email, setEmail]          = useState("")        
    const [phone_number, setPhone]   = useState("")     
    const [license_file, setLicense] = useState("")     
    const [password, setPassword]    = useState("")       
    const [belong_category, setCategory]    = useState("")  
    const [all_categories, setAllCategory]  = useState([]) 
    const [all_Charities, setAllCharities]  = useState([])

    useEffect(() => {
      getAllCharities();
      getAllCategories();
    }, [ ]);

    function getAllCharities() {
      axios
        .get('http://localhost:7000/api/charity/?format=json')
        .then((res) => {
          console.log(res.data);
          setAllCharities(res.data)
        })
        .catch((err) => console.error(err));
    }

    function getAllCategories() {
      axios
        .get('http://localhost:7000/api/category/?format=json')
        .then((res) => {
          console.log(res.data);
          setAllCategory(res.data)
        })
        .catch((err) => console.error(err));
    }
     
  	const handleSubmit = (e) => {
      e.preventDefault();
      const addCharity={ name, description, email, phone_number, license_file, password, belong_category}
      axios
        .post('http://localhost:7000/api/charity/?format=json', addCharity)
        .then((res) => {
            console.log(addCharity)
          } )
        .catch((err) => console.error(err));
    };

    return (
        <>
        <form onSubmit={handleSubmit} method = "post" >
          <label className="">Name: </label>
          <input type="text" className="" onChange={(e) => setName(e.target.value)} value={name}/>
      
          <label className="">Description: </label>
          <input type="text" className="" onChange={(e) => setDes(e.target.value)} value={description}/>
          
          <label className="">Email: </label>
          <input type="email" className="" onChange={(e) => setEmail(e.target.value)} value={email}/>

          <label className="">Phone Number: </label>
          <input type="number" className="" onChange={(e) => setPhone(e.target.value)} value={phone_number}/>

          <label className="">License File: </label>
          <input type="text" className="" onChange={(e) => setLicense(e.target.value)} value={license_file}/>

          <label className="">Password: </label>
          <input type="password" className="" onChange={(e) => setPassword(e.target.value)} value={password}/>
          
          <select className="" value={belong_category} onChange={e => setCategory(e.target.value)}>
          <option value="" disabled selected>Select your option</option>
            {all_categories.map((category,i)=>{
              return(
                <option key={i} value={category.id}>{category.name}</option>
              )
            })}
          </select>

          <button type="submit" className="">Register Charity</button>
        </form>
        <div>
            {all_Charities.map((charity,i)=>{
            return(
              <>
                <p key={i}>Charity Name: {charity.name}</p>
                <p><Link to={`/api/charity/${charity.id}/`}>Visit Charity Page</Link></p>
                <p>----------------------------------------</p>
              </>
            )
            })}
        </div>
        </>
    );
};
export default AddCharity;