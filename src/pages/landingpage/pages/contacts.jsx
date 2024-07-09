import React from "react";
import RetroGrid from "@/components/magicui/retro-grid";

const contacts = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <h1 className="text-4xl font-bold text-black dark:text-white">
        Contacts
      </h1>
      <RetroGrid />
    </div>
  );
};

export default contacts;
