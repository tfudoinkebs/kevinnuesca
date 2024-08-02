import React from "react";
import BlurIn from "@/components/magicui/blur-in";
import TypingAnimation from "@/components/magicui/typing-animation";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import MarqueeComponent from "@/components/magicui/marqueeComponent";
import BlurFade from "@/components/magicui/blur-fade";
import { useTheme } from "@/components/magicui/theme-provider";
import { Button } from "@/components/ui/button";

const About = () => {
  const { theme } = useTheme();

  const slugs = [
    "javascript",
    "java",
    "python",
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
    // "photoshop",
    // "illustrator",
    "microsoftoffice",
    "tailwindcss",
  ];

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-start overflow-hidden">
      <div className="z-10 flex w-full flex-col items-center justify-start pt-20">
        <BlurFade delay={0.25} inView>
          <BlurIn
            word="About me"
            className="pb-4 font-bold text-black dark:text-white"
            duration={2}
          />
        </BlurFade>

        <BlurFade
          delay={0.25 * 2}
          inView
          className={
            "flex w-full flex-col items-center justify-center gap-4 text-center md:flex-row"
          }
        >
          <p className="w-full p-4 text-center md:w-1/2">
            i'm a passionate computer science student at cavite state university
            don severino delas alas campus. i have passion for coding, learning,
            and building. <br /> <br />i have experience as a front-end
            developer and UI/UX designer. my skills include creating responsive
            and user-friendly interfaces, developing web applications, and
            enhancing user experience through thoughtful design. <br />
            <br />
            my hobbies are reading random stuff such as webtoon, manga, or
            manwha. i also love watching anime and playing random games. i still
            have much more to learn, and i'm always open to exploring new
            opportunities.
          </p>
          <div className="w-fit p-4">
            <img
              src={theme === "dark" ? "./me-dark.jpg" : "./me-white.jpg"}
              alt="Kevin Roi Nuesca Portrait"
              className="aspect-square size-96 rounded-md object-cover transition-all duration-500"
            />
          </div>
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

      <MarqueeComponent />

      <DotPattern
        className={cn(
          "z-0 [mask-image:radial-gradient(500px_circle_at_center,gray,transparent)]",
        )}
      />
    </div>
  );
};

export default About;
