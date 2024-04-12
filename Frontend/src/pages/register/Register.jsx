import React, { useState } from 'react'

function Register() {
    const [email,SetEmail]=useState()
    const [password,SetPassword] =useState()
    const [name,SetName] =useState()
    const [phone,SetPhone] =useState()


    const handleclick=()=>{
        console.log(password,email,name,phone)
    }
    return (
        <div className='LoginContainer'>
            <div className="loginleft">
                Errands
            </div>
            <div className="loginright">
                <input placeholder='Username' type="text" className="inputBox" onChange={(e)=>{SetName(e.target.value)}} />
                <input placeholder='Phone Number' type="number" className="inputBox" onChange={(e)=>{SetPhone(e.target.value)}} />
                <input placeholder='Email' type="email" className="inputBox"  onChange={(e)=>{SetEmail(e.target.value)}} />
                <input placeholder='password' type="password" className="inputBox" onChange={(e)=>{SetPassword(e.target.value)}} />

                <button className="login" onClick={handleclick}>Register</button>
                <a href="/" className="newuser">Already a user?Login</a>
            </div>
        </div>
      )
}

export default Register
