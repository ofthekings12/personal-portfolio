import { useState, useEffect } from "react";
import {
  Anchor,
  Tooltip,
  Fieldset,
  LoadingIndicator,
} from "react95";
import './CommentsSection.css'

function CommentsSection() {
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
              href="https://github.com/ofthekings12/interactive-comments-section"
              target="_blank"
              rel="noreferrer"
            >
              HERE
            </a>{" "}
            to view this repository
          </p>
          <Anchor
            href="https://github.com/ofthekings12/interactive-comments-section"
            target="_blank"
          >
            <Tooltip
              text="Click HERE to view this repository"
              enterDelay={100}
              leaveDelay={500}
            >
              <img
                className="comments-section-gif"
                src="https://github.com/ofthekings12/interactive-comments-section/raw/main/screenshots/desktopGIF.gif?raw=true"
                alt="comments section demo"
              />
            </Tooltip>
          </Anchor>
          <h2>Project Overview:</h2>
          <p>
            This is a solution to the Interactive comments section
            challenge on Frontend Mentor. Frontend Mentor challenges
            help you improve your coding skills by building
            realistic projects.Users are be able to: View the
            optimal layout for the app depending on their device's
            screen size, See hover states for all interactive
            elements on the page, create, read, update, and delete
            comments and replies and upvote/downvote comments.
          </p>
        </>
      )}
    </Fieldset>
  </div>
  )
}

export default CommentsSection