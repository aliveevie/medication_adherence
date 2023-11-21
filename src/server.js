const express = require('express');
const port = 3001;
const app = express();
const db = require('../database/db');
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api', async (req, res) => {
    const result = await db.query('SELECT * FROM people');
    res.json(result.rows);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


// const result = await db.query('SELECT school_id FROM schools_info WHERE email_address=$1', [email]);

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});