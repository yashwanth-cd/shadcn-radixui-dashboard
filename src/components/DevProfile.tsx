"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import Image from "next/image";
import { Bot, LogOut } from "lucide-react";

export default function DevProfile() {
  const screenWidth = window.innerWidth;
  console.log(screenWidth);
  return (
    <Drawer>
      <DrawerTrigger className="bg-transparent">
        Developer Profile 👨🏻
      </DrawerTrigger>
      <DrawerContent className="lg:w-[600px] flex flex-cols justify-center bottom-0 mx-auto ">
        <DrawerHeader className="flex flex-col justify-center items-center">
          <DrawerTitle>Yashwanth-cd</DrawerTitle>
          <DrawerDescription>
            <Bot width="50" height="50" />
          </DrawerDescription>
          <DrawerDescription>
            👋 Hi There, Thanks for chcekin` out!
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter className="items-center justify-center">
          <DrawerClose>
            <Button variant="outline" className="gap-1 flex ">
              <span>Cancel</span> <LogOut width="16" />
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
