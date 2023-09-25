import { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, List, ListItem, Divider } from "react95";
import logoIMG from "../../images/logoIMG.png";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000)
    return () => {
      clearInterval(intervalId);
    };
  }, [])

  const isMobile = window.innerWidth <= 430; // You can adjust the breakpoint

  const appBarStyle = {
    zIndex: 1,
    top: isMobile ? '94vh' : '84vh', // Adjust the values as needed
    bottom: '0vh',
  };



//top: '94vh'

  return (
    <AppBar className="app-bar" style={appBarStyle}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: "bold" }}
          >
            <img
              src={logoIMG}
              alt="react95 logo"
              style={{ height: "20px", marginRight: 4 }}
            />
            Contact Me
          </Button>
          {open && (
            <List
              style={{
                position: "absolute",
                left: "0",
                bottom: "100%",
              }}
              onClick={() => setOpen(false)}
            >
              <ListItem  className="email">
                <img className="email-icon" src="https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png" 
                alt="email icon"/>
                <a href="mailto:mikko.delosreyes12@gmail.com">
                <p>E-mail</p>
                </a>
              </ListItem>
              <Divider/>
              <ListItem className="discord">
                <span role="img" aria-label="discord-contact">
                  <img className="discord-icon" src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-vector-download-0.png" 
                  alt="discord icon"/>
                </span>
              <a href="https://discordapp.com/users/904837189223972914">
                <p>Discord</p>
                </a>
              </ListItem>
            </List>
          )}
        </div>
        
        <div style={{ display: 'flex'}}>
          <Divider orientation='vertical' size='30px' />
          <div style={{ alignItems: 'center', padding: '7px' }}>
             {currentTime.toLocaleTimeString()}
          </div>
         
        </div>
        
        
      </Toolbar>
    </AppBar>

  );
}
