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
// import Draggable from "react-draggable";

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
    <Window className="projects-window">
      <WindowHeader className="projects-window-header">
        <div>MikkosProjects.exe</div>
        <Button className="projects-close-icon" onClick={handleClick}>
          <div>✕</div>
        </Button>
      </WindowHeader>
      <WindowContent className="projects-window-content">
        <Tabs value={activeTab} onChange={handleChange}>
          <Tab className="window-tab"value={0}>
            <p className="window-tab">Let's Get Girly Pop</p>
          </Tab>
          <Tab className="window-tab" value={1}>
            <p className="window-tab">Comments Section</p>
          </Tab>
          <Tab className="window-tab" value={2}>
            <p className="window-tab">Product Card</p>
          </Tab>
          <Tab className="window-tab" value={3}>
            <p className="window-tab">Up4Grabs</p>
          </Tab>
          <Tab className="window-tab" value={4}>
            <p className="window-tab">RESOURCR.</p>
          </Tab>
          <Tab className="window-tab" value={5}>
            <p className="window-tab">Covid Tracker</p>
          </Tab>
        </Tabs>
        <TabBody className="tabBody">
          {/* GIRLYPOP */}
          {activeTab === 0 && (
            <div className="tab">
              <Fieldset className="fieldset">
                {loading ? (
                  <div className="loading">
                    <p style={{ textAlign: "center", marginBottom: "0.5rem" }}>
                      Loading...
                    </p>
                    <LoadingIndicator loading={loading} />
                  </div>
                ) : (
                  <>
                    <p className="redirect">
                      Click{" "}
                      <a
                        href="https://github.com/ofthekings12/girly-pop"
                        target="_blank"
                        rel="noreferrer"
                      >
                        HERE
                      </a>{" "}
                      to learn more on Github, click GIF to checkout LIVE demo
                    </p>
                    <Anchor
                      href="https://github.com/ofthekings12/girly-pop"
                      target="_blank"
                    >
                      <Tooltip
                        text="Click HERE to learn more on Github, click GIF to checkout LIVE demo"
                        enterDelay={100}
                        leaveDelay={500}
                      >
                        <Anchor
                          href="https://letsgetgirlypop.netlify.app/"
                          target="_blank"
                        >
                          <img
                            className="girlypop-gif"
                            src="https://github.com/ofthekings12/personal-portfolio/blob/main/src/assets/girlypopLQ.gif?raw=true"
                            alt="girlypop demo"
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
              <Fieldset className="fieldset">
                {loading ? (
                  <div className="loading">
                    <p style={{ textAlign: "center", marginBottom: "0.5rem" }}>
                      Loading...
                    </p>
                    <LoadingIndicator loading={loading} />
                  </div>
                ) : (
                  <>
                    <p className="redirect">
                      Click{" "}
                      <a
                        href="https://github.com/ofthekings12/interactive-comments-section"
                        target="_blank"
                        rel="noreferrer"
                      >
                        HERE
                      </a>{" "}
                      to learn more on Github
                    </p>
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
                          alt="comments section demo"
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
              <Fieldset className="fieldset">
                {loading ? (
                  <div className="loading">
                    <p style={{ textAlign: "center", marginBottom: "0.5rem" }}>
                      Loading...
                    </p>
                    <LoadingIndicator loading={loading} />
                  </div>
                ) : (
                  <>
                    <p className="redirect">
                      Click{" "}
                      <a
                        href="https://github.com/ofthekings12/product-card"
                        target="_blank"
                        rel="noreferrer"
                      >
                        HERE
                      </a>{" "}
                      to learn more on Github, click GIF to checkout LIVE demo
                    </p>
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
                            alt="product card demo"
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
              <Fieldset className="fieldset">
                {loading ? (
                  <div className="loading">
                    <p style={{ textAlign: "center", marginBottom: "0.5rem" }}>
                      Loading...
                    </p>
                    <LoadingIndicator loading={loading} />
                  </div>
                ) : (
                  <>
                    <p className="redirect">
                      Click{" "}
                      <a
                        href="https://github.com/ofthekings12/up4grabs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        HERE
                      </a>{" "}
                      to learn more on Github
                    </p>
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
                          alt="up4grabs demo"
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
              <Fieldset className="fieldset">
                <p className="redirect">
                  Click{" "}
                  <a
                    href="https://github.com/ofthekings12/RESOURCR."
                    target="_blank"
                    rel="noreferrer"
                  >
                    HERE
                  </a>{" "}
                  to learn more on Github
                </p>
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
                      alt="resourcr demo"
                    />
                  </Tooltip>
                </Anchor>
              </Fieldset>
            </div>
          )}

          {activeTab === 5 && (
            <div className="tab">
              <Fieldset className="fieldset">
                {loading ? (
                  <div className="loading">
                    <p style={{ textAlign: "center", marginBottom: "0.5rem" }}>
                      Loading...
                    </p>
                    <LoadingIndicator loading={loading} />
                  </div>
                ) : (
                  <>
                    <p className="redirect">
                      Click{" "}
                      <a
                        href="https://github.com/ofthekings12/covid-tracker"
                        target="_blank"
                        rel="noreferrer"
                      >
                        HERE
                      </a>{" "}
                      to learn more on Github
                    </p>
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
                          alt="covid tracker demo"
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
  );
}
