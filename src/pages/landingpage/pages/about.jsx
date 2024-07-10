import React from "react";
import BlurIn from "@/components/magicui/blur-in";
import TypingAnimation from "@/components/magicui/typing-animation";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import IconCloudWrapper from "@/components/magicui/icon-cloud-component";
import MarqueeComponent from "@/components/magicui/marqueeComponent";
import BlurFade from "@/components/magicui/blur-fade";

const about = () => {
  const slugs = [
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "supabase",
    "vercel",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
  ];

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-start overflow-hidden">
      <div className="flex w-full flex-col items-center justify-start pt-20">
        <BlurFade delay={0.25} inView>
          <BlurIn
            word="About me"
            className="font-bold text-black dark:text-white"
            duration={2}
          />
        </BlurFade>

        <BlurFade delay={0.25 * 2} inView>
          <TypingAnimation
            className="text-base font-normal text-black dark:text-white"
            text="get to know me more!"
            duration={10}
          />
        </BlurFade>

        <BlurFade
          delay={0.25 * 2}
          inView
          className={"flex w-full justify-center text-center"}
        >
          <p className="w-full px-4 pt-8 text-center md:w-3/4">
            i'm a passionate{" "}
            <span className="text-teal-500">computer science</span> student at{" "}
            <span className="text-teal-500">
              cavite state university don severino delas alas campus
            </span>
            . i have passion for{" "}
            <span className="text-teal-500">
              coding, learning, and building
            </span>{" "}
            . my hobbies are reading random stuff such as webtoon, manga, or
            manwha. i also love watching anime and playing random games. i still
            have much more to learn, and i'm always open to exploring new
            opportunities."
          </p>
        </BlurFade>

        <BlurFade
          delay={0.25 * 4}
          inView
          className={"flex w-full flex-col justify-center text-center"}
        >
          <BlurIn
            word="Techstack"
            className="mt-8 font-bold text-black dark:text-white"
            duration={2}
          />
          <TypingAnimation
            className="px-4 text-base font-normal text-black dark:text-white"
            text="here are the technologies i'm familiar with!"
            duration={50}
          />
        </BlurFade>
      </div>

      <BlurFade delay={0.25 * 4} inView>
        <IconCloudWrapper slugs={slugs} />
      </BlurFade>
      
      <MarqueeComponent />

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,gray,transparent)]",
        )}
      />
    </div>
  );
};

export default about;
