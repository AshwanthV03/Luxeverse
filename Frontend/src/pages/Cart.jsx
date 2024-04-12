import React from 'react'
import Cartcom from '../compnent/cart/Cartcom'
import NavBar from '../compnent/navbar/NavBar'
import Cat from '../compnent/catogries/Cat'
import Footer from '../compnent/footer/Footer'

function Cart() {
  return (
    
    <div>
      <NavBar/>
      <Cat/>
      <Cartcom/>
      <Footer/>
    </div>
  )
}

export default Cart
