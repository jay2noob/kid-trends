const app = require('./app');
const connectDB = require('./config/db');

const PORT = 3001;

connectDB().then(() => {
  app().listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
}).catch((err) => console.error(err));

