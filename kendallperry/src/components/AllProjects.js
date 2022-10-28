import React from 'react';
import Project from './Project'

const projectBank = [
    {
        title: "Creature Coders",
        deployedUrl: '',
        github: '',
        description: '',
        image: '',
    },
    {
        title: "Kiln Me Softly",
        deployedUrl: '',
        github: '',
        description: '',
        image: '',
    }, 
    {
        title: "IHME Data Visualization",
        deployedUrl: '',
        github: '',
        description: '',
        image: '',
    },
    {
        title: "Portfolio",
        deployedUrl: '',
        github: '',
        description: '',
        image: '',
    }
]

const AllProjects = () => {
    return (
        <div id="projects">
            <h2>Projects</h2>
            {projectBank.map((project, idx) => (
                <Project key={idx} project={project} />
                ))}
        </div>
    )
}

export default AllProjects;