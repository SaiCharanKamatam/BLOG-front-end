import React, { useEffect, useState ,useContext} from 'react'
import "./Home.css"
import Nav from '../Nav/Nav'
import axios from "axios"
import {dataContext} from "../../App"

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const {abc} = useContext(dataContext)

  const token = window.localStorage.getItem("token")
  useEffect(() => {
    axios.get("https://blog-backend-39bg.onrender.com/blogs", {
      headers: {
        authorization: token
      }
    }).then((data) => {
      console.log(data.data.blogs);
      setBlogs(data.data.blogs)
    })

  }, [abc])
  return (
    <div>
      <Nav />
      <div className='' >
        {blogs.map((blog) => {
          return (
            <div key={blog._id} className= "blog-container" >
              <div >
                  {blog.title}
              </div>
              <div >
                  {blog.description}
              </div> <div >
                  {blog.author}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
