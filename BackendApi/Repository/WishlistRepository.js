// repositories/WishlistRepository.js

import WishlistItem from '../Model/WishlistItem.js';

class WishlistRepository {
  // Add item to wishlist
  static async addToWishlist(userId, productId) {
    try {
      const wishlistItem = await WishlistItem.create({ userId, productId });
      return wishlistItem;
    } catch (error) {
      throw new Error(`Error adding item to wishlist: ${error.message}`);
    }
  }

  // Delete item from wishlist by user ID and product ID
  static async deleteFromWishlist(userId, productId) {
    try {
      const deletedItem = await WishlistItem.destroy({ where: { userId, productId } });
      if (deletedItem === 0) {
        throw new Error('Item not found in wishlist');
      }
      return deletedItem;
    } catch (error) {
      throw new Error(`Error deleting item from wishlist: ${error.message}`);
    }
  }

  // Get wishlist items by user ID
  static async getWishlistItems(userId) {
    try {
      const wishlistItems = await WishlistItem.findAll({ where: { userId } });
      return wishlistItems;
    } catch (error) {
      throw new Error(`Error fetching wishlist items: ${error.message}`);
    }
  }
}

export default WishlistRepository;
