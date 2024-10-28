import { useState, useEffect } from "react";
import {
  Anchor,
  Tooltip,
  Fieldset,
  LoadingIndicator,
} from "react95";
import './TipCalculator.css'

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
              href="https://github.com/ofthekings12/tip-out-calculator"
              target="_blank"
              rel="noreferrer"
            >
              HERE
            </a>{" "}
            to view this repository, click image to checkout LIVE
            demo
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
                  src="https://github.com/ofthekings12/product-card/raw/main/my-solution-imgs/ProductCard-Desktop.png?raw=true"
                  alt="tip calculator demo"
                />
              </Anchor>
            </Tooltip>
          </Anchor>
          <h2>Project Overview:</h2>
          <p>
         **Tip Calculator Description***
          </p>
        </>
      )}
    </Fieldset>
  </div>
  )
}

export default TipCalculator