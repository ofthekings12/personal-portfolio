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
            <Tab value={0} className="header-tabs">Let's Get Girly Pop</Tab>
            <Tab value={1} className="header-tabs">Interactive Comments Section</Tab>
            <Tab value={2} className="header-tabs">Product Card</Tab>
            <Tab value={3} className="header-tabs">Up4Grabs</Tab>
            <Tab value={4} className="header-tabs">RESOURCR.</Tab>
            <Tab value={5} className="header-tabs">Covid Tracker</Tab>
          </Tabs>
          <TabBody className="tabBody">
            {/* GIRLYPOP */}
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
                        href="https://github.com/ofthekings12/girly-pop" 
                        target="_blank"
                      >
                        <Tooltip
                          text="Click HERE to learn more on Github, click GIF to checkout LIVE demo"
                          enterDelay={100}
                          leaveDelay={500}
                        >
                          {" "}
                          <Anchor
                            href="https://letsgetgirlypop.netlify.app/"
                            target="_blank"
                          >
                            <img
                              className="product-card-img"
                              src="https://github.com/ofthekings12/personal-portfolio/blob/main/src/assets/girlypopLQ.gif?raw=true"
                              alt="girlypop"
                            />
                          </Anchor>
                        </Tooltip>
                      </Anchor>
                    </>
                  )}
                </Fieldset>
              </div>
            )}
            {/* COMMENTS SECTION */}
            {activeTab === 1 && (
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
                        href="https://github.com/ofthekings12/interactive-comments-section"
                        target="_blank"
                      >
                        <Tooltip
                          text="Click HERE to learn more on Github"
                          enterDelay={100}
                          leaveDelay={500}
                        >
                          <img
                            className="comments-section-gif"
                            src="https://github.com/ofthekings12/interactive-comments-section/raw/main/screenshots/desktopGIF.gif?raw=true"
                            alt="comments-section"
                          />
                        </Tooltip>
                      </Anchor>
                    </>
                  )}
                </Fieldset>
              </div>
            )}
            {/* PRODUCT CARD */}
            {activeTab === 2 && (
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
                        href="https://github.com/ofthekings12/product-card"
                        target="_blank"
                      >
                        <Tooltip
                          text="Click HERE to learn more on Github, click image to checkout LIVE demo"
                          enterDelay={100}
                          leaveDelay={500}
                        >
                          {" "}
                          <Anchor
                            href="https://mikko-product-card.netlify.app/"
                            target="_blank"
                          >
                            <img
                              className="product-card-img"
                              src="https://github.com/ofthekings12/product-card/raw/main/my-solution-imgs/ProductCard-Desktop.png?raw=true"
                              alt="up4grabs"
                            />
                          </Anchor>
                        </Tooltip>
                      </Anchor>
                    </>
                  )}
                </Fieldset>
              </div>
            )}

            {/* UP4GRABS */}
            {activeTab === 3 && (
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
                          text="Click HERE to learn more on Github"
                          enterDelay={100}
                          leaveDelay={500}
                        >
                          <img
                            className="up4grabs-gif"
                            src="https://github.com/zMollaz/up4grabs/raw/master/docs/up4gif.gif?raw=true"
                            alt="up4grabs"
                          />
                        </Tooltip>
                      </Anchor>
                    </>
                  )}
                </Fieldset>
              </div>
            )}

            {activeTab === 4 && (
              <div className="tab">
                <Fieldset>
                  <Anchor
                    href="https://github.com/ofthekings12/RESOURCR."
                    target="_blank"
                  >
                    <Tooltip
                      text="Click HERE to learn more on Github"
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

            {activeTab === 5 && (
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
                        href="https://github.com/ofthekings12/covid-tracker"
                        target="_blank"
                      >
                        <Tooltip
                          text="Click HERE to learn more on Github"
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
                    </>
                  )}
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
