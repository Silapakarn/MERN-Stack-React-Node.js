import Navbar from './component/Navbar.js'
import Home from './pages/Home.js'
import Post from './pages/Post.js'
import Login from './pages/Login.js'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";


function App() {
  const [user, setUser] = useState(null);


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={user ? <Navigate to='/'/> : <Login />}/>
          <Route path='/post/:id' element={user ? <Post /> : <Navigate to="/login" />}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
