import { useState, useEffect } from "react";
import { Anchor, Tooltip, Fieldset, LoadingIndicator } from "react95";
import "./RESTCountries.css";

function RESTCountries() {
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
                href="https://github.com/ofthekings12/rest-countries"
                target="_blank"
                rel="noreferrer"
              >
                HERE
              </a>{" "}
              to view this repository, click image to checkout LIVE demo
            </p>
            <Anchor
              href="https://github.com/ofthekings12/rest-countries"
              target="_blank"
            >
              <Tooltip
                text="Click HERE to view this repository, click image to checkout LIVE demo"
                enterDelay={100}
                leaveDelay={500}
              >
                {" "}
                <Anchor
                  href="https://mikko-restcountries.netlify.app/"
                  target="_blank"
                >
                  <img
                    className="rest-countries-img"
                    src="https://github.com/ofthekings12/personal-portfolio/blob/main/src/assets/restcountries-img.png?raw=true"
                    alt="rest countries demo"
                  />
                </Anchor>
              </Tooltip>
            </Anchor>
            <h2>Project Overview:</h2>
            <p>
              The REST Countries App is a React application that displays
              detailed information about countries using data from the REST
              Countries API. Users can view details like the native name,
              population, region, subregion, capital, and more. A list of
              bordering countries is also displayed, allowing users to easily
              navigate between neighboring countries. A “Back” button is also
              included for smooth navigation. Features Country Details: Displays
              comprehensive information for each country. Border Navigation:
              Allows users to view information on bordering countries. Back
              Navigation: Provides a button to return to the previous page.
              Responsive Design: Ensures that the app is optimized for different
              screen sizes.
            </p>
          </>
        )}
      </Fieldset>
    </div>
  );
}

export default RESTCountries;
