import React from 'react'
import { Link } from 'react-router-dom'

const BottomNavbar = () => {
  return (
    <header className='bottom-nav container'>
        <Link to="/home" className='logo'>headspace</Link>
        <Link to="/home" className='login'>login</Link>
    </header>
  )
}

export default BottomNavbar