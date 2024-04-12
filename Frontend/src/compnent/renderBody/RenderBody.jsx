import React from 'react'
import './renderbody.css'
import Banner from '../banner/Banner'
import HomeCato from '../homeCatogories/HomeCato'
import ShopList from '../shop/ShopList'
function RenderBody() {
    
  return (
    <div className='renderContainer'>
      <div className="rc-banner">
        <Banner/>
      </div>
      <div className="rc-overlay">
        <HomeCato/>
        <ShopList/>
      </div>
    </div>
  )
}

export default RenderBody
