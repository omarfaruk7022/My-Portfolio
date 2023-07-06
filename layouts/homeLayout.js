import Navbar from "@/Components/Common/Navbar";
import FixedDetails from "@/Components/Home/FixedDetails";
import React from "react";

export default function HomeLayout({ children }) {
  return (
    <>
      <div className="px-56">
        <Navbar />
        <div className="grid grid-cols-3 mt-[100px]">
          <div className="">
            <FixedDetails />
          </div>
          <div className="col-span-2">
            <div className="w-full h-full">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
