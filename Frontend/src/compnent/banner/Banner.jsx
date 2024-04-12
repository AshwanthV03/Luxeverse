import React, { useEffect, useRef, useState } from 'react'
import './banner.css'
import a from  '../../imgs/a.jpg'
import bannerData from '../banner/BannerData'
import gsap from 'gsap'

function Banner() {



  let [pic,setPic]=useState(0)
  let [img,setImg] = useState(bannerData[0].img)
  var num= 0
  const left=()=>{
    pic>0?setPic((i)=>i-1):setPic(bannerData.length-1)
    setImg(bannerData[pic].img)
    // console.log(pic)
  }
  const right=()=>{
    pic<bannerData.length?pic+1<bannerData.length?setPic((i)=>i+1):setPic(0):setPic(0)
    setImg(bannerData[pic].img)
    // console.log(pic)

  }
  useEffect(()=>{
    setTimeout(right,5000)
  },[right])
  return (
    <div className="banner-container">
      <button onClick={left} className="prevp">&lt;</button>
      <div className="bnrimg"><img className='banner' src={img} alt="img" /></div>
      <button onClick={right} className="Next">&gt;</button>

    </div>
  )
}

export default Banner
