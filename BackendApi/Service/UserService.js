// services/UserService.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserRepository from '../Repository/UserRepository.js';


class UserService {
  // User registration
  static async register(userData) {
    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      userData.password = hashedPassword;

      // Create user
      const user = await UserRepository.createUser(userData);
      return user;
    } catch (error) {
      throw new Error(`Error registering user: ${error.message}`);
    }
  }

  // User login
  static async login(email, password) {
    try {
      // Get user by email
      const user = await UserRepository.getUserByEmail(email);
      if (!user) {
        throw new Error('Invalid credentials');
      }

      // Verify password
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error('Invalid credentials');
      }

      // Generate JWT token
      const token = jwt.sign({ email, password }, "djiowedqnueuq8u45w34r6w3", { expiresIn: '1h' });

      return { user, token };
    } catch (error) {
      throw new Error(`Error logging in: ${error.message}`);
    }
  }

  // Get all users (accessible only by admin)
  static async getAllUsers(reqUser) {
    try {
      // Check if user is admin
      if (!reqUser.isAdmin) {
        throw new Error('Access denied: Only admin users can perform this operation');
      }

      // Get all users
      const users = await UserRepository.getAllUsers();
      return users;
    } catch (error) {
      throw new Error(`Error fetching all users: ${error.message}`);
    }
  }
}

export default UserService;
