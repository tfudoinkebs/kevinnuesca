import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const SkillItem = ({ item }) => (
  <h1 key={item} className="font-medium">
    {item}
  </h1>
);

const ProjectItem = ({ title, liveLink, githubLink, technologies }) => (
  <div>
    <div className="flex flex-row justify-between">
      <h1 className="font-semibold">{title}</h1>
      <div className="flex">
        <h1
          className={
            liveLink
              ? "flex flex-col justify-end gap-1 text-right text-black"
              : "flex flex-col justify-end gap-1 text-right text-gray-400"
          }
        >
          {liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              live
            </a>
          ) : (
            <div>live</div>
          )}
        </h1>
        <div
          className={
            githubLink
              ? "flex flex-col justify-end gap-1 text-right px-2 text-black"
              : "flex flex-col justify-end gap-1 text-right px-2 text-gray-400"
          }
        >
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github
            </a>
          ) : (
            <div>github</div>
          )}
        </div>
      </div>
    </div>
    <div>
      <h1 className="text-gray-400 pb-4">{technologies}</h1>
    </div>
  </div>
);

const Experience = () => {
  const skills = [
    "adobe photoshop",
    "adobe illustrator",
    "figma",
    "blender",
    "unity",
    "godot",
    "react.js",
    "next.js",
    "tailwind",
    "java",
    "python",
    "sql",
  ];

  const projects = [
    {
      title: "adventura 360",
      liveLink: "view360-test.vercel.app",
      githubLink: "https://github.com/MilkSource/view360_test",
      technologies: "react.js, mongodb, tailwind, egjs view360, openseadragon",
    },
    {
      title: "escape from calamity",
      liveLink: "",
      githubLink: "",
      technologies: "unity, c#",
    },
    {
      title: "portfolio",
      liveLink: "",
      githubLink: "",
      technologies: "react.js, tailwind",
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-between">
        <h1 className="pb-4 text-teal-500 font-bold">WORK EXPERIENCE</h1>
        <div className="text-sm sm:text-base">
          <h1 className="font-medium">work immersion (80 hrs.)</h1>
          <h1 className="text-gray-400 pb-4">2018</h1>
        </div>
        <div className="text-sm sm:text-base">
          <h1 className="font-medium">On the Job training (250 hrs.)</h1>
          <h1 className="text-gray-400 pb-6">
            UI/UX Design at{" "}
            <a
              href="https://software.pixel8.ph/who-we-are/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-2"
            >
              Pixel8 Web Solutions & Consultancy Inc.
            </a>
          </h1>
        </div>

        <h1 className="pb-4 text-teal-500 font-bold">PROJECTS</h1>
        <div className="sm:text-base text-sm">
          {projects.map((project) => (
            <ProjectItem {...project} />
          ))}
        </div>

        <h1 className="pb-4 pt-2 text-teal-500 font-bold">SKILLS</h1>
        <div className="grid grid-cols-2 sm:text-base text-sm gap-4 text-gray-500">
          {skills.map((skill) => (
            <SkillItem item={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
