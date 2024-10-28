import { useState, useEffect } from "react";
import {
  Window,
  WindowHeader,
  Button,
  WindowContent,
  Tabs,
  Tab,
  TabBody
} from "react95";
import "./ProjectsWindow.css";
import Draggable from "react-draggable";
import IRHealth from "./Projects/IRHealth";
import KamikaConsults from "./Projects/KamikaConsults";
import CommentsSection from "./Projects/CommentsSection";
import ProductCard from "./Projects/ProductCard";
import Up4Grabs from "./Projects/Up4Grabs";
import RESOURCR from "./Projects/RESOURCR";
import CovidTracker from "./Projects/CovidTracker";
import TipCalculator from "./Projects/TipCalculator";
import RESTCountries from "./Projects/RESTCountries";

export default function ProjectsWindow({ handleClick }) {
  const [tab, setTab] = useState({ activeTab: 0 });
  const handleChange = (e, value) => setTab({ activeTab: value });
  const { activeTab } = tab;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
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
            <Tab className="window-tab" value={7}>
              <p className="window-tab">Tip Out Calculator</p>
            </Tab>
            <Tab className="window-tab" value={8}>
              <p className="window-tab">REST Countries</p>
            </Tab>
          </Tabs>
          <TabBody className="tabBody">
            {/* IR Health Services */}
            {activeTab === 0 && <IRHealth />}
            {/* Kamika Consults */}
            {activeTab === 1 && <KamikaConsults />}
            {/* COMMENTS SECTION */}
            {activeTab === 2 && <CommentsSection />}
            {/* PRODUCT CARD */}
            {activeTab === 3 && <ProductCard />}
            {/* UP4GRABS */}
            {activeTab === 4 && <Up4Grabs />}
            {/* RESOURCR */}
            {activeTab === 5 && <RESOURCR />}
            {/* Covid Tracker */}
            {activeTab === 6 && <CovidTracker />}
            {/* Tip Calculator */}
            {activeTab === 7 && <TipCalculator />}
            {/* REST Countries */}
            {activeTab === 8 && <RESTCountries/>}
          </TabBody>
        </WindowContent>
      </Window>
    </Draggable>
  );
}
