import Image from "next/image";
import React from "react";
import idolgroup from "../../assets/Images/idolgroup.png";
import sfs from "../../assets/Images/sfs.png";
import regularShop from "../../assets/Images/regularshop.png";
import bus from "../../assets/Images/bus365.png";
import cart24 from "../../assets/Images/cart24.png";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import Footer from "./Footer";

export default function Projects() {
  return (
    <div className="bg-white  dark:bg-[#0D0D0D]  rounded-2xl my-9">
      <div className=" py-12 px-2 sm:px-5 md:px-10  w-full p-8  ">
        <div className="flex items-center pb-8">
          <h2 className="text-xl lg:text-4xl  text-black dark:text-white ">
            Projects
          </h2>
          <div className="border border-green-400 w-28 ml-14 "></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {" "}
          <div className="bg-[#F8FBFB] dark:bg-[#1a1a1a] rounded-lg shadow-md">
            <div className="overflow-scroll h-96 w-full scrollbar-hide cursor-pointer">
              <Image src={cart24} alt=""></Image>
            </div>
            <div className="p-5">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#57e793]">
                Cart24
              </h2>
              <p className="text-xs text-black dark:text-[#d8d8d8]">
                Cart24:is a very wonderful eCommerce System, This eCommerce
                system is developed by Python and Django & frontend developed
                with Next js.It is mostly useful for any eCommerce Business and
                Dropshipping Business. It has a variety of features on eCommerce
                Management.
              </p>
              <div className="flex justify-between items-center pt-4">
                <Link
                  className=" text-green-400 flex items-center text-sm   hover:text-green-500"
                  href="https://cart24.com/"
                  target="_blank"
                >
                  Preview
                  <LuExternalLink className="inline-block ml-2" />
                </Link>
                
              </div>
            </div>
          </div>
          <div className="bg-[#F8FBFB] dark:bg-[#1a1a1a] rounded-lg shadow-md">
            <div className="overflow-scroll h-96 w-full scrollbar-hide cursor-pointer">
              <Image src={bus} alt=""></Image>
            </div>
            <div className="p-5">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#57e793]">
                Bus365
              </h2>
              <p className="text-xs text-black dark:text-[#d8d8d8]">
                Bus365 : Bus Reservation System with Website is a very wonderful
                Bus and fleet Booking System, This Bus reservation system is
                developed by PHP and Code Igniter & frontend developed by React
                js.It is mostly useful for any Bus, Fleet and Ticket Selling
                Company.It has a variety of features on Bus ticket Management.
              </p>
              <div className="flex justify-between items-center pt-4">
                <Link
                  className=" text-green-400 flex items-center text-sm   hover:text-green-500"
                  href="https://bus365demo.bdtask-demo.com/"
                  target="_blank"
                >
                  Preview
                  <LuExternalLink className="inline-block ml-2" />
                </Link>
                <Link
                  className=" text-green-400 flex items-center text-sm   hover:text-green-500"
                  href="https://bus365demo.bdtask-demo.com/backend/login"
                  target="_blank"
                >
                  Admin panel
                  <LuExternalLink className="inline-block ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#F8FBFB] dark:bg-[#1a1a1a] rounded-lg shadow-md">
            <div className="overflow-scroll h-96 w-full scrollbar-hide cursor-pointer">
              <Image src={idolgroup} alt=""></Image>
            </div>
            <div className="p-5">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#ffffff]">
                Idol Group
              </h2>
              <p className="text-xs text-black dark:text-[#d8d8d8]">
                It is a team project created with Nextjs, React Bootstrap, and
                Raw CSS. SEO Friendly More faster. Group of companys running
                website. And this website is on the ranking of Google Search
                engine
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
          <div className="bg-[#F8FBFB] dark:bg-[#1a1a1a] rounded-lg shadow-md">
            <div className="overflow-scroll h-96 w-full scrollbar-hide cursor-pointer">
              <Image src={sfs} alt=""></Image>
            </div>
            <div className="p-5">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#57e793]">
                Smart Field Service
              </h2>
              <p className="text-xs text-black dark:text-[#d8d8d8]">
                It is a team project created with Nextjs, React Bootstrap, and
                Raw CSS. SEO Friendly More faster. Our concerns running website.
                And this website is responsive for every device.
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
          <div className="bg-[#F8FBFB] dark:bg-[#1a1a1a] rounded-lg shadow-md">
            <div className="overflow-scroll h-96 w-full scrollbar-hide cursor-pointer">
              <Image src={regularShop} alt=""></Image>
            </div>
            <div className="p-5">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-l to-[#0d9244] from-[#ffffff] ">
                Regular Shop
              </h2>
              <p className="text-xs text-black dark:text-[#d8d8d8]">
                A Online market and it is a Personal project, Front end created
                with nextjs, tailwind CSS, User and admin role available.Only
                admin can change roles of users Authentication with firebase,
                and database with mongoDB using mongoose.
              </p>
              <div className="flex justify-between items-center pt-4">
                <Link
                  className=" text-green-400 flex items-center text-[10px]   lg:text-[12px]    hover:text-green-500"
                  href="https://regular-shop-bd.vercel.app/"
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
