import React, { useContext } from "react";
import { ResultContext } from "../hooks/context";
import InputField from "./InputField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { googleSheetURL } from "../util/constants";

export default function ResultForm() {
  const res = useContext(ResultContext);
  const { result } = res;

  const {
    downloadSpeed,
    uploadSpeed,
    latency,
    jitter,
    hostName,
    server,

    ipAddress,
    agent,
  } = result;

  async function updateGoogleSheet() {
    try {
      await fetch(googleSheetURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: "Yonas",
          ID: "email",
          Download: `${downloadSpeed} Mbps`,
          Upload: `${uploadSpeed} Mbps`,
          Device: "",
          Latency: `${latency} ms`,
          Jitter: `${jitter} ms`,
          Server: `${server}`,
          "Date & Time": new Date().toString(),
          IP: `${ipAddress}`,
          Host: `${hostName}`,
          User: `${agent}`,
        }),
      });
    } catch (error) {
      console.log(`Error ${error.message}`);
    }
  }

  const isValueAboveMin = (value) => {
    if (parseFloat(value) > 5) return true;
    return false;
  };

  return (
    <div>
      <h2>Dowell Speed Test</h2>
      <div className="privacy-statment">
        We take utmost care possible from our end to maintain privacy of your
        personal information. The full extent of our commitment can be found in
        our Privacy Statement. By enrolling and using the Service, you agree to
        be bound by the terms of the Privacy Statment.
      </div>

      <div className="input-field-holder">
        <label className="input-label">Download Speed</label>
        <InputField
          value={`${downloadSpeed} Mbs`}
          aboveMin={isValueAboveMin(downloadSpeed)}
          type={"download"}
        />
      </div>
      <div className="input-field-holder">
        <label className="input-label">Upload Speed</label>
        <InputField
          value={`${uploadSpeed} Mbs`}
          aboveMin={isValueAboveMin(uploadSpeed)}
          type={"upload"}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="input-field-holder half">
          <label className="input-label">Latency</label>
          <InputField value={latency} aboveMin={true} type={"latency"} />
        </div>
        <div className="input-field-holder half">
          <label className="input-label">Jitter</label>
          <InputField value={jitter} aboveMin={"true"} type={"jitter"} />
        </div>
      </div>
      <div className="button-holder">
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={updateGoogleSheet}
        >
          Upload
        </Button>
        <Link to="/">
          <Button variant="outlined" color="error" size="large">
            Retake
          </Button>
        </Link>
      </div>
    </div>
  );
}
