import React from 'react'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
  return (
    <header>
      <Link to="/home">headspace</Link>
      <nav>
        <Link to="/home">my spaces</Link>
        <Link to="/home">user</Link>
      </nav>
    </header>
  )
}

export default TopNavbar