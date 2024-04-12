import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './cart.css'

function Cartcom() {
    const quantity= useSelector(state=>state.cart.quantity)
    console.log(quantity)
    const [count,setcount]= useState(1)
    const cart = useSelector(state=>state.cart)
    console.log(cart)
    const handleClick=(type)=>{
        if(type=="dnc"){
           count > 1 && setcount(count-1)
        }else{
            setcount(count+1)
        }

   }
  return (
    <div className='cartcontainer'>
      <div className="cartContents">
      {cart.product.map((i)=>(
        <div className="mapcontainer">
                  <div className="mapSubContainer">
                          <div className="cartproducts">
                            <img src={i.img} alt="" className="cartproductimg" />
                            <div className="ctitle">
                              <span className="carttitle">{i.title}</span>
                              <span className="delete">Delete</span>
                            </div>
                            <div className="qyt">
                                <button className="dnc button-color" onClick={()=>handleClick("dnc")}>-</button>
                                <span className="count">{count}</span>
                                <button className="inc button-color" onClick={()=>handleClick("inc")}>+</button>
                                
                            <span className="cartprice">{i.price}</span>
                            </div>
          
                            </div>
                  </div>
              <hr className='hr' color='#e7e1fb' />
        </div>
          ))}
      </div>
        <div className="cartbilling">
            <span className="carttotal">{`subtotal(${quantity} Items)`}: {cart.total}</span>
            <button className="checkout">checkout</button>
        </div>
      
    </div>
  )
}

export default Cartcom
