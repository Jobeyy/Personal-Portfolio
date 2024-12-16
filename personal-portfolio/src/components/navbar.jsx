import {BrowserRouter} from "react-router-dom"
import {HashLink as Link} from "react-router-hash-link"

export function Navbar(){
    const linkedin = "https://www.linkedin.com/in/jobeyfarias/"
    const github = "https://github.com/Jobeyy"
    
    const RESUME_FILE = 'https://drive.google.com/file/d/1h0oOGx7ZaNlWurDl4fl1KFe6OtGoiOXa/view?usp=sharing'

    return(
      <BrowserRouter>
        <div className="w-100 mb-5">
          <nav className="bg-body-tertiary border-bottom p-2">
            <div className="container-fluid text-center">
              <div className="row row-cols-auto">
                <div className="col-md-4 ">
                  <h2 className="nav-brand text-light">J<span id="primary-color">F</span></h2>
                </div>
                <div className="col p-2">
                  <Link className="project text-light"to="#experience">Experience's</Link>
                </div>

                <div className="col p-2">
                  <Link className="project text-light"to="#projects">Projects's</Link>
                </div>

                <div className="col p-2">
                  <a href={github} rel="noreferrer" target="_blank" className="github text-light">GitHub</a>
                </div>
                <div className="col p-2">
                  <a href={linkedin} rel="noreferrer" target="_blank" className="linkedin text-light">Linkedin</a>
                </div>
                    
                <div className="col-md-4 p-1">
                  <a href={RESUME_FILE} rel="noreferrer" target="_blank" className="btn btn-outline-primary" id="nav-button-color">Resume</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        </BrowserRouter>
    )
}



