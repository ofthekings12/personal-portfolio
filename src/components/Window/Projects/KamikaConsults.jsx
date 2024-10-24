import { useState, useEffect } from "react";
import {
  Anchor,
  Tooltip,
  Fieldset,
  LoadingIndicator,
} from "react95";
import './KamikaConsults.css'

function KamikaConsults() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);


  return (
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
                  className="kamika-img"
                  src="https://github.com/ofthekings12/personal-portfolio/blob/main/src/images/kamika.png?raw=true"
                  alt="kamikaimg"
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


export default KamikaConsults