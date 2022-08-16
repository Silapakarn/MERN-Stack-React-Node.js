import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">DragonBooking</span>
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
