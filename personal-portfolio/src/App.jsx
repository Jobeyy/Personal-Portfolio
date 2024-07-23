import { MainContent } from './components/MainContent';
import ExperienceCard from './components/experienceCard';
import ProjectCard from './components/ProjectCard';
import { Navbar } from './components/navbar';
import Technologies from './components/Technologies';
import React from 'react'
import personalPortfolioImage from './imgs/personalPortfolio.png'
import invManagementImage from './imgs/invManagementSystem.png'
import chooseAdventureImage from './imgs/chooseAdventureGame.png'
import UTRGVBannerImage from './imgs/UTRGVBannerImage.png'
import TNB from './imgs/TNB.png'

import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {
  const experienceCardTest = [
    {
      cardImage: TNB,
      cardTitle: "Texas National Bank",
      cardDescription: "During my internship at Texas National Bank, I reduced reporting time by 50% and improved operational efficiency by 20% through advanced SQL queries. I developed detailed financial summaries by integrating departmental data, aiding informed decision-making. Additionally, I designed a Python-based automation framework that transformed CSV file processing, cutting manual intervention by 75% and accelerating data handling by 60%."
    }
    ]
  const projectCardTest = [
    {
      cardImage: UTRGVBannerImage,
      cardTitle: "UTRGV Banner Upload",
      cardDescription: " developed an automated data processing solution using Python and Tkinter, transforming a 20,000-row CSV file into four categorized outputs. This innovation significantly boosted data handling accuracy by 90%. By streamlining data workflows through advanced automation techniques, I cut manual processing time by 90%, leading to a 90% increase in overall operational efficiency.",
      cardLink: "https://github.com/Jobeyy/inventoryManagementSystem"
    },
    
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
        <div className='row overflow-hidden main-content' >
          <MainContent />
        </div>
        <div className="title overflow-hidden">
          <h5>Experience: </h5>
        </div>

        <div className="row justify-content-center ">
        {experienceCardTest.map((experience, index) => (
          <ExperienceCard
            id={index}
            cardImage={experience.cardImage}
            cardTitle={experience.cardTitle}
            cardDescription={experience.cardDescription}
            
          />
          ))}
        </div>


        <div className="title overflow-hidden">
          <h5>Technologies: </h5>
        </div>
        <div className='tech overflow-hidden'>
          <Technologies/>
        </div>
        <div id="projectCards projects"className="row justify-content-center overflow-hidden">
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
