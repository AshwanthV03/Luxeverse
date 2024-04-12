// db.js

import  Sequelize  from'sequelize';

// Connect to MySQL database
const sequelize = new Sequelize('dressshop', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
