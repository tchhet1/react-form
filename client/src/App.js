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
