import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate()

    return (
        <div className='nav-container'>
            <nav>
                <div className='logo'>Blog App</div>

                <ul>
                    <li><Link to="/protected/home" >Home</Link></li>
                    <li><Link to="/protected/create" >Create</Link></li>
                    <li onClick={()=>{
                        window.localStorage.removeItem("token")
                        navigate("/")

                    }} >Log Out</li>
                </ul>

            </nav>
        </div>
    )
}

export default Nav
