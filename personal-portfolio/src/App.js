import { MainContent } from './components/MainContent';
import ProjectCard from './components/ProjectCard';
import { Navbar } from './components/navbar';
import React from 'react'
import profileImage from './imgs/invManagementSystem.png'
import Technologies from './components/Technologies';

function App() {
  const projectCardTest = [
    {
      cardImage: profileImage,
      cardTitle: "Personal Portfolio",
      cardDescription: "Personal Portfolio made using Bootstrap and React to dynamically display previous projects in an engaging way. While providing a seamless navigation experience for visitors to explore my professional journey and projects.",
      cardLink: "https://github.com/Jobeyy/Personal-Portfolio"
    },
    {
      cardImage: profileImage,
      cardTitle: "Inventory Management System",
      cardDescription: "Inventory Management system created in python used to help business manage their stock levels, and transactions. This system was made to simply the inventory tracking process and ensure that the right amount of stock is in hand.",
      cardLink: "https://github.com/Jobeyy/inventoryManagementSystem"
    },
    {
      cardImage: profileImage,
      cardTitle: "Choose Your Own Adventure game",
      cardDescription: "Text-based adventure with this C++ console game, where players make pivotal decisions to navigate through a story. Immerse yourself in an interactive narrative, shaping your destiny with each choice in this dynamic and engaging choose-your-own-adventure experience.",
      cardLink: "https://github.com/Jobeyy/inventoryManagementSystem"
    }
  ]
  

  return (
    <div className='main-container p-0 m-0 flex-column main-background'>
      <div className="row" id="nav-bar">
        <Navbar />
      </div>
      <div className='row overflow-hidden w-100 main-content' >
        <MainContent />
      </div>
      <div className="title">
        <h5>Technologies: </h5>
      </div>
      <div className='tech'>
        <Technologies/>
      </div>
      <div className="row justify-content-center">
      {projectCardTest.map((project, index) => (
        
          <ProjectCard
            id={index}
            cardImage={project.cardImage}
            cardTitle={project.cardTitle}
            cardDescription={project.cardDescription}
            cardLink={project.cardLink}
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
