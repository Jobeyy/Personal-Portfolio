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
    <div className="main-info">
        <div className="d-flex">
            <div className="col-lg-6 mb-4 p-5 text-center"> 
            <h1>Hello! I'm</h1>
            <h1>Jose <span className="main-color">Farias</span>
            </h1>
            <h1>{typeEffect}<Cursor/></h1>
            
            </div>
            <div className="col-lg-6 p-5 ">
            <p className='box border border-light'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            </div>
        </div>
        </div>
    )
}
