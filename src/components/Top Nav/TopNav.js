import React, {useState} from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai';
import '../Top Nav/topnav.css'
import Menu from '../Menu/Menu';

const TopNav = ({shadow}) => {
  const [menu, setMenu] = useState("hide")
  const toggleClass = () =>{
    if(menu === "hide")
      setMenu("show")
    if(menu === "show")
      setMenu("hide") 
  }
  return (
    <div className={`top-nav sticky-top ${shadow}`}>
        <nav className="navbar container">
          <div className="container-fluid">
            <a className="navbar-brand c-text" href="#">
              Explore Me
            </a>
            <div className='d-flex gap-2 fs-5'>
              <a href='https://www.linkedin.com/in/gandharv-kulkarni-5ba65825b/' target='_blank'>
              <AiFillLinkedin className='pointer social-link' />
              </a>

              <a href="https://www.instagram.com/gandharvakulkarni1/" target='_blank'> 
              <AiFillInstagram className='pointer social-link'/>
              </a>
              <a  href='https://www.facebook.com/gandharvkulkarni2003' target='_blank'> 
              <AiFillFacebook className='pointer social-link'/>
              </a>

              <a className='menu-icon' target='_blank' onClick={toggleClass}> 
              <AiOutlineMenu className='pointer c-button'/>
              </a>
            </div>
          </div>
        </nav>
        <Menu status={menu}/>
      </div>
  )
}

export default TopNav