import { useState, useEffect } from "react";
import {
  Anchor,
  Tooltip,
  Panel,
  LoadingIndicator,
} from "react95";
import './Up4Grabs.css'


function Up4Grabs() {
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
              href="https://github.com/ofthekings12/up4grabs"
              target="_blank"
              rel="noreferrer"
            >
              HERE
            </a>{" "}
            to view this repository
          </p>
          <Anchor
            href="https://github.com/ofthekings12/up4grabs"
            target="_blank"
          >
            <Tooltip
              text="Click HERE to view this repository"
              enterDelay={100}
              leaveDelay={500}
            >
              <img
                className="up4grabs-gif"
                src="https://github.com/zMollaz/up4grabs/raw/master/docs/up4gif.gif?raw=true"
                alt="up4grabs demo"
              />
            </Tooltip>
          </Anchor>
          <h2>Project Overview:</h2>
          <p>
            In this bootcamp final group project, my group created
            Up4Grabs. Up4Grabs seeks to foster a community of
            like-minded individuals inspired by the idea of
            repurposing and giving new life to items that would
            otherwise occupy our landfills. Whether moving between
            living spaces, purging during spring-cleaning, or maybe
            you’ve held onto an item to be regifted for a little too
            long, we’ve all faced moments where we just needed to
            “let go”. Users are able to post an item and select a
            draw date. Other users on the platform are able to
            "like" an item which puts their name in a random draw
            for when the countdown timer the poster's selected date
            reaches zero. The winner of the draw will be alerted by
            email notifying them which item they've won and a 2-way
            chat becomes available to the poster and winner to
            coordinate pick up.
          </p>
        </>
      )}
    </Panel>
  </div>
  )
}

export default Up4Grabs