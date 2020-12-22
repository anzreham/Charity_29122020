import axios from 'axios';
import React, {useState} from 'react';

const AddCategory = () => {
    const [name, setName] = useState("");

  	const handleSubmit = (e) => {
      e.preventDefault();
      const addCategory={ name }
      axios
        .post('http://localhost:7000/api/category/?format=json', addCategory)
        .then((res) => {
            console.log(addCategory)
          } )
        .catch((err) => console.error(err));
    };

    return (
        <>
        <form onSubmit={handleSubmit} method = "post" >
          <label className="">Name: </label>
          <input type="text" className="" onChange={(e) => setName(e.target.value)} value={name}/>
          <button type="submit" className="">Add Category</button>
        </form>
        </>
    );
};

export default AddCategory;