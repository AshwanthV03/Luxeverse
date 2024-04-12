import React, { useState } from 'react'
import './login.css'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../../redux/apiCalls'
import { useNavigate } from 'react-router-dom'
 

function Login() {
    const user = useSelector(state=>state.user)
    console.log(user)

    const navigate = useNavigate()
    const [email,SetEmail]=useState()
    const [password,SetPassword] =useState()
    const dispatch = useDispatch()
    const handleclick=async(e)=>{
        e.preventDefault()
        login(dispatch,{email,password})
        navigate("/")
    }
  return (
    <div className='LoginContainer'>
        <div className="loginleft">
            Errands
        </div>
        <div className="loginright">
            <input placeholder='Email' type="text" className="inputBox"  onChange={(e)=>{SetEmail(e.target.value)}} />
            <input placeholder='password' type="password" className="inputBox" onChange={(e)=>{SetPassword(e.target.value)}} />
            <button className="login" onClick={handleclick}>Login</button>
            <a href="/" className="newuser">New user? Register now</a>
        </div>
    </div>
  )
}

export default Login
