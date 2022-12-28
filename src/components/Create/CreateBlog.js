import React, { useContext } from 'react'
import "./CreateBlog.css"
import { useState, } from 'react'
import axios from 'axios'
import Nav from '../Nav/Nav'
import { useNavigate } from 'react-router-dom'
import {dataContext} from "../../App"
const CreateBlog = () => {
    const [data, setData] = useState({ title: "", description: "", author: "" })
    const token = window.localStorage.getItem("token")
    const {abc,setAbc} = useContext(dataContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://blog-backend-39bg.onrender.com/blogs/create",
            { title: data.title, description: data.description, author: data.author }, {
            headers: {
                authorization: token
            }
        },
        )
            .then((data) => {
                console.log(data.data);
                setAbc(!abc)
                navigate("/protected/home")
            })
            .catch((err) => {
                alert(err.message)
            })

    }
    return (
        <div>  <Nav />
            <div className='component-container'>

                <div className='login-container' >
                    <div className='logo'> Create A Blog</div>
                    <form onSubmit={(e) => handleSubmit(e)} >
                        <label htmlFor='text'>Title</label>
                        <input type="text" id='text' name='text' placeholder='enter your title' required
                            value={data.title}
                            onChange={(e) => setData({ ...data, title: e.target.value })}

                        />
                        <label htmlFor='description'>description</label>
                        <textarea id='description' name='description' placeholder='enter your description' required
                            value={data.description}

                            onChange={(e) => setData({ ...data, description: e.target.value })}

                        ></textarea>
                        <label htmlFor='author'>Author</label>
                        <input type="text" id='author' name='author' placeholder='enter your author' required
                            value={data.author}
                            onChange={(e) => setData({ ...data, author: e.target.value })}

                        />

                        <input type="submit" id='submit-btn' value="Post" />


                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog
