import React from 'react'
import {FiAlignLeft} from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar_left'>
        <FiAlignLeft className="note-icon" />
        <span className="note-text">Notes</span>
      </div>
    </nav>
  )
}

export default Navbar
