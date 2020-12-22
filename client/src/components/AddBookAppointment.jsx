import axios from 'axios';
import React, {useState,useEffect} from 'react';

const AddBookAppointment = (props) => {  
    const { userData} = props;
    const [size, setSize]           = useState("");
    const [amount, setAmount]       = useState("");
    const [date, setDate]           = useState("");
    const [time, setTime]           = useState("");
    const [charity, setCharity]     = useState("");
    const [category, setCategory]   = useState("");
    const [all_charities, setAllCharities]    = useState([])
    const [all_categories, setAllCategories]  = useState([])

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
            setAllCategories(res.data)
          })
          .catch((err) => console.error(err));
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user= userData.id
        const addAppointment={size, amount, date, time,user, charity, category}
        axios
          .post(`http://localhost:7000/api/book_appointment/?format=json`, addAppointment)
          .then((res) => {
              console.log(addAppointment)
            } )
          .catch((err) => console.error(err));
      };
    return (
        <>
        <form onSubmit={handleSubmit} method = "post" >
          <h3>Book An Appointment</h3>
          <label className="">Size: </label>
          <input type="number" className="" onChange={(e) => setSize(e.target.value)} value={size}/>

          <label className="">Amount: </label>
          <input type="number" className="" onChange={(e) => setAmount(e.target.value)} value={amount}/>

          <label className="">Date: </label>
          <input type="date" className="" onChange={(e) => setDate(e.target.value)} value={date}/>

          <label className="">Time: </label>
          <input type="time" className="" onChange={(e) => setTime(e.target.value)} value={time}/>

          <select className="" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="" disabled selected>Select A Category</option>
            {all_categories.map((category,i)=>{
              return(
                <option key={i} value={category.id}>{category.name}</option>
              )
            })}
          </select>

          <select className="" value={charity} onChange={e => setCharity(e.target.value)}>
          <option value="" disabled selected>Select A Charity</option>
            {all_charities.map((charity,i)=>{
              return(
                <option key={i} value={charity.id}>{charity.name}</option>
              )
            })}
          </select>

          <button type="submit" className="">Book Appointment</button>
        </form>
        </>
    );
};

export default AddBookAppointment;