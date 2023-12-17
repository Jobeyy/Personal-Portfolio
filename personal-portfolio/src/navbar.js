
function Navbar(){



    return(
        <>
        <div className="nav">
            <div id="logo" className="nav-item">
                <a href="">J<span id="secondary-color">F</span></a>
            </div>
            <div id="project"className="nav-item">
                <a rel="noreferrer" target="_blank" href="">Projects</a>
            </div>
            <div id="github"className="nav-item">
                <a rel="noreferrer" target="_blank" href="https://github.com/Jobeyy">GitHub</a>
            </div>
            <div id="linkedin"className="nav-item">
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jobeyfarias/">Linkedin</a>
            </div>
            <div id="resume"className="nav-item">
                <button>Resume</button>
            </div>
         </div>
        </>
    )
}



export default Navbar;