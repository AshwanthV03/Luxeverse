import express from "express";
import morgan from "morgan";
import sequelize from "./DB/Db.js"; // Import the Sequelize instance
import userController from "./Controller/UserController.js";
import CartController from "./Controller/CartController.js"; // Corrected import statement
import OrderController from "./Controller/OrderController.js";
import WishlistController from "./Controller/WishlistController.js";
import ProductController from "./Controller/ProductController.js"

const app = express();
app.use(express.json());
app.use(morgan('tiny'));

// Attempt to authenticate with the database
sequelize.authenticate()
  .then(() => {
    console.log('Successfully connected to the database');
    // Sync all defined models with the database
    return sequelize.sync();
  })
  .then(() => {
    console.log('All models synchronized with the database');
    // Start the server only after successful database sync
    app.listen(5000, () => {
      console.log("API Running on port 5000");
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    // If unable to connect to the database, terminate the application
    process.exit(1);
  });

// Define routes using controllers
app.use("/api/User", userController);
app.use("/api/Cart", CartController);
app.use("/api/Order", OrderController);
app.use("/api/Wishlist", WishlistController);
