import { MainContent } from './components/MainContent';
import ProjectCard from './components/ProjectCard';
import { Navbar } from './components/navbar';
import Technologies from './components/Technologies';
import React from 'react'
import personalPortfolioImage from './imgs/personalPortfolio.png'
import invManagementImage from './imgs/invManagementSystem.png'
import chooseAdventureImage from './imgs/chooseAdventureGame.png'
import UTRGVBannerImage from './imgs/UTRGVBannerImage.png'
import {BrowserRouter} from "react-router-dom"
import {HashLink as Link} from "react-router-hash-link"

import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {
  
  const projectCardTest = [
    {
      cardImage: personalPortfolioImage,
      cardTitle: "Personal Portfolio",
      cardDescription: "Personal Portfolio made using Bootstrap and React to dynamically display previous projects in an engaging way. While providing a seamless navigation experience for visitors to explore my professional journey and projects.",
      cardLink: "https://github.com/Jobeyy/Personal-Portfolio"
    },
    {
      cardImage: invManagementImage,
      cardTitle: "Inventory Management System",
      cardDescription: "Inventory Management system created in python used to help business manage their stock levels, and transactions. This system was made to simply the inventory tracking process and ensure that the right amount of stock is in hand.",
      cardLink: "https://github.com/Jobeyy/inventoryManagementSystem"
    },
    {
      cardImage: chooseAdventureImage,
      cardTitle: "Choose Your Own Adventure game",
      cardDescription: "Text-based adventure with this C++ console game, where players make pivotal decisions to navigate through a story. Immerse yourself in an interactive narrative, shaping your destiny with each choice in this dynamic and engaging choose-your-own-adventure experience.",
      cardLink: "https://github.com/Jobeyy/Choose-Your-Own-Adventure-Game"
    },

    {
      cardImage: UTRGVBannerImage,
      cardTitle: "Choose Your Own Adventure game",
      cardDescription: "Text-based adventure with this C++ console game, where players make pivotal decisions to navigate through a story. Immerse yourself in an interactive narrative, shaping your destiny with each choice in this dynamic and engaging choose-your-own-adventure experience.",
      cardLink: "https://github.com/Jobeyy/inventoryManagementSystem"
    }

  ]
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await axios.get('http://localhost:8080/data');
          setData(response.data);
      } catch(error) {
        
      }
    };

    fetchData();
  }, []);
  

  return (
    
      <div className='main-container p-0 m-0 flex-column main-background'>
        <div className="row overflow-hidden" id="nav-bar">
          <Navbar />
        </div>
        <div className='row overflow-hidden w-100 main-content' >
          <MainContent />
        </div>
        <div className="title overflow-hidden">
          <h5>Technologies: </h5>
        </div>
        <div className='tech overflow-hidden'>
          <Technologies/>
        </div>
        <div id="projectCards"className="row justify-content-center overflow-hidden">
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
