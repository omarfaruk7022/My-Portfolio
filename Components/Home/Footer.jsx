import React from "react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <div className="bg-[#F8FBFB]  dark:bg-[#1D1D1D] h-20 flex justify-center items-center rounded-b-2xl">
        <h2 className="text-sm">
          © {year} All Rights Reserved By Muhammad Omar Faruk
        </h2>
      </div>
    </div>
  );
}


