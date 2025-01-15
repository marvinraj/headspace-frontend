import React from 'react'
import BottomNavbar from '../components/BottomNavbar'

const LandingPage = () => {
  console.log("test");
  return (
    <main className='landing-container'>
      <h3 className='landing-welcome'>what's on your mind. anything.</h3>
      <BottomNavbar/>
    </main>
  )
}

export default LandingPage