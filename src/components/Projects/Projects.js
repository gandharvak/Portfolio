import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../../projects'
import './projectCard.css'

const Projects = () => {
    return (
        <div id='projects'>
            <hr></hr>
            <h1 className='text-left c-primary'>Projects</h1>
            <div className='d-flex gap-4 flex-wrap projectRender'>
                {
                    projects?.map((key, i) => {
                        return (
                            <ProjectCard key={i} img={key.img} name={key.name} desc={key.desc} link={key.link}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects