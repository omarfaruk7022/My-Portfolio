import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";

export default function Routing() {
  return (
    <div>
      <div className="bg-white  rounded-lg flex p-5 gap-1 w-[200px] ml-28 mt-28">
        <Link
          href={"/about"}
          className="bg-[#F3F6F6] dark:bg-gray-500 rounded-lg p-2 w-28 text-center hover:bg-gradient-to-l to-red-400 from-pink-800 hover:text-white "
        >
          <p className="">
            <span className="flex justify-center">
              <AiOutlineUser />{" "}
            </span>
            <span className="flex justify-center  ">
              About
            </span>
          </p>
        </Link>
        <Link
          href={"/projects"}
          className="bg-[#F3F6F6] dark:bg-gray-500 rounded-lg p-2 w-28 text-center hover:bg-gradient-to-l to-red-400 from-pink-800 hover:text-white"
        >
          <p className="">
            <span className="flex justify-center">
              <AiOutlineUser />{" "}
            </span>
            <span className="flex justify-center">Projects</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
