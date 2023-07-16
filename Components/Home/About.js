import React from "react";
import react from "../../assets/Images/react.png";
import ui from "../../assets/Images/ui.png";
import web from "../../assets/Images/web.png";
import marketing from "../../assets/Images/marketing.png";
import management from "../../assets/Images/management.png";

import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="bg-white dark:bg-[#111111] w-full rounded-2xl p-8 my-9 py-12  ">
        <div className="flex items-center ">
          <h2 className="text-xl lg:text-4xl  text-black dark:text-white ">
            About Me
          </h2>
          <div className="border border-pink-400 w-28 ml-14 "></div>
        </div>
        <div>
          <p className="text-[15px] text-[#646464] dark:text-[#A6A6A6] py-5">
            A self-motivated, creative, hardworking person ambitious individual
            with proficiency capable of solving many problems at once, and I
            have a strong ability to communicate and work in a team, I have the
            ability to finish any task with complete perfection before the
            deadline, Looking for the position of Front-end Developer in
            (Reactjs) in Smart Field Service company to implement my working
            skills.
          </p>
        </div>
        <div className="flex items-center py-5">
          <h2 className="text-xl lg:text-4xl text-black dark:text-white ">
            What I do
          </h2>
          <div className="border border-pink-400 w-28 ml-14 "></div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-9 p-0 xl:p-5">
          <div className="border-0 bg-[#FCF4FF] dark:bg-[#111111] dark:border-2 w-full  dark:border-[#292929] h-full xl:h-46 rounded-lg">
            <div className="flex py-3">
              <Image
                className="w-14 h-14 md:w-16 md:h-16"
                alt=""
                w={100}
                src={ui}
              ></Image>
              <div className=" p-1">
                <h2 className="text-[22px] py-1 text-black  dark:text-white">
                  Ui/Ux Design
                </h2>
                <p className="text-[12px] xl:text-[16px] ">
                  Ui/Ux Design is the art of crafting seamless digital
                  experiences that delight users and elevate the functionality,
                  aesthetics.
                </p>
              </div>
            </div>
          </div>
          <div className="border-0 bg-[#FEFAF0] dark:bg-transparent dark:border-2 dark:border-[#292929] w-full  h-full xl:h-46 rounded-lg ">
            <div className="flex py-3">
              <Image
                className="w-14 h-14 md:w-16 md:h-16"
                alt=""
                w={100}
                src={web}
              ></Image>
              <div className=" p-1">
                <h2 className="text-[22px]  py-1 text-black  dark:text-white">
                  Web Development
                </h2>
                <p className="text-[12px] xl:text-[16px] ">
                  Web development brings digital ideas to life through coding
                  and design.
                </p>
              </div>
            </div>
          </div>
          <div className="border-0 bg-[#FFF4F4]  dark:bg-transparent  dark:border-2 dark:border-[#292929] w-full  h-full xl:h-46 rounded-lg">
            <div className="flex py-3">
              <Image
                className="w-14 h-14 md:w-16 md:h-16"
                alt=""
                w={100}
                src={marketing}
              ></Image>
              <div className="p-1">
                <h2 className="text-[22px] py-1 text-black  dark:text-white">
                  Digital Marketing
                </h2>
                <p className="text-[12px] xl:text-[16px] ">
                  Digital marketing drives online success through strategic
                  online advertising and promotion.
                </p>
              </div>
            </div>
          </div>
          <div className="border-0 bg-[#FCF4FF] dark:bg-transparent dark:border dark:border-[#292929] w-full  h-full xl:h-46 rounded-lg">
            <div className="flex py-3">
              <Image
                className="w-14 h-14 md:w-16 md:h-16"
                alt=""
                w={100}
                src={management}
              ></Image>
              <div className=" p-1">
                <h2 className="text-[22px] py-1 text-black  dark:text-white">
                Software Management
                </h2>
                <p className="text-[12px] xl:text-[16px] ">
                  Management involves coordinating and overseeing activities to
                  achieve organizational goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
