import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h2>My webpage</h2>
      <ul>
        <li> <NavLink to='/' className={isActive=>isActive && 'activeLink'} > Home </NavLink> </li>
        <li> <NavLink to='/about'> About </NavLink> </li>
        <li> <NavLink to='/contact'> Contact </NavLink> </li>
      </ul>
    </div>
  )
}

export default Navbar