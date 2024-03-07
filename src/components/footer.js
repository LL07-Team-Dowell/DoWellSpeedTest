import React from "react";
import { ImLocation } from "react-icons/im";
import { CiFacebook, CiLinkedin, CiMail, CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-[#232222] text-white w-full h-auto">
      <div className="py-[4rem] px-[3rem] flex justify-between">
        <div className="w-1/2">
          <div className="w-[70%] mb-4">
            <h1 className="text-[28px] font-semibold">Our Vision</h1>
            <p className="text-[18px]">
              To be the Global Market intelligence center for innovation
            </p>
          </div>
          <div className="w-[70%] my-10">
            <h1 className="text-[28px] font-semibold">Our Mission</h1>
            <p className="text-[18px] ">
              Optimise “User-centered Design” of products and services by
              analysing “Needs & Haves” of targeted customers of our clients
              D’Well assure Reliable information, Local knowledge about market,
              Responsiveness and Empathy to clients through its highly motivated
              team of employees and freelancers around the globe
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <p className="mb-5 text-[28px] font-semibold">Reach Us</p>
          <div className="flex gap-4 my-4">
            <ImLocation size={25} color="#2FA043" />
            <p>3rd Floor 120 Baker Street, London, England, W1U 6TU</p>
          </div>
          <div className="flex gap-4">
            <CiMail size={25} color="#2FA043" />
            <p>dowell@dowellresearch.uk</p>
          </div>
          <div className="flex gap-4 my-6">
            <a
              href="https://www.linkedin.com/company/dowell-research-uk-limited"
              target="_blank"
              rel="noreferrer"
            >
              <CiLinkedin color="#2FA043" size={25} />
            </a>
            <a
              href="https://www.youtube.com/@uxlivinglab"
              target="_blank"
              rel="noreferrer"
            >
              <CiYoutube size={25} color="#2FA043" />
            </a>

            <a
              href="https://web.facebook.com/uxlivinglab"
              target="_blank"
              rel="noreferrer"
            >
              <CiFacebook size={25} color="#2FA043" />
            </a>
          </div>
          <p className="mt-12">&copy; Dowell Research UK Limited 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
