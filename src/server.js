const express = require('express');
const port = 3001;
const app = express();
const db = require('../database/db');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const multer = require('multer');


const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
const upload = multer({ storage: storage });


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
       
     //   console.log(result.rows)
        
        if(result.rows.length===0){
            res.json({Error: 'Invalid Username or password'});
        }else{
            res.json({name: result.rows[0].first_name, email:result.rows[0].email, patient_id:result.rows[0].patient_id});
        }
    });

app.post('/api/patient/appointment', async (req, res) => {
        const { doctorName, calendar, time, patientEmail } = req.body;
       // console.log(req.body)

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

        try {
            let medication_id;

            const result = await db.query('SELECT patient_id FROM patients WHERE email=$1', 
            [patientEmail]);
    
            const patient_id = result.rows[0].patient_id;
            const selectmed_id = await db.query('SELECT medication_id FROM addmedications WHERE medicationname=$1', 
            [medicationName]);

            if(selectmed_id.rows.length==0){
                const insertResult = await db.query('INSERT INTO addMedications(medicationname, dose, duration, patient_id) VALUES($1, $2, $3, $4)', 
                [medicationName, dose, duration, patient_id])
                .then(async () => {
                  const med_id = await db.query('SELECT medication_id FROM addmedications WHERE medicationname=$1', 
                    [medicationName])
                    medication_id = med_id.rows[0].medication_id
                })
            }else{
                medication_id = selectmed_id.rows[0].medication_id;
            }

            for(let i = 0; i < time.length; i++){
                const insertTimes = await db.query('INSERT INTO medicationtime(medication_id, time) VALUES($1, $2)', 
                [medication_id, time[i]])
                .then(() => {
                    console.log({ data:'Data Insert Successful!' })
                })
            }
        }  catch (error) {
            console.error('Error fetching activemed data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
    }         
});

app.post('/api/patients/activemed', async (req, res) => {
    const { patient_id } = req.body;
    console.log(patient_id)
    try {
      const result = await db.query(`
        SELECT 
          addMedications.medication_id,
          addMedications.medicationname, 
          addMedications.dose, 
          addMedications.duration, 
          medicationtime.time,
          medicationtime.status
        FROM 
          addMedications 
        JOIN 
          medicationtime 
        ON 
          addMedications.medication_id = medicationtime.medication_id 
        WHERE 
          addMedications.patient_id = $1
      `, [patient_id]).then((data) => res.json(data.rows))
      // Send a valid JSON response to the client
    } catch (error) {
      console.error('Error fetching activemed data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/patient/updatemedication', upload.single('upload'), async (req, res) => {
    let { choice, actualTime, normalTime, feeling, medication_id } = req.body;
    
    if(actualTime===''){
            actualTime=normalTime
    }
        console.log(req.body);
    try {
      // Check if a file is uploaded
      let filePath = req.file.path;
     
  
      // Store the file in the database (replace 'medicationtime' with your actual table name)
      const result = await db.query(
        `UPDATE medicationtime 
         SET status = 'complete', actual_time = $1, feelings = $2, picture_url = $3 
         WHERE medication_id = $4 AND time = $5 
         `,
        [actualTime, feeling, filePath, medication_id, normalTime]
      ).then(() => console.log('Data Insert Successfull!'));
  
      // Send the response back to the client
     // res.json({ success: true, updatedData: result.rows[0] });
    } catch (error) {
      console.error('Error processing file and form data:', error);
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