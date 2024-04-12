
import './App.css';
import Home from './pages/home/Home';
import Product from './pages/product/product'
import Login from './pages/Login/Login';
import Register from './pages/register/Register';
import Products from './pages/products/Products';

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Cart from './pages/Cart';
import { useSelector } from 'react-redux';
import AllProducts from './pages/products/AllProducts';
function App() {
  // const user = useSelector((state)=>state.user.currentUser)
  let user = true;
  console.log(user)
  return (
    <Router>
    <Routes>
      <Route path='/login' element={user?<Home/>:<Login/>}/>
    </Routes>
    <Routes>
      <Route path='/register' element={!user?<Register/>:<Home/>}/>
    </Routes>
    <Routes>
      <Route path='/' element={user?<Home/>:<Login/>}/>
    </Routes>
    <Routes>
      <Route path='/products/:id' element={<Products/>}/>
    </Routes>
    <Routes>
      <Route path='/product/:id' element={<Product/>}/>
    </Routes>
    <Routes>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Routes>
      <Route path='/allProducts/:search' element={<AllProducts/>}/>
    </Routes>

  </Router>
  
  );
}

export default App;
