import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <div>
      <ThemeProvider theme={original}>
         <div className='text'>
         <h1>Hi, I'm Mikko!</h1>
         </div>
         <div className="github">
         <img
              src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/d7e4e1e509c728d.png"
              alt="github logo"
              style={{ height: "100px" }}
            />
            Github
         </div>

         <Navbar/>
         
      </ThemeProvider>
      
    </div>
  );
}

export default App;
