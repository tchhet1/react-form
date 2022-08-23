const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors'); // this allows client to make an api request to localhost

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'chitwan88',
    database: 'contactInfo'

});


app.post('/create', (req, res) => {
    console.log(req.body);
    
    const name = req.body.name;
    const email = req.body.email;
    const comment = req.body.comment;

    db.query('INSERT INTO contacts (name, email, comment) VALUES(?,?,?)' 
    [name, email, comment], (err, res) => {
        if(err){
            console.log(err);
        } else {
            res.send('values inserted');
        }
    }
    );
});


app.listen(3001, () => {
    console.log("yay, your server is running");
});