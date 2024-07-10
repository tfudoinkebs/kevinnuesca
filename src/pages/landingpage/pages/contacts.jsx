import React, { useState } from "react";
import RetroGrid from "@/components/magicui/retro-grid";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IoSend } from "react-icons/io5";
import BlurIn from "@/components/magicui/blur-in";
import BlurFade from "@/components/magicui/blur-fade";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contacts = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 500) {
      setMessage(inputText);
    }
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-start overflow-hidden bg-background px-4">
      <BlurFade
        delay={0.25}
        inView
        className={"flex w-full flex-col justify-center gap-2 py-4 text-center"}
      >
        <BlurIn
          word="Contact me!"
          className="mt-16 font-bold text-black dark:text-white"
          duration={2}
        />
        <p className="text-xsx text-center md:text-sm">
          Let's connect! Reach out for inquiries, collaborations, or just a
          friendly chat.
        </p>
      </BlurFade>

      <Card className="z-10 mb-20 w-full border-2 bg-background p-4 md:w-[500px]">
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input id="name" placeholder="Name" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message-2">
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  placeholder="Type your message here."
                  id="message-2"
                  value={message}
                  onChange={handleChange}
                />
                <p className="flex justify-end text-xs text-muted-foreground">
                  {message.length}/500
                </p>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            variant="send"
            size="send"
            className="flex gap-2 text-sm font-bold text-white"
          >
            Send <IoSend />
          </Button>
        </CardFooter>

        <h4 className="flex w-full justify-center py-4 text-center">
          or contact me at...
        </h4>

        <div className="flex justify-center gap-4 text-center">
          <button className="hover:scale-105 hover:text-teal-500">
            <FaFacebook />
          </button>
          <button className="hover:scale-105 hover:text-teal-500">
            <FaInstagram />
          </button>
          <button className="hover:scale-105 hover:text-teal-500">
            <FaTwitter />
          </button>
          <button className="hover:scale-105 hover:text-teal-500">
            <FaLinkedin />
          </button>
          <button className="hover:scale-105 hover:text-teal-500">
            <BiLogoGmail />
          </button>
        </div>
      </Card>

      <RetroGrid />

      <p className="flex items-center justify-center bg-background text-sm text-muted-foreground">
        kevinnuesca.me · 2024
      </p>
    </div>
  );
};

export default Contacts;
