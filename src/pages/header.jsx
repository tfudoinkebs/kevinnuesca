import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/magicui/mode-toggle";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { VscHome } from "react-icons/vsc";
import { SiAboutdotme, SiOpenproject } from "react-icons/si";
import { MdOutlineContactMail } from "react-icons/md";
import BlurFade from "@/components/magicui/blur-fade";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = ({
  scrollToSection,
  homeRef,
  aboutRef,
  projectsRef,
  contactsRef,
}) => {
  const iconsData = [
    { Icon: VscHome, tooltip: "Home", ref: homeRef },
    { Icon: SiAboutdotme, tooltip: "About", ref: aboutRef },
    { Icon: SiOpenproject, tooltip: "Projects", ref: projectsRef },
    { Icon: MdOutlineContactMail, tooltip: "Contacts", ref: contactsRef },
    { Icon: ModeToggle, tooltip: "Mode", ref: null },
  ];

  return (
    <div className="fixed z-50 flex w-screen md:mt-4 md:justify-center">
      <div className="flex w-fit">
        <BlurFade
          delay={0.25}
          inView
          className="w-screen border-b-2 border-black p-2 backdrop-blur-xl md:w-full md:rounded-full md:border-2 md:p-0"
        >
          <Dock magnification={60} distance={100} direction="middle">
            {iconsData.map(({ Icon, tooltip, ref }, index) => (
              <DockIcon key={index}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {Icon === ModeToggle ? (
                        <div>
                          <Icon className="size-6" />
                        </div>
                      ) : (
                        <Button
                          variant="none"
                          onClick={() => ref && scrollToSection(ref)}
                        >
                          <Icon className="size-6 text-black dark:text-white" />
                        </Button>
                      )}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </DockIcon>
            ))}
          </Dock>
        </BlurFade>
      </div>
    </div>
  );
};

export default Header;
