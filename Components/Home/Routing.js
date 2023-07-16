import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Routing() {
  const router = useRouter();
  return (
    <div>
      <div className="bg-white dark:bg-[#111111]  rounded-lg flex p-5 gap-1 w-[200px] ml-28 mt-0 lg:mt-28">
        <Link
          href={"/about"}
          className={`bg-[#F3F6F6] dark:bg-[#1D1D1D] rounded-lg p-2 w-28 text-center hover:bg-gradient-to-l to-[#23CE6B] from-[#286e45] hover:text-white ${
            router.pathname == "/about"
              ? "text-white bg-gradient-to-l to-[#23CE6B] from-[#286e45]"
              : ""
          } `}
        >
          <p className="">
            <span className="flex justify-center">
              <AiOutlineUser />{" "}
            </span>
            <span className="flex justify-center  ">About</span>
          </p>
        </Link>
        <Link
          href={"/projects"}
          className={`bg-[#F3F6F6] dark:bg-[#1D1D1D] rounded-lg p-2 w-28 text-center hover:bg-gradient-to-l to-[#23CE6B] from-[#286e45] hover:text-white ${
            router.pathname == "/projects"
              ? "text-white bg-gradient-to-l to-[#23CE6B] from-[#286e45]"
              : ""
          } `}
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
