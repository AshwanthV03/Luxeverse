// models/Product.js
import { DataTypes } from 'sequelize';
import sequelize from '../DB/Db.js';
import ProductVariant from './ProductVariant.js';
import Review from './Review.js';
import Category from './Category.js';

const Product = sequelize.define('Product', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

// Define relationships
Product.hasMany(ProductVariant, { foreignKey: 'productId' }); // One-to-Many relationship with ProductVariant
Product.hasMany(Review, { foreignKey: 'productId' }); // One-to-Many relationship with Review
Product.belongsToMany(Category, { through: 'ProductCategory', foreignKey: 'productId' }); // Many-to-Many relationship with Category

export default Product;
