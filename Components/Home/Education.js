import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function Education() {
  return (
    <div>
      <div className="">
        <div className="flex items-center pb-8">
          <h2 className="text-xl lg:text-4xl  text-black dark:text-white ">
            Education{" "}
          </h2>
          <div className="border border-green-400 w-28 ml-14 "></div>
        </div>
        <VerticalTimeline animate={false}>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <div className="bg-white dark:bg-black p-5 text-[#505050] dark:text-[#d8d8d8] ">
              <h3 className="vertical-timeline-element-title">
                2023 - Present
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-sm">
                Markaze ihyaus sunnah
              </h4>
              <p>Ifta (Research on Fatwa) </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#FF6464", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <div className="bg-white dark:bg-black p-5 text-[#505050] dark:text-[#d8d8d8] ">
              <h3 className="vertical-timeline-element-title">2021 - 2022</h3>
              <h4 className="vertical-timeline-element-subtitle text-sm">
                Completion of the Hadith at jamia islamia darul uloom madania
                jatra bari
              </h4>
              <p>Completion of Education in Madrasa syllabus</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <div className="bg-white dark:bg-black p-5 text-[#505050] dark:text-[#d8d8d8] ">
              <h3 className="vertical-timeline-element-title">2022</h3>
              <h4 className="vertical-timeline-element-subtitle text-sm">
                Programming Hero
              </h4>
              <p>Complete Web Development Course With Jhankar Mahbub</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#9272d4", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <div className="bg-white dark:bg-black p-5 text-[#505050] dark:text-[#d8d8d8] ">
              <h3 className="vertical-timeline-element-title">2020 - 2021</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Jamia Islamia Darul Uloom Madania Jatra Bari
              </h4>
              <p>Mekhkat jamat in arabic syllabus</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            iconStyle={{ background: "#ca56f2", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <div className="bg-white dark:bg-black p-5 text-[#505050] dark:text-[#d8d8d8] ">
              <h3 className="vertical-timeline-element-title">2015 - 2020</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Muhammadia Makhzanul uloom
              </h4>
              <p>Hedayatunnahu to Jalalain jamat in arabic syllabus</p>
            </div>
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
