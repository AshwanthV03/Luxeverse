import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='footerContainer showRow'>
      <div className="knowUs showCol bodyFont">
      <span className="knowUsText HeaderFont">Know us</span>
        <span className="knowUsText">About us</span>
        <span className="knowUsText">Our blog</span>
        <span className="knowUsText">Career with us</span>

      </div>
      <div className="contactUs showCol bodyFont">
      <span className="knowUsText HeaderFont">Contact us</span>

        <span className="contactUsText">Instagram</span>
        <span className="contactUsText">Facebook</span>
        <span className="contactUsText">Twitter</span>


      </div>
    </div>
  )
}

export default Footer
