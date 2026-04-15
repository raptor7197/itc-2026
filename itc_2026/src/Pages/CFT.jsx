import React from "react";
import ColourfulText from "../components/ui/colourful-text";
import { motion } from "motion/react";
import Header from "./Components/Header";

function CFT() {
  const topics = [
    "3D/2.5D IC and Chiplet Testing",
    "Adaptive Test in Practice",
    "ATE/Probe Card Design",
    "Automotive Reliability and Testing",
    "Advances in Boundary Scan",
    "Silicon Bring Up",
    "Defect-Oriented Testing",
    "DFM and Test Diagnosis",
    "Economics of Test",
    "Embedded BIST & DFT",
    "Emerging Defect Mechanisms",
    "Hardware Security and Trust",
    "High-Speed Interface Testing",
    "IoT Testing",
    "Known-Good-Die testing",
    "Low-Power Testing Techniques",
    "Machine learning applications in DFT",
    "Memory Test and Repair",
    "MEMS Testing",
    "Mixed-Signal and Analog Test",
    "New Technologies and Test",
    "On-Chip Test Compression",
    "Online Test",
    "Pre- and Post- Silicon Validation",
    "Quantum Computing Hardware Testing",
    "Reliability and Resilience",
    "Scan Based Test",
    "Security and trust in DFT",
    "SoC/SiP/NoC Test",
    "Silicon Debug and diagnosis",
    "Jitter, RF Test",
    "Simulation and Test",
    "System Test",
    "Test-to-Design Feedback",
    "Test Data Analytics, Big Data in Testing",
    "Test Escape Analysis",
    "Test Flow Optimizations",
    "Test Generation and Validation",
    "Test Resource Partitioning",
    "Test Standards and best practices in DFT",
    "Test Time Analysis and Reduction",
    "Testing and Validation of AI Hardware",
    "Testing High Speed Optics/Photonics",
    "Yield Analysis and Optimization",
  ];

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="mt-16">
        <img
          src="/CFTheading.png"
          style={{ width: "100vw", zIndex: "-50" }}
          alt="Call for Tutorials Heading"
        ></img>
      </div>
      <div
        className="text-white mt-10 lg:text-5xl md:text-4xl text-3xl text-center font-bold "
        style={{ fontFamily: '"Poppins", arial' }}
      >
        IMPORTANT DATES
      </div>
      <div className="mt-10 textbg">
        <div className="h-[5px] bg-white "></div>

        <div className="mt-12 w-[100vw]  md:gap-0 ">
          <div className="flex flex-col items-center md:flex-row justify-evenly">
            <div
              className="bg-[#00E0FF] text-center mb-6 md:mb-0 font-bold lg:w-[25vw] md:w-[30vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-3"
              style={{ borderRadius: "60px" }}
            >
              Tutorial Submission Deadline
              <br /> 22<sup>nd</sup> April, 2026
            </div>
            <div
              className="bg-[#00E0FF] text-center md:mb-0 font-bold lg:w-[25vw] md:w-[30vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-3"
              style={{ borderRadius: "60px" }}
            >
              Final Manuscript Due
              <br /> 13<sup>th</sup> June, 2026
            </div>
          </div>
          <div className="flex flex-row md:mt-12 mt-6 mb-6 justify-evenly">
            <div
              className="bg-[#00E0FF] text-center mb-6 md:mb-0 font-bold md:w-[30vw] lg:w-[25vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-3"
              style={{ borderRadius: "60px" }}
            >
              Author Notification
              <br /> 12<sup>th</sup> May, 2026
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-20 mb-20">
          <a href="https://easychair.org/my/conference?conf=itcindia2026">
            <div className="text-[3.5vw] md:text-[2.8vw] lg:text-[2.1vw]  text-center font-bold  rounded-3xl border-blue-500 border-4 px-5 py-3 text-white hover:scale-[1.1] transition-[0.5s] hover:bg-black">
              SUBMIT TUTORIAL
            </div>
          </a>
          {/* <a
            href="https://www.ieee.org/conferences/publishing/templates.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-[3.5vw] md:text-[2.8vw] lg:text-[2.1vw] text-center font-bold rounded-3xl border-blue-500 border-4 px-5 py-3 text-white hover:scale-[1.1] transition-[0.5s] hover:bg-black">
              DOWNLOAD IEEE TEMPLATE
            </div>
          </a>*/}
        </div>
        <div className="h-[5px] bg-white "></div>
      </div>
      <div>
        <div
          className="mt-10 mx-8 p-6 rounded-xl border-4 border-blue-500"
          style={{ fontFamily: '"Poppins", arial' }}
        >
          <p className="text-justify text-white text-xl mx-10">
            International Test Conference is the world’s premier venue dedicated
            to the electronic test of devices, boards and systems—covering the
            complete cycle from design verification, design-for-test,
            design-for-manufacturing, silicon debug, manufacturing test, system
            test, diagnosis, reliability and failure analysis, and back to
            process and design improvement. At ITC India, design, test, and
            yield professionals can confront challenges faced by the industry,
            and learn how these challenges are being addressed by the combined
            efforts of academia, design tool and equipment suppliers, designers,
            and test engineers. This ITC India conference will be focusing on
            Test development in India, but the submissions may not be limited to
            topics related to this region. Topics related to design and test
            development across multi geographical regions will be of special
            interest.
          </p>
          <p className="text-justify text-white text-xl mt-10 mx-10">
            Authors are invited to submit original, high quality, practical and
            industry best practices as Tutorials describing recent work in the
            field of test and design.
          </p>
        </div>
        <div className="mt-10 text-blue-500  text-5xl font-bold text-center">
          Submission Guidelines
        </div>
        <div
          className="mt-10 mx-8 p-6 rounded-xl border-4 border-blue-500 text-white text-xl"
          style={{ fontFamily: '"Poppins", arial' }}
        >
          <ul className="list-disc ml-10 space-y-4">
            {/* <li>
              A tutorial proposal needs to be submitted in template available on this <a href="https://drive.google.com/file/d/1F_WAsyL98IlFErnYbcgc7ulhn28il2Cl/view?usp=sharing" className="underline">Link</a>
            </li>*/}
            {/* <li>
              Submission link{" "}
              <a
                href="https://easychair.org/my/conference?conf=itcindia2026"
                className="font-bold underline"
              >
                https://easychair.org/my/conference?conf=itcindia2026
              </a>
            </li>*/}
            {/* <li>
              Tutorial Submission Template <a href="https://drive.google.com/file/d/1F_WAsyL98IlFErnYbcgc7ulhn28il2Cl/view" className="font-bold underline">Link</a>
            </li> */}
            {/* <li>
              The following details are mandatory:
              <ul className="list-disc ml-10 mt-2 space-y-2">
                <li>Tutorial title</li>
                <li>Tutorial abstract</li>
                <li>
                  Topics and subtopics to be covered, and the approximate time
                  devoted to each topic
                </li>
                <li>The targeted audience and prerequisites</li>
                <li>
                  Preferred tutorial duration : 3 hours (for full tutorials) or
                  1.5 hours (for short tutorials)
                </li>
                <li>Name, affiliation, bio of each author</li>
              </ul>
            </li>*/}
            <li>Proposals will undergo a panel review process</li>
            <li>
              All presenters listed in the tutorial proposal must be available
              for tutorial presentation
            </li>
            <li>
              Consent should be obtained from all the presenters and all
              organizations involved in presenting the material before making
              the tutorial proposal
            </li>
            <li>
              If proposal is accepted, final presentation must be shared by
              final manuscript due date for review
            </li>
            <li>
              Accepted tutorial abstracts will be published in conference
              proceedings
            </li>
          </ul>
          <div className="mt-8 text-lg">
            <p>
              Note: For detailed information about the submission process,
              requirements and deadlines, the selection process and any other
              questions regarding the program itself or contact information,
              please consult the ITC India web site at{" "}
              <a href="https://itctestweekindia.org/" className="text-blue-300">
                https://www.itctestweekindia.org
              </a>{" "}
              or email the tutorial chair at{" "}
              <a
                href="mailto:ITC-India-2026-Tutorials@easychair.org"
                className="text-blue-300"
              >
                ITC-India-2026-Tutorials@easychair.org
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="text-[5vw] md:text-[4vw] lg:text-[3vw] text-center font-bold rounded-3xl border-blue-500 border-4 px-7 py-4 text-white mt-5 hover:scale-[1.03] transition-[0.5s] hover:bg-black">
        <a
          href="/ITC_India_2026_Tutorial_Proposal_Template.pdf"
          download="ITC_India_2026_Tutorial_Proposal_Template.pdf"
        >
          DOWNLOAD TUTORIAL SUBMISSION TEMPLATE
        </a>
      </div>

      <div
        className="mt-10 text-white text-xl text-center px-8"
        style={{ fontFamily: '"Poppins", arial' }}
      >
        ITC India invites submissions on the latest advances in test, validation
        and diagnosis of ICs, boards and systems.
      </div>
      <div className="mt-5 text-blue-500 text-4xl lg:text-5xl font-bold text-center">
        Topics of interest include (not limited to)
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 lg:gap-x-64 gap-y-8 mx-8 my-16">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CFT;
