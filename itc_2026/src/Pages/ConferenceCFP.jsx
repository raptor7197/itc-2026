import React from "react";
import ColourfulText from "../components/ui/colourful-text";
import { motion } from "motion/react";
import Header from "./Components/Header";
import Marquee from "react-fast-marquee";

function ConferenceCFP() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-16">
        <img
          src="/CFPHeading.png"
          style={{ width: "100vw", zIndex: "-50" }}
        ></img>
      </div>
      {/* <p
        className="text-white mt-10 lg:text-5xl md:text-4xl text-3xl text-center font-bold "
        style={{ fontFamily: '"Poppins", arial' }}
      >
        IMPORTANT DATES
      </p>
      <div className="mt-10 textbg">
        <div className="h-[5px] bg-white "></div>

        <div
          className="text-white text-center text-4xl lg:text-5xl mt-16 w-[100vw] font-bold "
          style={{ fontFamily: '"Poppins", arial' }}
        >
          Regular Papers
        </div>
        <div className="mt-12 w-[100vw]  md:gap-0 ">
          <div className="flex flex-col items-center md:flex-row justify-evenly">
            <div
              className="bg-[#00E0FF] text-center mb-6 md:mb-0 font-bold lg:w-[25vw] md:w-[30vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-7"
              style={{ borderRadius: "60px" }}
            >
              Paper Submission Deadline
              <br /> 22 April, 2025 (Closed)
            </div>
            <div
              className="bg-[#00E0FF] text-center mb-6 md:mb-0 font-bold md:w-[30vw] lg:w-[25vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-7"
              style={{ borderRadius: "60px" }}
            >
              Author Notification
              <br /> 5 June, 2025
            </div>
          </div>
          <div className="flex flex-row md:mt-12 mt-6 mb-6 justify-evenly">
            <div
              className="bg-[#00E0FF] text-center md:mb-0 font-bold lg:w-[25vw] md:w-[30vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-3"
              style={{ borderRadius: "60px" }}
            >
              Camera-ready Paper and IEEE Copyright Transfer Due
              <br /> 20 June, 2025
            </div>
          </div>
        </div>

        <div
          className="text-white text-center text-4xl lg:text-5xl mt-16 font-bold "
          style={{ fontFamily: '"Poppins", arial' }}
        >
          Posters
        </div>
        <div className="mt-12 w-[100vw]">
          <div className="flex flex-col items-center md:flex-row justify-evenly">
            <div
              className="bg-[#00E0FF] text-center mb-6 md:mb-0 font-bold lg:w-[25vw] md:w-[30vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-7"
              style={{ borderRadius: "60px" }}
            >
              Poster Submission Deadline
              <br /> 06 June, 2025
            </div>
            <div
              className="bg-[#00E0FF] text-center mb-6 md:mb-0 font-bold md:w-[30vw] lg:w-[25vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-7"
              style={{ borderRadius: "60px" }}
            >
              Author Notification
              <br /> 18 June, 2025
            </div>
          </div>
          <div className="flex flex-row md:mt-12 mt-6 mb-6 justify-evenly">
            <div
              className="bg-[#00E0FF] text-center md:mb-0 font-bold lg:w-[25vw] md:w-[30vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-3"
              style={{ borderRadius: "60px" }}
            >
              Camera-ready Poster Submission Due
              <br /> 25 June, 2025
            </div>
          </div>
        </div>

      

        <div className="h-[5px] bg-white "></div>
      </div> */}
      <div>
        {/* <div className="mt-10 bg-black py-2 lg:text-5xl md:text-4xl text-3xl  font-bold text-center text-blue-500">
          <Marquee className="h-[20vw] md:h-[10vw] h-[8vw]">
            <div className="mx-5 text-blue-300">Call For Papers</div>
            <div className="mx-5"> • </div>
            <div className="mx-5 text-blue-300">Call For Posters is Live</div>
            <div className="mx-5"> • </div>
            <div className="mx-5 text-blue-300">Call For Papers</div>
            <div className="mx-5"> • </div>
            <div className="mx-5 text-blue-300">Call For Posters is Live</div>
            <div className="mx-5"> • </div>
          </Marquee>
        </div> */}
        

        <div
          className="mt-10 mx-8 p-6 pb-10 rounded-xl border-4 border-blue-500"
          style={{ fontFamily: '"Poppins", arial' }}
        >
          <p className="text-justify text-white text-xl mx-10">
            International Test Conference is the world’s premier venue dedicated
            to the electronic test of devices, boards and systems—covering the
            complete cycle from design verification, design-for-test,
            design-for-manufacturing, silicon debug, manufacturing test, system
            test, diagnosis and failure analysis, and back to process and design
            improvement. At ITC India, design, test, and yield professionals can
            confront challenges faced by the industry, and learn how these
            challenges are being addressed by the combined efforts of academia,
            design tool and equipment suppliers, designers, and test engineers.
            This ITC India conference will be blend of virtual & direct
            participation focusing on Test development in India but the
            submissions may not be limited to topics related to this region.
            Topics related to design and test development across any
            geographical regions will be of interest
          </p>
          <p className="text-justify text-white text-xl mt-10 mx-10">
            Authors are invited to submit original, unpublished papers
            describing recent work in the field of test and design. Authors are
            also invited to submit high quality, practical, industry best
            practices. Submissions simultaneously under review or accepted by
            another conference, symposium or journal, will be summarily
            rejected. Accepted papers will be submitted for inclusion into IEEE
            Xplore subject to meeting IEEE Xplore’s scope and quality
            requirements.
          </p>
          <p className="text-justify mt-10 text-white text-xl mx-10">
            Authors are also invited to submit a single-page poster proposal,
            double columned in Format (template available in EasyChair). Posters
            are a useful way of presenting late-breaking results, getting
            feedback on an innovative method, or participating without having to
            write a full paper
          </p>
        </div>
        <div className="mt-10 text-blue-500 text-4xl lg:text-5xl font-bold text-center">
          Submission Guidelines
        </div>
        <div
          className="mt-10 mx-8 p-6 rounded-xl border-4 border-blue-500 text-white text-xl"
          style={{ fontFamily: '"Poppins", arial' }}
        >
          <li className="mb-8">
            An abstract of 100 words or less to be entered online
          </li>
          <li className="mb-8">
            An electronic copy of a complete paper up to 6 pages,
            double-columned in{" "}
            <a
              className="underline text-blue-300"
              href="https://www.ieee.org/conferences/publishing/templates.html"
            >
              IEEE Format, A4 size{" "}
            </a>
            to be submitted through{" "}
            <a
              className="underline text-blue-300"
              href="https://easychair.org/conferences/?conf=itcindia2025"
            >
              EasyChair
            </a>
            . Submissions less than 4 pages are rarely accepted.
          </li>
          <li>
            Your submission must not include information that serves to identify
            the authors of the manuscript, such as name(s) or affiliation(s) of
            the author(s), anywhere in the manuscript, abstract, or in the
            embedded PDF data. References and bibliographic citations to the
            author(s) own published works or affiliations should be made in the
            third person
          </li>
        </div>
      </div>
      <div className="mt-10 text-blue-500 text-4xl lg:text-5xl font-bold text-center">
        Topics of interest include (not limited to)
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 lg:gap-x-64 gap-y-8 mx-8 my-16">
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            RF, mm-Wave and THz Testing
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Embedded BIST & DFT
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            3D/2.5D Test
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Emerging Defect Mechanisms
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Adaptive Test in Practice
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Hardware Security and Trust
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            ATE/Probe Card Design
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Known-Good-Die testing
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Advances in Boundary Scan
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Memory Test and Repair
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Data Driven Methods
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            MEMS Testing
          </div>
          <div class="text-white text-lg lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Data Exchange and Infrastructure
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Mixed-Signal and Analog Test
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Defect-Oriented Testing
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            New Technologies and Test
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            DFM and Test Diagnosis
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            On-Chip Test Compression
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Economics of Test
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Online Test
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            End-to-End Data Analysis
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Pre- and Post-Silicon Validation
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Bring Up
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            System Test (Applications)
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Power Issues in Test
          </div>
          <div class="text-white text-lg lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            System Test (Hardware/Software)
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Protocol-aware Test
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Test-to-Design Feedback
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Reliability and Resilience
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Test Escape Analysis
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Scan Based Test
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            SoC/SiP/NoC Test
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Silicon Debug
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            IoT Testing
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Simulation and Test
          </div>
          <div class="text-white text-lg lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Jitter, High-Speed I/O and RF Test
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Test Flow Optimizations
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Test Generation and Validation
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Test Resource Partitioning
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Test Standards
          </div>
          <div class="text-white text-lg lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Test Time Analysis and Reduction
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Testing High Speed
          </div>
          <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Optics/Photonics
          </div>
          <div class="text-white text-lg lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">
            Yield Analysis and Optimization
          </div>
        </div>
      </div>
      <Marquee direction="right">
        <img src="/Mask group.webp" className="lg:h-[8vw] h-[12vw]"></img>
        <img src="/Mask group.webp" className="lg:h-[8vw] h-[12vw]"></img>
        <img src="/Mask group.webp" className="lg:h-[8vw] h-[12vw]"></img>
      </Marquee>
    </>
  );
}

export default ConferenceCFP;
