import { useState } from "react";
import {
  Window,
  WindowHeader,
  Button,
  WindowContent,
  Tabs,
  Tab,
  TabBody,
  Fieldset

} from "react95";
import "./ProjectsWindow.css";
import Draggable from "react-draggable";

export default function ProjectsWindow() {
  // const [closeAboutWindow, setCloseAboutWindow] = useState(true);
  const [tab, setTab] = useState({activeTab:0})
  const handleChange = (e, value) => setTab({ activeTab: value });
  const { activeTab } = tab;

  return (
    <Draggable>
    {/* {closeAboutWindow && ( */}
        <Window resizable className="projects-window">
          <WindowHeader className="projects-window-header">
            <div>MikkosProjects.exe</div>
            <Button
              className="projects-close-icon"
              // onClick={() => setCloseAboutWindow(closeAboutWindow)}
            >
              <div>✕</div>
            </Button>
          </WindowHeader>
          <WindowContent>
          <Tabs value={activeTab} onChange={handleChange}>
          <Tab value={0}>Up4Grabs</Tab>
          <Tab value={1}>RESOURCR.</Tab>
          <Tab value={2}>Covid Tracker</Tab>
        </Tabs>
        <TabBody style={{ height: 370 }}>
          {activeTab === 0 && (
            <div className="first-tab">
              {/* <Fieldset> */}
              <img className="up4grabs-gif"
              src="https://github.com/zMollaz/up4grabs/blob/master/docs/up4gif.gif?raw=true"
              alt="up4grabs"
            />
              {/* </Fieldset> */}
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <div>Accesories stuff here</div>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <div>Clothing stuff here</div>
            </div>
          )}
        </TabBody>
          </WindowContent>
        </Window>
         {/* )} */}
        </Draggable>
  );
}