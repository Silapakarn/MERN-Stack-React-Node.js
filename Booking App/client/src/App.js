import React from 'react'
import { BrowserRouter ,Routes, Route, } from "react-router-dom";
import Home from './pages/home/Home.jsx'
import List from './list/List.jsx'
import Hotel from './hotel/Hotel.jsx'
import Singup from '../src/login/Singup.jsx'
import Login from '../src/login/Login.jsx'

function App() {
  const user = localStorage.getItem("token")
  return (
    <BrowserRouter>
      <Routes>
        
        {user && <Route path="/home" element={<Home/>} />}
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/" element={<Singup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
