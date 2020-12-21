const express = require('express');
const usersRoutes = require('./routes/users.js');

module.exports = () => {
  const app = express();
  
  //middleware
  app.use(express.json());
  app.use(usersRoutes);

  return app;
};