import './App.css';
import React, {useState} from 'react';
import Axios from 'axios';

//let contact_info = [];

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [contactList, setContactlist] = useState([]);


  const nameHandler = (e) => {
      setName(e.target.value);
     
      
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);

  }

  const commentHandler = (e) => {
    setComment(e.target.value);
   
    
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
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log('err ' + error);
    });

    
    setName('');
    setEmail('');
    setComment('');
  }



  const getData = (e) => {
    e.preventDefault();
    Axios.get('http://localhost:3001/contacts')
    .then((response) => {
      setContactlist(response.data);     
    }); 
    console.log(contactList);
  };

//console.log(contactList);

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
    <br />
      <div className="get-data" onClick = { getData }>
       <button type="submit"> Get Data</button>
    </div>

    <div className="contacts-data">
        {
             contactList.map((contact) => {
               return (
               <div className="contact">
                 <div className="contact-name">
                   
                   { contact.name } 
                  </div>
                  <div className="contact-email">
                    { contact.email }
                 </div>
                 <div className="contact-comment">
                    { contact.comment }
                 </div>
               </div>
               )
              
            })
            
        }
       

    </div>
    </div>

   
  );
}

export default App;
