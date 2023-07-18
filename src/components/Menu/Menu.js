import React from 'react'
import '../Menu/menu.css'
import { AiFillHome } from "react-icons/ai";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";


const Menu = ({status}) => {
  return (
    <section className={`mobile-nav animate__animated animate__slideInRight ${status}`}>
        <ul>
            <li>
                <a className='hover' href='#'>
                <AiFillHome className='mx-3 pointer navIcons'/>Home
                </a>
            </li>
            <li>
                <a className='hover' href='#about'>
                <FaAddressCard className='mx-3 pointer navIcons' />About
                </a>
            </li>
            <li>
                <a className='hover' href='#learnings'>
                <RiStackFill className='mx-3 pointer navIcons' />Learnings
                </a>
            </li>
            <li>
                <a className='hover' href='#projects'>
                <CgWebsite className='mx-3 pointer navIcons' />Projects
                </a>
            </li>
            <li>
                <a className='hover' href='#contact'>
                <RiContactsBook2Fill className='mx-3 pointer navIcons' />Contact
                </a>
            </li>
        </ul>
    </section>
  )
}

export default Menu