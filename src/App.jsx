import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import OurDoctors from "./views/OurDoctors";
import NewAndEvents from "./views/NewAndEvents";
// import OurServices from "./views/OurServices";
import MedicalServices from "./views/services/MedicalServices";
import Facilities from "./views/services/Facilities";
import PatientRooms from "./views/services/PatientRooms";
import History from "./views/about/History";
import AboutUs from "./views/about/AboutUs";
import MissionVision from "./views/about/MissionVision";
import QualityPolicy from "./views/about/QualitPolicy";
import HMO from "./views/about/HMO";
import Leadership from "./views/about/Leaedership";
import Career from "./views/about/Career";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ourdoctors" element={<OurDoctors />} />

        {/* Our Services */}
        <Route path="services" element={<MedicalServices />} />
        <Route path="services/medicalservices" element={<MedicalServices />} />
        <Route path="services/facilities" element={<Facilities />} />
        <Route path="services/patientrooms" element={<PatientRooms />} />

        {/* About Us */}
        <Route path="about" element={<AboutUs />} />
        <Route path="about/aboutus" element={<AboutUs />} />
        <Route path="about/history" element={<History />} />
        <Route path="about/mission&vision" element={<MissionVision />} />
        <Route path="about/qualitypolicy" element={<QualityPolicy />} />
        <Route path="about/hmo" element={<HMO />} />
        <Route path="about/leadership" element={<Leadership />} />
        <Route path="about/careers" element={<Career />} />

        <Route path="new&events/all" element={<NewAndEvents />} />
      </Routes>
    </Router>
  );
}

export default App;
