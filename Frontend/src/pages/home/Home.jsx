import React from 'react'
import Banner from '../../compnent/banner/Banner'
import Cat from '../../compnent/catogries/Cat'
import NavBar from '../../compnent/navbar/NavBar'
import ShopList from '../../compnent/shop/ShopList'
import "./home.css"
import Footer from '../../compnent/footer/Footer'
import HomeCato from '../../compnent/homeCatogories/HomeCato'
import RenderBody from '../../compnent/renderBody/RenderBody'
import Ad_Comp from '../../compnent/ad_banner/Ad_Comp'
function Home() {
  const ads = [
    "Ad 1",
    "Ad 2",
    "Ad 3",
    "Ad 4",
    "Ad 5"
  ];

  return (
 <div className="">
       <NavBar/>
        <Cat/>
    <div className='homeContainer'>
     {/* <Banner/>
     <HomeCato/>
     <ShopList/> */}
     <Ad_Comp config={{
      "ads":ads,
      "type" : ["left","right","top","bottom"],
      "auto-slide" : false
     }}/>
     <RenderBody/>

    </div>
    <Footer/>
 </div>
  )
}

export default Home
