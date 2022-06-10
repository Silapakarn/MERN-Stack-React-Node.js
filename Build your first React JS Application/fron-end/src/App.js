import React from 'react';
import Hello from '../src/Component/Hello'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home_page from './Views/Home-page'
import About from './Views/About'
import Contact from './Views/Contact '
import Product from './Views/Product'
import { 
  BrowserRouter as Router,
  Route,
  Routes
} 
from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="p-3">
      
      <Header />

      <Hello name="Kan"/>
      

  
      <Routes>
        <Route exact path="/" element={<Home_page/>} />
         
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>

      
      
    
        <Footer />
      </div>
    </Router>
  );
}

export default App;
