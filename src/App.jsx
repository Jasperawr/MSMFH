import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import OurDoctors from "./views/OurDoctors";

function App() {
  return (
    <Router basename="/MSMFH">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ourdoctors" element={<OurDoctors />} />
      </Routes>
    </Router>
  );
}

export default App;
