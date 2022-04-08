import { useState, useEffect } from "react";
import {
  Anchor,
  Window,
  WindowHeader,
  Button,
  WindowContent,
  Tabs,
  Tab,
  TabBody,
  Tooltip,
  Fieldset,
  LoadingIndicator,
} from "react95";
import "./ProjectsWindow.css";
import Draggable from "react-draggable";

export default function ProjectsWindow({ handleClick }) {
  const [tab, setTab] = useState({ activeTab: 0 });
  const handleChange = (e, value) => setTab({ activeTab: value });
  const { activeTab } = tab;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Draggable>
      {/* {closeAboutWindow && ( */}
      <Window className="projects-window">
        <WindowHeader className="projects-window-header">
          <div>MikkosProjects.exe</div>
          <Button className="projects-close-icon" onClick={handleClick}>
            <div>✕</div>
          </Button>
        </WindowHeader>
        <WindowContent>
          <Tabs value={activeTab} onChange={handleChange}>
            <Tab value={0}>Up4Grabs</Tab>
            <Tab value={1}>RESOURCR.</Tab>
            <Tab value={2}>Covid Tracker</Tab>
          </Tabs>
          <TabBody className="tabBody">
            {activeTab === 0 && (
              <div className="tab">
                <Fieldset>
                  {loading ? (
                    <div className="loading">
                      <p
                        style={{ textAlign: "center", marginBottom: "0.5rem" }}
                      >
                        Loading...
                      </p>
                      <LoadingIndicator loading={loading} />
                    </div>
                  ) : (
                    <>
                      <Anchor
                        href="https://github.com/ofthekings12/up4grabs"
                        target="_blank"
                      >
                        <Tooltip
                          text="Checkout this repository to learn more"
                          enterDelay={100}
                          leaveDelay={500}
                        >
                          <img
                            className="up4grabs-gif"
                            src="https://github.com/zMollaz/up4grabs/blob/master/docs/up4gif.gif?raw=true"
                            alt="up4grabs"
                          />
                        </Tooltip>
                      </Anchor>
                    </>
                  )}
                </Fieldset>
              </div>
            )}
            {activeTab === 1 && (
              <div className="tab">
                <Fieldset>
                  <Anchor
                    href="https://github.com/ofthekings12/RESOURCR."
                    target="_blank"
                  >
                    <Tooltip
                      text="Checkout this repository to learn more"
                      enterDelay={100}
                      leaveDelay={500}
                    >
                      <img
                        className="resourcr-gif"
                        src="https://i.imgur.com/kxkum9q.gif"
                        alt="resourcr"
                      />
                    </Tooltip>
                  </Anchor>
                </Fieldset>
              </div>
            )}
            {activeTab === 2 && (
              <div className="tab">
                <Fieldset>
                  <Anchor
                    href="https://github.com/ofthekings12/covid-tracker"
                    target="_blank"
                  >
                    <Tooltip
                      text="Checkout this repository to learn more"
                      enterDelay={100}
                      leaveDelay={500}
                    >
                      <img
                        className="covid-gif"
                        src="https://github.com/ofthekings12/covid-tracker/raw/main/docs/ezgif-2-44f7212691.gif?raw=true"
                        alt="up4grabs"
                      />
                    </Tooltip>
                  </Anchor>
                </Fieldset>
              </div>
            )}
          </TabBody>
        </WindowContent>
      </Window>
      {/* )} */}
    </Draggable>
  );
}
