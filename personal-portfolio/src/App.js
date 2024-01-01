import './App.css';
import { MainContent } from './components/MainContent';
import Navbar from './components/navbar';
import React from 'react'

function App() {

  
  return (
    <div className='main-container p-0 m-0 flex-column'>
      <div className="row m-0 mb-5">
        <Navbar />
      </div>
      <div className='row overflow-hidden'>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
