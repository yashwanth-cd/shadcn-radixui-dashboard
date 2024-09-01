"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout(props: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(true);
  const [screenWidth, setScreenWidth] = useState<number>(1280);

  function handleSidebarToggle() {
    setIsSidebarOpen((val: boolean) => !val);
  }

  function handleDarkMode() {
    setIsDarkModeOn((val: boolean) => !val);
  }

  // Updating the screen width on screen resize
  useEffect(() => {
    function updateScreenWidth() {
      setScreenWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateScreenWidth);

      // Check the screen width initially
      if (screenWidth < 1280) {
        setIsSidebarOpen(false);
      }

      return () => window.removeEventListener("resize", updateScreenWidth);
    }
  }, [screenWidth]);

  return (
    <div className="flex items-start justify-start lg:min-w-fit min-h-screen sm:-z-20">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        handleSidebarToggle={handleSidebarToggle}
      />
      <main className="grid h-full">
        <div
          className={`fixed top-0 right-0 bg-white/30 backdrop-blur-md z-10  transition-all duration-300 ${
            isSidebarOpen ? "left-[300px] w-[calc(100%-300px)]" : "left-[100px]"
          } `}
        >
          <Header isDarkModeOn={isDarkModeOn} handleDarkMode={handleDarkMode} />
        </div>
        <div className={`transition-all ease-in-out duration-300 p-6 mt-20`}>
          {props.children}
        </div>
      </main>
    </div>
  );
}
