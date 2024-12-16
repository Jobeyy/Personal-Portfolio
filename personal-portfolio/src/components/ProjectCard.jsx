import React from "react";

function ProjectCard({ cardImage, cardTitle, cardDescription, cardLink, id }) {
  // if needed I have a key
  return (
    <div key={id} className="card project-card m-5 d-flex flex-column" id="projects">
    <img className="card-img-top" src={cardImage} alt="test" />
    <div className="card-body d-flex flex-column">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardDescription}</p>
        {cardLink ? (
            <a
                href={cardLink}
                target="_blank"
                className="btn btn-outline-primary btn-lg mt-auto"
                id="project-card-btn"
            >
                Link
            </a>
        ) : (
            <></>
        )}
    </div>
</div>

  );
}

export default ProjectCard;
