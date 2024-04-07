import { Button, TextField } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import Left from "../components/Left";
import { Link } from "react-router-dom";
import "../components/style.css";

const RightForm = ({ isMobile }) => {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");

  const isButtonDisabled = nameField === "" || emailField === "";

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const captureImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    const imgData = canvas.toDataURL("image/png");
    setCapturedImage(imgData);
  };

  const handleChange = (e) => {
    setNameField(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailField(e.target.value);
  };

  return (
    <>
      {isMobile && <Left />}
      <h2>Dowell Speed Test</h2>
      <TextField
        id="name"
        className="text-field"
        label="Name"
        variant="outlined"
        placeholder="Enter your Name"
        fullWidth
        style={{ marginBottom: "2rem" }}
        onChange={handleChange}
      />
      <TextField
        id="email"
        className="text-field"
        label="Email"
        variant="outlined"
        placeholder="Enter your Email"
        fullWidth
        style={{ marginBottom: "2rem" }}
        onChange={handleEmailChange}
      />

      <div className="camera-holder">
        {capturedImage && <img src={capturedImage} alt="Captured" />}
        <video
          className="video"
          ref={videoRef}
          style={{
            display: capturedImage ? "none" : "block",
          }}
          autoPlay
        />
      </div>
      {!capturedImage && (
        <Button
          variant="contained"
          color="success"
          onClick={captureImage}
          disabled={isButtonDisabled}
        >
          Capture
        </Button>
      )}
      {capturedImage && (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Link to={"/result"}>
            <Button variant="contained" color="success">
              Start Test
            </Button>
          </Link>
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              setCapturedImage(null);
            }}
          >
            Retake
          </Button>
        </div>
      )}
    </>
  );
};

export default RightForm;
