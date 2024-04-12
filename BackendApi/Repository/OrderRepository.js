// repositories/OrderRepository.js

import Order from '../Model/Order.js';
import { Op } from 'sequelize';

class OrderRepository {
  // Create order
  static async createOrder(orderData) {
    try {
      const order = await Order.create(orderData);
      return order;
    } catch (error) {
      throw new Error(`Error creating order: ${error.message}`);
    }
  }

  // Delete order
  static async deleteOrder(orderId) {
    try {
      const order = await Order.findByPk(orderId);
      if (!order) {
        throw new Error('Order not found');
      }
      await order.destroy();
      return order;
    } catch (error) {
      throw new Error(`Error deleting order: ${error.message}`);
    }
  }

  // Close order
  static async closeOrder(orderId) {
    try {
      const order = await Order.findByPk(orderId);
      if (!order) {
        throw new Error('Order not found');
      }
      order.status = 'order processed';
      await order.save();
      return order;
    } catch (error) {
      throw new Error(`Error closing order: ${error.message}`);
    }
  }

  // Get orders by userId
  static async getOrdersByUserId(userId) {
    try {
      const orders = await Order.findAll({
        where: {
          userId: userId
        }
      });
      return orders;
    } catch (error) {
      throw new Error(`Error getting orders by userId: ${error.message}`);
    }
  }

  // Get orders by sellerId
  static async getOrdersBySellerId(sellerId) {
    try {
      const orders = await Order.findAll({
        where: {
          sellerId: sellerId
        }
      });
      return orders;
    } catch (error) {
      throw new Error(`Error getting orders by sellerId: ${error.message}`);
    }
  }

  // Get orders by productId
  static async getOrdersByProductId(productId) {
    try {
      const orders = await Order.findAll({
        where: {
          productId: productId
        }
      });
      return orders;
    } catch (error) {
      throw new Error(`Error getting orders by productId: ${error.message}`);
    }
  }

  // Get orders within date range
  static async getOrdersWithinDateRange(query) {
    try {
      const whereConditions = {};

      // Dynamic date range queries
      if (query.month) {
        whereConditions.orderDate = { [Op.between]: [`2024-${query.month}-01`, `2024-${query.month}-31`] };
      }
      if (query.startMonth && query.endMonth && query.year) {
        whereConditions.orderDate = { [Op.between]: [`2024-${query.startMonth}-01`, `2024-${query.endMonth}-31`] };
      }
      if (query.year) {
        whereConditions.orderDate = { [Op.between]: [`2024-01-01`, `2024-12-31`] };
      }
      if (query.startYear && query.endYear) {
        whereConditions.orderDate = { [Op.between]: [`${query.startYear}-01-01`, `${query.endYear}-12-31`] };
      }
      if (query.date) {
        whereConditions.orderDate = { [Op.between]: [`${query.date} 00:00:00`, `${query.date} 23:59:59`] };
      }
      if (query.startDate && query.endDate) {
        whereConditions.orderDate = { [Op.between]: [`${query.startDate} 00:00:00`, `${query.endDate} 23:59:59`] };
      }

      const orders = await Order.findAll({
        where: whereConditions
      });
      return orders;
    } catch (error) {
      throw new Error(`Error getting orders within date range: ${error.message}`);
    }
  }
}

export default OrderRepository;
