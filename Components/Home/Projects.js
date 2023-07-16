import Image from "next/image";
import React from "react";
import idolgroup from "../../assets/Images/idolgroup.png";
import sfs from "../../assets/Images/sfs.png";
import bmw from "../../assets/Images/bmw.png";
import prime from "../../assets/Images/prime.png";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="bg-[#F8FBFB]  dark:bg-[#0D0D0D] py-12 px-2 sm:px-5 md:px-10  w-full rounded-2xl p-8 my-9 ">
      <div className="flex items-center pb-8">
        <h2 className="text-xl lg:text-4xl  text-black dark:text-white ">
          Projects
        </h2>
        <div className="border border-pink-400 w-28 ml-14 "></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        <div className="bg-[#F3F6F6] dark:bg-[#1a1a1a] rounded-lg">
          <div className="overflow-scroll h-96 w-full scrollbar-hide">
            <Image src={idolgroup} alt=""></Image>
          </div>
          <div className="p-5">
            <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#ffffff]">
              Idol Group
            </h2>
            <p className="text-xs">
              It is a team project created with Nextjs, React Bootstrap, and Raw
              CSS. SEO Friendly More faster. Group of companys running website.
              And this website is on the ranking of Google Search engine
            </p>
            <div className="flex justify-between items-center pt-4">
              <Link
                className=" text-green-400 flex items-center text-sm  hover:text-green-500"
                href="https://idolgroup.com.bd/"
                target="_blank"
              >
                Preview
                <LuExternalLink className="inline-block ml-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#F3F6F6] dark:bg-[#1a1a1a] rounded-lg">
          <div className="overflow-scroll h-96 w-full scrollbar-hide">
            <Image src={sfs} alt=""></Image>
          </div>
          <div className="p-5">
            <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#57e793]">
              Smart Field Service
            </h2>
            <p className="text-xs text-black dark:text-[#d8d8d8]">
              It is a team project created with Nextjs, React Bootstrap, and Raw
              CSS. SEO Friendly More faster. Our concerns running website. And
              this website is responsive for every device.
            </p>
            <div className="flex justify-between items-center pt-4">
              <Link
                className=" text-green-400 flex items-center text-sm  hover:text-green-500"
                href="http://www.smartfieldservice.com/"
                target="_blank"
              >
                Preview
                <LuExternalLink className="inline-block ml-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#F3F6F6] dark:bg-[#1a1a1a] rounded-lg">
          <div className="overflow-scroll h-96 w-full scrollbar-hide">
            <Image src={bmw} alt=""></Image>
          </div>
          <div className="p-5">
            <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#ffffff] ">
              BMW
            </h2>
            <p className="text-xs text-black dark:text-[#d8d8d8]">
              Front end created with nextjs, next theme, tailwind CSS, and prime
              react. User and admin role availabled.Only admin can change roles
              of users Authectication with firebase, and database with mongoDB
              mongoose.
            </p>
            <div className="flex justify-between items-center pt-4">
              <Link
                className=" text-green-400 flex items-center text-[10px]   lg:text-[12px]    hover:text-green-500"
                href="https://bmw-theta.vercel.app/"
                target="_blank"
              >
                Preview
                <LuExternalLink className="inline-block ml-2" />
              </Link>
              <Link
                className=" text-green-400 flex items-center text-[10px]   lg:text-[12px]   hover:text-green-500"
                href="https://github.com/omarfaruk7022/BMW"
                target="_blank"
              >
                Github Client
                <LuExternalLink className="inline-block ml-2" />
              </Link>
              <Link
                className=" text-green-400 flex items-center text-[10px]   lg:text-[12px]    hover:text-green-500"
                href="https://github.com/omarfaruk7022/BMW-Server"
                target="_blank"
              >
                Github Server
                <LuExternalLink className="inline-block ml-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#F3F6F6] dark:bg-[#1a1a1a] rounded-lg">
          <div className="overflow-scroll h-96 w-full scrollbar-hide">
            <Image src={prime} alt=""></Image>
          </div>
          <div className="p-5">
            <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#57e793]">
              Prime Candidates
            </h2>
            <p className="text-xs text-black dark:text-[#d8d8d8]">
              A Hiring agency application, Made with Nextjs, with Responsive and
              exclusive design. Payment implemented with stripe, secured
              routing,Every user has permission to see some routes not all in
              Dashboard. .
            </p>
            <div className="flex justify-between items-center pt-4">
              <Link
                className=" text-green-400 flex items-center text-[10px]  lg:text-[12px]   hover:text-green-500"
                href="https://prime-candidates-client.vercel.app/"
                target="_blank"
              >
                Preview
                <LuExternalLink className="inline-block ml-2" />
              </Link>
              <Link
                className=" text-green-400 flex items-center text-[10px]  lg:text-[12px]   hover:text-green-500"
                href="https://github.com/omarfaruk7022/prime-candidates-client"
                target="_blank"
              >
                Github Client
                <LuExternalLink className="inline-block ml-2" />
              </Link>
              <Link
                className=" text-green-400 flex items-center text-[10px]  lg:text-[12px]   hover:text-green-500"
                href="https://github.com/dev-weirdo/prime-candidates-backend"
                target="_blank"
              >
                Github Server
                <LuExternalLink className="inline-block ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
