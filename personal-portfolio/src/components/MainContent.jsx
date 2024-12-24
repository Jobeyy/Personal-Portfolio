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
            I have a Bachelor of Science in Computer Science degree from the
            University of Texas Rio Grande Valley (UTRGV). I am a dedicated and
            versatile professional who is passionate about designing and
            developing strong Full Stack Applications, on both the Front and
            Back End. I develop other applications as well gaining experience in
            Data Engineering and Software Engineering. I like to use data to
            drive solutions, build systems, solve problems when I need to, etc.
            I am dedicated to staying sharp and delivering exemplary results
            across a variety of technical fields.
          </h5>
        </div>
      </div>
      <div className="row w-100">
        <div className="col text-left mb-5">
          <h5>
            <b>Academic Achievements:</b> Presidents List(2023,2024), Deans List
            (2024)
          </h5>
        </div>
      </div>
    </div>
  );
};
