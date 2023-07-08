import Navbar from "@/Components/Common/Navbar";
import FixedDetails from "@/Components/Home/FixedDetails";
import Link from "next/link";
import React from "react";

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="flex">
          <div>
            <FixedDetails />
          </div>

          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
}
