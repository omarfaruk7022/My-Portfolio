import Navbar from "@/Components/Common/Navbar";
import FixedDetails from "@/Components/Home/FixedDetails";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import React from "react";
import Routing from "@/Components/Home/Routing";

export default function HomeLayout({ children }) {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="flex px-56">
          <div className="">
            <div className="">
              <FixedDetails />
            </div>
          </div>
          <div className="">
           <Routing />
            <div className="">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
