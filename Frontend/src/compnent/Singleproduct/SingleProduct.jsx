import React, { useEffect, useState } from 'react'
import './Singleproduct.css'
import ShopList from '../../compnent/shop/ShopList'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { addProduct } from '../../redux/cartRedux'
import { useDispatch } from 'react-redux'
import Slide from '../SliderComp/Slide'
import productsdata from '../../Productdata'
import Footer from '../footer/Footer'
import Cat from '../../compnent/catogries/Cat'

function SingleProduct() {
    const [product,setProduct] = useState({})
    const [sortedproduct,setSortedProduct] = useState([])

    const [productcolor1,setProductcolor] = useState([])
    const [productsize1,setProductsize] = useState([])
    
    const [productcolor,setProductColor] = useState("")
    const [productsize,setProductSize] = useState("")
    const location = useLocation()
    const productId = location.pathname.split('/')[2]
    const [count,setcount]= useState(1)
    const dispatch = useDispatch()
   
   const handleClick=(type)=>{ 
        if(type=="dnc"){
           count > 1 && setcount(count-1)
        }else{
            setcount(count+1)
        }

   }
   const handlebuttonclick=()=>{
   dispatch(addProduct({...product,count,productcolor1,productsize1}))
   }

   useEffect(()=>{
    const getProduct=async()=>{
        const res = await axios.get("http://localhost:5000/api/products/find/"+productId)
        //const re1 = await axios.get("http://localhost:5000/api/products/cat/"+"headphones")

        setProduct(res.data)
        //console.log(re1.data)
        setProductcolor(res.data.color)
        setProductsize(res.data.size)
    }
    getProduct()
   },[])
   const [pic,SetPic] = useState()
   console.log("products catogo",product.categories)


    //console.log(productsize,productcolor) 
    // console.log(productId)
    //console.log(res.data.color)


  return (
    <div className="mainproductcontainer">

    <div className="productContainer">
        <div className="productLeft">
            <img src={product.img} alt="" className="productimg" />
        </div>
        <div className="productRight">
            <div className="title-sp">{product.title}</div>
            <div className="price-sp">₹{product.price}</div>
            <div className="qyt">
                <button className="dnc" onClick={()=>handleClick("dnc")}>-</button>
                <span className="count">{count}</span>
                <button className="inc" onClick={()=>handleClick("inc")}>+</button>
            </div>
            <div className="options">
                <select name="" className='productOption'  onChange={(e)=>{setProductColor(e.target.value)}} id="">
                {productcolor1.map((i)=>(
                        <option value={i}>{i}</option>
                    ))}
                </select>
                <select name="" className='productOption'  onChange={(e)=>{setProductSize(e.target.value)}} id="">
                {productsize1.map((i)=>(
                        <option value={i}>{i}</option>
                    ))}
                </select>
            </div>
            <div className="decs">{product.decs}</div>
            <button className='addtocart' onClick={()=>handlebuttonclick()}>Add to cart</button>
            


        </div>
        
    </div>
    <Slide headd={"Recommended product"} data={productsdata}/>
        
    <Footer/>

    </div>

  )
}

export default SingleProduct
