// controllers/OrderController.js

import express from 'express';
import authenticateUser from '../Auth/Auth.js';
import OrderService from '../Service/OrderService.js';

const router = express.Router();

// Route for placing an order (authenticated user)
router.post('/', authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const orderData = req.body;
    const order = await OrderService.placeOrder(userId, orderData);
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for canceling an order (user who created the order or admin)
router.delete('/:orderId', authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const orderId = req.params.orderId;
    const isAdmin = req.user.isAdmin;
    const canceledOrder = await OrderService.cancelOrder(userId, orderId, isAdmin);
    res.json(canceledOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for closing an order (only admin)
router.put('/:orderId/close', authenticateUser, async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const isAdmin = req.user.isAdmin;
    const closedOrder = await OrderService.closeOrder(orderId, isAdmin);
    res.json(closedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for getting order by ID (user who created the order or admin)
router.get('/:orderId', authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const orderId = req.params.orderId;
    const isAdmin = req.user.isAdmin;
    const order = await OrderService.getOrderById(userId, orderId, isAdmin);
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for getting all orders (only admin)
router.get('/', authenticateUser, async (req, res) => {
  try {
    const isAdmin = req.user.isAdmin;
    const orders = await OrderService.getAllOrders(isAdmin);
    res.json(orders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for getting orders by userId
router.get('/user/:userId', authenticateUser, async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await OrderService.getOrdersByUserId(userId);
    res.json(orders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for getting orders by sellerId
router.get('/seller/:sellerId', authenticateUser, async (req, res) => {
  try {
    const sellerId = req.params.sellerId;
    const orders = await OrderService.getOrdersBySellerId(sellerId);
    res.json(orders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for getting orders by productId
router.get('/product/:productId', authenticateUser, async (req, res) => {
  try {
    const productId = req.params.productId;
    const orders = await OrderService.getOrdersByProductId(productId);
    res.json(orders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for getting orders within date range
router.get('/date-range', authenticateUser, async (req, res) => {
  try {
    const query = req.query;
    const orders = await OrderService.getOrdersWithinDateRange(query);
    res.json(orders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
