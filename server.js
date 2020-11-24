const app = require('./app');
const pool = require('./pool');

const PORT = 3001;

pool.connect({
    host: '',
    port: 5432,
    database: '',
    user: '',
    password: '',
});

app().listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});