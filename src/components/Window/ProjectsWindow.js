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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Draggable disabled={isMobile}>
      <Window className="projects-window">
        <WindowHeader className="projects-window-header">
          <div>MikkosProjects.exe</div>
          <Button className="projects-close-icon" onClick={handleClick}>
            <div>✕</div>
          </Button>
        </WindowHeader>
        <WindowContent className="projects-window-content">
          <Tabs rows={2} value={activeTab} onChange={handleChange}>
            <Tab className="window-tab" value={0}>
              <p className="window-tab">IR Health</p>
            </Tab>
            <Tab className="window-tab" value={1}>
              <p className="window-tab">Kamika Consults</p>
            </Tab>
            <Tab className="window-tab" value={2}>
              <p className="window-tab">Comments Section</p>
            </Tab>
            <Tab className="window-tab" value={3}>
              <p className="window-tab">Product Card</p>
            </Tab>
            <Tab className="window-tab" value={4}>
              <p className="window-tab">Up4Grabs</p>
            </Tab>
            <Tab className="window-tab" value={5}>
              <p className="window-tab">RESOURCR.</p>
            </Tab>
            <Tab className="window-tab" value={6}>
              <p className="window-tab">Covid Tracker</p>
            </Tab>
          </Tabs>
          <TabBody className="tabBody">
            {/* IR Health Services */}
            {activeTab === 0 && (
              <div className="tab">
                <Fieldset className="fieldset">
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
                      <p className="redirect">
                        Click{" "}
                        <a
                          href="https://www.irhealthservices.ca/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          HERE
                        </a>{" "}
                        to checkout LIVE site
                      </p>
                      <Anchor
                        href="https://www.irhealthservices.ca/"
                        target="_blank"
                      >
                        <Tooltip
                          text="Click image to checkout LIVE site"
                          enterDelay={100}
                          leaveDelay={500}
                        >
                          <Anchor
                            href="https://www.irhealthservices.ca/"
                            target="_blank"
                          >
                            <img
                              className="irhealth-img"
                              src="https://i.ibb.co/5WSVK3n/irhealth.png"
                              alt="irhealthimg"
                            />
                          </Anchor>
                        </Tooltip>
                      </Anchor>
                      <h2>Project Overview:</h2>
                      <br />
                      <p>
                        During my internship at Geo Digital Partners, I
                        developed the IR Health Services website, a leading
                        healthcare agency in the Greater Toronto Area. I crafted
                        visually appealing front-end layouts and deployed the
                        site with Filezilla FTP. I built PHP backend systems to
                        handle form submissions and email reception efficiently.
                        To ensure a seamless user experience, I applied
                        responsive design principles, making the site accessible
                        and engaging on various devices. This project
                        underscores my proficiency in web development, backend
                        integration, and responsive design. The site showcases
                        the agency's comprehensive in-home care services,
                        including personal support, registered nursing, and
                        therapy. It highlights their commitment to
                        compassionate, round-the-clock care, provided by skilled
                        professionals. The site also includes features for
                        service requests and career opportunities, enhancing
                        accessibility and user engagement.
                      </p>
                    </>
                  )}
                </Fieldset>
              </div>
            )}
            {/* Kamika Consults */}
            {activeTab === 1 && (
              <div className="tab">
                <Fieldset className="fieldset">
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
                      <p className="redirect">
                        Click{" "}
                        <a
                          href="https://kamikaconsult.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          HERE
                        </a>{" "}
                        to checkout LIVE site
                      </p>
                      <Anchor href="https://kamikaconsult.com/" target="_blank">
                        <Tooltip
                          text="Click image to checkout LIVE site"
                          enterDelay={100}
                          leaveDelay={500}
                        >
                          <Anchor
                            href="https://kamikaconsult.com/"
                            target="_blank"
                          >
                            <img
                              className="irhealth-img"
                              src="https://i.ibb.co/LC5FXTp/kamikaconsults.png"
                              alt="irhealthimg"
                            />
                          </Anchor>
                        </Tooltip>
                      </Anchor>
                      <h2>Project Overview:</h2>
                      <br />
                      <p>
                        During my internship at Geo Digital Partners, I
                        developed the Kamika Consults website, a platform
                        dedicated to supporting healthcare entrepreneurs. I
                        designed visually engaging front-end layouts using
                        Webflow, exported the code, and deployed the project via
                        Filezilla FTP. The PHP backend systems I engineered
                        efficiently managed form submissions and email
                        reception. I also implemented responsive design
                        principles to ensure optimal viewing across various
                        devices, enhancing accessibility and user engagement.
                        This project highlights my skills in web development,
                        backend engineering, and creating user-centric designs.
                        The site offers a range of consulting services aimed at
                        helping clients start and grow their healthcare
                        businesses. Key features include tailored strategic
                        planning, comprehensive business support, and access to
                        industry resources. The website emphasizes Kamika's
                        extensive experience and commitment to compassionate,
                        integrity-driven guidance, showcasing success stories
                        and providing easy access to consultation scheduling.
                      </p>
                    </>
                  )}
                </Fieldset>
              </div>
            )}
            {/* COMMENTS SECTION */}
            {activeTab === 2 && (
              <div className="tab">
                <Fieldset className="fieldset">
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
                      <p className="redirect">
                        Click{" "}
                        <a
                          href="https://github.com/ofthekings12/interactive-comments-section"
                          target="_blank"
                          rel="noreferrer"
                        >
                          HERE
                        </a>{" "}
                        to view this repository
                      </p>
                      <Anchor
                        href="https://github.com/ofthekings12/interactive-comments-section"
                        target="_blank"
                      >
                        <Tooltip
                          text="Click HERE to view this repository"
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
                      <h2>Project Overview:</h2>
                      <p>
                        This is a solution to the Interactive comments section
                        challenge on Frontend Mentor. Frontend Mentor challenges
                        help you improve your coding skills by building
                        realistic projects.Users are be able to: View the
                        optimal layout for the app depending on their device's
                        screen size, See hover states for all interactive
                        elements on the page, create, read, update, and delete
                        comments and replies and upvote/downvote comments.
                      </p>
                    </>
                  )}
                </Fieldset>
              </div>
            )}
            {/* PRODUCT CARD */}
            {activeTab === 3 && (
              <div className="tab">
                <Fieldset className="fieldset">
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
                      <p className="redirect">
                        Click{" "}
                        <a
                          href="https://github.com/ofthekings12/product-card"
                          target="_blank"
                          rel="noreferrer"
                        >
                          HERE
                        </a>{" "}
                        to view this repository, click image to checkout LIVE
                        demo
                      </p>
                      <Anchor
                        href="https://github.com/ofthekings12/product-card"
                        target="_blank"
                      >
                        <Tooltip
                          text="Click HERE to view this repository, click image to checkout LIVE demo"
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
                      <h2>Project Overview:</h2>
                      <p>
                        This is a solution to the Product preview card component
                        challenge on Frontend Mentor. Users are be able to: View
                        the optimal layout depending on their device's screen
                        size and see hover and focus states for interactive
                        elements.
                      </p>
                    </>
                  )}
                </Fieldset>
              </div>
            )}

            {/* UP4GRABS */}
            {activeTab === 4 && (
              <div className="tab">
                <Fieldset className="fieldset">
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
                      <p className="redirect">
                        Click{" "}
                        <a
                          href="https://github.com/ofthekings12/up4grabs"
                          target="_blank"
                          rel="noreferrer"
                        >
                          HERE
                        </a>{" "}
                        to view this repository
                      </p>
                      <Anchor
                        href="https://github.com/ofthekings12/up4grabs"
                        target="_blank"
                      >
                        <Tooltip
                          text="Click HERE to view this repository"
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
                      <h2>Project Overview:</h2>
                      <p>
                        In this bootcamp final group project, my group created
                        Up4Grabs. Up4Grabs seeks to foster a community of
                        like-minded individuals inspired by the idea of
                        repurposing and giving new life to items that would
                        otherwise occupy our landfills. Whether moving between
                        living spaces, purging during spring-cleaning, or maybe
                        you’ve held onto an item to be regifted for a little too
                        long, we’ve all faced moments where we just needed to
                        “let go”. Users are able to post an item and select a
                        draw date. Other users on the platform are able to
                        "like" an item which puts their name in a random draw
                        for when the countdown timer the poster's selected date
                        reaches zero. The winner of the draw will be alerted by
                        email notifying them which item they've won and a 2-way
                        chat becomes available to the poster and winner to
                        coordinate pick up.
                      </p>
                    </>
                  )}
                </Fieldset>
              </div>
            )}

            {activeTab === 5 && (
              <div className="tab">
                <Fieldset className="fieldset">
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
                      <p className="redirect">
                        Click{" "}
                        <a
                          href="https://github.com/ofthekings12/RESOURCR."
                          target="_blank"
                          rel="noreferrer"
                        >
                          HERE
                        </a>{" "}
                        to view this repository
                      </p>
                      <Anchor
                        href="https://github.com/ofthekings12/RESOURCR."
                        target="_blank"
                      >
                        <Tooltip
                          text="Click HERE to view this repository"
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
                      <h2>Project: Overview:</h2>
                      <p>
                        In this bootcamp mid-term group project, my group was
                        challenged to recrate a Pinterest clone. With RESOURCR.,
                        users are able to: Save an external URL along with a
                        title and description, search for already-saved
                        resources created by any user, categorize any resource
                        under a topic, comment on any resource, rate any
                        resource, like any resource, view all their own and all
                        liked resources on one page ("My resources"), and update
                        their profile.
                      </p>
                    </>
                  )}
                </Fieldset>
              </div>
            )}

            {activeTab === 6 && (
              <div className="tab">
                <Fieldset className="fieldset">
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
                      <p className="redirect">
                        Click{" "}
                        <a
                          href="https://github.com/ofthekings12/covid-tracker"
                          target="_blank"
                          rel="noreferrer"
                        >
                          HERE
                        </a>{" "}
                        to view this repository
                      </p>
                      <Anchor
                        href="https://github.com/ofthekings12/covid-tracker"
                        target="_blank"
                      >
                        <Tooltip
                          text="Click HERE to view this repository"
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
                      <h2>Project Overview:</h2>
                      <p>
                        In this post-bootcamp professional development project,
                        I created a data visualization project by following a
                        detailed YouTube tutorial displaying real-time global
                        Covid-19 data. As one of my first projects on my own
                        post bootcamp, I gained valuable experience working with
                        APIs and data visualization.{" "}
                      </p>
                    </>
                  )}
                </Fieldset>
              </div>
            )}
          </TabBody>
        </WindowContent>
      </Window>
    </Draggable>
  );
}
