import React from 'react'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
  return (
    <header className='top-nav'>
      <Link to="/home" className='logo-home'>headspace</Link>
      <nav className='nav-links'>
        <Link to="/home">my spaces</Link>
        <Link to="https://github.com/marvinraj" target="_blank">github</Link>
      </nav>
    </header>
  )
}

export default TopNavbar