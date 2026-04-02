import React from "react";
import Header from "./Components/Header";

function CallForWorkshop() {
  return (
    <>
      <div className="z-[1000]">
        <Header />
      </div>

      <div className="mt-16">
        <div className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-950 via-blue-900 to-black flex flex-col items-center justify-center border-b-4 border-blue-500 shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
          <h1
            className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center px-4"
            style={{ fontFamily: '"Poppins", arial' }}
          >
            Call for Workshop Proposal (CWP)
          </h1>
          <h2
            className="text-[#00E0FF] text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4 mt-4"
            style={{ fontFamily: '"Poppins", arial' }}
          >
            TTTC India Workshops on VLSI Test & Design-for-Testability (DFT)
          </h2>
          <p className="text-white text-xl md:text-2xl mt-4 font-semibold">
            Cycle: 2026-2027
          </p>
        </div>
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
          <div className="flex flex-col items-center md:flex-row justify-evenly gap-6 md:gap-0">
            <div
              className="bg-[#00E0FF] text-center font-bold lg:w-[25vw] md:w-[30vw] w-[80vw] lg:text-[1.4vw] md:text-[1.7vw] text-[4vw] px-7 py-3"
              style={{ borderRadius: "60px" }}
            >
              Proposal Submission Deadline
              <br /> May 31, 2026
            </div>
            <div
              className="bg-[#00E0FF] text-center font-bold lg:w-[25vw] md:w-[30vw] w-[80vw] lg:text-[1.4vw] md:text-[1.7vw] text-[4vw] px-7 py-3"
              style={{ borderRadius: "60px" }}
            >
              Notification of Selection
              <br /> June 15, 2026
            </div>
            <div
              className="bg-[#00E0FF] text-center font-bold lg:w-[25vw] md:w-[30vw] w-[80vw] lg:text-[1.4vw] md:text-[1.7vw] text-[4vw] px-7 py-3"
              style={{ borderRadius: "60px" }}
            >
              Workshop Cycle
              <br /> September 2026 – June 2027
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20 mb-20">
          <a
            href="https://easychair.org/conferences/?conf=itcindia2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-[4.5vw] md:text-[3vw] lg:text-[2vw] text-center font-bold rounded-3xl border-blue-500 border-4 px-10 py-4 text-white hover:scale-[1.1] transition-[0.5s] hover:bg-black shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              SUBMIT PROPOSAL
            </div>
          </a>
        </div>
        <div className="h-[5px] bg-white "></div>
      </div>

      <div>
        <div className="flex justify-center">
          <div
            className="mt-10 mx-8 p-6 rounded-xl border-4 border-blue-500 max-w-[90vw] bg-gray-900/50 backdrop-blur-sm"
            style={{ fontFamily: '"Poppins", arial' }}
          >
            <p className="text-justify text-white text-xl mx-4 md:mx-10">
              The Test Technology Technical Community (TTTC) India, in
              collaboration with IEEE International Test Conference India (ITC
              India), invites proposals from academic institutions across India
              to host the TTTC India Workshop on VLSI Test and
              Design-for-Testability (DFT) during the 2026-2027 cycle.
            </p>
            <p className="text-justify text-white text-xl mt-6 mx-4 md:mx-10">
              These 3 full day workshops, with 2 days of theory and 1 day of
              hands-on lab have become a cornerstone initiative in strengthening
              semiconductor test education in India, fostering industry-academia
              collaboration, and building skilled talent for India’s growing
              semiconductor ecosystem. Over the past decade, TTTC India has
              successfully conducted workshops at leading universities across
              the country, engaging with 100+ participants per workshop and
              providing hands-on exposure to industry-relevant EDA tools.
            </p>
          </div>
        </div>

        {/* Eligibility Criteria Section */}
        <div className="mt-16 text-blue-500 text-4xl lg:text-5xl font-bold text-center">
          Eligibility Criteria for Host Institutes
        </div>
        <div className="flex justify-center">
          <div
            className="mt-10 mx-8 p-6 rounded-xl border-4 border-blue-500 text-white text-xl max-w-[90vw] bg-gray-900/50 backdrop-blur-sm"
            style={{ fontFamily: '"Poppins", arial' }}
          >
            <p className="text-justify mb-6 mx-4 md:mx-6">
              Institutions interested in hosting a TTTC India workshop must meet
              the following eligibility requirements:
            </p>
            <ul className="list-none space-y-6 mx-4 md:mx-6">
              <li>
                <span className="font-semibold text-[#00E0FF] text-2xl">
                  • Academic Profile:
                </span>
                <ul className="list-disc pl-10 mt-2 space-y-2">
                  <li>Strong VLSI-related curriculum at UG/PG level.</li>
                  <li>
                    Active faculty involvement in VLSI, DFT, and semiconductor
                    test domains.
                  </li>
                  <li>
                    Ongoing research activity in VLSI and testing is desirable.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold text-[#00E0FF] text-2xl">
                  • Infrastructure Readiness:
                </span>
                <ul className="list-disc pl-10 mt-2 space-y-2">
                  <li>
                    Auditorium with seating capacity for 100–120 participants
                    equipped with a projector and audio facilities.
                  </li>
                  <li>
                    Laboratory with 50–60 Linux-booted systems (2 participants
                    per machine).
                  </li>
                  <li>
                    Availability of EDA tools (e.g., Synopsys, Cadence or
                    Siemens Tessent) with sufficient licenses (optional).
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold text-[#00E0FF] text-2xl">
                  • Regional Engagement:
                </span>
                <ul className="list-disc pl-10 mt-2 space-y-2">
                  <li>
                    Ability to attract participants from nearby institutions to
                    ensure ~100–120 attendees (50% from host institute, 50%
                    external).
                  </li>
                  <li>
                    Willingness to coordinate outreach through brochures,
                    LinkedIn, and direct communication.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsibilities Section */}
        <div className="mt-16 text-blue-500 text-4xl lg:text-5xl font-bold text-center px-4">
          Responsibilities of Host Institutes
        </div>
        <div className="flex justify-center">
          <div
            className="mt-10 mx-8 p-6 rounded-xl border-4 border-blue-500 text-white text-xl max-w-[90vw] bg-gray-900/50 backdrop-blur-sm"
            style={{ fontFamily: '"Poppins", arial' }}
          >
            <p className="text-justify mb-6 mx-4 md:mx-6">
              Selected institutes must provide the following support:
            </p>
            <ul className="list-none space-y-6 mx-4 md:mx-6">
              <li>
                <span className="font-semibold text-[#00E0FF] text-2xl">
                  1. Workshop Brochure & Registration
                </span>
                <ul className="list-disc pl-10 mt-2 space-y-2">
                  <li>
                    Prepare and circulate a brochure with agenda, speaker
                    details, and registration information.
                  </li>
                  <li>
                    Create a registration portal (with a nominal fee for both
                    internal and external participants).
                  </li>
                  <li>
                    Ensure lunch arrangements for all participants to maintain
                    session continuity.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold text-[#00E0FF] text-2xl">
                  2. Accommodation & Transport
                </span>
                <ul className="list-disc pl-10 mt-2 space-y-2">
                  <li>
                    Provide accommodation and meals for 4–5 TTTC delegates.
                  </li>
                  <li>
                    Offer hostel/guest house facilities for external
                    participants (nominal fee permitted).
                  </li>
                  <li>Coordinate local transport for visiting attendees.</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold text-[#00E0FF] text-2xl">
                  3. Lab Setup & Technical Readiness
                </span>
                <ul className="list-disc pl-10 mt-2 space-y-2">
                  <li>
                    Ensure lab setup with required EDA tools and licenses at
                    least one week before the workshop.
                  </li>
                  <li>
                    Coordinate with TTTC India for temporary licenses if needed.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold text-[#00E0FF] text-2xl">
                  4. Volunteer Support
                </span>
                <ul className="list-disc pl-10 mt-2 space-y-2">
                  <li>
                    Assign student volunteers to assist TTTC delegates and
                    facilitate smooth operations.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* TTTC Support & Proposal Submission Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 mx-8 mt-16 max-w-[90vw] mx-auto">
          {/* TTTC Support */}
          <div className="flex-1">
            <div className="p-6 rounded-xl border-4 border-blue-500 bg-gray-900/50 h-full">
              <h3
                className="text-[#00E0FF] text-3xl font-bold mb-6 text-center"
                style={{ fontFamily: '"Poppins", arial' }}
              >
                TTTC India Support
              </h3>
              <p className="text-white text-xl mb-4">
                TTTC India will provide:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-white text-lg">
                <li>
                  A team of 3–4 industry expert volunteers to deliver lectures
                  and labs.
                </li>
                <li>Detailed workshop curriculum and prerequisites.</li>
                <li>
                  Travel support for TTTC delegates to/from the city of host
                  institute.
                </li>
                <li>Guidance on outreach and participant engagement.</li>
              </ul>
            </div>
          </div>

          {/* Proposal Submission */}
          <div className="flex-1">
            <div className="p-6 rounded-xl border-4 border-blue-500 bg-gray-900/50 h-full">
              <h3
                className="text-[#00E0FF] text-3xl font-bold mb-6 text-center"
                style={{ fontFamily: '"Poppins", arial' }}
              >
                Proposal Submission
              </h3>
              <p className="text-white text-xl mb-4">
                Interested institutes are invited to submit their Workshop
                Proposal by{" "}
                <span className="font-bold text-[#00E0FF]">May 30, 2026</span>.
                Proposals should include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white text-lg">
                <li>Institute overview and background.</li>
                <li>Faculty expertise in VLSI/test domains.</li>
                <li>
                  Highlight key faculty who will lead the transition from VLSI
                  design to VLSI design and test.
                </li>
                <li>Lab infrastructure and available EDA licenses.</li>
                <li>Accommodation and transport facilities.</li>
                <li>Potential outreach to nearby institutions.</li>
                <li>
                  Highlight the names of all the nearby institutes that can
                  attend the workshop.
                </li>
                <li>
                  Preferred timing of the workshop (2 options) if selected.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Selection Process Section */}
        <div className="mt-16 text-blue-500 text-4xl lg:text-5xl font-bold text-center">
          Selection Process
        </div>
        <div className="flex justify-center">
          <div
            className="mt-10 mx-8 mb-20 p-6 rounded-xl border-4 border-blue-500 text-white text-xl max-w-[90vw] bg-gray-900/50 backdrop-blur-sm"
            style={{ fontFamily: '"Poppins", arial' }}
          >
            <p className="text-justify mb-6 mx-4 md:mx-6 leading-relaxed">
              Shortlisted proposals will be invited to the 10th IEEE
              International Test Conference India 2026 at Bengaluru on July
              19-22, 2026, where the institute representative will present a
              10-minute proposal before the TTTC India Selection Committee.
              Fellowships may be granted to 1 presenter per institute based on
              satisfying eligibility criteria. Final decisions will be based on
              the presentation, infrastructure readiness, and alignment with
              TTTC India’s objectives.
            </p>
            <div className="mx-4 md:mx-6 mt-10 p-6 border-2 border-[#00E0FF] rounded-xl text-center bg-blue-950/40">
              <p className="font-bold text-2xl text-[#00E0FF] mb-2">
                For any questions, please contact us:
              </p>
              <a
                href="mailto:TTTC-India-Workshop-2026@easychair.org"
                className="text-white hover:text-blue-300 underline text-xl break-all"
              >
                TTTC-India-Workshop-2026@easychair.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CallForWorkshop;
