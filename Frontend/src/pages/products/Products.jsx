import React from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from '../../compnent/navbar/NavBar'
import Producsct from '../../compnent/productsc/Producsct'
import './product.css'
import Cat from '../../compnent/catogries/Cat'

import SideFilter from '../../compnent/sideFilter/SideFilter'
let add = [
  {ad:"https://uploads-ssl.webflow.com/625528df065c53d23c2bc83b/628b13a3374c2e46f219bfda_How%20To%20Write%20The%20Most%20Appealing%20Ad%20Banner%20Copy%20%E2%80%93%20A%20Comprehensive%20Guide.png"},
  {ad:"https://uploads-ssl.webflow.com/625528df065c53d23c2bc83b/628b13a3374c2e46f219bfda_How%20To%20Write%20The%20Most%20Appealing%20Ad%20Banner%20Copy%20%E2%80%93%20A%20Comprehensive%20Guide.png"},
  {ad:"https://uploads-ssl.webflow.com/625528df065c53d23c2bc83b/628b13a3374c2e46f219bfda_How%20To%20Write%20The%20Most%20Appealing%20Ad%20Banner%20Copy%20%E2%80%93%20A%20Comprehensive%20Guide.png"},
  {ad:"https://uploads-ssl.webflow.com/625528df065c53d23c2bc83b/628b13a3374c2e46f219bfda_How%20To%20Write%20The%20Most%20Appealing%20Ad%20Banner%20Copy%20%E2%80%93%20A%20Comprehensive%20Guide.png"},
  {ad:"https://uploads-ssl.webflow.com/625528df065c53d23c2bc83b/628b13a3374c2e46f219bfda_How%20To%20Write%20The%20Most%20Appealing%20Ad%20Banner%20Copy%20%E2%80%93%20A%20Comprehensive%20Guide.png"},

]


function Products() {
  const location = useLocation()
  let storeId= location.pathname.split('/')[2]
  console.log(storeId)
  return (
    <div>
      <NavBar/>
      <Cat/>
      <div className="Body">
      <Producsct storeId={storeId}/>

      </div>
    </div>
  )
}

export default Products
