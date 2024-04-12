// services/WishlistService.js

import WishlistRepository from '../Repository/WishlistRepository.js';

class WishlistService {
  // Add item to wishlist (authenticated user)
  static async addToWishlist(userId, productId) {
    try {
      const wishlistItem = await WishlistRepository.addToWishlist(userId, productId);
      return wishlistItem;
    } catch (error) {
      throw new Error(`Error adding item to wishlist: ${error.message}`);
    }
  }

  // Delete item from wishlist (only by the user who created the wishlist item)
  static async deleteFromWishlist(userId, productId) {
    try {
      const deletedItem = await WishlistRepository.deleteFromWishlist(userId, productId);
      return deletedItem;
    } catch (error) {
      throw new Error(`Error deleting item from wishlist: ${error.message}`);
    }
  }

  // Get wishlist items by user ID (authenticated user)
  static async getWishlistItems(userId) {
    try {
      const wishlistItems = await WishlistRepository.getWishlistItems(userId);
      return wishlistItems;
    } catch (error) {
      throw new Error(`Error fetching wishlist items: ${error.message}`);
    }
  }
}

export default WishlistService;
