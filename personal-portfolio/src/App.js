import { MainContent } from './components/MainContent';
import ProjectCard from './components/ProjectCard';
import { Navbar } from './components/navbar';
import React from 'react'

function App() {
  const projectCardTest = [
    {
      cardImage: "",
      cardTitle: "Personal Portfolio",
      cardDescription: "This is testing description",
      cardLink: "https://github.com/Jobeyy/Personal-Portfolio"
    },
    {
      cardImage: "",
      cardTitle: "Inventory Management System",
      cardDescription: "This is a different description for inventory management system",
      cardLink: "https://github.com/Jobeyy/inventoryManagementSystem"
    }
  ]
  
  return (
    <div className='main-container p-0 m-0 flex-column'>
      <div className="row m-0 mb-5">
        <Navbar />
      </div>
      <div className='row overflow-hidden w-100 h-50 mt-5 mb-5'>
        <MainContent />
      </div>
      <div className="technologies row w-100 mt-5 mb-5">
        asdf
      </div>
      <div className="row w-100 mt-5 mb-5">
        <ProjectCard/>
      </div>
    </div>
  );
}

export default App;
