// services/CartService.js

import CartRepository from '../Repository/CartRepository.js';

class CartService {
  // Add item to cart (only authenticated user)
  static async addToCart(userId, productId, qty) {
    try {
      const cartItem = await CartRepository.addToCart(userId, productId, qty);
      return cartItem;
    } catch (error) {
      throw new Error(`Error adding item to cart: ${error.message}`);
    }
  }

  // Delete item from cart (only by the user who created the cart item)
  static async deleteFromCart(userId, productId) {
    try {
      const deletedItem = await CartRepository.deleteFromCart(userId, productId);
      return deletedItem;
    } catch (error) {
      throw new Error(`Error deleting item from cart: ${error.message}`);
    }
  }

  // Update cart item quantity (only by the user who created the cart item)
  static async updateCartItem(userId, productId, qty) {
    try {
      const updatedItem = await CartRepository.updateCartItem(userId, productId, qty);
      return updatedItem;
    } catch (error) {
      throw new Error(`Error updating cart item: ${error.message}`);
    }
  }

  // Delete item from cart by cart item ID (only by the user who created the cart item)
  static async deleteCartItemById(cartItemId) {
    try {
      const deletedItem = await CartRepository.deleteCartItemById(cartItemId);
      return deletedItem;
    } catch (error) {
      throw new Error(`Error deleting cart item by ID: ${error.message}`);
    }
  }
}

export default CartService;
