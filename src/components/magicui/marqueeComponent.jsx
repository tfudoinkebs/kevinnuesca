import React from "react";
import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaNode,
  FaDocker,
  FaGitSquare,
  FaGithub,
  FaGitlab,
  FaFigma,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import { SiVercel } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const techIcons = {
  JavaScript: <IoLogoJavascript />,
  Java: <FaJava />,
  React: <FaReact />,
  HTML5: <FaHtml5 />,
  CSS3: <IoLogoCss3 />,
  Nodejs: <FaNode />,
  Nextjs: <RiNextjsFill />,
  Supabase: <RiSupabaseFill />,
  Vercel: <SiVercel />,
  Docker: <FaDocker />,
  Git: <FaGitSquare />,
  GitHub: <FaGithub />,
  GitLab: <FaGitlab />,
  VSCode: <VscVscode />,
  Figma: <FaFigma />,
};

const MarqueeComponent = () => {
  const reviews = [
    {
      name: "JavaScript",
      body: "JavaScript is a versatile scripting language used primarily for web development.",
      icon: techIcons["JavaScript"],
    },
    {
      name: "Java",
      body: "Java is a class-based, object-oriented programming language.",
      icon: techIcons["Java"],
    },
    {
      name: "React",
      body: "React is a JavaScript library for building user interfaces.",
      icon: techIcons["React"],
    },
    {
      name: "HTML5",
      body: "HTML5 is the latest evolution of the standard that defines HTML.",
      icon: techIcons["HTML5"],
    },
    {
      name: "CSS3",
      body: "CSS3 is the latest version of the Cascading Style Sheets language.",
      icon: techIcons["CSS3"],
    },
    {
      name: "Node.js",
      body: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      icon: techIcons["Nodejs"],
    },
    {
      name: "Next.js",
      body: "Next.js is a React framework for building server-side rendered applications.",
      icon: techIcons["Nextjs"],
    },
    {
      name: "Supabase",
      body: "Supabase is an open source Firebase alternative.",
      icon: techIcons["Supabase"],
    },
    {
      name: "Vercel",
      body: "Vercel is a platform for frontend frameworks and static sites.",
      icon: techIcons["Vercel"],
    },
    {
      name: "Docker",
      body: "Docker is a set of platform-as-a-service products that use OS-level virtualization.",
      icon: techIcons["Docker"],
    },
    {
      name: "Git",
      body: "Git is a distributed version control system.",
      icon: techIcons["Git"],
    },
    {
      name: "GitHub",
      body: "GitHub is a code hosting platform for version control and collaboration.",
      icon: techIcons["GitHub"],
    },
    {
      name: "GitLab",
      body: "GitLab is a web-based DevOps lifecycle tool.",
      icon: techIcons["GitLab"],
    },
    {
      name: "VS Code",
      body: "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
      icon: techIcons["VSCode"],
    },
    {
      name: "Figma",
      body: "Figma is a web-based graphics editing and user interface design app.",
      icon: techIcons["Figma"],
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  const ReviewCard = ({ icon, name, body }) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <div className="text-4xl">{icon}</div>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
  };

  return (
    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={`first-${index}`} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={`second-${index}`} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default MarqueeComponent;
