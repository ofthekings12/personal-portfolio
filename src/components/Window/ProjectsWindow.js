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

export default function AboutWindow() {
  // const [closeAboutWindow, setCloseAboutWindow] = useState(true);
  const [tab, setTab] = useState({activeTab:0})
  const handleChange = (e, value) => setTab({ activeTab: value });
  const { activeTab } = tab;

  return (
    <Draggable>
    {/* {closeAboutWindow && ( */}
        <Window resizable className="window">
          <WindowHeader className="window-header">
            <div>MikkosProjects.exe</div>
            <Button
              className="close-icon"
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
        <TabBody style={{ height: 300 }}>
          {activeTab === 0 && (
            <div>
              <Fieldset label='Order:'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin, ante vel porttitor posuere, tellus nisi interdum ipsum, non bibendum ante risus ut purus. Curabitur vel posuere odio. Vivamus rutrum, nunc et ullamcorper sagittis, tellus ligula maximus quam, id dapibus sapien metus lobortis diam. Proin luctus, dolor in finibus feugiat, lacus enim gravida sem, quis aliquet tellus leo nec enim. Morbi varius bibendum augue quis venenatis. Curabitur ut elit augue. Pellentesque posuere enim a mattis interdum. Donec sodales convallis turpis, a vulputate elit. Suspendisse potenti.
              </Fieldset>
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