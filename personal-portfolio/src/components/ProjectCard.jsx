import React from 'react'

function ProjectCard( { cardImage, cardTitle, cardDescription, cardLink, id } ) {
  // if needed I have a key
  return (
    <div key={id} className="card project-card m-5">
      <img className="card-img-top" src={cardImage} alt="test"/>
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardDescription}</p>
        <a href={cardLink} className="btn btn-outline-primary " id="project-card-btn">GitHub link</a>
      </div>
    </div>
  )
}

export default ProjectCard