// models/Category.js
import { DataTypes } from 'sequelize';
import sequelize from '../DB/Db.js';

const Category = sequelize.define('Category', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  categoryTitle: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Category;
