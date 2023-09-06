import { useEffect, useState } from "react";
import {
  Window,
  WindowHeader,
  Button,
  WindowContent,
  Panel,
  Tab,
  Tabs,
  TabBody,
  LoadingIndicator,
} from "react95";
import "./AboutWindow.css";
import Draggable from "react-draggable";

export default function AboutWindow({ handleClick }) {
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
      <Window className="about-window">
        <WindowHeader className="about-window-header">
          <div>AboutMikko.exe</div>
          <Button className="about-close-icon" onClick={handleClick}>
            <div>✕</div>
          </Button>
        </WindowHeader>

        <WindowContent>
          <Tabs value={activeTab} onChange={handleChange}>
            <Tab value={0}>Who's Mikko?</Tab>
            <Tab value={1}>My Tech Stack</Tab>
            {/* <Tab disabled value={2}>
              Emotional Trauma
            </Tab> */}
          </Tabs>
          <TabBody className="tabBody">
            {activeTab === 0 && (
              <div className="tab">
                <Panel className="panel" variant="well">
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
                      <img
                        className="avatar"
                        src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/318124463_10160263876518116_6381159203866659244_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DlG65trMpZAAX8btTI-&_nc_ht=scontent-ord5-1.xx&oh=00_AfBQxDomATjwbwz73CeQdTuYB1b500mH8FMuZR53SPwK9w&oe=64F21385"
                        alt="mug"
                      />
                      <h1 className="title">
                        Long time creator, first time developer.
                      </h1>
                      <div className="aboutMikko">
                        <p>
                          Born in the 90's, I grew up alongside the internet. I
                          remember the days of screeching AOL dial up, and
                          laughing at the back-then viral videos on websites
                          like Newgrounds and Ebaumsworld. I kept myself
                          entertained for hours on addictinggames.com, Neopets,
                          and built static blogging sites with code templates on
                          Piczo, Freewebs and MySpace. My friends and I would
                          customize our websites with themed layouts, music
                          players, custom cursors, and right-click alerts that
                          would say something like "nice try xoxo" we couldn't
                          steal each other's website content.
                          <br />
                          <br />
                          Life happens fast, and it's easy to become invested
                          and involved with other things to prepare you to make
                          it in the real world. The internet has changed a lot
                          since the leisurely days of '00-'07.
                          <br />
                          <br />
                          Fastforward to today - I've become a Full Stack Web
                          Developer from one of Canada's leading private career
                          collages for web development and data science.
                          Equipped with modern, powerful tools for building full
                          stack web applications, what was once a childhood past
                          time has turned into a passion for implementing design
                          and technical implementation.
                          <br />
                          <br />
                          During my experience in an intensive bootcamp I became
                          accustomed to rapid learning and change. Working
                          alongside others in a high-pressure environment has
                          honed my time management skills, allowing for
                          effective prioritization and organization.
                          <br />
                          <br />
                          The foundation of my knowledge and skill base is the
                          eagerness to seek out new technologies and stay up to
                          date on industry trends and advancements. I am always
                          excited to discover new, innovative ways of merging
                          design with technical implementation to push the
                          boundaries of my creative endeavours.
                          <br />
                        </p>
                      </div>
                    </>
                  )}
                </Panel>
              </div>
            )}
            {activeTab === 1 && (
              <div className="tab">
                <Panel className="panel" variant="well">
                  <div className="tech-icons-container">
                    <div className="tech">
                      <img
                        className="tech-icons"
                        src="https://github.com/ofthekings12/portfolio_2.0/blob/main/frontend_react/src/assets/javascript.png?raw=true"
                      ></img>
                      <h1>JavaScript</h1>
                    </div>
                    <div  className="tech">
                      <img
                        className="tech-icons"
                        src="https://github.com/ofthekings12/portfolio_2.0/blob/main/frontend_react/src/assets/html.png?raw=true"
                      ></img>
                      <h1>HTML</h1>
                    </div>
                    <div  className="tech">
                      <img
                        className="tech-icons"
                        src="https://github.com/ofthekings12/portfolio_2.0/blob/main/frontend_react/src/assets/css.png?raw=true"
                      ></img>
                      <h1>CSS</h1>
                    </div>
                    <div  className="tech">
                      <img
                        className="tech-icons"
                        src="https://github.com/ofthekings12/portfolio_2.0/blob/main/frontend_react/src/assets/sass.png?raw=true"
                      ></img>
                      <h1>SCSS</h1>
                    </div>
                    <div  className="tech">
                      <img
                        className="tech-icons"
                        src="https://github.com/ofthekings12/portfolio_2.0/blob/main/frontend_react/src/assets/tailwind.png?raw=true"
                      ></img>
                      <h1>Tailwind CSS</h1>
                    </div>
                    <div  className="tech">
                      <img
                        className="tech-icons"
                        src="https://github.com/ofthekings12/portfolio_2.0/blob/main/frontend_react/src/assets/node.png?raw=true"
                      ></img>
                      <h1>Node JS</h1>
                    </div>
                    <div  className="tech">
                      <img
                        className="tech-icons"
                        src="https://github.com/ofthekings12/portfolio_2.0/blob/main/frontend_react/src/assets/sql.png?raw=true"
                      ></img>
                      <h1>SQL</h1>
                    </div>
                    <div  className="tech">
                      <img
                        className="tech-icons"
                        src="https://github.com/ofthekings12/portfolio_2.0/blob/main/frontend_react/src/assets/postgresql.png?raw=true"
                      ></img>
                      <h1>PostgreSQL</h1>
                    </div>
                    <div  className="tech">
                      <img
                        className="tech-icons"
                        src="https://github.com/ofthekings12/portfolio_2.0/blob/main/frontend_react/src/assets/prisma.png?raw=true"
                      ></img>
                      <h1>Prisma</h1>
                    </div>
                    <div  className="tech">

                    <img
                      className="tech-icons"
                      src="https://github.com/ofthekings12/portfolio_2.0/blob/main/frontend_react/src/assets/react.png?raw=true"
                    ></img>
                    <h1>React</h1>
                    </div>
                    <div  className="tech">
                    <img
                      className="tech-icons"
                      src="https://github.com/ofthekings12/portfolio_2.0/blob/main/frontend_react/src/assets/nextjs.png?raw=true"
                    ></img>
                    <h1>NextJS</h1>
                    </div>
                  </div>
                </Panel>
              </div>
            )}
            {/* {activeTab === 2 && <div className="tab"></div>} */}
          </TabBody>
        </WindowContent>
      </Window>
    </Draggable>
  );
}
