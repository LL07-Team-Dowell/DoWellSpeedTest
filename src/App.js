import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Result } from "./pages/Result/Result";
import "./App.css";
import "./components/style.css";

export default function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </HashRouter>
  );
}
