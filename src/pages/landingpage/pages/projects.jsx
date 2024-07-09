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
import { Button } from "@/components/ui/button";

const projects = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-start overflow-hidden bg-background">
      <div className="flex w-full flex-col items-center justify-start pt-20">
        <BlurIn
          word="Projects"
          className="font-bold text-black dark:text-white"
          duration={2}
        />

        <ShineBorder
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          className="relative flex h-full w-1/4 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
        >
          <div className="w-full border-b shadow-md">
            <img src="./adventura.png" className="object-cover" alt="" />
          </div>

          <div className="flex-col">
            <CardHeader>
              <CardTitle>Adventura 360</CardTitle>
              <CardDescription className="text-muted-foreground">
                An Interactive Campus Tour for Cavite State University Don
                Severino Delas Alas Campus
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>react</Button>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </div>
        </ShineBorder>
      </div>
      <Ripple />
    </div>
  );
};

export default projects;
