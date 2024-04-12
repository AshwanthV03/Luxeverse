// models/User.js

import  DataTypes from 'sequelize';
import sequelize from '../DB/Db.js';
import Address from './Address.js';
import CartItem from './CartItem.js';
import Order from './Order.js';
import WishlistItem from './WishlistItem.js';

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phoneNumber: {
    type: DataTypes.STRING,
    unique:true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isAdmin:{
    type:DataTypes.BOOLEAN,
    defaultValue: false
  }
});

// Define relationships with explicit foreign key column names
User.hasMany(Address, { foreignKey: 'userId' });
User.hasMany(CartItem, { foreignKey: 'userId' });
User.hasMany(Order, { foreignKey: 'userId' });
User.hasMany(WishlistItem, { foreignKey: 'userId' });

export default User;
