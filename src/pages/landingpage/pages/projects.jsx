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

const projects = () => {
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
          <BlurFade delay={0.25 * 2} inView className={"z-10"}>
            <div className="z-20 flex items-center justify-center grayscale transition-transform duration-300 hover:scale-105 hover:grayscale-0">
              <ShineBorder
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="relative z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
              >
                <div className="border-b-2 p-1 shadow-md">
                  <img
                    src="./adventura.png"
                    className="rounded-t-sm object-cover"
                    alt=""
                  />
                </div>

                <div className="z-20 flex-col px-4">
                  <CardHeader>
                    <CardTitle>Adventura 360</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      An Online Interactive Campus Tour for Cavite State
                      University Don Severino Delas Alas Campus
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-2">
                    <Badge variant="outline">Badge</Badge>
                    <Badge variant="outline">Badge</Badge>
                  </CardContent>

                  <CardFooter className="mt-2 flex w-full items-center justify-between text-xs">
                    <button
                      href="https://example.com"
                      target="_blank"
                      className="flex w-full items-center gap-2 hover:underline"
                      rel="noopener noreferrer"
                    >
                      live website <FaLink />
                    </button>

                    <button
                      href="https://github.com/yourusername/yourproject"
                      target="_blank"
                      className="flex w-full items-center justify-end gap-2 hover:underline"
                      rel="noopener noreferrer"
                    >
                      github repo <ImGithub />
                    </button>
                  </CardFooter>
                </div>
              </ShineBorder>
            </div>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView className={"z-10"}>
            <div className="z-20 flex items-center justify-center grayscale transition-transform duration-300 hover:scale-105 hover:grayscale-0">
              <ShineBorder
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="relative z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
              >
                <div className="border-b-2 p-1 shadow-md">
                  <img
                    src="./kabsu me.png"
                    className="rounded-t-sm object-cover"
                    alt=""
                  />
                </div>
                <div className="z-20 flex-col px-4">
                  <CardHeader>
                    <CardTitle>kabsu.me</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      A social media platform exclusive only for Cavite State
                      University students, faculty, and alumni.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-2">
                    <Badge variant="outline">Badge</Badge>
                    <Badge variant="outline">Badge</Badge>
                  </CardContent>

                  <CardFooter className="mt-2 flex w-full items-center justify-between text-xs">
                    <button
                      href="https://example.com"
                      target="_blank"
                      className="flex w-full items-center gap-2 hover:underline"
                      rel="noopener noreferrer"
                    >
                      live website <FaLink />
                    </button>

                    <button
                      href="https://github.com/yourusername/yourproject"
                      target="_blank"
                      className="flex w-full items-center justify-end gap-2 hover:underline"
                      rel="noopener noreferrer"
                    >
                      github repo <ImGithub />
                    </button>
                  </CardFooter>
                </div>
              </ShineBorder>
            </div>
          </BlurFade>
          <BlurFade delay={0.25 * 4} inView className={"z-10"}>
            <div className="z-20 flex items-center justify-center grayscale transition-transform duration-300 hover:scale-105 hover:grayscale-0">
              <ShineBorder
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="relative z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
              >
                <div className="border-b-2 p-1 shadow-md">
                  <img
                    src="./root finding.png"
                    className="rounded-t-sm object-cover"
                    alt=""
                  />
                </div>
                <div className="z-20 flex-col px-4">
                  <CardHeader>
                    <CardTitle>Root finding method</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Root finding method calculator for COSC 110. Methods are
                      Bisection, Secant, Newton Rhapson, and False position.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-2">
                    <Badge variant="outline">Badge</Badge>
                    <Badge variant="outline">Badge</Badge>
                  </CardContent>

                  <CardFooter className="mt-2 flex w-full items-center justify-between text-xs">
                    <button
                      href="https://example.com"
                      target="_blank"
                      className="flex w-full items-center gap-2 hover:underline"
                      rel="noopener noreferrer"
                    >
                      live website <FaLink />
                    </button>

                    <button
                      href="https://github.com/yourusername/yourproject"
                      target="_blank"
                      className="flex w-full items-center justify-end gap-2 hover:underline"
                      rel="noopener noreferrer"
                    >
                      github repo <ImGithub />
                    </button>
                  </CardFooter>
                </div>
              </ShineBorder>
            </div>
          </BlurFade>

          <BlurFade delay={0.25 * 5} inView className={"z-10"}>
            <div className="z-20 flex items-center justify-center grayscale transition-transform duration-300 hover:scale-105 hover:grayscale-0">
              <ShineBorder
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="relative z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
              >
                <div className="border-b-2 p-1 shadow-md">
                  <img
                    src="./root finding.png"
                    className="rounded-t-sm object-cover"
                    alt=""
                  />
                </div>
                <div className="z-20 flex-col px-4">
                  <CardHeader>
                    <CardTitle>Versatool</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Root finding method calculator for COSC 110. Methods are
                      Bisection, Secant, Newton Rhapson, and False position.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-2">
                    <Badge variant="outline">Badge</Badge>
                    <Badge variant="outline">Badge</Badge>
                  </CardContent>

                  <CardFooter className="mt-2 flex w-full items-center justify-between text-xs">
                    <button
                      href="https://example.com"
                      target="_blank"
                      className="flex w-full items-center gap-2 hover:underline"
                      rel="noopener noreferrer"
                    >
                      live website <FaLink />
                    </button>

                    <button
                      href="https://github.com/yourusername/yourproject"
                      target="_blank"
                      className="flex w-full items-center justify-end gap-2 hover:underline"
                      rel="noopener noreferrer"
                    >
                      github repo <ImGithub />
                    </button>
                  </CardFooter>
                </div>
              </ShineBorder>
            </div>
          </BlurFade>
        </div>
      </div>
      <Ripple />
    </div>
  );
};

export default projects;
