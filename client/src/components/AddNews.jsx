import axios from 'axios';
import React, {useState} from 'react';

const AddNews = (props) => {  
    const { charityData  } = props;
    const [title, setTitle]     = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const charity_id= charityData.id
        const addNews={ title, content,charity_id}
        axios
          .post(`http://localhost:7000/api/news/?format=json`, addNews)
          .then((res) => {
              console.log(addNews)
            } )
          .catch((err) => console.error(err));
      };

    console.log(charityData)
    return (
        <>
        <form onSubmit={handleSubmit} method = "post" >
          <h3>Add News</h3>
          <label className="">Title: </label>
          <input type="text" className="" onChange={(e) => setTitle(e.target.value)} value={title}/>
          <label className="">Content: </label>
          <input type="text" className="" onChange={(e) => setContent(e.target.value)} value={content}/>
          <button type="submit" className="">Add News</button>
        </form>
        </>
    );
};

export default AddNews;