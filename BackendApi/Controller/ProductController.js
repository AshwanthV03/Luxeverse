import express from 'express';
import ProductService from '../Service/ProductService.js';
import authenticateUser from '../Auth/Auth.js';

const router = express.Router();

// Create a new product (requires admin privileges)
router.post('/', authenticateUser, async (req, res) => {
  const { title, description, price, categories } = req.body;
  try {
    // Validate input data
    if (!title || !description || !price || !categories || categories.length === 0) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const product = await ProductService.createProduct(title, description, price, categories);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all products (requires admin privileges)
router.get('/', authenticateUser, async (req, res) => {
  try {
    const products = await ProductService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get product by ID (requires admin privileges)
router.get('/:id', authenticateUser, async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductService.getProductById(id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Update a product by ID (requires admin privileges)
router.put('/:id', authenticateUser, async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    const updatedProduct = await ProductService.updateProduct(id, newData);
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a product by ID (requires admin privileges)
router.delete('/:id', authenticateUser, async (req, res) => {
  const { id } = req.params;
  try {
    await ProductService.deleteProduct(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Filter products based on given criteria
router.post('/filter', async (req, res) => {
  const filters = req.body;
  try {
    const filteredProducts = await ProductService.filterProducts(filters);
    res.json(filteredProducts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Create product variants for a given product
router.post('/:id/variants', authenticateUser, async (req, res) => {
  const { id } = req.params;
  const variants = req.body;
  try {
    const createdVariants = await ProductService.createProductVariants(id, variants);
    res.status(201).json(createdVariants);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
