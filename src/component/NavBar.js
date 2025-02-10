import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div class="nav-heading">
            <h3>Rishabh</h3>
        </div>
        <div class="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Skill'>Skill</Link>
            <Link to='/Contact'>Contact</Link>
        </div>
    </nav>
  )
}

export default NavBar
