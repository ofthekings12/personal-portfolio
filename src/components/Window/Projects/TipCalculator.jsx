import { useState, useEffect } from "react";
import { Anchor, Tooltip, Fieldset, LoadingIndicator } from "react95";
import "./TipCalculator.css";

function TipCalculator() {
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
                href="https://github.com/ofthekings12/tip-out-calculator"
                target="_blank"
                rel="noreferrer"
              >
                HERE
              </a>{" "}
              to view this repository, click image to checkout LIVE demo
            </p>
            <Anchor
              href="https://github.com/ofthekings12/tip-out-calculator"
              target="_blank"
            >
              <Tooltip
                text="Click HERE to view this repository, click image to checkout LIVE demo"
                enterDelay={100}
                leaveDelay={500}
              >
                {" "}
                <Anchor
                  href="https://kingwest-tip-calculator.netlify.app/"
                  target="_blank"
                >
                  <img
                    className="tip-calculator-img"
                    src="https://github.com/ofthekings12/personal-portfolio/blob/main/src/assets/tipout-gif.gif?raw=true"
                    alt="tip calculator demo"
                  />
                </Anchor>
              </Tooltip>
            </Anchor>
            <h2>Project Overview:</h2>
            <p>
              This Tip Out Calculator is a simple tool that helps streamline and
              automate the calculation of tip outs in the service industry.
              Instead of manually calculating your tip out—which can lead to
              mistakes due to human error—this app does the heavy lifting for
              you. I built this project after realizing that manual calculations
              sometimes led to inaccurate tip outs, resulting in frustration
              between staff and management. The app was developed based on a
              step-by-step infographic created by a colleague that explained the
              calculation process in detail.
            </p>
          </>
        )}
      </Fieldset>
    </div>
  );
}

export default TipCalculator;
