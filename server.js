const express = require('express');
//const connectDB = require('');

const app = express();

//connectDB();

app.get('/', (req, res) => res.send('API running...'));

const PORT = 3001;

app.listen(PORT, () => console.log('Server started on port: ${PORT}'));