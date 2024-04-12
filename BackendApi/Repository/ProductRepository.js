import Product from '../Model/Product.js';
import Category from '../Model/Category.js';
import ProductVariant from '../Model/ProductVariant.js'; // Import ProductVariant model
import { Op } from 'sequelize';

class ProductRepository {
  static async createProduct(title, description, price, categories) {
    try {
      const product = await Product.create({
        title,
        description,
        price,
      });

      if (categories && categories.length > 0) {
        await product.addCategories(categories);
      }

      return product;
    } catch (error) {
      throw new Error(`Error creating product: ${error.message}`);
    }
  }

  static async getProductById(productId) {
    try {
      const product = await Product.findByPk(productId);
      return product;
    } catch (error) {
      throw new Error(`Error fetching product by ID: ${error.message}`);
    }
  }

  static async getAllProducts() {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      throw new Error(`Error fetching all products: ${error.message}`);
    }
  }

  static async updateProduct(productId, newData) {
    try {
      const product = await Product.findByPk(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      await product.update(newData);
      return product;
    } catch (error) {
      throw new Error(`Error updating product: ${error.message}`);
    }
  }

  static async deleteProduct(productId) {
    try {
      const product = await Product.findByPk(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      await product.destroy();
    } catch (error) {
      throw new Error(`Error deleting product: ${error.message}`);
    }
  }

  static async filterProducts(filters) {
    try {
      const whereConditions = {};

      // Filter by category name
      if (filters.categoryName) {
        whereConditions['$Categories.categoryTitle$'] = filters.categoryName;
      }

      // Filter by price
      if (filters.price) {
        whereConditions.price = filters.price;
      }

      // Filter by creation date
      if (filters.createdAfter) {
        whereConditions.timestamp = { [Op.gt]: filters.createdAfter };
      }
      if (filters.createdBefore) {
        if (!whereConditions.timestamp) whereConditions.timestamp = {};
        whereConditions.timestamp[Op.lt] = filters.createdBefore;
      }

      // Filter by color
      if (filters.color) {
        // Assuming color is stored in ProductVariant model
        whereConditions['$ProductVariants.colour$'] = filters.color;
      }

      // Filter by size
      if (filters.size) {
        // Assuming size is stored in ProductVariant model
        whereConditions['$ProductVariants.size$'] = filters.size;
      }

      // Filter by price range
      if (filters.minPrice || filters.maxPrice) {
        whereConditions.price = {};
        if (filters.minPrice) {
          whereConditions.price[Op.gte] = filters.minPrice;
        }
        if (filters.maxPrice) {
          whereConditions.price[Op.lte] = filters.maxPrice;
        }
      }

      const products = await Product.findAll({
        where: whereConditions,
        include: [
          { model: Category, as: 'Categories' },
          { model: ProductVariant, as: 'ProductVariants' } // Assuming ProductVariant model exists
        ]
      });

      return products;
    } catch (error) {
      throw new Error(`Error filtering products: ${error.message}`);
    }
  }

  static async createProductVariants(productUuid, variants) {
    try {
      // Find the product by UUID
      const product = await Product.findByPk(productUuid);
      if (!product) {
        throw new Error('Product not found');
      }

      // Create product variants
      const createdVariants = await Promise.all(variants.map(async (variant) => {
        const createdVariant = await ProductVariant.create({
          colour: variant.colour,
          size: variant.size,
          quantity: variant.quantity,
          productId: productUuid, // Associate variant with product
        });
        return createdVariant;
      }));

      return createdVariants;
    } catch (error) {
      throw new Error(`Error creating product variants: ${error.message}`);
    }
  }
}

export default ProductRepository;
