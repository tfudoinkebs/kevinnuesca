import React from "react";
import Ripple from "@/components/magicui/ripple";
import BlurIn from "@/components/magicui/blur-in";
import ShineBorder from "@/components/magicui/shine-border";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaLink } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import BlurFade from "@/components/magicui/blur-fade";

const projectList = [
  {
    title: "Adventura 360",
    description:
      "An Online Interactive Campus Tour for Cavite State University Don Severino Delas Alas Campus",
    image: "./adventura.png",
    badges: ["Badge1", "Badge2"],
    liveLink: "https://adventura360.kabsu.me/",
    repoLink: "https://github.com/marksapon/Adventura360",
  },
  {
    title: "kabsu.me",
    description:
      "A social media platform exclusive only for Cavite State University students, faculty, and alumni.",
    image: "./kabsu me.png",
    badges: ["Badge1", "Badge2"],
    liveLink: "https://kabsu.me/",
    repoLink: "https://github.com/bricesuazo/kabsu.me",
  },
  {
    title: "Root finding method",
    description:
      "Root finding method calculator for COSC 110. Methods are Bisection, Secant, Newton Rhapson, and False position.",
    image: "./root finding.png",
    badges: ["Badge1", "Badge2"],
    liveLink: "https://cosc110-g3.kevinnuesca.me/",
    repoLink: "https://github.com/tfudoinkebs/cosc110-g3",
  },
  {
    title: "Versatool",
    description:
      "Root finding method calculator for COSC 110. Methods are Bisection, Secant, Newton Rhapson, and False position.",
    image: "./root finding.png",
    badges: ["Badge1", "Badge2"],
    liveLink: "",
    repoLink: "",
  },
];

const Projects = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-start overflow-hidden bg-background pb-8">
      <div className="mt-20 flex w-full flex-col items-center justify-start">
        <BlurFade delay={0.25} inView>
          <BlurIn
            word="Projects"
            className="mb-10 font-bold text-black dark:text-white"
            duration={2}
          />
        </BlurFade>

        <div className="grid w-full grid-cols-1 grid-rows-1 items-center justify-center gap-4 px-8 md:w-3/4 lg:grid-cols-2 xl:w-3/5">
          {projectList.map((project, index) => (
            <BlurFade
              key={project.title}
              delay={0.25 * (index + 2)}
              inView
              className={"z-10"}
            >
              <div className="z-20 flex items-center justify-center grayscale transition-transform duration-300 hover:scale-105 hover:grayscale-0">
                <ShineBorder
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                  className="relative z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                >
                  <div className="border-b-2 p-1 shadow-md">
                    <img
                      src={project.image}
                      className="rounded-t-sm object-cover"
                      alt={project.title}
                    />
                  </div>

                  <div className="z-20 mb-2 flex-col px-4">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex gap-2">
                      {project.badges.map((badge, i) => (
                        <Badge key={i} variant="outline">
                          {badge}
                        </Badge>
                      ))}
                    </CardContent>

                    <CardFooter className="mt-2 flex w-full items-center justify-between text-xs">
                      <button
                        className="flex w-fit items-center gap-2 whitespace-nowrap hover:underline"
                        onClick={() =>
                          window.open(
                            project.liveLink,
                            "_blank",
                            "noopener,noreferrer",
                          )
                        }
                        disabled={!project.liveLink}
                      >
                        live website <FaLink />
                      </button>

                      <button
                        className="flex w-fit items-center justify-end gap-2 whitespace-nowrap hover:underline"
                        onClick={() =>
                          window.open(
                            project.repoLink,
                            "_blank",
                            "noopener,noreferrer",
                          )
                        }
                        disabled={!project.repoLink}
                      >
                        github repo <ImGithub />
                      </button>
                    </CardFooter>
                  </div>
                </ShineBorder>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
      <Ripple />
    </div>
  );
};

export default Projects;
