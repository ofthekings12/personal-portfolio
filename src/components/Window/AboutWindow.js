import { useState } from "react";
import {
  Window,
  WindowHeader,
  Button,
  Toolbar,
  WindowContent,
  Panel,

} from "react95";
import "./AboutWindow.css";
import Draggable from "react-draggable";

export default function AboutWindow() {
  // const [closeAboutWindow, setCloseAboutWindow] = useState(true);
  

  return (
    <Draggable>
    {/* {closeAboutWindow && ( */}
        <Window resizable className="about-window">
          <WindowHeader className="about-window-header">
            <div>AboutMikko.exe</div>
            <Button
              className="about-close-icon"
              // onClick={() => setCloseAboutWindow(closeAboutWindow)}
            >
              <div>✕</div>
            </Button>
          </WindowHeader>
          <Toolbar>
            <Button variant="menu" size="sm">
              Career
            </Button>
            <Button variant="menu" size="sm">
              Other Stuff
            </Button>
            <Button variant="menu" size="sm" disabled>
              Emotional Trauma
            </Button>
          </Toolbar>
          <WindowContent>
          <Panel className="panel" variant="well" >
          <img className="avatar"
              src="https://github.com/ofthekings12/personal-portfolio/blob/main/src/images/Avatar.png?raw=true"
              alt="mug"
            />
            <h1 className="title" >Long time creator, first time developer.</h1>
            <div className="aboutMikko">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin, ante vel porttitor posuere, tellus nisi interdum ipsum, non bibendum ante risus ut purus. Curabitur vel posuere odio. Vivamus rutrum, nunc et ullamcorper sagittis, tellus ligula maximus quam, id dapibus sapien metus lobortis diam. Proin luctus, dolor in finibus feugiat, lacus enim gravida sem, quis aliquet tellus leo nec enim. Morbi varius bibendum augue quis venenatis. Curabitur ut elit augue. Pellentesque posuere enim a mattis interdum. Donec sodales convallis turpis, a vulputate elit. Suspendisse potenti.
            </div>

          </Panel>
          </WindowContent>
        </Window>
         {/* )} */}
        </Draggable>
  );
}
