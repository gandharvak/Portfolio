import React from 'react'
import './Home.css'
import Resume from '../../resume.pdf'
const Home = () => {
  return (
    <section className='section-1 py-3' id='#'>
      <div className='row d-flex align-items-center'>
        <div className='col-12 col-md-12 col-lg-12 col-sm-12'>
          <div>
            <h1 id='intro' className='fs-1 c-text'>Hi, This is <br></br> <span className='c-primary'>Gandharv Kulkarni</span></h1>
            <p className='c-text'>Web Enthusiast<br></br>Front End developer with React-js, HTML, CSS, JavaScript<br></br> Information Technology Student @Pimpri Chinchwad College of Engineering, Pune</p>
          </div>
          <div className='mt-4'>
            <a className='button-18 me-3' href='#about'>About Me</a>

            <a className='button-18' href={Resume} download><span className='mx-2' > <i class="fa-solid fa-arrow-down-long"></i></span>Download CV</a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Home