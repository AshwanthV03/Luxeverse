// controllers/UserController.js

import express from "express";
const router = express.Router();
import authenticateUser from '../Auth/Auth.js';
import UserService from '../Service/UserService.js';

// Route for user registration
router.post('/register', async (req, res) => {
  try {
    const newUser = await UserService.register(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await UserService.login(email, password);
    res.json({ user, token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

// Route for updating user details
router.put('/:userId', authenticateUser, async (req, res) => {
  try {
    const userId = req.params.userId;
    const reqUser = req.user;

    // Check if user is owner or admin
    if (reqUser.id !== userId && !reqUser.isAdmin) {
      return res.status(403).json({ message: 'Forbidden: Access denied' });
    }

    const updatedUser = await UserService.updateUser(userId, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for deleting user
router.delete('/:userId', authenticateUser, async (req, res) => {
  try {
    const userId = req.params.userId;
    const reqUser = req.user;

    // Check if user is owner or admin
    if (reqUser.id !== userId && !reqUser.isAdmin) {
      return res.status(403).json({ message: 'Forbidden: Access denied' });
    }

    const deletedUser = await UserService.deleteUser(userId);
    res.json(deletedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for getting all users (accessible only by admin)
router.get('/users', authenticateUser, async (req, res) => {
  try {
    // Check if user is admin
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Forbidden: Access denied' });
    }

    const users = await UserService.getAllUsers(req.user);
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router; 
