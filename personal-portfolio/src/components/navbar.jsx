
export function Navbar(){
    const linkedin = "https://www.linkedin.com/in/jobeyfarias/"
    const github = "https://github.com/Jobeyy"
    
    const RESUME_FILE = 'http://localhost:3000/Jose_Farias_Resume__2024_.pdf'
    const downloadedFile=(url)=>{
      const fileName = url.split('/').pop()
      const aTag = document.createElement('a')
      aTag.href=url
      aTag.setAttribute('download',fileName)
      document.body.appendChild(aTag)
      aTag.click()
      aTag.remove()
    }

    return(
        <div className="w-100 mb-5">
          <nav className="bg-body-tertiary border-bottom p-2">
            <div className="container-fluid text-center">
              <div className="row row-cols-auto">
                <div className="col-md-4 ">
                  <h2 className="nav-brand text-light">J<span id="primary-color">F</span></h2>
                </div>
                <div className="col p-2">
                  <a href="#" rel="noreferrer" target="_blank" className="project text-light">Project's</a>
                </div>

                <div className="col p-2">
                  <a href={github} rel="noreferrer" target="_blank" className="github text-light">GitHub</a>
                </div>
                <div className="col p-2">
                  <a href={linkedin} rel="noreferrer" target="_blank" className="linkedin text-light">Linkedin</a>
                </div>
                    
                <div className="col-md-4 p-1">
                  <button onClick={()=>{downloadedFile(RESUME_FILE)}} className="btn btn-outline-primary" id="nav-button-color">Resume</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
    )
}



