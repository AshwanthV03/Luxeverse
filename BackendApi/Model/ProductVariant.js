// models/ProductVariant.js
import { DataTypes } from 'sequelize';
import sequelize from '../DB/Db.js';

const ProductVariant = sequelize.define('ProductVariant', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  colour: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default ProductVariant;
