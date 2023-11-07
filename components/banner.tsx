"use client";

import { useState, useEffect } from "react";

export default function Banner({text}: {text: string}) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isHidden ? "hidden" : "block"
      } fixed bottom-0 left-0 right-0 bg-yellow-300 p-2  text-center transition-transform duration-500 transform`}
    >
      <p className=" text-sm text-yellow-800">{text}</p>
    </div>
  );
}
