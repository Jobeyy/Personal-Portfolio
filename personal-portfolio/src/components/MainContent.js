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
            <div className="col-lg-6 mb-4 pl-5 pt-5  text-center"> 
            <h1>Hello! I'm</h1>
            <h1>Jose <span className="main-color">Farias</span>
            </h1>
            <h1>
                {typeEffect}<Cursor/>
            </h1>
            
            </div>
            <div className="col-lg-6 p-5">
            <p className='box text-start p-1'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry asdlkfj asdlj asdfj asdfj asdf jl
            </p>
            </div>
        </div>
        </div>
    )
}