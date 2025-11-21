import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import OurDoctors from "./views/OurDoctors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="MSMFH/" element={<Home />} />
        <Route path="MSMFH/ourdoctors" element={<OurDoctors />} />
      </Routes>
    </Router>
  );
}

export default App;
