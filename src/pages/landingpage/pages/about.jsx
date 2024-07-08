import React from "react";
import BlurIn from "@/components/magicui/blur-in";
import TypingAnimation from "@/components/magicui/typing-animation";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import IconCloudWrapper from "@/components/magicui/icon-cloud-component";
import MarqueeComponent from "@/components/magicui/marqueeComponent";

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
        <BlurIn
          word="About me"
          className="font-bold text-black dark:text-white"
          duration={2}
        />
        <TypingAnimation
          className="text-base font-normal text-black dark:text-white"
          text="get to know me more!"
          duration={50}
        />
        <p className="w-3/4 pt-8 text-center">
          i'm a passionate{" "}
          <span className="text-teal-500">computer science</span> student at
          cavite state university don severino delas alas campus. i have passion
          for coding, learning, and building. my hobbies are reading random
          stuff such as webtoon, manga, or manwha. i also love watching anime
          and playing random games. i still have much more to learn, and i'm
          always open to exploring new opportunities."
        </p>
      </div>

      <IconCloudWrapper slugs={slugs} />
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
