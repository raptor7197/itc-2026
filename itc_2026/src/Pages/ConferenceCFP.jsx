import Header from "./Components/Header";
import Marquee from "react-fast-marquee";

function ConferenceCFP() {
  const tracks = [
    {
      title: "Heterogeneous Integration, Chiplets & 2.5D/3D Test",
      topics: [
        "DFT for chiplets and die-to-die links",
        "KGD qualification",
        "2.5D/3D interconnect test",
        "2.5D/3D test standards",
      ],
    },
    {
      title: "AI/ML-Driven Test, Adaptive Quality & Outlier Management",
      topics: [
        "Adaptive test frameworks",
        "Outlier detection, drift monitoring, false-positive control",
        "Agentic AI applications in DFT",
      ],
    },
    {
      title: "Automotive, Functional Safety & Mission-Profile Testing",
      topics: [
        "ISO 26262 compliant DFT",
        "Latent defect screening and stress-based tests",
        "In-system safety monitors and self-test (LBIST/MBIST in-field)",
      ],
    },
    {
      title: "Analog, RF & Mixed-Signal Test for 5G/6G, Power & Sensing",
      topics: [
        "High-frequency test methods (mmWave/THz)",
        "Power/PMIC test",
        "Sensor, interface test (MEMS, precision analog)",
        "Jitter, High-Speed I/O and RF Test",
      ],
    },
    {
      title: "Memory & Storage Test: HBM, DDR/LPDDR, NVM",
      topics: [
        "HBM stack test",
        "DRAM/LPDDR test for pattern-sensitive faults",
        "Memory test and repair",
        "NVM test for endurance, retention, disturb mechanisms",
      ],
    },
    {
      title: "Hardware Security, Trust & Secure Test Access",
      topics: [
        "Secure JTAG/IJTAG access control and authentication",
        "Confidential test content and data protection",
        "Side-channel aware test",
        "Hardware trojan detection",
        "PUF characterization and reliability",
      ],
    },
    {
      title: "DFT, ATPG, Diagnosis & Test Standards",
      topics: [
        "Advancements in DFT and ATPG",
        "Advanced fault models and defect based testing",
        "Test standards",
        "DFM and test diagnosis",
      ],
    },
    {
      title:
        "System-Level Test (SLT), Reliability and Silicon Lifecycle Management",
      topics: [
        "SLT architectures",
        "Field Monitoring, test and debug",
        "End-to-End data analysis",
        "Silent data corruption",
      ],
    },
    {
      title: "Test Economics, Operations & Sustainability",
      topics: [
        "ATE/Probe card design",
        "Test time optimization and content prioritization",
        "Yield analysis and optimization",
        "Silicon debug and test escape analysis",
        "OSAT collaboration and vendor-neutral interfaces",
      ],
    },
    {
      title: "Testing for Emerging Applications",
      topics: [
        "Quantum device testing",
        "Testing high speed optics/photonics",
        "Neuromorphic computing",
      ],
    },
  ];

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-16">
        <img
          src="/CFPHeading.png"
          style={{ width: "100vw", zIndex: "-50" }}
          alt="CFP Heading"
        />
      </div>
      <div
        className="text-white mt-10 lg:text-5xl md:text-4xl text-3xl text-center font-bold "
        style={{ fontFamily: '"Poppins", arial' }}
      >
        IMPORTANT DATES
      </div>
      <div className="mt-10 textbg">
        <div className="h-[5px] bg-white "></div>

        <div className="mt-12 w-[100vw] md:gap-0 ">
          <div className="flex flex-col items-center md:flex-row justify-evenly">
            <div
              className="bg-[#00E0FF] text-center mb-6 md:mb-0 font-bold lg:w-[25vw] md:w-[30vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-3"
              style={{ borderRadius: "60px" }}
            >
              Abstract Submission Deadline
              <br /> 3rd March 2026
            </div>
            <div
              className="bg-[#00E0FF] text-center mb-6 md:mb-0 font-bold lg:w-[25vw] md:w-[30vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-3"
              style={{ borderRadius: "60px" }}
            >
              Paper Submission Deadline
              <br /> 10 March, 2026
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row justify-evenly md:mt-12 mt-6 mb-6">
            <div
              className="bg-[#00E0FF] text-center mb-6 md:mb-0 font-bold lg:w-[25vw] md:w-[30vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-3"
              style={{ borderRadius: "60px" }}
            >
              Author Notification
              <br /> 10 May, 2026
            </div>
            <div
              className="bg-[#00E0FF] text-center mb-6 md:mb-0 font-bold lg:w-[25vw] md:w-[30vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-3"
              style={{ borderRadius: "60px" }}
            >
              Camera-ready Paper and IEEE Copyright Transfer Due
              <br /> 31 May 2026
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20 mb-20">
          <a
            href="https://easychair.org/conferences/?conf=itcindia2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-[5vw] md:text-[4vw] lg:text-[3vw] text-center font-bold rounded-3xl border-blue-500 border-4 px-7 py-4 text-white hover:scale-[1.1] transition-[0.5s] hover:bg-black">
              SUBMIT PAPER
            </div>
          </a>
        </div>
        <div className="h-[5px] bg-white "></div>
      </div>
      <div>
        <div className="mt-10 bg-black py-2 lg:text-5xl md:text-4xl text-3xl font-bold text-center text-blue-500">
          <Marquee className="h-[20vw] md:h-[10vw] lg:h-[8vw]">
            <div className="mx-5 text-blue-300">Call For Papers</div>
            <div className="mx-5"> • </div>
            <div className="mx-5 text-blue-300">Call For Papers</div>
            <div className="mx-5"> • </div>
            <div className="mx-5 text-blue-300">Call For Papers</div>
            <div className="mx-5"> • </div>
            <div className="mx-5 text-blue-300">Call For Papers</div>
            <div className="mx-5"> • </div>
          </Marquee>
        </div>
        <div
          className="mt-10 mx-8 p-6 rounded-xl border-4 border-blue-500"
          style={{ fontFamily: '"Poppins", arial' }}
        >
          <p className="text-justify text-white text-xl mx-10">
            Celebrating its 10th edition, the IEEE International Test Conference
            India (ITC India) is the premier conference dedicated to testing of
            electronic devices, circuits, and systems. ITC India 2026 invites
            researchers, developers, and practitioners from academia and
            industry to submit original, unpublished work on all aspects of VLSI
            test, reliability, yield, and quality for current and emerging
            semiconductor technologies.
          </p>
          <p className="text-justify text-white text-xl mt-10 mx-10">
            We seek high-quality unpublished submissions for papers (4-6 pages)
            covering the theoretical, practical, and experimental aspects of
            VLSI testing.
          </p>
        </div>
        <div className="mt-10 text-blue-500 text-5xl font-bold text-center">
          Submission Guidelines
        </div>
        <div
          className="mt-10 mx-8 p-6 rounded-xl border-4 border-blue-500 text-white text-xl"
          style={{ fontFamily: '"Poppins", arial' }}
        >
          <ul className="list-disc pl-6 space-y-4">
            <li className="mb-4">
              Submissions simultaneously under review or accepted by another
              conference, symposium or journal, will be summarily rejected
            </li>
            <li className="mb-4">
              Accepted papers will be submitted for inclusion into IEEE Xplore
              subject to meeting IEEE Xplore's scope and quality requirements
            </li>
            <li className="mb-4">
              For detailed information about the submission process,
              requirements and deadlines, the selection process and any other
              questions regarding the program itself or contact information,
              please consult the ITC India web site at{" "}
              <a
                href="https://www.itctestweekindia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-300 hover:text-blue-200 break-all"
              >
                www.itctestweekindia.org
              </a>{" "}
              or email the program chair at{" "}
              <a
                href="mailto:ITC-India-2026-TPC@easychair.org"
                className="underline text-blue-300 hover:text-blue-200"
              >
                ITC-India-2026-TPC@easychair.org
              </a>
            </li>
            <li className="mb-4">
              An abstract of 100 words or less must be entered online on the
              submission site
            </li>
            <li className="mb-4">
              An electronic copy of a complete paper up to 6 pages,
              double-columned in IEEE Format, A4 size (
              <a
                href="https://www.ieee.org/conferences/publishing/templates.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-300 hover:text-blue-200"
              >
                https://www.ieee.org/conferences/publishing/templates.html
              </a>
              ) to be submitted through{" "}
              <a
                href="https://easychair.org/conferences/?conf=itcindia2026"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-300 hover:text-blue-200"
              >
                EasyChair
              </a>{" "}
              (
              <a
                href="https://easychair.org/conferences/?conf=itcindia2026"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-300 hover:text-blue-200 break-all"
              >
                https://easychair.org/conferences/?conf=itcindia2026
              </a>
              )
            </li>
            <li className="mb-4">
              Your submission must not include information that serves to
              identify the authors of the manuscript, such as name(s) or
              affiliation(s) of the author(s), anywhere in the manuscript,
              abstract, or in the embedded PDF data. References and
              bibliographic citations to the author(s) own published works or
              affiliations should be made in the third person
            </li>
            <li className="mb-4">
              A submission of 1-3 pages will be reviewed as a poster submission.
              A submission of 4-6 pages may be accepted as a paper or poster
              depending on the reviewer feedback
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-blue-500 text-4xl lg:text-5xl font-bold text-center">
        Conference Tracks & Suggested Topics
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-8 my-16 w-full max-w-[90vw]">
          {tracks.map((track, idx) => (
            <div
              key={idx}
              className="bg-gray-900/80 p-6 rounded-3xl border-2 border-blue-500 hover:border-[#00E0FF] transition-colors duration-300"
            >
              <h3 className="text-[#00E0FF] text-xl lg:text-2xl font-bold mb-4 text-center h-auto md:h-16 flex items-center justify-center">
                {track.title}
              </h3>
              <ul className="space-y-2">
                {track.topics.map((topic, topicIdx) => (
                  <li
                    key={topicIdx}
                    className="text-white text-base lg:text-lg flex gap-2"
                  >
                    <span className="text-[#00E0FF] font-bold min-w-fit">
                      •
                    </span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="text-[#00E0FF] text-xl lg:text-2xl font-bold mb-4 text-center h-auto md:h-16 flex items-center justify-center">
            We look forward to your contributions to ITC India 2026!
          </div>
        </div>
      </div>
      <Marquee direction="right">
        <img
          src="/Mask group.webp"
          className="lg:h-[8vw] h-[12vw]"
          alt="Mask Group"
        ></img>
        <img
          src="/Mask group.webp"
          className="lg:h-[8vw] h-[12vw]"
          alt="Mask Group"
        ></img>
        <img
          src="/Mask group.webp"
          className="lg:h-[8vw] h-[12vw]"
          alt="Mask Group"
        ></img>
      </Marquee>
    </>
  );
}

export default ConferenceCFP;
