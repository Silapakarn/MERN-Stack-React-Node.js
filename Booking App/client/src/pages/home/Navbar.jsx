
import {Link} from 'react-router-dom'
import './navbar.css'




export default function Navbar() {

  //-----------removeItem-----------
  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location = "/"
  }


  return (
    <div className="navbar">
      
      <div className="navContainer">

        <Link to="/home" style={{color:"inherit",textDecoration: "none" }}>
          <span className="logo">Dragon Booking</span>
        </Link>

  
        
        <button className="button-38" onClick={handleLogout}>
        Logout
        </button>
          


      </div>
    
    </div>
  )
}
