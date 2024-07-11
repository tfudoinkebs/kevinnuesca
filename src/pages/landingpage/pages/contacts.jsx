import React, { useState } from "react";
import RetroGrid from "@/components/magicui/retro-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IoSend } from "react-icons/io5";
import BlurIn from "@/components/magicui/blur-in";
import BlurFade from "@/components/magicui/blur-fade";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Contacts = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 500) {
      setMessage(inputText);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      content: `New message from ${name} (${email}): ${message}`,
    };

    const webhookUrl =
      "https://discord.com/api/webhooks/1260888231424167956/NeZ4yrGIELUqTwA7vYU83MD8_ptAEci5jpSBmsaA3iV4gtIndYebpX0u5TbmD8zE4Z3K";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setDialogOpen(true);
        // Clear the form fields
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message.");
    }
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center overflow-hidden bg-background px-8">
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

      <Card className="z-10 mb-20 grid w-full grid-cols-1 border-2 bg-background p-4 px-4 md:w-3/5 lg:grid-cols-2">
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
            <CardFooter className="mt-4 flex justify-end">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    type="submit"
                    variant="send"
                    size="send"
                    className="flex gap-2 text-sm font-bold text-white"
                    disabled={(!message, !name, !email)}
                  >
                    Send <IoSend />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Message Sent</AlertDialogTitle>
                    <AlertDialogDescription>
                      Your message has been successfully sent!
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction onClick={() => setDialogOpen(false)}>
                      OK
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </form>
        </CardContent>

        <CardContent>
          <h4 className="flex w-full justify-center py-4 text-center">
            or contact me at...
          </h4>

          <div className="flex justify-center gap-4 text-center lg:flex-col">
            <Button
              variant="contactButton"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/wtf.kevs/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <FaFacebook className="size-6 text-teal-500" />
              <h2 className="hidden lg:block">Facebook</h2>
            </Button>
            <Button
              variant="contactButton"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/tfudoinkebs/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <FaInstagram className="size-6 text-teal-500" />
              <h2 className="hidden lg:block">Instagram</h2>
            </Button>
            <Button
              variant="contactButton"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/kevin-roi-nuesca-07b756281/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <FaLinkedin className="size-6 text-teal-500" />
              <h2 className="hidden lg:block">LinkedIn</h2>
            </Button>
            <Button
              variant="contactButton"
              onClick={() =>
                (window.location.href =
                  "mailto:nuesca.kevinroi@gmail.com?subject=Mail from your website&body=Hello there,")
              }
            >
              <BiLogoGmail className="size-6 text-teal-500" />
              <h2 className="hidden lg:block">Gmail</h2>
            </Button>
          </div>
        </CardContent>
      </Card>

      <RetroGrid />

      <p className="flex items-center justify-center bg-background text-sm text-muted-foreground">
        kevinnuesca.me · 2024
      </p>
    </div>
  );
};

export default Contacts;
