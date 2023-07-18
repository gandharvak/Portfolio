import React from 'react'
import MyImage from '../../images/MyImage.png'
import './About.css'

const About = () => {
  return (
    <section className='section-2' id='about'>
      <hr></hr>
      <h1 className='text-left c-primary'>About Me</h1>
      <div className='row d-flex align-item-center'>

        <div className='col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 text-center'>
          <p className='text-start c-text'>I am a Front End developer based in Latur, India. I am an Information Technology Student from Pimpri Chinchawad College of Engineering, Pune. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using ReactJS. Working for myself to improve my skills. Love to work in collaboration.</p>

          <div className='row text-start'>
            <div className='col-12 col-sm-12 col-md-5'>
              <h5 className='c-primary'>Phone</h5>
              <p className='c-text'>+91 7972368497</p>
            </div>
            <div className='col-12 col-sm-12 col-md-7'>
              <h5 className='c-primary'>Email</h5>
              <p className='c-text'>gandharvakulkarni2003@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 text-center'>
          <img src={MyImage} className="myImg" alt="developer" />
        </div>
      </div>
    </section>
  )
}

export default About