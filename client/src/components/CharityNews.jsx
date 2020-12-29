import React, {useState, useEffect} from 'react';
import parse from "html-react-parser"
//  import ReactQuill from 'react-quill';
 import 'react-quill/dist/quill.snow.css';
 import axios from 'axios';
 import CharHeader from './CharHeader';
 import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill'; // ES6


const CharityNews = () => {
    const [value, setValue] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const news={value}
        axios
          .post('http://localhost:7000/api/charity/?format=json', news)
          .then((res) => {
              console.log(news)
            } )
          .catch((err) => console.error(err));
      };

    return (
         <>
         <CharHeader />
  <div className = "Dbody" style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/char3.jpg'})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover' 
}}> 
    <div className="formD">
    <div className="header">
    <h1>Welcome!</h1>
             <p>Please provide News below.</p>
    </div> 
        <form>
        <ReactQuill theme="snow" value={value} onChange={setValue} />   
         <div>
          {parse(value)}   
         </div>
         <button className="btn mb-4 btn-info btn-lg btn-block" type='submit' onClick={handleSubmit}>
         Post
             </button> 
        </form>




         </div>
         </div>
         </>
    );
};

export default CharityNews;



// const CharityNews = ({}) => {
// 	const editor = useRef(null)
// 	const [content, setContent] = useState('')
	
// 	const config = {
// 		readonly: false // all options from https://xdsoft.net/jodit/doc/
// 	}
// 	return (
// <>
// <CharHeader />
//   <div className = "Dbody" style={{ 
//   backgroundImage: `url(${process.env.PUBLIC_URL + '/char3.jpg'})`,
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover' 
// }}> 
//     <div className="formD">
//     <div className="header">
//     <h1>Welcome!</h1>
//              <p>Please provide your information below.</p>
//     </div> 
//     <JoditEditor
//             ref={editor}
//             value={content}
//             config={config}
//     tabIndex={1} // tabIndex of textarea
//     onChange={(e)=> setContent(e.target.value)}  
        
//         />
// </div>
// <p>
//     {content}
// </p>
// </div>
// </>
//     );
// };

// export default CharityNews;






