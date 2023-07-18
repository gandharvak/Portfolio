import React from 'react'
import './projectCard.css'

import {BsLink45Deg} from "react-icons/bs" 

const ProjectCard = ({img, name, desc, link}) => {
  return (
    <div className='projectCard'>
        <img className='projectImage' src={img} alt={name}/>
        <h4 className='text-center pt-3 c-primary'>{name}</h4>
        <p className='p-2 c-text'> {desc}</p>
        <a className='button-18 demo m-auto' href={link} target='_blank' > <BsLink45Deg className='me-2'/> View Demo</a>
    </div>
  )
}

export default ProjectCard