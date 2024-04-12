import ProductRepository from '../Repository/ProductRepository.js';

class ProductService {
  static async createProduct(title, description, price, categories) {
    try {
      const product = await ProductRepository.createProduct(title, description, price, categories);
      return product;
    } catch (error) {
      throw new Error(`Error creating product: ${error.message}`);
    }
  }

  static async getProductById(productId) {
    try {
      const product = await ProductRepository.getProductById(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw new Error(`Error fetching product by ID: ${error.message}`);
    }
  }

  static async getAllProducts() {
    try {
      const products = await ProductRepository.getAllProducts();
      return products;
    } catch (error) {
      throw new Error(`Error fetching all products: ${error.message}`);
    }
  }

  static async updateProduct(productId, newData) {
    try {
      const product = await ProductRepository.updateProduct(productId, newData);
      return product;
    } catch (error) {
      throw new Error(`Error updating product: ${error.message}`);
    }
  }

  static async deleteProduct(productId) {
    try {
      await ProductRepository.deleteProduct(productId);
    } catch (error) {
      throw new Error(`Error deleting product: ${error.message}`);
    }
  }

  static async filterProducts(filters) {
    try {
      const products = await ProductRepository.filterProducts(filters);
      return products;
    } catch (error) {
      throw new Error(`Error filtering products: ${error.message}`);
    }
  }

  static async createProductVariants(productUuid, variants) {
    try {
      const createdVariants = await ProductRepository.createProductVariants(productUuid, variants);
      return createdVariants;
    } catch (error) {
      throw new Error(`Error creating product variants: ${error.message}`);
    }
  }
}

export default ProductService;
