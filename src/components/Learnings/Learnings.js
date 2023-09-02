import React, { useState, useEffect, useRef } from 'react'
import './scroll.css'
import tech from '../../technology';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const Learnings = () => {
    const [technologies, settechnologies] = useState();

    const container = useRef();

    const moveToRight = () => {
        container.current.scrollLeft += 300;
    }

    const moveToLeft = () => {
        container.current.scrollLeft -= 300;
    }

    useEffect(() => {
        settechnologies(tech);
    }, [])
    return (
        <section className='section-3 py-5'  id="learnings">
            <div className='container'>
            <h1 className='text-left c-primary'>Learnings</h1>
            <div className='scroll'>
                <div class="contain snaps-inline p-2" ref={container}>
                    {
                        technologies?.map((key, i) => {
                            return (
                                <div className='cardiv' key={i}>
                                    {key.icon}
                                    <h5 className='text-center'>{key.name}</h5>
                                </div>
                            )
                        })
                    }
                </div>
                <button className='scroll-btn btn-right shadow-lg fw-bolder' onClick={moveToRight}> <IoIosArrowForward /></button>
                <button className='scroll-btn btn-left shadow-lg fw-bolder' onClick={moveToLeft}> <IoIosArrowBack /></button>
            </div>
            </div>
            
        </section>
    )
}

export default Learnings