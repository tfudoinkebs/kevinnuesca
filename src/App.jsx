import React, { useState } from "react";
import About from "./about";
import Experience from "./experience";
import {
  FaRegFileWord,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

const App = () => {
  const [activeButton, setActiveButton] = useState("experience");

  return (
    <div className="min-h-screen pt-12 pb-4 mx-10 flex justify-center sm:mx-24">
      <div className="max-w-2xl w-full">
        <div className="w-full">
          <div className="min-h-screen">
            <div className="flex flex-row justify-between pb-6">
              <h1 className="font-medium text-lg">Kevin Roi Nuesca</h1>
              <div className="flex flex-col justify-end gap-1 text-right text-sm w-fit sm:text-base">
                <div
                  className={`hover:font-medium ${
                    activeButton === "experience"
                      ? "text-teal-500 font-medium"
                      : ""
                  } hover:font-bold`}
                  onClick={() => setActiveButton("experience")}
                >
                  experience
                </div>
                <div
                  className={`hover:font-medium ${
                    activeButton === "about" ? "text-teal-500 font-medium" : ""
                  }`}
                  onClick={() => setActiveButton("about")}
                >
                  about
                </div>
                <div className="hover:font-bold">
                  <a
                    href="mailto:kevinnuesca19@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    contact
                  </a>
                </div>
                <div className="text-gray-600 flex items-center justify-end hover:font-bold">
                  <a
                    href="/Nuesca-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    resume
                  </a>
                  <FaRegFileWord className="pl-2 size-5" />
                </div>
              </div>
            </div>
            {activeButton === "about" && <About />}
            {activeButton === "experience" && <Experience />}
            <footer>
              <div className="flex gap-4 pt-10">
                <a
                  href=" https://www.facebook.com/wtf.kevs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/tfudoinkebs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kevin-roi-nuesca-07b756281/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="mailto:kevinnuesca19@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope size={24} />
                </a>
                <a
                  href="https://github.com/tfudoinkebs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
