import React, { useEffect, useState } from 'react'
//import products from '../../Productdata'
import './productsc.css'
import productsdata from '../../Productdata'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SideFilter from '../sideFilter/SideFilter'

function GenProducts({search}) {
 // console.log(storeId)
  const [products,setProducts]=useState([])
  console.log(search)

  useEffect(()=>{
    const getProducts =async()=>{
      const res = await axios.get(`http://localhost:5000/api/products?category=${search}`)
      console.log(res.data.products)
       setProducts(res.data.products)
    }
    getProducts()
  },[])
  return (
    <div className='bodyContainer'>
      <SideFilter/>
      <div className="filters">
      </div>
      <div className="body">
            {products.map((i)=>(
                      <div className="product">
                       <Link className='link' to={`/product/${i._id}`}>
                       <img className='productimg' src={i.img} alt="" />
                       </Link>
                        <div className="details">
                        <span className="title">{i.title}</span>
                        <span className="price">{i.price}</span>
                        </div>
                        <button className='Add'>Add to Cart</button>
                    </div>
            
            ))}
      </div>
    </div>
  )
}

export default GenProducts
