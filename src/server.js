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
        console.log(req.body)
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


// const result = await db.query('SELECT school_id FROM schools_info WHERE email_address=$1', [email]);

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});