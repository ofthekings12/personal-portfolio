import { useState, useEffect } from "react";
import {
  Anchor,
  Tooltip,
  Panel,
  LoadingIndicator,
} from "react95";
import './CovidTracker.css'

function CovidTracker() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  
  return (
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
                </Panel>
              </div>
  )
}

export default CovidTracker