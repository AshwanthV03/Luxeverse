import React from 'react'
import NavBar from '../../compnent/navbar/NavBar'
import SingleProduct from '../../compnent/Singleproduct/SingleProduct'
import Footer from '../../compnent/footer/Footer'
import './product.css'
import Cat from '../../compnent/catogries/Cat'

function product() {
  return (
    <div className='productpage'>
      <NavBar/>
      <Cat/>
      <SingleProduct/>
      <div className="box88"> </div>
    </div>
  )
}

export default product
