import React from "react";
import { ReactComponent as MobileIcon } from "assets/icons/mobile.svg";

const Download = () => {
  return (
    <div className="download">
      <div className="download-content">
        <h1 className="head">Download Our App</h1>
        <p className="para">
          The place to store various data that you can access at any time
          through the internet and where you can carry it. This very flexible
          storage area has a high level of security. To enter into your own data
          you must enter the password that you created when you registered in
          this Data Warehouse.
        </p>
        <button className="download-btn">Download</button>
      </div>

      <MobileIcon className="download-img" />
    </div>
  );
};

export default Download;
