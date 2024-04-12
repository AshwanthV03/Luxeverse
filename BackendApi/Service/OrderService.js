// services/OrderService.js

import OrderRepository from '../Repository/OrderRepository.js';

class OrderService {
  // Place order (by authenticated user)
  static async placeOrder(userId, orderData) {
    try {
      // Add userId to orderData
      orderData.userId = userId;
      
      // Create order
      const order = await OrderRepository.createOrder(orderData);
      return order;
    } catch (error) {
      throw new Error(`Error placing order: ${error.message}`);
    }
  }

  // Cancel order (only by the user who created the order or the admin)
  static async cancelOrder(userId, orderId, isAdmin) {
    try {
      const order = await OrderRepository.getOrderById(orderId);
      if (!order) {
        throw new Error('Order not found');
      }

      // Check if user is the owner of the order or admin
      if (order.userId !== userId && !isAdmin) {
        throw new Error('Unauthorized: You are not allowed to cancel this order');
      }

      // Delete the order
      await OrderRepository.deleteOrder(orderId);
      return order;
    } catch (error) {
      throw new Error(`Error canceling order: ${error.message}`);
    }
  }

  // Close order (only by the admin)
  static async closeOrder(orderId, isAdmin) {
    try {
      if (!isAdmin) {
        throw new Error('Unauthorized: Only admin can close orders');
      }

      const order = await OrderRepository.closeOrder(orderId);
      return order;
    } catch (error) {
      throw new Error(`Error closing order: ${error.message}`);
    }
  }

  // Get order by ID (by user who created the order or admin)
  static async getOrderById(userId, orderId, isAdmin) {
    try {
      const order = await OrderRepository.getOrderById(orderId);
      if (!order) {
        throw new Error('Order not found');
      }

      // Check if user is the owner of the order or admin
      if (order.userId !== userId && !isAdmin) {
        throw new Error('Unauthorized: You are not allowed to access this order');
      }

      return order;
    } catch (error) {
      throw new Error(`Error fetching order: ${error.message}`);
    }
  }

  // Get all orders (only by admin)
  static async getAllOrders(isAdmin) {
    try {
      if (!isAdmin) {
        throw new Error('Unauthorized: Only admin can access all orders');
      }

      const orders = await OrderRepository.getAllOrders();
      return orders;
    } catch (error) {
      throw new Error(`Error fetching all orders: ${error.message}`);
    }
  }

  // Get orders by userId
  static async getOrdersByUserId(userId) {
    try {
      const orders = await OrderRepository.getOrdersByUserId(userId);
      return orders;
    } catch (error) {
      throw new Error(`Error getting orders by userId: ${error.message}`);
    }
  }

  // Get orders by sellerId
  static async getOrdersBySellerId(sellerId) {
    try {
      const orders = await OrderRepository.getOrdersBySellerId(sellerId);
      return orders;
    } catch (error) {
      throw new Error(`Error getting orders by sellerId: ${error.message}`);
    }
  }

  // Get orders by productId
  static async getOrdersByProductId(productId) {
    try {
      const orders = await OrderRepository.getOrdersByProductId(productId);
      return orders;
    } catch (error) {
      throw new Error(`Error getting orders by productId: ${error.message}`);
    }
  }

  // Get orders within date range
  static async getOrdersWithinDateRange(query) {
    try {
      const orders = await OrderRepository.getOrdersWithinDateRange(query);
      return orders;
    } catch (error) {
      throw new Error(`Error getting orders within date range: ${error.message}`);
    }
  }
}

export default OrderService;
