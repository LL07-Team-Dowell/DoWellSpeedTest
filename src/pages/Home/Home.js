import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CameraFeed from "./Components/camerFeed";
import Footer from "../../components/footer";
import logo from "../../images/rmlogodowell.png";

export default function Home() {
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const isButtonDisabled = nameField === "" || emailField === "";

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isMobile);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNameChange = (e) => {
    setNameField(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailField(e.target.value);
  };
  return (
    <div className="app-container">
      <header className="header">
        <img className="logo" src={logo} alt="Company Logo" />
        <h1 className="title">Dowell Internet Speed Test</h1>
      </header>
      <main className="main">
        {!isMobile && <CameraFeed />}
        <div className="form-container">
          {!isMobile && (
            <h2 className="form-title">Test Your Internet Speed</h2>
          )}
          {isMobile && <CameraFeed />}
          <div className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleEmailChange}
              />
            </div>
            <div className="start-test-button">
              <Link to={"/result"}>
                <button
                  type="submit"
                  className="button"
                  disabled={isButtonDisabled}
                >
                  Start Test
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
