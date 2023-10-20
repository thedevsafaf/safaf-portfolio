import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Services from "./components/Services";
import Qualifications from "./components/Qualifications";
import Resume from "./components/Resume";
import TechnologySkills from "./components/TechnologySkills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <Router basename="/safaf-portfolio">
      <GlobalStyles />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<TechnologySkills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
