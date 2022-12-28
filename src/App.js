import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Home from './components/Home/Home';
import CreateBlog from './components/Create/CreateBlog';
import Protected from './components/Protected';
import { createContext, useState } from 'react';
const dataContext = createContext()
function App() {
  const [abc, setAbc] = useState(false)

  return (
    <div className="App">
      <dataContext.Provider value={{abc,setAbc}} >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/protected' element={<Protected />} >
              <Route path='/protected/home' element={<Home />} />
              <Route path='/protected/create' element={<CreateBlog />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </dataContext.Provider>
    </div>
  );
}

export { App,dataContext};
