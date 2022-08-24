import './App.css';
import React, {useState} from 'react';
import Axios from 'axios';

//let contact_info = [];

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');


  const nameHandler = (e) => {
      setName(e.target.value);
      console.log(name);
      
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(email);
    
  }

  const commentHandler = (e) => {
    setComment(e.target.value);
    console.log(comment);
    
  }

  const submitForm = (e) => {
    e.preventDefault();

    const contact = {
      name: name,
      email: email,
      comment: comment
    }

    //console.log(JSON.stringify(contact));

    //axios is a library to make api calls which return promises.

    Axios.post('http://localhost:3001/create', {
      name: name,
      email: email,
      comment: comment
    })
    .then(() => {
      console.log('success');
    })
    .catch((error) => {
      console.log('err ' + error);
    });

    
    setName('');
    setEmail('');
    setComment('');
  }

/* 
will create a button and put this inside eventhandler
  Axios.get('/test')
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  }); */


  return (
    <div className="App">
      <h1>Leave your response</h1>
      <div className="form">
        <form className="response-form" onSubmit= { submitForm }>
          <div>
            <label>Full name:</label>
            <input type="text" value= { name } onChange= { nameHandler }/>
          </div>
         
            
          <div>
            <label>Email:</label>
            <input type="email" value = { email } onChange= { emailHandler }/>
          </div>

           <div>
            <label>Comment:</label>
            <textarea value = { comment }onChange= { commentHandler }></textarea>
           </div> 
          <div>
              <button type="submit"> Submit</button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default App;
