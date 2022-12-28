import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import axios from "axios"

const Login = () => {
    const navigate = useNavigate()
    const [data,setData] = useState({email : "",password : ""})
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("https://blog-backend-39bg.onrender.com/login", {email : data.email,password : data.password})
        .then((data)=>{
            console.log(data.data.token);
            window.localStorage.setItem("token",data.data.token)
            navigate("/protected/home")
        })
        .catch((err)=>{
            alert(err.message)
        })

    }

    return (
        <div className='component-container'>
            <div className='login-container' >
                <div className='logo'> LOGIN</div>
                <form onSubmit={(e)=>handleSubmit(e)} >
                    <label htmlFor='email'>Email</label>
                    <input type="email" id='email' name='email' placeholder='enter your email' required
                      value={data.email}
                     onChange={(e)=>setData({...data , email : e.target.value})}
                     onBlur = {(e)=>{
                        if(!data.email.includes("@")){
                            alert("enter valid email")
                        }
                     }}
                    />
                    <label htmlFor='password'>Password</label>
                    <input type="password" id='password' name='password' placeholder='enter your password' required
                      value={data.password}

                     onChange={(e)=>setData({...data , password : e.target.value})}
                     onBlur = {(e)=>{
                        if(data.password.length<8){
                            alert("password should be atleast 8 characters")
                        }
                     }}
                    />
                    <input type="submit" id='submit-btn' value="Login" />

                    <div>
                        Need an account ? <span><button onClick={() => navigate("/signup")} >Signup</button></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
