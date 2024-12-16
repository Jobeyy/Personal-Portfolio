import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const MainContent = () => {
  const [typeEffect] = useTypewriter({
    words: ["Software Engineer", "Web Developer", "Data Engineer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col text-center mb-5">
          <h4>Hello! I'm</h4>
          <h1>
            Jose "Jobey" <span className="main-color">Farias</span>
          </h1>
          <h1>
            {typeEffect}
            <Cursor />
          </h1>
          <h5>
            I have a Bachelor of Science in Computer Science from the University
            of Texas Rio Grande Valley (UTRGV). I have a passion for creating
            Full-Stack Applications whether that be Front-end or Back-end.
          </h5>
        </div>
      </div>
      <div className="row w-100">
        <div className="col text-left mb-5">
          <h5><b>Academic Achievements:</b>  Presidents List(2023), Deans List (2024)</h5>
        </div>
      </div>
    </div>
  );
};
