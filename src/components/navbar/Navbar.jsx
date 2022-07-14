import React from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import CreativeIpsum from '../../assets/creativeIpsum.svg'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className="gpt3__navbar-links_logo">
          <img src={CreativeIpsum} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar