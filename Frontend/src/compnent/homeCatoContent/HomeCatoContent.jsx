import React from 'react'
import './homeCatoContent.css'
import { Link } from 'react-router-dom'

function HomeCatoContent({data,heading}) {
  console.log(data)
  console.log(heading)

  return (
    <div className='homeCatocontentContainer'>
      <span className="hcc-heading">{heading}</span>
      <div className="hcc-subBox">
      {data.map((i)=>(
        <Link className='Link' to={`/allproducts/${i.Keyword}`}>
              <div className="hcc-image">
            <img src={i.img} alt="" className="hcc-sub-image" />
            <span className="hcc-test-titlee">{i.title}</span>
        </div>
      </Link>
      ))}
      </div>

      </div>






  )
}

export default HomeCatoContent
