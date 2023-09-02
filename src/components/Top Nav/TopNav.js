import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import '../Top Nav/topnav.css'

const TopNav = () => {

  return (
    <div className='top-nav sticky-top' >
        <nav className="navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="#about">
              Explore Me
            </a>
            <div className='d-flex gap-2 fs-5'>
              <a href='https://www.linkedin.com/in/gandharv-kulkarni-5ba65825b/' rel='noreferrer' target='_blank'>
              <AiFillLinkedin className='pointer social-link'/>
              </a>

              <a href="https://www.instagram.com/gandharvakulkarni1/" rel='noreferrer' target='_blank'> 
              <AiFillInstagram className='pointer social-link'/>
              </a>
              <a  href='https://www.facebook.com/gandharvkulkarni2003' rel='noreferrer' target='_blank'> 
              <AiFillFacebook className='pointer social-link'/>
              </a>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default TopNav