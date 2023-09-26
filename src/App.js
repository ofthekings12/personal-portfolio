import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";
import Navbar from "./components/Navbar/Navbar";
import AboutWindow from "./components/Window/AboutWindow";
import ProjectsWindow from "./components/Window/ProjectsWindow";
import { Anchor } from "react95";
import Aboutme from "./images/Aboutme.png";

function App() {
  const [openAboutWindow, setOpenAboutWindow] = useState(false);
  const [openProjectsWindow, setOpenProjectsWindow] = useState(false);

  const handleClickAbout = () => {
    setOpenAboutWindow(true);
    setOpenProjectsWindow(false);
  }

  const handleClickProjects = () => {
    setOpenProjectsWindow(true);
    setOpenAboutWindow(false);
  }

  const closeWindows = () => {
    setOpenAboutWindow(false);
    setOpenProjectsWindow(false);
  };

  return (
    <div>
      <ThemeProvider theme={original}>
        <div className="text">
          <h1>Hi, I'm Mikko!</h1>
          {/* <h6>(This site is under construction!)</h6> */}
        </div>
        <div
          className={`about ${openAboutWindow ? "active" : ""}`}
          onClick={handleClickAbout}
          active={openAboutWindow}
        >
          <img
            src={Aboutme}
            alt="about logo"
            style={{ height: "90px" }}
          />
          <div className="icon-label">About Me</div>
        </div>
        <div
          className={`projects ${openProjectsWindow ? "active" : ""}`}
          onClick={handleClickProjects}
          active={openProjectsWindow}
        >
          <img
            src="https://images.squarespace-cdn.com/content/v1/546184e0e4b0f587f5d0f240/1535980454680-RY68GIW5BVVQPG8G61AY/Folder.png?format=750w"
            alt="projects logo"
            style={{ height: "100px" }}
          />
          <div className="icon-label">My Projects</div>
        </div>
        <div className="linkedin">
          <Anchor
            href="https://www.linkedin.com/in/mikkodelosreyes/"
            target="_blank"
          >
            <img
              src="https://github.com/ofthekings12/personal-portfolio/blob/main/src/images/linkedin_pixel.png?raw=true"
              alt="linkedin logo"
              style={{ height: "90px" }}
            />
          </Anchor>
          <div className="icon-label">LinkedIn</div>
        </div>
        <div className="github">
          <Anchor href="https://github.com/ofthekings12" target="_blank">
            <img
              src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/d7e4e1e509c728d.png"
              alt="github logo"
              style={{ height: "100px" }}
            />
          </Anchor>
          <div className="icon-label">Github</div>
        </div>

        <div className="resume">
          <Anchor href="https://resume.io/r/VY2i76FD2" target="_blank">
            <img
              src="https://github.com/ofthekings12/personal-portfolio/blob/main/src/images/cvicon.png?raw=true"
              alt="resume logo"
              style={{ height: "100px" }}
            />
          </Anchor>
          <div className="icon-label">Updated Resume</div>
        </div>

        <Navbar />
        {openAboutWindow && <AboutWindow handleClick={closeWindows} />}
        {openProjectsWindow && <ProjectsWindow handleClick={closeWindows} />}
      </ThemeProvider>
    </div>
  );
}

export default App;
