const express = require('express');
const router = express.Router();
//const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');

router.post('/users', async (req, res) => {
    // 1. Destructure req.body (username, email, password)

    // 2. Check if user is true. If user is true then throw an error
    
    // 3. Encrypt password
    /*const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();*/

    // 4. Insert user in database
    

    // 5. Return JWT token
     
});

module.exports = router;

