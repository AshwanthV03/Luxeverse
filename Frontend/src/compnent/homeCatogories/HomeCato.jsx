import React from 'react'
import HomeCatoContent from '../homeCatoContent/HomeCatoContent'
import './homeCato.css'
function HomeCato() {
    let girl = [{
        img : "https://m.media-amazon.com/images/I/71D71aU1zxL._UY879_.jpg",
        title : "Topwear",
        Keyword : "women"

    },{
        img : "https://img2.exportersindia.com/product_images/bc-full/2021/1/6272644/ladies-bottom-wear-1611683762-5702355.jpg",
        title : "bottomwear",
        Keybord :"women"
    },
    {
        img : "https://4.imimg.com/data4/CH/SJ/MY-8198729/4-500x500.jpg",
        title : "footwear",
        Keyword :"women"
    },
    {
        img : "https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg",
        title : "Show All",
        Keyword :"women"
    },

];
    let boy = [
        {
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVv1nx8ftrqPVkFcTH8NU2Nvlq6FlpYhSWQ&usqp=CAU",
            title : "Topwear",
            Keyword : "men"
    
        },{
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4UtkvGwG_VrIBr2iePQfcZLT4Gcrf5l6DPw&usqp=CAU",
            title : "bottomwear",
            Keybord :"men"
        },
        {
            img : "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/p/u/z/10-167-gry-krors-grey-original-imagn8f3xykswqfx.jpeg?q=70",
            title : "footwear",
            Keyword :"men"
        },
        {
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dSzqSSBdEKCXIc4L9CXCQ9WuWqtDSH9SWQ&usqp=CAU",
            title : "Show All",
            Keyword :"men"
        },
    ];
    console.log(boy)
  return (
    <div className='homeCatoContainer'>
      <HomeCatoContent data={girl} heading="Women's collection"/>
      <HomeCatoContent data={boy} heading="Men's collection"/>
      <HomeCatoContent data={boy} heading="Men's collection"/>

    </div>
  )
}

export default HomeCato
