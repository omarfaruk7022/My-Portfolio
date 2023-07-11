import React from "react";
import { BiSolidNetworkChart } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Resume() {
  return (
    <div class="container bg-[#F8FBFB] dark:bg-[#0D0D0D] py-12 px-2 sm:px-5 md:px-10 lg:px-20">
      <h4 class="text-3xl dark:text-white font-medium mb-6">Working Skills</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="col-span-1">
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                HTML5
              </span>
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                90%
              </span>
            </div>
            <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
              <div className="bg-[#ca56f2]  h-1 rounded-full w-95%]"></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                CSS3
              </span>
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                85%
              </span>
            </div>
            <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
              <div className="bg-[#FF6464] h-1 rounded-full w-[85%]"></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                Bootstrap
              </span>
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                80%
              </span>
            </div>
            <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
              <div className="bg-[#5185d4]  h-1 rounded-full w-[80%]"></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                Javascript (ES6)
              </span>
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                85%
              </span>
            </div>
            <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
              <div className="bg-[#9272d4]  h-1 rounded-full w-[85%]"></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                Reactjs
              </span>
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                90%
              </span>
            </div>
            <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
              <div className="bg-[#BCECDE]  h-1 rounded-full w-[90%]"></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                Nextjs
              </span>
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                85%
              </span>
            </div>
            <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
              <div className="bg-[#1D9BF0]  h-1 rounded-full w-[85%]"></div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                Tailwind CSS
              </span>
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                95%
              </span>
            </div>
            <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
              <div className="bg-[#ca56f2]  h-1 rounded-full w-95%]"></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                Nodejs
              </span>
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                65%
              </span>
            </div>
            <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
              <div className="bg-[#FF6464] h-1 rounded-full w-[65%]"></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                Express
              </span>
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                65%
              </span>
            </div>
            <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
              <div className="bg-[#5185d4]  h-1 rounded-full w-[65%]"></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                MongoDB
              </span>
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                80%
              </span>
            </div>
            <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
              <div className="bg-[#9272d4]  h-1 rounded-full w-[80%]"></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                REST API
              </span>
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                86%
              </span>
            </div>
            <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
              <div className="bg-[#BCECDE]  h-1 rounded-full w-[86%]"></div>
            </div>
          </div>
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                React Redux
              </span>
              <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                60%
              </span>
            </div>
            <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
              <div className="bg-[#1D9BF0]  h-1 rounded-full w-[60%]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h4 className="text-3xl dark:text-white font-medium my-10">
          Education
        </h4>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#ca56f2", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">2015 - 2020</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Muhammadia Makhzanul uloom
            </h4>
            <p>Hedayatunnahu to Jalalain jamat in arabic syllabus</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#9272d4", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">2020 - 2021</h3>
            <h4 className="vertical-timeline-element-subtitle">
             Jamia Islamia Darul Uloom Madania Jatra Bari
            </h4>
            <p>Mekhkat jamat in arabic syllabus</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">2022</h3>
            <h4 className="vertical-timeline-element-subtitle text-sm">
           Programming Hero
            </h4>
            <p>Complete Web Development Course With Jhankar Mahbub</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#FF6464", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              2021 - 2022
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-sm">
            Completion of the Hadith at jamia islamia darul uloom madania jatra bari
            </h4>
            <p>Completion of Education in Madrasa syllabus</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              2023 - Present
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-sm">
            Markaze ihyaus sunnah
            </h4>
            <p>Ifta </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaGraduationCap />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}
