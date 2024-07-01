import React from 'react'
import "../styles/Header.css"
import {Link} from "react-router-dom"

function Header() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
    </nav>
  )
}

export default Header