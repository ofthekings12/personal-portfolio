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
  LoadingIndicator
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
    }, 1500)
  }, [])

  return (
    <Draggable>
      <Window className="about-window">
        <WindowHeader className="about-window-header">
          <div>AboutMikko.exe</div>
          <Button
            className="about-close-icon"
            onClick={handleClick}
          >
            <div>✕</div>
          </Button>
        </WindowHeader>

        <WindowContent>
          <Tabs value={activeTab} onChange={handleChange}>
            <Tab value={0}>Career</Tab>
            <Tab value={1}>Other Stuff</Tab>
            <Tab disabled value={2}>
              Emotional Trauma
            </Tab>
          </Tabs>
          <TabBody className="tabBody">
            {activeTab === 0 && (
              <div className="tab">
                <Panel className="panel" variant="well">
                  {
                  loading ?
                  <div className="loading">
                  <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                    Loading...
                    </p>
                  <LoadingIndicator loading={loading} />
                  </div>

                  :
                  
                  <>
                  <img
                    className="avatar"
                    src="https://github.com/ofthekings12/personal-portfolio/blob/main/src/images/Avatar.png?raw=true"
                    alt="mug"
                  />
                  <h1 className="title">
                    Long time creator, first time developer.
                  </h1>
                  <div className="aboutMikko">
                    <p>
                      Born in the 90's, I grew up alongside the internet. I remember the days of screeching AOL dial up, and laughing at the back-then viral videos on websites like Newgrounds and Ebaumsworld. I kept myself entertained for hours on addictinggames.com, Neopets, and built static blogging sites with code templates on Piczo, Freewebs and MySpace. My friends and I would customize our websites with themed layouts, music players, custom cursors, and right-click alerts that would say something like "nice try xoxo" so people couldn't save our "pics".
                      <br />
                      <br />
                      Life happens fast, and it's easy to become invested and involved with other things to prepare you to make it in the real world. The internet has changed a lot since the leisurely days of '00-'07. 
                      <br />
                      <br />
                      Fastforward to today - I've become a Full Stack Web Developer from one of Canada's leading private career collages for web development and data science. Equipped with modern, powerful tools for building full stack web applications, what was once a childhood past time has turned into a passion for implementing design and technical implementation.
                      <br />
                      <br />
                      During my experience in an intensive bootcamp I became accustomed to rapid learning and change. Working alongside others in a high-pressure environment has honed my time management skills, allowing for effective prioritization and organization.
                      <br />
                      <br />
                      The foundation of my knowledge and skill base is the eagerness to seek out new technologies and stay up to date on industry trends and advancements. I am always excited to discover new, innovative ways of merging design with technical implementation to push the boundaries of my creative endeavours.
                      <br />
                    </p>
                  </div>
                  </>
                }
                </Panel>
              </div>
            )}
            {activeTab === 1 && (
              <div className="tab">
                Blah blah blah
                <br />
                <br />
                cool stuff about my personal life
                <br />
                <br />
                stuff about 3d printing, dance, and other things i'm into
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sollicitudin, ante vel porttitor posuere, tellus nisi
                interdum ipsum, non bibendum ante risus ut purus. Curabitur vel
                posuere odio. Vivamus rutrum, nunc et ullamcorper sagittis,
                tellus ligula maximus quam, id dapibus sapien metus lobortis
                diam. Proin luctus, dolor in finibus feugiat, lacus enim gravida
                sem, quis aliquet tellus leo nec enim. Morbi varius bibendum
                augue quis venenatis. Curabitur ut elit augue. Pellentesque
                posuere enim a mattis interdum. Donec sodales convallis turpis,
                a vulputate elit. Suspendisse potenti.
              </div>
            )}
            {activeTab === 2 && <div className="tab"></div>}
          </TabBody>
        </WindowContent>
      </Window>
    </Draggable>
  );
}
