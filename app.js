const express = require('express');
const usersRoutes = require('./routes/users.js');
const authRoutes = require('./routes/auth.js');

module.exports = () => {
  const app = express();
  
  //middleware
  app.use(express.json());
  //app.use(usersRoutes);
  //app.use(authRoutes);

  return app;
};