import React, { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaToolbox } from "react-icons/fa";
import Resume from "./Resume";

export default function TabRouting() {
  return (
    <div>
      <div class="border-b border-gray-200 dark:border-gray-700  ">
        <div className="flex gap-5 bg-white dark:bg-[#111111] p-8 rounded-t-2xl ">
          <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
            <div
              id="tabs-with-underline-item-1"
              data-hs-tab="#tabs-with-underline-1"
              aria-controls="tabs-with-underline-1"
              role="tab"
              className="cursor-pointer bg-[#F3F6F6] dark:bg-[#1D1D1D] rounded-2xl p-2 text-center w-20 h-20 hover:bg-gradient-to-l to-[#23CE6B] from-[#286e45] hover:text-white active "
            >
              <p className="mt-3">
                <span className=" flex justify-center text-xl">
                  <AiOutlineUser />{" "}
                </span>
                <span className=" flex justify-center">About</span>
              </p>
            </div>
            <div
              id="tabs-with-underline-item-2"
              data-hs-tab="#tabs-with-underline-2"
              aria-controls="tabs-with-underline-2"
              role="tab"
              className="cursor-pointer bg-[#F3F6F6] dark:bg-[#1D1D1D] rounded-2xl p-2 text-center w-20 h-20 hover:bg-gradient-to-l to-[#23CE6B] from-[#286e45] hover:text-white active "
            >
              <p className="mt-3">
                <span className=" flex justify-center text-xl">
                  <HiOutlineDocumentText />{" "}
                </span>
                <span className=" flex justify-center">Resume</span>
              </p>
            </div>
            <div
              id="tabs-with-underline-item-3"
              data-hs-tab="#tabs-with-underline-3"
              aria-controls="tabs-with-underline-3"
              role="tab"
              className="cursor-pointer bg-[#F3F6F6] dark:bg-[#1D1D1D] rounded-2xl p-2 text-center w-20 h-20 hover:bg-gradient-to-l to-[#23CE6B] from-[#286e45] hover:text-white active "
            >
              <p className="mt-3">
                <span className=" flex justify-center text-xl">
                  <FaToolbox />{" "}
                </span>
                <span className=" flex justify-center">Projects</span>
              </p>
            </div>
          </nav>
        </div>
      </div>

      <div class="mt-3">
        <div
          id="tabs-with-underline-1"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-1"
        >
          <About />
        </div>
        <div
          id="tabs-with-underline-2"
          class="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-2"
        >
          <Resume />
        </div>
        <div
          id="tabs-with-underline-3"
          class="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-underline-item-3"
        >
          <Projects />
        </div>
      </div>
    </div>
  );
}
