import React from "react";

const Project = ({project}) => {
    return (
        <div id="individual-project">
            <h4>{project.title}</h4>
            <div className="inner-project">
            <img src = {project.image} className="project-image" alt="Project" />
            <div className="inner-project-text"> 
            <p>{project.description}</p>
            <a href={project.deployedUrl}  target="_blank" rel="noopener noreferrer">{project.deployedUrl.length ? 'Deployed Link' : null}</a>
            <br />
            <a href={project.github}  target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
        </div>
    
    )
}

export default Project; 