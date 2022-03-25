import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";
import Navbar from "./components/Navbar/Navbar";
import AboutWindow from "./components/Window/AboutWindow";
import ProjectsWindow from "./components/Window/ProjectsWindow";
import { Anchor } from "react95";

function App() {
  const [openAboutWindow, setOpenAboutWindow] = useState(false);
  const [openProjectsWindow, setOpenProjectsWindow] = useState(false);

  return (
    <div>
      <ThemeProvider theme={original}>
        <div className="text">
          <h1>Hi, I'm Mikko!</h1>
        </div>
        <div
          className="about"
          onClick={() => setOpenAboutWindow(!openAboutWindow)}
          active={openAboutWindow}
        >
          <img
            src="https://www.pngkit.com/png/full/867-8677338_pixelated-pixelart-freetouse-doge-pixel-art-paint-icon.png"
            alt="about logo"
            style={{ height: "100px" }}
          />
          <div className="icon-label">About Me</div>
        </div>
        <div
          className="projects"
          onClick={() => setOpenProjectsWindow(!openProjectsWindow)}
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
              src=" https://cdn.icon-icons.com/icons2/2873/PNG/512/linkedin_pixel_logo_icon_181925.png"
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

        <Navbar />
        {openAboutWindow && <AboutWindow />}
        {openProjectsWindow && <ProjectsWindow />}
      </ThemeProvider>
    </div>
  );
}

export default App;
