import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/magicui/mode-toggle";

const Header = () => {
  return (
    <div className="fixed z-50 flex w-screen border-b p-4 backdrop-blur-xl">
      <div className="flex w-full justify-between">
        <button>logo</button>
        <div className="flex gap-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Projects</Button>
          <Button variant="ghost">Contacts</Button>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
