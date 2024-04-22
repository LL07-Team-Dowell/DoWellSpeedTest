const Description = ({ aboveMin, type }) => {
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
  return (
    <div className='absolute top-[-100%] right-0 flex items-center justify-center h-[50px] bg-white p-4 rounded-md shadow-md z-[999] '>
      {descriptions[`${type}`]}
    </div>
  );
};

export default Description;
