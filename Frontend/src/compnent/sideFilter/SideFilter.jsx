import React, { useState } from 'react'
import './sidefilter.css'
function SideFilter() {
    let [max,setMax]=useState(0)
  return (
    <div className='sf-container'>
      <div className="sf-filter">
        <select className='choose-filter' name="size" id="zize">
        <option className='cf' value="blue">size</option>
        <option className='cf' value="size">XS</option>
        <option className='cf' value="size">S</option>
        <option className='cf' value="size">L</option>
        <option className='cf' value="size">XL</option>
        <option className='cf' value="size">XXL</option>
        </select>
        <select className='choose-filter' name="size" id="zize">
        <option className='cf' value="blue">colour</option>
        <option className='cf' value="blue">blue</option>
        <option className='cf' value="black">black</option>
        </select>
        <select className='choose-filter' name="size" id="zize">
        <option className='cf' value="blue">sort</option>
        <option className='cf' value="dnc">High to Low</option>
        <option className='cf' value="inc">Low to High</option>
        </select>
        <div className="sf-range">
        <div className="enterneramount">Range: 0 - {max}</div>
        <input  type="range" min={0} max={100000} onChange={(e)=>setMax(e.target.value)} className="priceRange" />
        </div>
        <button className='Apply'>Apply</button>
      </div>
    </div>
  )
}

export default SideFilter
