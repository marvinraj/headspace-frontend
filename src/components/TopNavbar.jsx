import React from 'react'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
  return (
    <header className='top-nav'>
      <Link to="/home" className='logo-home'>headspace</Link>
      <nav className='nav-links'>
        <Link to="/home">my spaces</Link>
        <Link to="/home">user</Link>
      </nav>
    </header>
  )
}

export default TopNavbar