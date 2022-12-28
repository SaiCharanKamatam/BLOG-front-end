import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
const Protected = () => {
    const token = window.localStorage.getItem("token")
    const navigate = useNavigate()
  return (
    <div>
       {token ? <Outlet/> : navigate("/")}
    </div>
  )
}

export default Protected
