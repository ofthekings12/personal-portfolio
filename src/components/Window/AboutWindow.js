import { useState } from "react";
import {
  Window,
  WindowHeader,
  Button,
  Anchor,
  WindowContent,
  Panel,
  Tab,
  Tabs,
  TabBody
} from "react95";
import "./AboutWindow.css";
import Draggable from "react-draggable";

export default function AboutWindow() {
  // const [closeAboutWindow, setCloseAboutWindow] = useState(true);
  const [tab, setTab] = useState({ activeTab: 0 });
  const handleChange = (e, value) => setTab({ activeTab: value });
  const { activeTab } = tab;

  return (
    <Draggable>
      {/* {closeAboutWindow && ( */}
      <Window className="about-window">
        <WindowHeader className="about-window-header">
          <div>AboutMikko.exe</div>
          <Button
            className="about-close-icon"
            // onClick={() => setCloseAboutWindow(closeAboutWindow)}
          >
            <div>✕</div>
          </Button>
        </WindowHeader>
        {/* <Toolbar>
            <Button variant="menu" size="sm">
              Career
            </Button>
            <Button variant="menu" size="sm">
              Other Stuff
            </Button>
            <Button variant="menu" size="sm" disabled>
              Emotional Trauma
            </Button>
          </Toolbar> */}
        <WindowContent>
          <Tabs value={activeTab} onChange={handleChange}>
            <Tab value={0}>Career</Tab>
            <Tab value={1}>Other Stuff</Tab>
            <Tab disabled value={2}>Emotional Trauma</Tab>
          </Tabs>
          <TabBody className="tabBody">
            {activeTab === 0 && (
              <div className="tab">
                <Panel className="panel" variant="well">
                  <img
                    className="avatar"
                    src="https://github.com/ofthekings12/personal-portfolio/blob/main/src/images/Avatar.png?raw=true"
                    alt="mug"
                  />
                  <h1 className="title">
                    Long time creator, first time developer.
                  </h1>
                  <div className="aboutMikko">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas sollicitudin, ante vel porttitor posuere, tellus
                    nisi interdum ipsum, non bibendum ante risus ut purus.
                    Curabitur vel posuere odio. Vivamus rutrum, nunc et
                    ullamcorper sagittis, tellus ligula maximus quam, id dapibus
                    sapien metus lobortis diam. Proin luctus, dolor in finibus
                    feugiat, lacus enim gravida sem, quis aliquet tellus leo nec
                    enim. Morbi varius bibendum augue quis venenatis. Curabitur
                    ut elit augue. Pellentesque posuere enim a mattis interdum.
                    Donec sodales convallis turpis, a vulputate elit.
                    Suspendisse potenti.
                  </div>
                </Panel>
              </div>
            )}
            {activeTab === 1 && (
              <div className="tab">
                <Anchor
                  href="https://github.com/ofthekings12/RESOURCR."
                  target="_blank"
                >
                </Anchor>
              </div>
            )}
            {activeTab === 2 && (
              <div className="tab">
                <Anchor
                  href="https://github.com/ofthekings12/covid-tracker"
                  target="_blank"
                >
                </Anchor>
              </div>
            )}
          </TabBody>
        </WindowContent>
      </Window>
      {/* )} */}
    </Draggable>
  );
}
