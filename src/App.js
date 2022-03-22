import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import original from "react95/dist/themes/original";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <div className='bg'>
      <ThemeProvider theme={original}>
         <div className='text'>
         <h1>Hi, I'm Mikko!</h1>
         </div>
         <Navbar />
      </ThemeProvider>
      
    </div>
  );
}

export default App;
