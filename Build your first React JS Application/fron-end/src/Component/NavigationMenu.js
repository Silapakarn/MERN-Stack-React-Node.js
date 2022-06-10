import React from 'react'
import { Link } from "react-router-dom";

export default function NavigationMenu(props) {
  return (
    <div className="p-3">
        <span className="font-bold">
                            The menu
                        </span>
                        <ul>
                            <li>
                                <Link 
                                to="/" 
                                className="text-blue-500 py-3 border-t border-b block"
                                onClick={() => props.closeMenu}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                to="/about" 
                                className="text-blue-500 py-3 border-b block"
                                onClick={() => props.closeMenu}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link 
                                to="/contact" 
                                className="text-blue-500 py-3 border-b block"
                                onClick={() => props.closeMenu}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link 
                                to="/product/1" 
                                className="text-blue-500 py-3 border-b block"
                                onClick={() => props.closeMenu}
                                >
                                    Product
                                </Link>
                            </li>
                        </ul>
      
    </div>
  )
}
