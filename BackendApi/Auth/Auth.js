// middleware/auth.js
import jwt from 'jsonwebtoken';
import getUserByEmailAndPassword from'../Repository/UserRepository.js';

// Middleware function to authenticate and authorize user
const authenticateUser = async (req, res, next) => {
  try {
    // Check if Authorization header is present
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
      }

      // Add user data to request object
      const { email, password } = decoded;
      req.user = await getUserByEmailAndPassword(email, password);

      // Check if user exists
      if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized: User not found' });
      }

      // Authorization logic (example: admin role check)
      if (!req.user.isAdmin) {
        return res.status(403).json({ message: 'Forbidden: Access denied' });
      }

      // Proceed to the next middleware
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: `Internal Server Error: ${error.message}` });
  }
};
export default authenticateUser ;
