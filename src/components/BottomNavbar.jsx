import React from 'react'
import { Link } from 'react-router-dom'

const BottomNavbar = () => {
  return (
    <header>
        <Link to="/home" className='logo'>headspace</Link>
        <Link to="/home" className='login'>login</Link>
    </header>
  )
}

export default BottomNavbar