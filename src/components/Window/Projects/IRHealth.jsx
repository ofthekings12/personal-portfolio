import { useState, useEffect } from "react";
import {
  Anchor,
  Tooltip,
  Fieldset,
  LoadingIndicator,
} from "react95";
import './IRHealth.css'

function IRHealth() {
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
)

}

export default IRHealth;