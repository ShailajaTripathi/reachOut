import React from "react";
import "./work.css";
import workImage from "./workImage.jpg";

function Work() {
  return (
    //   main-container
    <div className="workSmarter-container">
      {/* image-container */}
      <div className="work-image">
        <img src={workImage} />
      </div>
      {/* work-details section */}
      <div className="work-section">
        <h1 className="work-title">
          Work smarter with <span className="span-item">Qapita</span>
        </h1>
        <p className="work-title-description">
          At Qapita, we know effective board management means accomplishing
          mission-critical work.That's why we offer knowledgeable service and
          support,fair and flexible prcing,easy-to-use tools right out of the
          box, and fully integrated video conferencing.
        </p>

        {/* cards starts here */}

        <div className="work-card-container">
          {/*first card-row */}

          {/* first card */}
          <div className="work-card-row">
            <div className="work-card-item">
              <h1>CONNECTED</h1>
              <p>
                We make it easy to get your team together - wherever you are.
                Save time with centralized board portal that takes you from
                planning doing.
              </p>
            </div>
            {/* second-card */}
            <div className=" intuitive work-card-item">
              <h1>INTUITIVE</h1>
              <p>
                No learning curve: If you know one conferencing software, you
                know ours. It easily integrates with your tools so you can get
                to work without skipping a beat.
              </p>
            </div>
          </div>

          {/* second card-row */}
          <div className="work-card-row">
            {/* first card */}
            <div className="work-card-row">
              <div className="work-card-item">
                <h1>FLEXIBLE</h1>
                <p>
                  Your board your way.Fully customizable and scalable,with a
                  wide range of fair and flexible pricing,from just the basics
                  to custom enterprice packages.
                </p>
              </div>
              {/* second-card */}
              <div className="work-card-item">
                <h1>EXPERIENCED</h1>
                <p>
                  Know that we've always got your back with on-demand resources
                  and 24/7 technical support.Our team of experts have been where
                  you are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
