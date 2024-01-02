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
        <div>
            <div className="row">
                <div className="col-lg-5 mb-4 mr-0 pl-5 pr-0 pt-5 text-start ">
                    <h3 className='text-start'>Hello! I'm</h3>
                    <h1>
                        Jose 
                        <span className="main-color"> Farias</span>
                    </h1>
                    <h2>
                        {typeEffect}<Cursor/>
                    </h2>
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