import React from 'react'
import '../New Home/newhome.css'
import Resume from '../../resume.pdf'

const HomeTwo = () => {
    return (
        <>
            <div className='new-home'>
                <div className='home-content'>
                    <h1 id='intro' className='text-light fs-1 text-center p-3 lh-base animate__animated animate__fadeIn animate__fast'>Hi, This is <br></br> <span className='text-light'>Gandharv Kulkarni</span></h1>
                    <p className='text-light text-center p-2 lh-lg animate__animated animate__fadeIn animate__slow'>Web Enthusiast<br></br>
                        Full Stack developer with MERN Stack<br></br>
                        Information Technology Student @Pimpri Chinchwad College of Engineering, Pune</p>
                    <div className='p-3 animate__animated animate__fadeIn animate__slower'>
                        <a className='button-18 me-3' href='#about'>About Me</a>
                        <a className='button-18' href={Resume} download><span className='mx-2' > <i class="fa-solid fa-arrow-down-long"></i></span>Download CV</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeTwo