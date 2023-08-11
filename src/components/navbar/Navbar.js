import React from 'react'
import '../navbar/navbar.css'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import NavButton from '../navButton/NavButton'

export default function Navbar() {
  return (
    <div className='navbar px-5'>
      <div className="one">
        {/* <Image src={/assets/logo.png}/> */}
          
        {/* <img src={logo} className='img-fluid mx-auto' alt="" /> */}
      </div>
      <div className="two">
          <div className="p none text-white">Marketplace</div>
          <div className="p none text-white">Rankings</div>
          <div className="p none text-white">Connect a wallet</div>
          <div className="none"><NavButton /></div>
          <Image src='/icon.png' alt="logo" width={1000} height={500} className='hamburger' />
      </div>
    </div>
  )
}
