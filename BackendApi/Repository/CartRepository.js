// repositories/CartRepository.js

import Cart from '../Model/CartItem.js';

class CartRepository {
  // Add item to cart
  static async addToCart(userId, productId, qty) {
    try {
      const cartItem = await Cart.create({ userId, productId, qty });
      return cartItem;
    } catch (error) {
      throw new Error(`Error adding item to cart: ${error.message}`);
    }
  }

  // Delete item from cart by user ID and product ID
  static async deleteFromCart(userId, productId) {
    try {
      const cartItem = await Cart.findOne({ where: { userId, productId } });
      if (!cartItem) {
        throw new Error('Item not found in cart');
      }
      await cartItem.destroy();
      return cartItem;
    } catch (error) {
      throw new Error(`Error deleting item from cart: ${error.message}`);
    }
  }

  // Update cart item quantity by user ID and product ID
  static async updateCartItem(userId, productId, qty) {
    try {
      const cartItem = await Cart.findOne({ where: { userId, productId } });
      if (!cartItem) {
        throw new Error('Item not found in cart');
      }
      cartItem.qty = qty;
      await cartItem.save();
      return cartItem;
    } catch (error) {
      throw new Error(`Error updating cart item: ${error.message}`);
    }
  }

  // Delete item from cart by cart item ID
  static async deleteCartItemById(cartItemId) {
    try {
      const cartItem = await Cart.findByPk(cartItemId);
      if (!cartItem) {
        throw new Error('Item not found in cart');
      }
      await cartItem.destroy();
      return cartItem;
    } catch (error) {
      throw new Error(`Error deleting cart item by ID: ${error.message}`);
    }
  }
}

export default CartRepository;
