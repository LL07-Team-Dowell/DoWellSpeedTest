import React from "react";
import doLogo from "../images/rmlogodowell.png";

const Left = () => {
  return (
    <div className="flex-direction-column items-center justify-center">
      <h2 className="text-4xl sm:text-[29px]">Dowell Speed Test</h2>
      <img src={doLogo} className="h-[160px] mt-[15px]sm:h-[140px] " />
    </div>
  );
};

export default Left;
