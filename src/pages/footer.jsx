import React from "react";
import Meteors from "@/components/magicui/meteors";
import Globe from "@/components/magicui/globe";

const footer = () => {
  return (
    <footer className="mb-2 flex h-full flex-col justify-center text-center">
      {/* <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background">
        <Meteors number={30} />
        <Globe className="top-28" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div> */}
      <p className="flex items-center justify-center bg-background text-sm text-muted-foreground">
        kevinnuesca.me · 2024
      </p>
    </footer>
  );
};

export default footer;
