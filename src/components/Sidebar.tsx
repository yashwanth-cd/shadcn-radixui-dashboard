"use client";

import React, { useState } from "react";
import UserItem from "./UserItem";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Bell,
  EarthLock,
  Inbox,
  Logs,
  MoveHorizontal,
  ReceiptText,
  Settings,
  User,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Sidebar(props: any) {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          text: "Profile",
          icon: <User />,
        },
        {
          link: "/",
          text: "Inbox",
          icon: <Inbox />,
        },
        {
          link: "/",
          text: "Notifications",
          icon: <Bell />,
        },
        {
          link: "/",
          text: "Billing",
          icon: <ReceiptText />,
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          text: "General Settings",
          icon: <Settings />,
        },
        {
          link: "/",
          text: "Privacy",
          icon: <EarthLock />,
        },

        {
          link: "/",
          text: "Logs",
          icon: <Logs />,
        },
      ],
    },
  ];

  return (
    <div
      className={`border-r ${
        props.isSidebarOpen ? "min-w-[300px]" : "min-w-[100px]"
      }`}
    >
      <div
        className={`${
          props.isSidebarOpen
            ? `w-[300px] min-w-[300px]`
            : "w-[100px] min-w-[100px]"
        } fixed min-h-screen border-r flex flex-col gap-4 p-4 transition-all ease-in-out duration-300`}
      >
        <Button
          variant="outline"
          className={`${
            props.isSidebarOpen
              ? `top-[420px] left-[286px]`
              : `top-[420px] left-[85px]`
          } absolute p-1 transition-all ease-in-out`}
          onClick={props.handleSidebarToggle}
        >
          <MoveHorizontal size={18} />
        </Button>
        <div>
          <UserItem isSidebarOpen={props.isSidebarOpen} />
        </div>
        <div className="grow">
          <Command>
            <CommandList>
              {menuList.map((menu: any, key: number) => (
                <CommandGroup heading={menu.group} key={key}>
                  {menu.items.map((option: any, optionKey: number) => (
                    <CommandItem
                      key={optionKey}
                      className="gap-4 cursor-pointer transition-all ease-in-out duration-300 text-nowrap"
                    >
                      <span
                        className={`opacity-100 delay-130 transition-opacity duration-300 ml-2`}
                      >
                        {option.icon}
                      </span>
                      {props.isSidebarOpen && (
                        <span
                          className={`${
                            props.isSidebarOpen
                              ? "opacity-100 delay-150"
                              : "opacity-0"
                          } transition-opacity duration-300`}
                        >
                          {option.text}
                        </span>
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </div>
        <div>Settings / Notifications</div>
      </div>
    </div>
  );
}
