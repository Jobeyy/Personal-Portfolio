import { MainContent } from './components/MainContent';
import ExperienceCard from './components/experienceCard';
import ProjectCard from './components/ProjectCard';
import { Navbar } from './components/navbar';
import Technologies from './components/Technologies';
import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {
  
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const projResponse = await axios.get('http://localhost:8080/projects-data');
          const exprResponse = await axios.get('http://localhost:8080/experience-data');
          setProjects(projResponse.data);
          setExperiences(exprResponse.data);
          console.log(projResponse.data)
          console.log(exprResponse.data)
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
        {experiences.map((exp, index) => (
          <ExperienceCard
            id={index}
            cardImage={exp.imageID}
            cardTitle={exp.cardTitle}
            cardDescription={exp.cardDescription}
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
        {projects.map((project, index) => (
            <ProjectCard
              id={index}
              cardImage={project.imageID}
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
