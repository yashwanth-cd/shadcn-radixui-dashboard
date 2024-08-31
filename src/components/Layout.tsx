"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout(props: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(true);

  function handleSidebarToggle() {
    setIsSidebarOpen((val: boolean) => !val);
  }

  function handleDarkMode() {
    setIsDarkModeOn((val: boolean) => !val);
  }

  return (
    <div className="flex items-start justify-between min-h-screen">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        handleSidebarToggle={handleSidebarToggle}
      />
      <main className="grid h-full w-full">
        <div
          className={`${
            isSidebarOpen
              ? "left-[300px]"
              : "left-[100px] transition-all duration-300"
          } fixed top-0 right-0 bg-white/30 backdrop-blur-md z-10`}
        >
          <Header isDarkModeOn={isDarkModeOn} handleDarkMode={handleDarkMode} />
        </div>
        <div
          className={` ${
            isSidebarOpen ? "transition-all ease-in-out duration-300" : ""
          } p-6 mt-20`}
        >
          {props.children}
        </div>
      </main>
    </div>
  );
}
