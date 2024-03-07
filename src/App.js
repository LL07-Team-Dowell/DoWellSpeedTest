import "./App.css";
import Footer from "./components/footer";
import HomePage from "./components/homePage";
import { CiFacebook, CiLinkedin, CiYoutube } from "react-icons/ci";

function App() {
  return (
    <div className="">
      <div className="flex bg-[#232222] justify-between px-[3rem] py-[2rem]">
        <h1 className="text-[25px] font-bold text-white">Dowell Speed Test</h1>
        <div className="flex gap-4">
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
      </div>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
