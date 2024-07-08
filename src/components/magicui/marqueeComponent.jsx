import React from "react";
import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const icons = [
  {
    name: "JavaScript",
    slug: "javascript",
    description:
      "JavaScript is a versatile scripting language used primarily for web development.",
  },
  {
    name: "Java",
    slug: "java",
    description: "Java is a class-based, object-oriented programming language.",
  },
  {
    name: "React",
    slug: "react",
    description: "React is a JavaScript library for building user interfaces.",
  },
  {
    name: "HTML5",
    slug: "html5",
    description:
      "HTML5 is the latest evolution of the standard that defines HTML.",
  },
  {
    name: "CSS3",
    slug: "css3",
    description:
      "CSS3 is the latest version of the Cascading Style Sheets language.",
  },
  {
    name: "Node.js",
    slug: "nodedotjs",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    name: "Next.js",
    slug: "nextdotjs",
    description:
      "Next.js is a React framework for building server-side rendered applications.",
  },
  {
    name: "Supabase",
    slug: "supabase",
    description: "Supabase is an open source Firebase alternative.",
  },
  {
    name: "Vercel",
    slug: "vercel",
    description:
      "Vercel is a platform for frontend frameworks and static sites.",
  },
  {
    name: "Docker",
    slug: "docker",
    description:
      "Docker is a set of platform-as-a-service products that use OS-level virtualization.",
  },
  {
    name: "Git",
    slug: "git",
    description: "Git is a distributed version control system.",
  },
  {
    name: "GitHub",
    slug: "github",
    description:
      "GitHub is a code hosting platform for version control and collaboration.",
  },
  {
    name: "GitLab",
    slug: "gitlab",
    description: "GitLab is a web-based DevOps lifecycle tool.",
  },
  {
    name: "VS Code",
    slug: "visualstudiocode",
    description:
      "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
  },
  {
    name: "Figma",
    slug: "figma",
    description:
      "Figma is a web-based graphics editing and user interface design app.",
  },
];

const ReviewCard = ({ img, name, description }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt={name}
          src={`/icons/${img}.svg`}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{description}</blockquote>
    </figure>
  );
};

const MarqueeComponent = () => {
  const firstRow = icons.slice(0, icons.length / 2);
  const secondRow = icons.slice(icons.length / 2);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((icon) => (
          <ReviewCard key={icon.slug} {...icon} img={icon.slug} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((icon) => (
          <ReviewCard key={icon.slug} {...icon} img={icon.slug} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default MarqueeComponent;
