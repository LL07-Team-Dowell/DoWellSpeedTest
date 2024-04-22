import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdAddAPhoto } from "react-icons/md";
import dowellLogo from "../../assets/rmlogodowell.png";
import Footer from "../../Components/Footer";
import { ResultContext } from "../../hooks/context";

const HomePage = () => {
  const { setUserEmail, setUserName, setUserImage } = useContext(ResultContext);
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [videoStarted, setVideoStarted] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const isButtonDisabled = () => {
    if (capturedImage === null || name === "" || email === "") {
      return true;
    } else {
      return false;
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = async () => {
    try {
      setVideoStarted(true);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
      console.debug(`video stream ${videoStarted}`);
    } catch (err) {
      setVideoStarted(false);
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

  const handleSubmitButton = () => {
    setUserEmail(email);
    setUserName(name);
    setUserImage(capturedImage);
    if (videoRef.current) {
      videoRef.current.pause();
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
      videoRef.current.srcObject = null;
    }
    navigate("/result");
  };

  const handleCancelButton = () => {
    setCapturedImage(null);
    setVideoStarted(false);
    if (videoRef.current) {
      videoRef.current.pause();
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
      videoRef.current.srcObject = null;
    }
  };

  return (
    <div className='w-full h-full'>
      <div className='w-full items-center justify-center flex bg-gray-200'>
        <div className='w-[400px] sm:w-[750px] bg-white rounded-md shadow-md mt-36 grid grid-cols-1 sm:grid-cols-2 mb-8'>
          <div className='flex flex-col items-center '>
            <div className='relative w-[350px] h-[270px] flex items-center justify-center bg-gray-200 my-10 rounded-lg'>
              {capturedImage && <img src={capturedImage} alt='Captured' />}

              <video
                className='video'
                ref={videoRef}
                style={{
                  display: capturedImage ? "none" : "block",
                }}
                autoPlay
              />
            </div>
            <div className='w-[350px] flex items-center justify-between space-x-6 mb-4'>
              <button
                className='w-full p-4 text-lg bg-gray-600 text-white rounded cursor-pointer'
                onClick={() => {
                  setCapturedImage(null);
                }}
              >
                Retake
              </button>
              <button
                disabled={videoStarted ? false : true}
                className='w-full p-4 text-lg bg-gray-600 text-white rounded cursor-pointer '
                onClick={captureImage}
              >
                Capture
              </button>
            </div>
          </div>
          <div className='flex flex-col items-center justify-start '>
            <div className='text-center px-6 mt-8 mb-6'>
              <span className='text-2xl text-gray-500 font-bold'>
                Enter your name and email to start the test!
              </span>
            </div>

            <div className='w-[310px] flex flex-col items-start mb-4'>
              <label
                htmlFor='name'
                className='mb-2 text-[#333333] text-lg font-semibold'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full p-3 text-lg border border-gray-400 rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500'
              />
            </div>

            <div className='w-[310px] flex flex-col items-start mb-4'>
              <label
                htmlFor='email'
                className='mb-2 text-[#333333] text-lg font-semibold'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-3 text-lg border border-gray-400 rounded focus:outline-none focus:border-sky-500 focus:ring-sky-500 '
              />
            </div>
            <button
              type='submit'
              disabled={isButtonDisabled()}
              className='w-4/5 mt-4 py-4 px-8 mb-4 sm:mb-0 bg-green-500 text-white font-bold text-xl rounded cursor-pointer'
              onClick={handleSubmitButton}
            >
              Start Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
