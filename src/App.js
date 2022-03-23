import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";
import Navbar from "./components/Navbar/Navbar";
import AboutWindow from "./components/Window/AboutWindow";

function App() {
  const [openAboutWindow, setOpenAboutWindow] = useState(false);

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
          About Me
        </div>
        <div className="projects">
          <img
            src="https://images.squarespace-cdn.com/content/v1/546184e0e4b0f587f5d0f240/1535980454680-RY68GIW5BVVQPG8G61AY/Folder.png?format=750w"
            alt="projects logo"
            style={{ height: "100px" }}
          />
          My Projects
        </div>
        <div className="github">
          <img
            src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/d7e4e1e509c728d.png"
            alt="github logo"
            style={{ height: "100px" }}
          />
          Github
        </div>
        <div className="linkedin">
          <img
            src=" https://cdn.icon-icons.com/icons2/2873/PNG/512/linkedin_pixel_logo_icon_181925.png"
            alt="linkedin logo"
            style={{ height: "90px" }}
          />
          LinkedIn
        </div>

        <Navbar />
        {openAboutWindow && (
        <AboutWindow />
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
