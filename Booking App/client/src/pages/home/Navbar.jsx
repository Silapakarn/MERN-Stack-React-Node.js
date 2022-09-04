import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext.js'
import './navbar.css'

export default function Navbar() {

  //useContext
  const { user } = useContext(AuthContext);


  //-----------removeItem-----------
  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location = "/"
  }


  return (
    <div className="navbar">
      
      <div className="navContainer">

        <Link to="/" style={{color:"inherit",textDecoration: "none" }}>
          <span className="logo">Dragon Booking</span>
        </Link>

        <button className="button-38" onClick={handleLogout}>
              Logout
          </button>
        {/* {user ? user.username : (
        
          <div className="navItem">
            <button className="button-38">
              Register
            </button>
            <button className="button-38">
              Login
            </button>
          </div>
          
        )} */}

      </div>
    
    </div>
  )
}
