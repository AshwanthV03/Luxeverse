// models/WishlistItem.js

import DataTypes  from 'sequelize';
import sequelize from '../DB/Db.js';

const WishlistItem = sequelize.define('WishlistItem', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default WishlistItem;
