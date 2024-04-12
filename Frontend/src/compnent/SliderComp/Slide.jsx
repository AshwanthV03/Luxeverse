import React from 'react'
import "./Slide.css"
function Slide({headd,data}) {
    console.log(data)
  return (
    <div className='SlideComp-s'>
        <span className="boxTitle-s">{headd}</span>
       <div className="boxcontain-s">
       {data.map((product)=>(
          <div className="slidebox-s">
          <img className='slideimg-s' src="https://www.kindpng.com/picc/m/334-3341376_mens-hoodie-forest-green-manmade-bonesmen-apparel-clothing.png" alt="" />
          <span className="title-s">Mens Hoodie Forest Green Manmade Bonesmen Apparel Clothing</span>
          <span className="price-s">₹744</span>
        </div>
        ))}
       </div>
    </div>
  )
}

export default Slide
