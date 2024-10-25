import { useState, useEffect } from "react";
import {
  Anchor,
  Tooltip,
  Fieldset,
  LoadingIndicator,
} from "react95";
import './ProductCard.css'

function ProductCard() {
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
              href="https://github.com/ofthekings12/product-card"
              target="_blank"
              rel="noreferrer"
            >
              HERE
            </a>{" "}
            to view this repository, click image to checkout LIVE
            demo
          </p>
          <Anchor
            href="https://github.com/ofthekings12/product-card"
            target="_blank"
          >
            <Tooltip
              text="Click HERE to view this repository, click image to checkout LIVE demo"
              enterDelay={100}
              leaveDelay={500}
            >
              {" "}
              <Anchor
                href="https://mikko-product-card.netlify.app/"
                target="_blank"
              >
                <img
                  className="product-card-img"
                  src="https://github.com/ofthekings12/product-card/raw/main/my-solution-imgs/ProductCard-Desktop.png?raw=true"
                  alt="product card demo"
                />
              </Anchor>
            </Tooltip>
          </Anchor>
          <h2>Project Overview:</h2>
          <p>
            This is a solution to the Product preview card component
            challenge on Frontend Mentor. Users are be able to: View
            the optimal layout depending on their device's screen
            size and see hover and focus states for interactive
            elements.
          </p>
        </>
      )}
    </Fieldset>
  </div>
  )
}

export default ProductCard