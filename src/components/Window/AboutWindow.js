import { useState } from "react";
import {
  Window,
  WindowHeader,
  Button,
  WindowContent,
  Panel,
  Tab,
  Tabs,
  TabBody,
} from "react95";
import "./AboutWindow.css";
import Draggable from "react-draggable";

export default function AboutWindow({ handleClick }) {
  const [tab, setTab] = useState({ activeTab: 0 });
  const handleChange = (e, value) => setTab({ activeTab: value });
  const { activeTab } = tab;

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
                      Born a 90's kid, and growing up at the turn of the new
                      milenia at the same time as the early stages of dial-up
                      internet, I've seen the world around me change vastly over
                      the past 20 years... I've always been active in creating,
                      and struggled with finding a career that fulfilled that
                      need.
                      <br />
                      <br />
                      Growing up at the dawn of the internet, I was exposed to
                      Neopets, Homestar Runner, and New Grounds and Ebaumsworld.
                      My friends and I created our own personal websites on
                      Freewebs, Piczo, and MySpace when it had HTML customizable
                      layouts. It all changed when Facebook came around.
                      <br />
                      <br />
                      Fast forward to today, I feel fulfilled to have made the
                      decision to pursue web development. What once was a way of
                      having fun with friends has now become a nostalgic career
                      passion. I'm determined to learn new ways of expressing my
                      creativity through these means. Although I was creating
                      websites at a young age, it still feels the same, but only
                      with newer and stronger technologies. I love creating
                      front-end components and adding my own style and flare to
                      it. Developing secure, reliable, user experiences is what
                      I feel i have a talent for.
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas sollicitudin, ante vel porttitor posuere, tellus
                      nisi interdum ipsum, non bibendum ante risus ut purus.
                      Curabitur vel posuere odio. Vivamus rutrum, nunc et
                      ullamcorper sagittis, tellus ligula maximus quam, id
                      dapibus sapien metus lobortis diam. Proin luctus, dolor in
                      finibus feugiat, lacus enim gravida sem, quis aliquet
                      tellus leo nec enim. Morbi varius bibendum augue quis
                      venenatis. Curabitur ut elit augue. Pellentesque posuere
                      enim a mattis interdum. Donec sodales convallis turpis, a
                      vulputate elit. Suspendisse potenti.
                      <br />
                    </p>
                  </div>
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
