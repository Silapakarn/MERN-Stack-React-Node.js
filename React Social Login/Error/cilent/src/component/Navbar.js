import React from 'react'
import { Link } from "react-router-dom";
import '../component/Navbar.css';

export default function Navbar({user}) {
  return (
    <div className='navbar'>
        <span className='logo'>
          <Link className="link" to="/">
            Dragon App
          </Link>
        </span>{
          user ? ( <ul className='list'>

          <li className='listItem'>
              <img src='https://lh3.googleusercontent.com/a-/AFdZuco_wGfdAU5EqYT_Ke7Dfs3yXvqUDQesXrblQ9qzAQ=s96-c-rg-br100'  alt='' className='avatar'/>
          </li>
          <li className='listItem'>Silapakarn Saniskosai</li>
          <li className='listItem'>Logout</li>

      </ul>) : (<Link className="link" to="/login">
            Login
          </Link>)
        }

       
    </div>
  )
}
