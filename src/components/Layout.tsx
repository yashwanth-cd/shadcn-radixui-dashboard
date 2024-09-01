"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout(props: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(true);
  const windowSize = useWindowSize();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
      function handleResize() {
        setWindowSize(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      handleResize();

      // Check the screen width initially
      if (windowSize < 1280) {
        setIsSidebarOpen(false);
      }

      return () => window.removeEventListener("resize", handleResize);
    }, [windowSize]);
  }

  function handleSidebarToggle() {
    setIsSidebarOpen((val: boolean) => !val);
  }

  function handleDarkMode() {
    setIsDarkModeOn((val: boolean) => !val);
  }

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
