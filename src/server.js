const express = require('express');
const port = 3001;
const app = express();
const db = require('../database/db');
const path = require('path');


app.use(express.static(path.join(__dirname, '../client/build')));



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });


app.get('/api', async (req, res) => {
    const result = await db.query('SELECT * FROM schools_info');
    console.log(result.rows);
    res.json(result.rows);
});

// const result = await db.query('SELECT school_id FROM schools_info WHERE email_address=$1', [email]);


app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});