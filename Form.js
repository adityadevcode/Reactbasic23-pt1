//App.js

import Form from "./Components/Form";
import Connecttoserver from "./Components/Connecttoserver";
import Formstyle from "./Components/Formstyle.css";

function App() {
  return (
    <div>
      <p> welcome to App component</p>
      <Form/>
      <Connecttoserver/>
    </div>
  );
}

export default App;

/////////////////////////////////


// Connecttoserver.js
// To connect to a server in a React functional component, you can use the useEffect hook to send a fetch request when the component mounts.
//  Here's an example of how you can do this:
// consuming rest apis in react- the state represents Javascript ObJECT notation
// consume rest apis 2 ways Axios(promise based http client) and fetch api(browser built in)
// https://jsonplaceholder.typicode.com/posts?_limit=10
// The fetch function is used to send a GET request to the specified server, the response is converted to JSON and the data 
// is stored in the component state using setData
//we want to look into handling loading and error state depending on your app needs

import React, {useState, useEffect} from 'react';


const Connecttoserver = () => {
    const [data, setData] = useState(null);
    // initial value set to null

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
          .then(response => response.json())
          .then(data => console.log(data))
          .then(data => setData(data))
          .catch(error => console.error(error));
      }, []);
    //   [] empty brackets it is an empty dependency array, it tells the useEffect to only run when the component is first rendered

  return (
    <div>
        <p>welcome</p>
        {data && <p>{data.message}</p>}
        {/* {data && <p>{data.message}</p>} */}
      {/* <h3>Connecttoserver</h3>   */}
    </div>
  );
}

export default Connecttoserver;

///////////////////////////////
Form.js

// basic function form component
import React, {useState} from "react";
//  usestate hook to keep track of the input value in the input state variable

 function Form() {
    const [input, setInput] = useState("");
    // create a state variable called input which holds the current value of the inpu filed,
    // setinput which will be used to updated the value of input, when user types in the input field.

    function handleChange(event){
        // updates the input state when the user types in the inout field
        setInput(event.target.value);
        console.log(event);
    }

    function handleSubmit(event) {
        //when form is submitted function is passed
        event.preventDefault();
        console.log(input);
    }

   return (
     <form className="form" onSumbit={handleSubmit}>
        {/* onSumbit is a prop that is sent to the handleSumbit */}
        {/* it prevents the default refresh of the page */}
        <input
        className="form-input"
         type="text"
         value ={input}
         onChange ={handleChange}
         />
         <button className="form-button" type="submit">Submit</button>
       {/* <h3> Form component</h3> */}
     </form>
   );
 }

 export default Form;
 

 ///////

Formstyle.css

.form {
    width: 300px;
    margin: 0 auto;
    padding: 10px;
  } 
  
   .form-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-button {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .form-button:hover {
    background-color: #45a049;
  }
   

   












