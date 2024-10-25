import { useState, useEffect } from "react";
import {
  Anchor,
  Tooltip,
  Fieldset,
  LoadingIndicator,
} from "react95";
import './RESOURCR.css'

function RESOURCR() {
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
  )
}

export default RESOURCR