import React from "react";
import doLogo from "../images/rmlogodowell.png";
import "./styles.css";

const Left = () => {
  return (
    <div className="flex-direction-column items-center justify-center">
      <img className="logo" src={doLogo} alt="Dowell-Logo" />
    </div>
  );
};

export default Left;
