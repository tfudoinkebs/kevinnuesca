import React from "react";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import BoxReveal from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";
import WordRotate from "@/components/magicui/word-rotate";
import SparklesText from "@/components/magicui/sparkles-text";

const home = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4 md:px-20">
      <WordRotate
        className="text-4xl font-black text-black dark:text-white"
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
        className="font-display pb-4 text-4xl font-black leading-snug tracking-tight text-black dark:text-white md:text-5xl md:leading-[5rem] lg:text-6xl xl:text-7xl"
        text="Kevin Roi Nuesca"
      />
      <div className="flex flex-col items-center justify-center text-center">
        <span className="text-sm text-muted-foreground md:text-lg">
          Studied{" "}
          <span className="font-semibold text-teal-500">
            BS Computer Science
          </span>{" "}
          and graduated in{" "}
        </span>
        <span className="text-sm text-muted-foreground">
          <span className="font-semibold text-green-500">
            Cavite State University Don Severino Delas Alas
          </span>{" "}
          campus.
        </span>
      </div>

      <div className="mt-20 flex flex-col items-center gap-4 text-center delay-1000 md:items-start md:text-left">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <WordRotate
            className="text-4xl font-black text-[#5046e6]"
            words={["UI/UX Designer", "Frontend Developer"]}
          />
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5} className={"py-1"}>
          <p>
            -&gt; A passionate and creative
            <span className="font-semibold text-teal-500">
              {" "}
              UI/UX Designer
            </span>{" "}
            and
            <span className="font-semibold text-teal-500">
              {" "}
              Frontend developer
            </span>
            . <br />
            -&gt; I develop web applications that{" "}
            <span className="font-semibold text-teal-500"> delight users</span>,
            <span className="font-semibold text-teal-500">
              {" "}
              meeting deadlines
            </span>{" "}
            and{" "}
            <span className="font-semibold text-teal-500">
              {" "}
              staying within budget
            </span>
            <br />
          </p>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <Button variant="outline">
            <SparklesText text="Explore" className={"text-sm font-semibold"} />
          </Button>
        </BoxReveal>
      </div>

      <AnimatedGridPattern
        numSquares={100}
        maxOpacity={0.2}
        duration={1}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-0 h-[100%] skew-y-12",
        )}
      />
    </div>
  );
};

export default home;
