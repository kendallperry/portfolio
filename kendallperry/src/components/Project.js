import React from "react";

const Project = ({project}) => {
    return (
        <div id="individual-project">
            <h4>{project.title}</h4>
            <img src = {project.image} className="image" alt="Project" />
            <p>{project.description}</p>
            <a href={project.deployedUrl}  target="_blank" rel="noopener noreferrer">{project.deployedUrl.length ? 'Deployed Link' : null}</a>
            <br />
            <a href={project.github}  target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
    )
}

export default Project; 