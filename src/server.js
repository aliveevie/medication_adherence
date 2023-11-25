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
            db.query('INSERT INTO patients(first_name, last_name, email, password) VALUES($1, $2, $3, $4)', [firstName, lastName, email, password])
            .then(() => db.query('SELECT patient_id FROM patients WHERE email=$1', [email]))
            .then((data) => res.json({name:firstName, email:email, patient_id:data.rows[0].patient_id}))
        }else{
            res.json({Error:'User Already Exist!'})
            return;
        }
});


app.post('/api/doctor/register', async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    const result = await db.query('SELECT doctor_id FROM doctors WHERE email=$1', [email]);

    if(result.rows.length===0){
        db.query('INSERT INTO doctors(first_name, last_name, email, password) VALUES($1, $2, $3, $4)', [firstName, lastName, email, password])
        .then(() => res.json({name:firstName, email:email}))
    }else{
        res.json({Error:'User Already Exist!'})
        return;
    }

});

app.post('/api/doctor/login', async (req, res) => {
        const { email, password } = req.body;
        const result = await db.query('SELECT first_name, email, password FROM doctors WHERE email=$1 AND password=$2', [email, password])
        if(result.rows.length===0){
            res.json({Error: 'Invalid Username or password'});
        }else{
            res.json({name: result.rows[0].first_name, email:result.rows[0].email});
        }
});

app.post('/api/patient/login', async (req, res) => {
        const { email, password } = req.body;
        const result = await db.query('SELECT first_name, email, password, patient_id FROM patients WHERE email=$1 AND password=$2', [email, password])
       
        
        if(result.rows.length===0){
            res.json({Error: 'Invalid Username or password'});
        }else{
            res.json({name: result.rows[0].first_name, email:result.rows[0].email, patient_id:result.rows[0].patient_id});
        }
    });

app.post('/api/patient/appointment', async (req, res) => {
        const { doctorName, calendar, time, patientEmail } = req.body;
        console.log(req.body)

        const result = await db.query('SELECT patient_id FROM patients WHERE email=$1', 
        [patientEmail])
        const patient_id = result.rows[0].patient_id;
        
        const insertNew = db.query('INSERT INTO patients_doctor(patient_id, doctorName, calendar, time) VALUES($1, $2, $3, $4)',
            [patient_id, doctorName, calendar, time])
            .then(() =>   db.query('SELECT doctorName, calendar, time FROM patients_doctor WHERE patient_id=$1', 
            [patient_id])).then((data) => res.json(data.rows[0]));      
});

app.post('/api/patient/medication', async (req, res) => {
        const {medicationName, dose, duration, patientEmail, time }  = req.body;

        const result = await db.query('SELECT patient_id FROM patients WHERE email=$1', 
        [patientEmail]);

        const patient_id = result.rows[0].patient_id;
        const insertResult = db.query('INSERT INTO addMedications(medicationname, dose, duration, patient_id, time) VALUES($1, $2, $3, $4, $5)', 
        [medicationName, dose, duration, patient_id, time]);
        
});

app.post('/api/patients/activemed', async (req, res) => {
    const { patient_id } = req.body;
    try {
      const result = await db.query('SELECT medicationname, dose, duration, time FROM addMedications WHERE patient_id=$1', [patient_id]);
      
      // Send a valid JSON response to the client
      res.json(result.rows);
    } catch (error) {
      console.error('Error fetching activemed data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


// const result = await db.query('SELECT school_id FROM schools_info WHERE email_address=$1', [email]);

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});