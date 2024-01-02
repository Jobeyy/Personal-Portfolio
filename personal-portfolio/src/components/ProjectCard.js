import React from 'react'

function ProjectCard() {


  return (
    <div className="card project-card m-5">
      <img className="card-img-top" src="personal-portfolio\static\test1.jpeg" alt="test"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-outline-primary " id="project-card-btn">Go somewhere</a>
      </div>
    </div>
  )
}

export default ProjectCard