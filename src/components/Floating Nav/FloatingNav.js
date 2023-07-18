import React from 'react'
import '../Floating Nav/Navbar.css';

import { AiFillHome } from "react-icons/ai";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";



const FloatingNav = () => {
  return (
    <div className='floating-nav d-flex' href="#">

      <a className="nav-link hover" href="#">
        <AiFillHome className='mx-3 pointer navIcons' />
      </a>
      <a className="nav-link hover" href="#about">
        <FaAddressCard className='mx-3 pointer navIcons' />
      </a>
      <a className="nav-link hover" href="#learnings">
        <RiStackFill className='mx-3 pointer navIcons' />
      </a>
      <a className="nav-link hover" href="#projects">
        <CgWebsite className='mx-3 pointer navIcons' />
      </a>
      <a className="nav-link hover" href="#contact">
        <RiContactsBook2Fill className='mx-3 pointer navIcons' />
      </a>
    </div>
  )
}

export default FloatingNav