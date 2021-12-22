import React from "react";
import Lock from "assets/icons/lock.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-img">
        <img src={Lock} alt="lock" />
      </div>
      <div className="content">
        <h1 className="content-heading">
          We are a high-level data storage bank
        </h1>
        <div className="content-para">
          <p>
            The place to store various data that you can access at any time
            through the internet and where you can carry it.
          </p>
          <p>
            This very flexible storage area has a high level of security. To
            enter into your own data you must enter the password that you
            created when you registered in this Data Warehouse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
