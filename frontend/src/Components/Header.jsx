import dowellLogo from "../assets/rmlogodowell.png";

const Header = () => {
  return (
    <div className='fixed top-0 z-50 bg-white w-full h-32 flex items-center justify-around shadow-md px-12 '>
      <img
        src={dowellLogo}
        alt='Dowell Logo'
        className='h-4/5 cursor-pointer'
      />
      <p className='text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-green-500'>
        Dowell Speed test
      </p>
    </div>
  );
};

export default Header;
