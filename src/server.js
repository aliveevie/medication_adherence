const express = require('express');
const port = 3001;
const app = express();
const db = require('../database/db');
const path = require('path');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, '../client/build')));

app.post('/api/patient/register', async (req, res) => {
        const {firstName, lastName, email, password} = req.body;
        const result = await db.query('SELECT patient_id FROM patients WHERE email=$1', [email]);

        if(result.rows.length===0){
            db.query('INSERT INTO patients(first_name, last_name, email, password) VALUES($1, $2, $3, $4)', [firstName, lastName, email, password]);
        }
});


app.post('/api/doctor/register', async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const result = await db.query('SELECT doctor_id FROM doctors WHERE email=$1', [email]);

    if(result.rows.length===0){
        db.query('INSERT INTO doctors(first_name, last_name, email, password) VALUES($1, $2, $3, $4)', [firstName, lastName, email, password]);
    }
});

app.post('/api/doctor/login', async (req, res) => {
        console.log(req.body);
});

app.post('/api/patient/login', async (req, res) => {
        const { email, password } = req.body;
        const result = await db.query('SELECT first_name, email, password FROM patients WHERE email=$1 AND password=$2', [email, password])
        if(result.rows.length===0){
            res.json({Error: 'Invalid Username or password'});
        }else{
            res.json({name: result.rows[0].first_name});
        }
    });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


// const result = await db.query('SELECT school_id FROM schools_info WHERE email_address=$1', [email]);

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});