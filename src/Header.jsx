import React from 'react'
import OnePieceLogo from './assets/onepiece-logo.svg'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <img src={OnePieceLogo} alt="One Piece Logo" className='logo'/>
        <h1>OnePiece Wiki</h1>
    </header>
  )
}

export default Header