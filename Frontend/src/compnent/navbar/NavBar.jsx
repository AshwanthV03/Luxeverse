import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import navbar from './navbar.css'
function NavBar() {
  const [find,setFind] = useState("")

  const navigate = useNavigate();
  const quantity = useSelector(state=>state.cart.quantity)
  const user = useSelector((state)=>state.user.currentUser)
  console.log(user)
  return (
    <div className="Container">
          <div className='C-Container'>
      <div className="left">
        Errands
      </div>
      <div className="middle">
       <input className='searchBox' type="text" placeholder='Search' onChange={(e)=>{setFind(e.target.value)      }}
        onKeyPress={(e)=>{
          if(e.key=="Enter"){
            navigate(`/allproducts/${find}`)}
       }}/>
      </div>
      <div className="right">
        <div className="c-r-user">
          <span className="user">Hello,</span>
          <a className="N_text user">
            {user.username}
          </a>
        </div>
        <a className="N_text">
          Orders
        </a>
       <Link className='Link' to={'/cart'}>
       <a className="N_text">
          Cart
        </a></Link>
        <div className='circle'>
          <span className="q">{quantity}</span>
        </div>

      </div>
    </div>
    </div>
  )
}

export default NavBar
