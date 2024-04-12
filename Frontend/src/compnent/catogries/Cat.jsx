import React from 'react'
import './cat.css'
import catList from '../../catData'
function Cat() {
  return (
        <div className="cat-container">
            {
                
                catList.map((i)=>(
                    <div className="catList">{i}</div>
                ))
            }
        </div>
  )
}

export default Cat
