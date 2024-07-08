import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contacts from "./pages/contacts";

const LandingPage = () => {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
};

export default LandingPage;
