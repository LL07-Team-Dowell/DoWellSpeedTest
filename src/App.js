import React, { useState, useEffect } from "react";
import Left from "./components/Left";
import RightForm from "./pages/RightForm";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Result } from "./pages/Result";

export default function App() {
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

  return (
    <HashRouter basename="/">
      <div className="app-container">
        <div className="wrapper">
          {!isMobile && <Left />}
          <div className="right-form">
            <div className="right-form-container">
              {isMobile && <Left />}
              <Routes>
                <Route path="/" element={<RightForm />} />
                <Route path="/result" element={<Result />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}
