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

  return (
    <AppBar style={{ top: '93vh', bottom: '0vh', zIndex:1 }}>
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
                <a  href="mailto:mikko.delosreyes12@gmail.com">
                <span role="img" aria-label="✉️">
                  ✉️
                </span>
                Email Me
                </a>
              </ListItem>
              <Divider/>
              <ListItem disabled className="call">
                <span role="img" aria-label="📞">
                  📞
                </span>
                Call Me
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
