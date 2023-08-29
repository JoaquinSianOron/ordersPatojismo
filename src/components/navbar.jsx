import React from 'react'
import {} from '../assets/css/navbar.css'
import logoPatojos from '../assets/images/logoPatojos.png'

function navbar() {
  return (
    <div>
        <div className='navbar'>
            navbar
        </div>
        <div className='navbarRight'>
        <img className='imgLogo' src={logoPatojos}></img>
        </div>
    </div>
    
  )
}

export default navbar