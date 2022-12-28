import "./Signup.css"
import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [data, setData] = useState({ email: "", password: "", confirmPassword: "" })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
       
        axios.post("https://blog-backend-39bg.onrender.com/signup", {email : data.email,password : data.password})
        .then((data)=>{
            console.log(data);
            navigate("/")
        })
        .catch((err)=>{
            alert(err.message)
        })

    }
    return (
        <div className='component-container'>
            <div className='signup-container' >
                <div className='logo'> Signup</div>
                <form onSubmit={(e) => handleSubmit(e)}  >
                    <label htmlFor='email'>Email</label>
                    <input type="email" id='email' name='email' placeholder='enter your email' required
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        onBlur={(e) => {
                            if (!data.email.includes("@")) {
                                alert("enter valid email")
                            }
                        }}
                    />
                    <label htmlFor='password'>Password</label>
                    <input type="password" id='password' name='password' placeholder='enter your password' required
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                        onBlur={(e) => {
                            if (data.password.length != 0 && data.password.length < 8) {
                                alert("password should be atleast 8 characters")
                            }
                        }}
                    />
                    <label htmlFor='password'>Confirm Password</label>
                    <input type="password" id='password' name='password' placeholder='enter your password' required
                        onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                        onBlur={(e) => {
                            if (data.password.length != 0 && data.password !== data.confirmPassword) {
                                alert("confirm password should match the password")
                            }
                        }}
                    />
                    <input type='submit' value="Sign Up" id='signup-btn' />
                </form>
            </div>
        </div>
    )
}

export default Signup
