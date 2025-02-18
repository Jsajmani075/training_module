const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey=  'fwvwvw';  
const users = [];

// Register route
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required.");
  }

  const userExist = users.find(u => u.email === email);
  if (userExist) {
    return res.status(400).send("User already exists.");
  }

  try {
    // Hash  password
    const hashedPassword = await bcrypt.hash(String(password), 10);

    // Save the user
    const newUser = { email, password: hashedPassword };
    users.push(newUser);

    return res.status(201).send("User registered successfully.");
  } catch (error) {
    console.error("Error during registration:", error.message || error);
    return res.status(500).send("There was an error during registration.");
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email and password are required.");
    }

    const userExist = users.find(u => u.email === email);
    if (!userExist) {
      return res.status(400).send("User does not exist.");
    }

    // Compare the password 
    const matchPassword = await bcrypt.compare(String(password), userExist.password);
    if (!matchPassword) {
      return res.status(400).send("Invalid password.");
    }

    // Generate a token
    const token = jwt.sign({ email: userExist.email }, secretKey, { expiresIn: '1h' });

    return res.status(200).json({ token });
  } catch (error) {
    console.error("Error during login:", error.message || error);
    return res.status(500).send("Internal server error.");
  }
});

module.exports = router;
