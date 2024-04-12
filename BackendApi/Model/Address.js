// models/Address.js

import DataTypes  from 'sequelize';
import sequelize from '../DB/Db.js';

const Address = sequelize.define('Address', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  area: {
    type: DataTypes.STRING
  },
  landmark: {
    type: DataTypes.STRING
  },
  addressLine: {
    type: DataTypes.STRING
  }
});

export default Address;
