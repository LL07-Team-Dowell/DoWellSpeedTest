import { useState, useContext } from "react";
import { MdAddAPhoto } from "react-icons/md";
import dowellLogo from "../../../assets/rmlogodowell.png";
import { IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { ResultContext } from "../../../hooks/context";
import { googleSheetURL } from "../../../util/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResultForm = () => {
  const { userImage, userName, userEmail } = useContext(ResultContext);
  const [isMouseHovering, setIsMouseHovering] = useState(false);
  const [isMouseHoveringUpload, setIsMouseHoveringUpload] = useState(false);

  const res = useContext(ResultContext);
  const navigate = useNavigate();
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

  const updateGoogleSheet = async () => {
    await axios
      .post(
        googleSheetURL,
        {
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
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const isValueAboveMin = (value) => {
    if (parseFloat(value) > 5) return true;
    return false;
  };

  const handleRetakeButton = () => {
    navigate("/");
  };

  const handleMouseEnter = () => {
    setIsMouseHovering(!isMouseHovering);
  };

  const handleMouseLeave = () => {
    setIsMouseHovering(false);
  };

  const handleMouseEnterUpload = () => {
    setIsMouseHoveringUpload(!isMouseHoveringUpload);
  };

  const handleMouseLeaveUpload = () => {
    setIsMouseHoveringUpload(false);
  };

  return (
    <div className='w-full'>
      <div className='w-full flex items-center justify-center bg-gray-200 '>
        <div className='w-[400px] sm:w-[750px] bg-white rounded-md shadow-md mt-36 grid grid-cols-1 sm:grid-cols-2 mb-8'>
          <div className='flex flex-col items-center '>
            <div className='relative w-[330px] h-[285px] flex items-center justify-center bg-gray-200  my-8 rounded-lg'>
              {userImage ? (
                <img src={userImage} alt='Captured' />
              ) : (
                <MdAddAPhoto className='absolute top-[20%] left-[25%] z-[40] text-gray-400 h-[150px] w-[150px]' />
              )}
            </div>
            <div className='w-[330px] h-[60px] flex items-center justify-between mb-4 p-4 bg-gray-200 rounded-lg'>
              <span className='text-lg font-semibold'>Name</span>
              <span className='text-lg font-semibold'>{userName}</span>
            </div>
            <div className='w-[330px] h-[60px] flex items-center justify-between mb-8 p-4 bg-gray-200 rounded-lg'>
              <span className='text-lg font-semibold'>Email</span>
              <span className='text-lg font-semibold'>{userEmail}</span>
            </div>
          </div>
          <div className='flex flex-col items-center justify-start '>
            <div className='relative w-[310px] h-[50px] flex items-center justify-between px-6 mt-8 mb-4  bg-gray-200 rounded-lg'>
              <span className='text-xl font-bold text-green-500'>Jitter</span>
              <div className='flex items-center justify-center'>
                <span className='text-lg font-semibold mr-4'>121</span>
                <IconButton>
                  {isValueAboveMin(7) ? (
                    <CheckIcon color='success' />
                  ) : (
                    <ClearIcon color='error' />
                  )}
                </IconButton>
              </div>
            </div>
            {/* <div className='w-[310px] h-[50px] flex items-center justify-between px-6 mb-8 sm:mb-4 bg-gray-200 rounded-lg'> */}
            <div className='w-[310px] h-[50px] flex items-center justify-between px-6 mb-4 bg-gray-200 rounded-lg'>
              <span className='text-xl font-bold text-green-500'>Lattency</span>
              <div className='flex items-center justify-center'>
                <span className='text-lg font-semibold mr-4'>60</span>
                <IconButton>
                  {isValueAboveMin(7) ? (
                    <CheckIcon color='success' />
                  ) : (
                    <ClearIcon color='error' />
                  )}
                </IconButton>
              </div>
            </div>
            <div className='relative w-[310px] h-[50px] flex items-center justify-between px-6 mb-4 bg-gray-200 rounded-lg'>
              <span className='text-xl font-bold text-green-500'>
                Download Speed
              </span>
              <div className='flex items-center justify-center'>
                <span className='text-lg font-semibold mr-4'>40</span>
                <IconButton
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {isValueAboveMin(7) ? (
                    <CheckIcon color='success' />
                  ) : (
                    <ClearIcon color='error' />
                  )}
                </IconButton>
                {isMouseHovering && (
                  <div className='absolute top-[-100%] right-0 flex items-center justify-center h-[50px] bg-white p-4 rounded-md shadow-md z-[999] '>
                    {isValueAboveMin(7)
                      ? "Dowload speed is more than 5Mps"
                      : "Dowload speed is less than 5Mps"}
                  </div>
                )}
              </div>
            </div>

            <div className='relative w-[310px] h-[50px] flex items-center justify-between px-6 mb-4 bg-gray-200 rounded-lg'>
              <span className='text-xl font-bold text-green-500'>
                Upload Speed
              </span>
              <div className='flex items-center justify-center'>
                <span className='text-lg font-semibold mr-4'>60</span>
                <IconButton
                  onMouseEnter={handleMouseEnterUpload}
                  onMouseLeave={handleMouseLeaveUpload}
                >
                  {isValueAboveMin(7) ? (
                    <CheckIcon color='success' />
                  ) : (
                    <ClearIcon color='error' />
                  )}
                </IconButton>
                {isMouseHoveringUpload && (
                  <div className='absolute top-[-100%] right-0 flex items-center justify-center h-[50px] bg-white p-4 rounded-md shadow-md z-[999] '>
                    {isValueAboveMin(7)
                      ? "Upload speed is more than 5Mps"
                      : "Upload speed is less than 5Mps"}
                  </div>
                )}
              </div>
            </div>

            <div className='w-[310px] flex items-center justify-between mb-8 sm:mb-4 '>
              <span className='text-sm'>
                {" "}
                We take utmost care possible from our end to maintain privacy of
                your personal information. The full extent of our commitment can
                be found in our Privacy Statement. By enrolling and using the
                Service, you agree to be bound by the terms of the Privacy
                Statment.
              </span>
            </div>
            <div className='w-[310px] flex items-center justify-between mb-8 sm:mb-4 '>
              <button
                className='py-3 px-8 mb-4 sm:mb-0 bg-slate-600 text-white font-bold text-xl rounded-md cursor-pointer'
                onClick={handleRetakeButton}
              >
                Retake
              </button>
              <button
                className='py-3 px-8 mb-4 sm:mb-0 bg-green-500 text-white font-bold text-xl rounded-md cursor-pointer'
                onClick={updateGoogleSheet}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultForm;
