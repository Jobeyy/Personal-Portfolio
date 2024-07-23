import React from 'react'

export default function ExperienceCard( { cardImage, cardTitle, cardDescription, id } ) {
  // if needed I have a key
    return (
        <div key={id} className="card project-card m-5" id="experience">
            <img className="card-img-top" src={cardImage} alt="test"/>
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardDescription}</p>
            </div>
        </div>
    )
}