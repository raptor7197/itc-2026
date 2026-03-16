import React from "react";
import ColourfulText from "../components/ui/colourful-text";
import { motion } from "motion/react";
import Header from "./Components/Header";
import Marquee from "react-fast-marquee";

function CFF() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="mt-16">
        <img
          src="/CFF.png"
          className="w-full block"
          style={{ zIndex: 0, position: "relative" }}
        ></img>
      </div>
      <div className="mt-6 md:mt-10 bg-black/70 py-2 lg:text-5xl md:text-4xl text-3xl font-bold text-center text-blue-500 relative z-20">
        <Marquee className="h-[12vw] sm:h-[10vw] md:h-[8vw] lg:h-[6vw]">
          <div className="mx-5 text-blue-300">
            IEEE ITC India 2026 Fellowship Program
          </div>
          <div className="mx-5"> • </div>
          <div className="mx-5 text-blue-300">
            IEEE ITC India 2026 Fellowship Program
          </div>
          <div className="mx-5"> • </div>
          <div className="mx-5 text-blue-300">
            IEEE ITC India 2026 Fellowship Program
          </div>
          <div className="mx-5"> • </div>
          <div className="mx-5 text-blue-300">
            IEEE ITC India 2026 Fellowship Program
          </div>
          <div className="mx-5"> • </div>
          <div className="mx-5 text-blue-300">
            IEEE ITC India 2026 Fellowship Program
          </div>
          <div className="mx-5"> • </div>
        </Marquee>
      </div>
      <p
        className="text-white mt-10 lg:text-5xl md:text-4xl text-3xl text-center font-bold "
        style={{ fontFamily: '"Poppins", arial' }}
      >
        ABOUT THE FELLOWSHIP
      </p>

      <div>
        <div
          className="mt-10 mx-8 p-6 pb-10 rounded-xl border-4 border-blue-500"
          style={{ fontFamily: '"Poppins", arial' }}
        >
          <ul className="text-justify list-disc text-white text-xl mx-10">
            <li className="mb-6">
              IEEE ITC India 2026 invites students, researchers, and faculty
              members working in the area of VLSI Testing to apply for the
              Fellowship Program. IEEE ITC India has a longstanding tradition of
              offering generous fellowships to students, researchers, and
              faculty from academic institutions across India, and we are
              pleased to continue this initiative for our 10th Edition of IEEE
              ITC India 2026.
            </li>
            <li className="mb-6">
              The fellowship includes complimentary conference registration and
              reimbursement (fixed amount) towards travel and accommodation for
              attending the conference. Fellowships are open to Indian students,
              researchers, and faculty actively engaged in VLSI test–related
              domains.
            </li>
            <li className="mb-6">
              Fellowship recipients are required to attend the entire three-day
              conference, and attendance will be formally recorded. The
              fellowship is intended as a facilitative support mechanism for
              participants who may otherwise lack adequate institutional
              funding, and should not be viewed as an honor or award.
            </li>
            <li className="mb-6">
              Applicants must be full-time students or regular faculty members
              at the time of the conference. College identity cards and Aadhaar
              cards will be verified during registration.
            </li>
            <li>
              The selection and acceptance of fellowship applications will be
              solely based on the criteria defined by the IEEE ITC India
              Fellowship Committee.
            </li>
          </ul>
        </div>
      </div>
      <p
        className="text-white mt-10 lg:text-5xl md:text-4xl text-3xl text-center font-bold "
        style={{ fontFamily: '"Poppins", arial' }}
      >
        FELLOWSHIP GUIDELINES
      </p>

      <div>
        <div
          className="mt-10 mx-8 p-6 pb-3 rounded-xl border-4 border-blue-500"
          style={{ fontFamily: '"Poppins", arial' }}
        >
          <ul className="text-justify list-disc text-white text-xl mx-10">
            <li className="mb-6">
              The applicant must be a registered full-time student (UG/PG/Ph.D.)
              or a regular faculty member of a recognized institution, actively
              engaged in the area of VLSI Testing or allied domains.
            </li>
            <li className="mb-6">
              A bonafide certificate issued by the Head of the Department
              confirming full-time status, along with a valid institutional
              identity card and Aadhaar card, must be produced at the time of
              claiming reimbursements.
            </li>
            <li className="mb-6">
              All fellowship recipients are required to attend all tutorials and
              technical sessions for the entire duration of the conference.
            </li>
            <li className="mb-6">
              Attendance is mandatory on all days of the conference, and fellows
              are expected to report to the conference venue by 9:00 AM each day
              and remain until the conclusion of all scheduled technical
              sessions.
            </li>
            <li className="mb-6">
              Fellowship awardees who are authors of regular papers or
              participants in the Academia–Research Track are also required to
              strictly comply with these fellowship guidelines.
            </li>
            <li className="mb-6">
              Failure to maintain mandatory attendance may result in the
              forfeiture of the Deposit return and/or reimbursement of travel
              and accommodation expenses.
            </li>
            <li className="mb-6">
              Late arrivals or early departures will not be permitted. In such
              cases, the Fellowship Committee reserves the right to partially or
              fully forfeit the reimbursement amount.
            </li>
          </ul>
        </div>
      </div>

      <p
        className="text-white mt-10 lg:text-5xl md:text-4xl text-3xl text-center font-bold "
        style={{ fontFamily: '"Poppins", arial' }}
      >
        SELECTION CRITERIA
      </p>

      <div>
        <div
          className="mt-10 mx-8 p-6 pb-3 rounded-xl border-4 border-blue-500"
          style={{ fontFamily: '"Poppins", arial' }}
        >
          <ul className="text-justify list-disc text-white text-xl mx-10">
            <li className="mb-6">
              Authors of accepted papers will be given priority.
            </li>
            <li className="mb-6">
              Based on academic achievements and research contributions.
            </li>
            <li className="mb-6">
              Statement of purpose for attending ITC India 2026.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <a
          href="https://www.ieee.org/conferences/publishing/templates.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-[3.5vw] md:text-[2.8vw] lg:text-[2.1vw] text-center font-bold rounded-3xl border-blue-500 border-4 px-5 py-3 text-white hover:scale-[1.1] transition-[0.5s] hover:bg-black">
            DOWNLOAD IEEE TEMPLATE
          </div>
        </a>
      </div>

      {/* <p className="text-white mt-10 lg:text-5xl md:text-4xl text-3xl text-center font-bold " style={{fontFamily:'"Poppins", arial'}}>
            APPLICATION PROCESS
       </p>

       <div>

        <div className="mt-10 mx-8 p-6 pb-3 rounded-xl border-4 border-blue-500" style={{fontFamily:'"Poppins", arial'}}>
            <ul className="text-justify list-disc text-white text-xl mx-10">
                <li className="mb-6">
                Online application process to apply for fellowship<br/>
                <div className="flex justify-center">
</div>

                </li>
                <li className="mb-6">
                Shortlisted candidates will be notified via email for further process.
                </li>
                <li className="mb-6">
                Upon selection, submit a soft copy of a Demand Draft (DD) of INR 3,000/- to confirm participation within a week, failing which they will not be considered for fellowship.
                </li>
                <li className="mb-6">
                Submit the hard copy of the DD on the first day and collect the same on the last day after attending all three days of the conference.
                </li>

            </ul>

        </div>
       </div>
       <p className="text-white mt-10 lg:text-5xl md:text-4xl text-3xl text-center font-bold " style={{fontFamily:'"Poppins", arial'}}>
            REIMBURSEMENTS
       </p>

       <div>

        <div className="mt-10 mx-8 p-6 pb-3 rounded-xl border-4 border-blue-500" style={{fontFamily:'"Poppins", arial'}}>
            <ul className="text-justify list-disc text-white text-xl mx-10">
                <li className="mb-6">
                Attendance for 3 days is must
                </li>
                <li className="mb-6">
                Collect back your Rs.3000 DD, In addition
                </li>
                <li className="mb-6">
                Rs. 8000 reimbursements for Faculty (TA + accommodation)
                </li>
                <li className="mb-6">
                Rs. 5000 reimbursements for students (TA + Accommodation)
                </li>
                <li className="mb-6">
                Reimbursements will be against the legitimate bill/receipt (Reimbursement will be lower amount of bill or reimbursement amount mentioned above)
                </li>
                <li className="mb-6">
                Reimbursement is for outstation candidates only.
                </li>

            </ul>

        </div>

       </div>

       <div className="text-white mt-10 lg:text-5xl md:text-4xl text-3xl text-center font-bold " style={{fontFamily:'"Poppins", arial'}}>
            IMPORTANT DATES
       </div>
       <div className="mt-10 textbg">
        <div className="h-[5px] bg-white ">
        </div>

        <div className="mt-12 w-[100vw]  md:gap-0 " style={{fontFamily:'"Poppins", arial'}}>
            <div className="flex flex-col items-center md:flex-row justify-evenly">
                <div className="bg-[#00E0FF] text-center mb-6 md:mb-0 font-bold lg:w-[25vw] md:w-[30vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-3" style={{borderRadius:"60px"}}>Application Last Date<br/> 13 June, 2025</div>
                </div>
            <div className="flex flex-row md:mt-12 mt-6 mb-6 justify-evenly">
                <div className="bg-[#00E0FF] text-center mb-6 md:mb-0 font-bold md:w-[30vw] lg:w-[25vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-3" style={{borderRadius:"60px"}}>Notification<br/> 20 June, 2025 - 27 June, 2025</div>
                </div>
        </div>



        <div className="h-[5px] bg-white ">
        </div>
       </div> */}

      <div
        className="text-white mt-10 lg:text-5xl md:text-4xl text-3xl text-center font-bold "
        style={{ fontFamily: '"Poppins", arial' }}
      >
        Further details to be updated soon
      </div>
    </>
  );
}

export default CFF;
