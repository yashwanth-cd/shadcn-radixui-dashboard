import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

export default function UserItem(props: any) {
  if (props.isSidebarOpen) {
    return (
      <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
        <div className="avatar rounded-full max-h-10 max-w-10 bg-emerald-500 text-white font-[700]">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="rounded-full"
            />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>
        <div className="grow">
          <p className="text-[16px] font-bold">Yashwanth sai</p>
          <p className="text-[12px] text-neutral-500">
            Yashwanth.3270@gmail.com
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center gap-2 p-2">
        <div className="avatar rounded-full max-w-10">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="rounded-full"
            />
            <AvatarFallback>Y</AvatarFallback>
          </Avatar>
        </div>
      </div>
    );
  }
}
