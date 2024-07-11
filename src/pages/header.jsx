import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/magicui/mode-toggle";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { VscHome } from "react-icons/vsc";
import { SiAboutdotme, SiOpenproject, SiGmail } from "react-icons/si";
import { MdOutlineContactMail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import BlurFade from "@/components/magicui/blur-fade";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const iconsData = [
  { Icon: VscHome, tooltip: "Home" },
  { Icon: SiAboutdotme, tooltip: "About" },
  { Icon: SiOpenproject, tooltip: "Projects" },
  { Icon: MdOutlineContactMail, tooltip: "Contacts" },
  { Icon: FaFacebook, tooltip: "Facebook" },
  { Icon: FaInstagram, tooltip: "Instagram" },
  { Icon: FaLinkedin, tooltip: "LinkedIn" },
  { Icon: SiGmail, tooltip: "Email" },
  { Icon: ModeToggle, tooltip: "Mode" },
];

const Header = () => {
  return (
    <div className="fixed z-50 mt-4 flex w-screen justify-center">
      <div className="flex w-fit">
        <BlurFade
          delay={0.25}
          inView
          className="rounded-full border-2 border-teal-500 backdrop-blur-xl"
        >
          <Dock magnification={60} distance={100}>
            {iconsData.map(({ Icon, tooltip }, index) => (
              <DockIcon key={index}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {/* Check if the Icon is ModeToggle and adjust rendering accordingly */}
                      {Icon === ModeToggle ? (
                        <div>
                          <Icon className="size-6" />
                        </div>
                      ) : (
                        <Button variant="none">
                          <Icon className="size-6 text-[#5046e6]" />
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
