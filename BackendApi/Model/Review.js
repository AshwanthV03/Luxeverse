// models/Review.js
import { DataTypes } from 'sequelize';
import sequelize from '../DB/Db.js';

const Review = sequelize.define('Review', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  reviewerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  reviewerName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  starNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  reviewTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  reviewDesc: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

export default Review;
