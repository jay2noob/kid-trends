const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../pool');

router.get('/users', async (req, res) => {});
router.get('/users/:id', async (req, res) => {});
router.post('/users', async (req, res) => {
    // 1. Destructure req.body (username, email, password)
    const { username, email, password } = req.body;

    // 2. Check if user is true. If user is true then throw an error
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    res.json(user.rows);

    // 3. Encrypt password
    /*const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();*/

    // 4. Insert user in database
    

    // 5. Return JWT token
    

     
    

});
router.put('/users/:id', async (req, res) => {});
router.delete('/users/:id', async (req, res) => {});

module.exports = router;

