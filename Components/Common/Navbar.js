import React from "react";
import ThemeToggler from "./ThemeToggler";

export default function Navbar() {
  return (
    <div className="flex justify-between px-56  py-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200">
          Portfolio
        </h1>
      </div>
      <div className="">
        <ThemeToggler />
      </div>
    </div>
  );
}
