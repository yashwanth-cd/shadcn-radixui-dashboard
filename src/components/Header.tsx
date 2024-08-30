"use client";

import { BellIcon } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Header() {
  const [notifications, setNotifications] = useState<any>([
    {
      text: "This is a notification",
      date: "01-02-2013",
      isRead: false,
    },
    {
      text: "This is a notification",
      date: "01-02-2013",
      isRead: false,
    },
    {
      text: "This is a notification",
      date: "01-02-2013",
      isRead: true,
    },
    {
      text: "This is a notification",
      date: "01-02-2013",
      isRead: true,
    },
  ]);

  const unReadNotifications = notifications.filter(
    (item: any) => item.isRead === false
  ).length;

  return (
    <div className="p-4 border-b gap-4 grid grid-cols-2">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="relative border p-3 f">
              <div
                className={`h-5 w-5 text-white flex items-right justify-center rounded-full my-1 absolute -top-2 -right-1 ${
                  notifications.find((x: any) => x.isRead === true)
                    ? "bg-green-500"
                    : "bg-neutral-50"
                }`}
              >
                <p className="text-sm font-semibold">{unReadNotifications}</p>
              </div>
              <BellIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((item: any, key: number) => (
              <DropdownMenuLabel
                key={key}
                className="p-1 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2"
              >
                <div
                  className={`h-3 w-3 rounded-full my-1 ${
                    !item.isRead ? "bg-green-500" : "bg-neutral-200"
                  }`}
                ></div>
                <div>
                  <p className="font-normal">{item.text}</p>
                  <p className="text-xs text-neutral-500 font-normal">
                    {item.date}
                  </p>
                </div>
              </DropdownMenuLabel>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
