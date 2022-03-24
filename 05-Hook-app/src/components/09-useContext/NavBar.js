import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  const activeStyle = {
    textDecoration: 'underline',
    color: 'white'
  }
  return (

    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>

      <Link className='navbar-brand' to='/'>useContext</Link>

      <NavLink
        style={({ isActive }) =>
          isActive ? activeStyle : undefined} className='nav-item nav-link' aria-current='page' to='/'
      >Home
      </NavLink>
      <NavLink className='nav-item nav-link' to='/login'>Login</NavLink>
      <NavLink className='nav-item nav-link' to='/about'>About</NavLink>

    </nav>
  )
}
