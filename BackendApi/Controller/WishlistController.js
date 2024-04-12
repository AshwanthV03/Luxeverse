// controllers/WishlistController.js

import express from 'express';
import authenticateUser from '../Auth/Auth.js';
import WishlistService from '../Service/WishlistService.js';

const router = express.Router();

// Route for adding item to wishlist (authenticated user)
router.post('/', authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;
    const wishlistItem = await WishlistService.addToWishlist(userId, productId);
    res.json(wishlistItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for deleting item from wishlist (user who created the wishlist item)
router.delete('/:productId', authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const productId = req.params.productId;
    const deletedItem = await WishlistService.deleteFromWishlist(userId, productId);
    res.json(deletedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for getting wishlist items by user ID (authenticated user)
router.get('/', authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const wishlistItems = await WishlistService.getWishlistItems(userId);
    res.json(wishlistItems);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
