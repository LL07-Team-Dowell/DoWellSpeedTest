import React, { useState, useRef, useEffect } from "react";

const RightForm = () => {
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
    <div className="block sm:w-[100%] sm:flex flex-col items-center justify-center">
      <div className="sm:w-[90%]">
        <p>Name</p>
      </div>
      <input
        className="w-[340px] h-[40px] outline-none border-[1.4px] border-gray-200 border-solid rounded-[5px] pl-[10px] focus:ring sm:w-[90%]"
        placeholder="Enter Your Name..."
      />
      <div className="sm:w-[90%]">
        <p className="mt-[15px]">Email</p>
      </div>
      <input
        className="w-[340px] h-[40px] outline-none border-[1.4px] border-gray-200 border-solid rounded-[5px] pl-[10px] focus:ring sm:w-[90%]"
        placeholder="Enter Your Email..."
      />

      <label className="w-[340px] h-[220px] border-2 border-gray-200 border-dotted mt-[25px] flex justify-center items-center cursor-pointer sm:w-[90%]">
        {capturedImage && <img src={capturedImage} alt="Captured" />}
        <video
          ref={videoRef}
          style={{ display: capturedImage ? "none" : "block" }}
          autoPlay
        />
      </label>
      {!capturedImage && (
        <button
          onClick={captureImage}
          className="w-[340px] h-[40px] bg-[#005734] border-none mt-[25px] rounded-[5px] text-white text-[18px] sm:w-[90%]"
        >
          Capture Image
        </button>
      )}
      {capturedImage && (
        <div className="flex items-center justify-between w-[100%] sm:flex-col mt-[40px]sm:justify-center">
          <button className="w-[48%] h-[40px] bg-[#005734] border-none mt-[25px] rounded-[5px] text-white text-[18px] sm:w-[90%]">
            Take Speed Test
          </button>
          <button
            onClick={() => {
              setCapturedImage(null);
            }}
            className="w-[48%] h-[40px] bg-[#005734] border-none mt-[25px] rounded-[5px] text-white text-[18px] sm:w-[90%]"
          >
            Retake Picture
          </button>
        </div>
      )}
    </div>
  );
};

export default RightForm;
