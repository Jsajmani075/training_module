const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

// Get user by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.send("ID not found");
    }
    const user = await User.findByPk(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

// Create user
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    if (!firstName || !lastName || !email) {
      return res.send("All fields are required");
    }
    const user = await User.create({ firstName, lastName, email });
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

// Update user by id
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.send("ID not found");
    }
    const user = await User.findByPk(id);
    if (user) {
      const updatedData = await user.update(req.body);
      res.json(updatedData);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

// Delete user by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.send("ID not found");
    }
    const user = await User.findByPk(id);
    if (user) {
      await User.destroy({ where: { id } });
      res.send("User deleted successfully");
    } else {
      res.send("User not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

// Upsert user (create or update)
router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [user, created] = await User.upsert({
      id: req.params.id,
      ...req.body,
    });
    if (created) {
      res.status(201).json(user);
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
