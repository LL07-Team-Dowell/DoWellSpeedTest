import React, { useState, useRef, useEffect } from "react";

export default function CameraFeed() {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
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
  return (
    <div className="camera-container">
      <div className="camera-feed">
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
        <button className="button" onClick={captureImage}>
          Capture
        </button>
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
          <button
            className="button"
            onClick={() => {
              setCapturedImage(null);
            }}
          >
            Retake
          </button>
        </div>
      )}
    </div>
  );
}
