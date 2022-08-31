import React from 'react'
import {Link} from 'react-router-dom'

import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      
      <div className="navContainer">

        <Link to="/" style={{color:"inherit",textDecoration: "none" }}>
          <span className="logo">Dragon Booking</span>
        </Link>

        <div className="navItem">
          <button className="button-38">
            Register
          </button>
          <button className="button-38">
            Login
          </button>
        </div>
      </div>
    
    </div>
  )
}
