import React from "react";

export default function Description({ aboveMin, type }) {
  const descriptions = {
    download: aboveMin
      ? "Dowload speed is more than 5Mps"
      : "Dowload speed is less than 5Mps",
    upload: aboveMin
      ? "Upload speed is more than 5Mps"
      : "Upload speed is less than 5Mps",
    latency: "",
    jitter: "",
  };
  return <div className="description-holder">{descriptions[`${type}`]}</div>;
}
