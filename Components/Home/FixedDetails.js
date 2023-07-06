import Image from "next/image";
import React from "react";
import profile from "../../assets/Images/20220930_173528_HDR[1].jpg";
import HomeLayout from "@/layouts/homeLayout";

export default function FixedDetails() {
  return (
    <div>
      <div className="bg-white  dark:bg-[#111111] w-80 rounded-lg p-4  ">
        <div>
          <Image
            className="rounded-xl  m-auto"
            draggable={false}
            src={profile}
            alt="profile"
            width={220}
          ></Image>
         <div className="">
            <h2 className="text-2xl font-bold text-center">Muhammad Omar Faruk</h2>
         </div>
        </div>
      </div>
    </div>
  );
}

FixedDetails.Layout = HomeLayout;
