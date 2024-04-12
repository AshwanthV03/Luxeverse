import React, { useEffect, useState } from 'react'
import catList from '../../catData'
import shopList from '../../storeData'
import './shopList.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ShopList() {
    let box = document.querySelector('.shopcontainer')
    const clickedleft=()=>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft-width

    }
    const clickedright=()=>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft+width
        console.log(width)

    }

    const [store,setStore] = useState([]);
    const chooseHandler=async(e)=>{
        //console.log(e.target.value)
        const res2 = await  axios.get(`http://localhost:5000/api/seller/seller-cat/${e.target.value}`)
        console.log(res2.data)
        setStore(res2.data)

    }

    useEffect(()=>{
        const getStore=async()=>{
            const res = await axios.get('http://localhost:5000/api/seller/seller-find')
            console.log(res.data)
            setStore(res.data)
        }
        getStore()
    },[])

  return (
    <div className='shopcontainer'>
        <select className='choose' id="choose" name="choose" onChange={(e)=>{chooseHandler(e)}} >
                {
                    catList.map((i)=>(
                        <option value={i}>{i}</option>
                    ))
                }
        </select>
        <button className="prev" onClick={clickedleft}>&lt;</button>
        <button className="next" onClick={clickedright}>&gt;</button>

        <div className="shopList">
               {store.map((i)=>(
                        <Link to={`/products/${i._id}`}><div className="store">
                        <img src={i.image} alt="" className="logo" />
                        <div className="storetitle">{i.store}</div>
                        <button className="shop">Visit Store</button>
                    </div></Link>
                        ))}
        </div>
    </div>
  )
}

export default ShopList
