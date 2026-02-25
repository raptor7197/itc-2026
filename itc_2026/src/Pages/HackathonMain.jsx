import React from "react";
import ColourfulText from "../components/ui/colourful-text";
import { motion } from "motion/react";
import StarBorder from "./Components/StarBorder/StarBorder";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import Header from "./Components/Header";
import Marquee from "react-fast-marquee";
import Timeline from "./Components/Timeline";
import timelineData from "../TimelineData";

function HackathonMain() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-10 bg-black py-2 lg:text-5xl md:text-4xl text-3xl  font-bold text-center text-blue-500">
                <Marquee className="h-[20vw] md:h-[10vw] h-[8vw]">
                  <div className="mx-5 text-blue-300">Hackathon</div>
                  <div className="mx-5"> • </div>
                  <div className="mx-5 text-blue-300">Hackathon</div>
                  <div className="mx-5"> • </div>
                  <div className="mx-5 text-blue-300">Hackathon</div>
                  <div className="mx-5"> • </div>
                  <div className="mx-5 text-blue-300">Hackathon</div>
                  <div className="mx-5"> • </div>
                </Marquee>
              </div>
      <div className="mt-16 relative">
        <img
          src="/Hackathonheading.png"
          style={{ width: "100vw", zIndex: "-50" }}
          alt="Hackathon Background"
        />
        
      </div>

      <div>
        <div
          className="mt-10 mx-8 p-6 "
          style={{ fontFamily: '"Poppins", arial' }}
        >
          <div className="rounded-xl border-4 border-blue-500 px-6 pb-6 mb-12">
            <div className="mt-10 text-white  lg:text-5xl md:text-4xl text-3xl font-bold text-center">
              Important Dates
            </div>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full text-white border-collapse">
                <thead>
                  <tr className="bg-blue-900">
                    <th className="border border-blue-500 p-4 text-left lg:text-2xl md:text-xl text-lg">
                      Milestone
                    </th>
                    <th className="border border-blue-500 p-4 text-left lg:text-2xl md:text-xl text-lg">
                      Tentative Date(s)
                    </th>
                  </tr>
                </thead>
                <tbody className="lg:text-xl md:text-lg text-base">
                  <tr className="bg-gray-900">
                    <td className="border border-blue-500 p-4">
                      Last date of filling hackathon registration form
                    </td>
                    <td className="border border-blue-500 p-4">
                      10th March 2026
                    </td>
                  </tr>
                  <tr className="bg-gray-800">
                    <td className="border border-blue-500 p-4">
                      Last date of submitting proposals (Each team is supposed
                      to submit their initial thoughts and chosen problem
                      statement. Once Problem Statement is selected, it can NOT
                      be changed)
                    </td>
                    <td className="border border-blue-500 p-4">
                      5th April 2026
                    </td>
                  </tr>
                  <tr className="bg-gray-900">
                    <td className="border border-blue-500 p-4">
                      Feedback by ART committee on submitted teams problem
                      statement and definition
                    </td>
                    <td className="border border-blue-500 p-4">
                      15th-20th April 2026
                    </td>
                  </tr>
                  <tr className="bg-gray-800">
                    <td className="border border-blue-500 p-4">
                      Last date for Round-1 Solution submission
                    </td>
                    <td className="border border-blue-500 p-4">
                      31st May 2026
                    </td>
                  </tr>
                  <tr className="bg-gray-900">
                    <td className="border border-blue-500 p-4">
                      Declaration of Round-1 results (All Round-1 Winners to
                      receive fellowships for attending ITC India-2026
                      conference)
                    </td>
                    <td className="border border-blue-500 p-4">
                      10th-15th June 2026
                    </td>
                  </tr>
                  <tr className="bg-gray-800">
                    <td className="border border-blue-500 p-4">
                      Last date for Round-2 Solution submission
                    </td>
                    <td className="border border-blue-500 p-4">
                      10th July 2026
                    </td>
                  </tr>
                  <tr className="bg-gray-900">
                    <td className="border border-blue-500 p-4">
                      Declaration of Round-2 results
                    </td>
                    <td className="border border-blue-500 p-4">
                      During ITC-India 2026 conference
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-10 text-center">
              <a
                href="https://forms.gle/Jsti3rgKSj5TLkgt7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg lg:text-2xl md:text-xl text-lg transition-colors"
              >
                Hackathon Registration Form
              </a>
            </div>
          </div>

          <div className="rounded-xl border-4 border-blue-500 px-6 pb-6 mb-12">
            <div className="mt-10 text-white lg:text-5xl md:text-4xl text-3xl font-bold text-center">
              About the Hackathon
            </div>
            <div className="mt-8 text-white lg:text-xl md:text-lg text-base leading-relaxed">
              <p className="mb-6">
                The Academia Research Track (ART) committee presents the second
                edition of hackathon which primarily focuses on bringing
                together students and faculty from academic institutions to
                solve industry-scale fundamental research problems in the broad
                area of semiconductor testing.
              </p>
              <p className="mb-6">
                The ART committee lists below four domains. As a part of the
                hackathon, each team must:
              </p>
              <ul className="list-disc ml-8 mb-6 space-y-2">
                <li>Pick an area from the list provided</li>
                <li>Provide a statement of the problem being addressed</li>
                <li>Define the goal and potential of the research</li>
                <li>Submit a research proposal</li>
              </ul>
              <p className="mb-6">
                The submission is limited to 2-pages and must be submitted by
                the due date. Feedback will be provided to all the teams by the
                ART committee to help complete the proposed research.
              </p>
            </div>
          </div>

          <div className="rounded-xl border-4 border-blue-500 px-6 pb-6 mb-12">
            <div className="mt-10 text-blue-500 lg:text-5xl md:text-4xl text-3xl font-bold text-center">
              Problem Statement Domains
            </div>

            <div className="mt-8 space-y-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-blue-300 lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                  1. Functional Fault Model Development
                </h3>
                <p className="text-white lg:text-lg md:text-base text-sm leading-relaxed">
                  Modern SoCs integrate complex accelerators and heterogeneous
                  processing blocks where traditional structural fault models
                  (stuck-at, transition, path delay) fail to adequately capture
                  functional failures. Furthermore, with advanced technology
                  nodes and long product lifetimes, many failures occur after
                  deployment due to aging effects, wear-out, radiation, and
                  environmental stress requiring in-field testing. In this
                  challenge, participants are tasked with developing meaningful
                  functional fault models for ATE-based testing and in-field
                  testing. AI-assisted functional fault modeling framework may
                  also be developed/explored that can learn fault behavior from
                  simulation traces, RTL activity, or silicon test data. The
                  objective is to identify and classify functional faults that
                  manifest only under specific workloads, data patterns, or
                  control sequences. Participants must clearly define fault
                  abstraction, and validation strategy, and demonstrate how the
                  proposed model improves fault coverage or diagnostic
                  resolution compared to conventional fault models while
                  remaining test-cost efficient.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-blue-300 lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                  2. Fault Models for Emerging Memory Types
                </h3>
                <p className="text-white lg:text-lg md:text-base text-sm leading-relaxed">
                  Emerging memory technologies such as ReRAM, MRAM, PCM, and
                  FeFET exhibit non-volatile behavior, resistance variability,
                  endurance degradation, and asymmetric read/write
                  characteristics that are not addressed by classical SRAM or
                  DRAM fault models. This challenge requires participants to
                  propose new fault models tailored to one emerging memory
                  technology, capturing both device-level phenomena and
                  array-level behavior. Additionally, aging effects in memory
                  devices can also create problems. The solution should describe
                  fault mechanisms, fault primitives, and their impact on
                  read/write operations, along with suitable test algorithms.
                  Emphasis should be placed on how the proposed fault model
                  enables effective manufacturing test and reliability
                  screening.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-blue-300 lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                  3. Test Development for Optical Interconnects
                </h3>
                <p className="text-white lg:text-lg md:text-base text-sm leading-relaxed">
                  As electrical interconnects reach bandwidth and power limits,
                  on-chip and chip-to-chip optical interconnects are being
                  adopted in high-performance systems. Unlike traditional copper
                  interconnects, optical links introduce unique failure modes
                  such as laser aging, waveguide misalignment, coupling loss,
                  and photodetector sensitivity degradation. Additionally, this
                  shift has become noticeable in both die-to-die connections and
                  rack-to-rack connections (inside datacenters for example). In
                  this challenge, participants must design a test strategy and
                  associated fault model for optical interconnects in one/both
                  of the above scenarios, considering both production test and
                  in-field monitoring. The solution should address how faults
                  are stimulated, observed, and distinguished, and propose
                  different types of metrics to evaluate test effectiveness
                  under realistic process, voltage, temperature, and aging
                  variations.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-blue-300 lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                  4. Developing fault modelling techniques for analog testing
                </h3>
                <p className="text-white lg:text-lg md:text-base text-sm leading-relaxed">
                  Unlike digital circuits, where faults can often be represented
                  using well-defined models such as stuck-at or transition
                  faults, analog faults manifest as subtle deviations in
                  parameters like gain, offset, bandwidth, linearity, or noise
                  due to process variations, aging, and environmental effects.
                  Distinguishing between acceptable process-induced variations
                  and actual manufacturing defects becomes difficult, leading to
                  a high risk of either over-testing (false rejects) or
                  under-testing (test escapes). Additionally, analog circuit
                  behavior is highly dependent on operating conditions and
                  component interactions, making it challenging to define
                  compact, scalable fault models that accurately capture real
                  defect mechanisms while remaining computationally tractable
                  for large-scale production testing. In this challenge,
                  participants must define suitable fault modeling and
                  simulation techniques, taking the illustrations of IPs such as
                  PCIE PHY/USB PHY modules. Participants could also develop a
                  scalable fault grading methodology to calculate analog fault
                  coverage as defined in IEEE 2427 standard using available
                  commercial tools.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-4 border-blue-500 px-6 pb-6 mb-12">
            <div className="mt-10 text-blue-500 lg:text-5xl md:text-4xl text-3xl font-bold text-center">
              Evaluation Plan
            </div>
            <div className="mt-8 space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-blue-300 lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                  Round-1: 100 points
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-white lg:text-lg md:text-base text-sm">
                  <div className="bg-gray-800 p-4 rounded">
                    Problem Understanding & Motivation
                  </div>
                  <div className="bg-gray-800 p-4 rounded">
                    Solution Methodology/Strategy Explanation
                  </div>
                  <div className="bg-gray-800 p-4 rounded">
                    Experimental Validation Methodology
                  </div>
                  <div className="bg-gray-800 p-4 rounded">
                    Overall presentation
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-blue-300 lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                  Round-2
                </h3>
                <p className="text-white lg:text-lg md:text-base text-sm">
                  Technical depth, correctness, validation, and realism of the
                  proposed solution with simulation/modeling results.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-blue-500 text-5xl font-bold text-center">
            Important Guidelines
          </div>
          <div
            className="mt-10 mb-10 p-6 rounded-xl border-4 border-blue-500 text-white text-xl"
            style={{ fontFamily: '"Poppins", arial' }}
          >
            <h2 className="mt-5 mb-5 text-blue-300 text-3xl font-bold">
              Team Composition
            </h2>
            <li className="mb-8">
              Participants must be from academic institutions ONLY.
            </li>
            <li className="mb-8">
              Maximum team size is 3 to 4 (including mentors from the
              institute).
            </li>
            <li className="mb-8">
              One leader must be identified from each team.
            </li>

            <h2 className="mt-5 mb-5 text-blue-300 text-3xl font-bold">
              Hackathon Structure
            </h2>
            <li className="mb-8">The hackathon consists of two rounds.</li>
            <li className="mb-8">
              The first round is a qualifier for the second round.
            </li>

            <h2 className="mt-5 mb-5 text-blue-300 text-3xl font-bold">
              Problem Statement Definition
            </h2>
            <li className="mb-8">
              Each team must define a problem statement from any one of the 4
              given areas and submit a document suggesting their initial line of
              thoughts and the exact problem formulation in a single/double-page
              document (IEEE conference style double-column) by the due date.
            </li>
            <li className="mb-8">
              The ART committee shall provide constructive feedback on this
              document so that the team members can proceed to developing
              full-fledged solutions to their chosen problem statements.
            </li>

            <h2 className="mt-5 mb-5 text-blue-300 text-3xl font-bold">
              Submission Process
            </h2>
            <h1 className="mt-5 mb-5 text-blue-100 text-2xl font-semibold">
              Uploading Submissions
            </h1>
            <li className="mb-8">
              Team leads must upload their submissions by the specified due
              dates on the provided links. Round-1 submissions must include a
              detailed report with maximum 12 pages (IEEE style double-column)
              and supporting simulation files/tool run logs etc.
            </li>
            <li className="mb-8">
              Ensure submissions are complete and adhere to the guidelines
              provided.
            </li>

            <h2 className="mt-5 mb-5 text-blue-300 text-3xl font-bold">
              Result Submission
            </h2>
            <h1 className="mt-5 mb-5 text-blue-100 text-2xl font-semibold">
              Google Form
            </h1>
            <li className="mb-8">
              Results for each stage must be submitted through a Google form.
            </li>
            <li className="mb-8">
              The form requires values to be provided along with related log
              files (tool outputs).
            </li>
            <li className="mb-8">
              Double-check all entries for accuracy before submission.
            </li>

            <h1 className="mt-5 mb-5 text-blue-100 text-2xl font-semibold">
              Team Coordination
            </h1>
            <li className="mb-8">
              Maintain clear communication within the team to ensure all tasks
              are completed on time.
            </li>
            <li className="mb-8">
              Regularly check for updates or announcements related to the
              hackathon on the website. For any queries, please contact:
              binod@iitj.ac.in
            </li>
          </div>
          <div className="rounded-xl border-4 border-blue-500 px-6 pb-6">
            <div className="mt-10 text-blue-500 lg:text-4xl md:text-3xl text-2xl font-bold text-center">
              Contact Information
            </div>
            <div className="mt-8 text-center text-white lg:text-2xl md:text-xl text-lg">
              <p className="mb-4">For any queries, please contact:</p>
              <a
                href="mailto:binod@iitj.ac.in"
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                binod@iitj.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>

      <Marquee direction="right" className="mt-16">
        <img src="/Mask group.webp" className="lg:h-[8vw] h-[12vw]"></img>
        <img src="/Mask group.webp" className="lg:h-[8vw] h-[12vw]"></img>
        <img src="/Mask group.webp" className="lg:h-[8vw] h-[12vw]"></img>
      </Marquee>
    </>
  );
}

export default HackathonMain;
