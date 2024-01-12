import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export const MainContent = () => {
    const [typeEffect] = useTypewriter({
        words: ["Software Developer", "Web Developer"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })



    return (
    <div className="container mt-0">
        <div className="row">
            <div className="col-lg-6 text-start"> 
            <h4>Hello! I'm</h4>
            <h1>Jose <span className="main-color">Farias</span>
            </h1>
            <h1>
                {typeEffect}<Cursor/>
            </h1>
            
            </div>
            <div className="col-lg-6">
            <p className='box text-start p-3'>
            I'm a passionate software and web developer skilled in creating captivating websites and robust software solutions.
            With expertise in HTML, CSS, JavaScript, and various frameworks, 
            I specialize in delivering seamless user experiences. Proficient in a diverse range of tools and technologies, 
            I tackle projects with a collaborative spirit, ensuring optimal results. Check out my portfolio for a glimpse of my work, and let's connect to discuss how I can bring your ideas to life!                
            </p>
            </div>
        </div>
        </div>
    )
}