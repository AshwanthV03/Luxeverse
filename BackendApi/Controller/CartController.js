// controllers/CartController.js

import express from 'express';
import authenticateUser from '../Auth/Auth.js';
import CartService from '../Service/CartService.js';

const router = express.Router();

// Route for adding item to cart (authenticated user)
router.post('/', authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, qty } = req.body;
    const cartItem = await CartService.addToCart(userId, productId, qty);
    res.json(cartItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for deleting item from cart (user who created the cart item)
router.delete('/:productId', authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const productId = req.params.productId;
    const deletedItem = await CartService.deleteFromCart(userId, productId);
    res.json(deletedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for updating cart item quantity (user who created the cart item)
router.put('/:productId', authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const productId = req.params.productId;
    const { qty } = req.body;
    const updatedItem = await CartService.updateCartItem(userId, productId, qty);
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for deleting item from cart by cart item ID (user who created the cart item)
router.delete('/item/:cartItemId', authenticateUser, async (req, res) => {
  try {
    const cartItemId = req.params.cartItemId;
    const deletedItem = await CartService.deleteCartItemById(cartItemId);
    res.json(deletedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
