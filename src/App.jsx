import React, { useRef } from "react";
import { ThemeProvider } from "@/components/magicui/theme-provider";
import Header from "./pages/header";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/landingpage/pages/home";
import About from "./pages/landingpage/pages/about";
import Projects from "./pages/landingpage/pages/projects";
import Contacts from "./pages/landingpage/pages/contacts";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex min-h-screen flex-col justify-between font-mono">
          <Header
            scrollToSection={scrollToSection}
            homeRef={homeRef}
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            contactsRef={contactsRef}
          />
          <div ref={homeRef}>
            <Home
              scrollToSection={scrollToSection}
              aboutRef={aboutRef}
              contactsRef={contactsRef}
            />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={contactsRef}>
            <Contacts />
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
