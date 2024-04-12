import React from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from '../../compnent/navbar/NavBar'
import GenProducts from '../../compnent/productsc/GenProduct'
import Producsct from '../../compnent/productsc/Producsct'
import Cat from '../../compnent/catogries/Cat'

function AllProducts() {
  const location = useLocation()
  let search= location.pathname.split('/')[2]
  return (
    <div>
      <NavBar/>
      <Cat/>
      <GenProducts search = {search} />
    </div>
  )
}

export default AllProducts
