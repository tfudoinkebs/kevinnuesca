import React from "react";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { Button } from "@/components/ui/button";
import WordRotate from "@/components/magicui/word-rotate";
import BlurFade from "@/components/magicui/blur-fade";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaRegFilePdf } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Home = ({ scrollToSection, aboutRef, contactsRef }) => {
  return (
    <div className="relative flex h-screen w-full overflow-hidden">
      <div className="z-10 flex flex-col items-center justify-center">
        <BlurFade
          delay={0.25 * 2}
          inView
          className={"flex w-full flex-col items-center justify-center"}
        >
          <WordRotate
            className="text-2xl font-semibold text-black dark:text-white md:text-4xl"
            words={[
              "Hello I'm",
              "Hola, soy",
              "Bonjour, je suis",
              "Hallo, ich bin",
              "Ciao, sono",
              "Olá, eu sou",
              "你好, 我是",
              "こんにちは、私は",
              "안녕하세요, 저는",
              "Привет, я",
              "مرحبًا، أنا",
            ]}
          />
          <GradualSpacing
            className="pb-4 text-3xl font-black leading-snug tracking-tight text-black dark:text-white md:text-6xl md:leading-[5rem] lg:text-8xl"
            text="Kevin Roi Nuesca"
          />
        </BlurFade>

        <BlurFade delay={0.25 * 3} inView className="flex flex-col gap-4">
          <div className="flex justify-center px-4 text-center">
            <span className="w-full text-sm text-muted-foreground md:text-lg lg:w-1/2">
              BS Computer Science graduate from Cavite State University Don
              Severino Delas Alas campus. As a passionate and creative{" "}
              <b>UI/UX Designer</b> and <b>Frontend Developer</b>, I specialize
              in developing visually appealing and intuitive design and
              developing web applications that delight users.
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <Button
              onClick={() => scrollToSection(contactsRef)}
              className="px-2 py-1"
            >
              <MdOutlineMailOutline className="mr-2" /> Contact me
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open("/nuesca-cv.pdf", "_blank", "noopener,noreferrer")
              }
              className="px-2 py-1"
            >
              <FaRegFilePdf className="mr-2" /> CV/Resume
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  "https://github.com/tfudoinkebs",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="px-2 py-1"
            >
              <FaGithub className="mr-2" /> Github
            </Button>
          </div>
        </BlurFade>
      </div>

      <div className="absolute bottom-0 z-10 flex w-full justify-center pb-4">
        <BlurFade delay={0.25 * 4} inView>
          <Button
            variant="none"
            onClick={() => scrollToSection(aboutRef)}
            className="animate-updown font-semibold"
          >
            <MdKeyboardArrowDown className="mr-2" /> scroll down
            <MdKeyboardArrowDown className="ml-2" />
          </Button>
        </BlurFade>
      </div>

      <AnimatedGridPattern
        numSquares={100}
        maxOpacity={0.2}
        duration={1}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-0 z-0 h-[100%]",
        )}
      />
    </div>
  );
};

export default Home;
