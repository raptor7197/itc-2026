import React from "react"
import ColourfulText from "../components/ui/colourful-text";
import { motion } from "motion/react";
import StarBorder from "./Components/StarBorder/StarBorder";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion"
import  Header  from "./Components/Header";
import Marquee from "react-fast-marquee";
import Timeline from './Components/Timeline'
import timelineData from '../TimelineData'


function HackathonMain() {
    return (
        <>
            <div>
        <Header/>
       </div>
       <div className="mt-16">
        <img src='/Hackathonheading.png' style={{width:'100vw', zIndex:'-50'}}>
            
        </img>
        
       </div>
       
       <div>
       <div className="mt-10 mx-8 p-6 " style={{fontFamily:'"Poppins", arial'}}>
          <div className="rounded-xl border-4 border-blue-500 px-6 pb-6 mb-12">
          <div className="mt-10 text-white  lg:text-5xl md:text-4xl text-3xl font-bold text-center">
            Hackathon Winners
            </div>
            <div className="px-4 mt-12 mb-12 flex flex-col gap-16">
              <div className="bg-gray-950 px-5 py-5 shadow-2xl shadow-blue-700  rounded-2xl">
                <div className="flex flex-col md:flex-row justify-between"><div className="text-blue-300 lg:text-3xl text-2xl font-bold">Titans</div>
                <div className="lg:text-2xl text-xl md:mt-0 mt-3 text-white">KLE Technological University</div>
                </div>
                <div className="flex flex-col md:flex-row mt-6 md:items-center ">
                <div className="text-blue-500 lg:text-2xl text-xl font-bold md:mr-16 mr-4">Members:</div>
                <div className="flex flex-col md:gap-0 gap-2 md:flex-row justify-between md:items-center md:w-[80%]">
                  <div className="text-xl text-white ">Jagadeesh Pradhani</div>
                  <div className="text-xl text-white ">Suresh G Kini</div>
                  <div className="text-xl text-white ">L Ashok Kumar Reddy</div>
                  </div></div>
              </div>
              <div className="bg-gray-950 px-5 py-5 shadow-2xl shadow-blue-700  rounded-2xl">
                <div className="flex flex-col md:flex-row justify-between"><div className="text-blue-300 lg:text-3xl text-2xl font-bold">Flip-Flop Fixers</div>
                <div className="lg:text-2xl text-xl md:mt-0 mt-3 text-white">BMS College of Engineering</div>
                </div>
                <div className="flex flex-col md:flex-row mt-6 md:items-center">
                <div className="text-blue-500 lg:text-2xl text-xl font-bold md:mr-16 mr-4">Members:</div>
                <div className="flex flex-col md:gap-0 gap-2 md:flex-row justify-between md:items-center md:w-[48%]">
                  <div className="text-xl text-white ">Chaitra YG</div>
                  <div className="text-xl text-white ">Hady Rahman AV</div>
                  </div></div>
              </div>
              <div className="bg-gray-950 px-5 py-5 shadow-2xl shadow-blue-700  rounded-2xl">
                <div className="flex flex-col md:flex-row justify-between"><div className="text-blue-300 lg:text-3xl text-2xl font-bold">Quantum Bytes</div>
                <div className="lg:text-2xl text-xl md:mt-0 mt-3 text-white">Indian Institute of Information Technology, Guwahati</div>
                </div>
                <div className="flex flex-col md:flex-row mt-6 md:items-center">
                <div className="text-blue-500 lg:text-2xl text-xl font-bold md:mr-16 mr-4">Members:</div>
                <div className="flex flex-col md:gap-0 gap-2 md:flex-row justify-between md:items-center md:w-[80%]">
                  <div className="text-xl text-white ">Dr. Babita Jajodia</div>
                  <div className="text-xl text-white ">Bheemuni Harshavardhan Reddy</div>
                  <div className="text-xl text-white ">K. Shruthi</div>
                  </div></div>
              </div>
              <div className=" text-blue-500  lg:text-3xl md:text-2xl text-xl font-bold text-center">
            Honourable Mention
            </div>
            <div className="bg-gray-950 px-5 py-5 shadow-2xl shadow-blue-700  rounded-2xl">
                <div className="flex flex-col md:flex-row justify-between"><div className="text-blue-300 lg:text-3xl text-2xl font-bold">Impro_DFT</div>
                <div className="lg:text-2xl text-xl md:mt-0 mt-3 text-white">Einfochips (An Arrow Company) Pvt. Ltd.</div>
                </div>
                <div className="flex flex-col md:flex-row mt-6 md:items-center">
                <div className="text-blue-500 lg:text-2xl text-xl font-bold md:mr-16 mr-4">Members:</div>
                <div className="flex flex-col md:gap-0 gap-2 md:flex-row justify-between md:items-center md:w-[80%]">
                  <div className="text-xl text-white ">Ila Vaghela</div>
                  <div className="text-xl text-white ">	Amansinh M Chudasama</div>
                  <div className="text-xl text-white ">Aashvi Patel</div>
                  </div></div>
              </div>
            </div>
            </div></div>
          <div className="mt-10 mx-8 p-6 " style={{fontFamily:'"Poppins", arial'}}>
          <div className="rounded-xl border-4 border-blue-500 px-6 pb-6 mb-12">
        <div className="mt-10 text-white  lg:text-5xl md:text-4xl text-3xl font-bold text-center">
            Hackathon Timeline
            </div>
            <main className="py-16">
        <Timeline items={timelineData} />
      </main>
            </div>
            <div className="text-[5vw] md:text-[4vw] lg:text-[3vw] text-center font-bold rounded-3xl border-blue-500 border-4 px-7 py-4 text-white">
        <a href="https://drive.google.com/file/d/1HV669hodLhaJg-MnjPWCrmXZfEydEY6D/view?usp=drive_link" download='case_study.pdf'>DOWNLOAD CASE STUDY</a>
        </div>

            <div className="mt-10 text-blue-500  text-5xl font-bold text-center">Submission Guidelines</div>
        <div className="mt-10 mb-10 p-6 rounded-xl border-4 border-blue-500 text-white text-xl" style={{fontFamily:'"Poppins", arial'}}>
          <h2 className="mt-5 mb-5 text-blue-300  text-3xl font-bold">Hackathon Structure</h2>
        <li className="mb-8">The hackathon consists of two rounds.</li>
        <li className="mb-8">The first round is a qualifier for the second round.</li>
        <h2 className="mt-5 mb-5 text-blue-300  text-3xl font-bold">Problem Statements</h2>
                <li className="mb-8">Links to the problem statements will be shared exclusively with team
leads.</li>
        <li className="mb-8">Team leads are responsible for downloading the problem statements.</li>
        <li className="mb-8">Additionally, a sample problem statement along with its solution is
provided for participants to understand the process and steps involved.
This sample is intended to give participants an idea of what to expect
during the submission.</li>
<h2 className="mt-5 mb-5 text-blue-300  text-3xl font-bold">Submission Process</h2>
<li className="mb-8">Team leads must upload their submissions by the specified due dates on
the provided links.</li>
        <li className="mb-8">Ensure submissions are complete and adhere to the guidelines provided.</li>
        <h2 className="mt-5 mb-5 text-blue-300  text-3xl font-bold">Result Submission</h2>
<h1 className="mt-5 mb-5 text-blue-100  text-2xl font-semibold">Google Form</h1>
                <li className="mb-8">Results for each stage must be submitted through a Google form.</li>
        <li className="mb-8">The form requires values to be provided along with related log files (tool
outputs).</li>
<li className="mb-8">Double-check all entries for accuracy before submission.</li>
<h1 className="mt-5 mb-5 text-blue-100  text-2xl font-semibold">Team Coordination</h1>
                <li className="mb-8">Maintain clear communication within the team to ensure all tasks are
completed on time.</li>
        <li className="mb-8">Regularly check for updates or announcements related to the hackathon
on the website.</li>
<h1 className="mt-5 mb-5 text-blue-100  text-2xl font-semibold">Technical Requirements</h1>
                <li className="mb-8">Ensure all tools and software used for the hackathon are functioning
correctly.</li>
        <li className="mb-8">Backup all work to prevent data loss.</li>
        <h1 className="mt-5 mb-5 text-blue-100  text-2xl font-semibold">Time Management</h1>
                <li className="mb-8">Plan and allocate sufficient time for each stage of the hackathon.</li>
        <li className="mb-8">Monitor deadlines closely to avoid last-minute rushes.</li>

        </div>
            <div className="rounded-xl border-4 border-blue-500 px-6 pb-6">
            <div className="mt-10 text-blue-500  lg:text-4xl md:text-3xl text-2xl font-bold text-center">
            Frequently Asked Questions
            </div>
            <div>
            <Accordion type="single" className="mt-5" collapsible>
  <AccordionItem value="item-1" className="mt-4">
    <AccordionTrigger className="text-blue-200 font-semibold md:text-3xl bg-gray-800 p-5 text-2xl">How can we assist students who do not have access to the required tools?</AccordionTrigger>
    <AccordionContent className="text-white font-light md:text-2xl bg-gray-800 p-5 text-xl">
    We encourage participation from students who have access to the necessary tools, as
eligibility for the contest depends on tool availability.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2" className="mt-4">
    <AccordionTrigger className="text-blue-200 font-semibold md:text-3xl bg-gray-800 p-5 text-2xl">Are participants allowed to use open-source tools?</AccordionTrigger>
    <AccordionContent className="text-white font-light md:text-2xl bg-gray-800 p-5 text-xl">
    Participants have the flexibility to choose whether they prefer to use EDA-specific solutions
or open-source tools.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3" className="mt-4">
    <AccordionTrigger className="text-blue-200 font-semibold md:text-3xl bg-gray-800 p-5 text-2xl">What are the challenges with open-source tools?</AccordionTrigger>
    <AccordionContent className="text-white font-light md:text-2xl bg-gray-800 p-5 text-xl">
    Some tools fail to fully support the entire DFT framework, while others impose strict
limitations on the acceptable file formats.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4" className="mt-4">
    <AccordionTrigger className="text-blue-200 font-semibold md:text-3xl bg-gray-800 p-5 text-2xl">Is there a temporary way for institutes to enable tool access for students participating in
the contest?</AccordionTrigger>
    <AccordionContent className="text-white font-light md:text-2xl bg-gray-800 p-5 text-xl">
    Sharing licenses with students from other colleges may not be feasible if a Non-Disclosure
Agreement has been signed between a college and EDA vendors.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-5" className="mt-4">
    <AccordionTrigger className="text-blue-200 font-semibold md:text-3xl bg-gray-800 p-5 text-2xl">Can a team with limited tool access be allowed to participate in the contest?</AccordionTrigger>
    <AccordionContent className="text-white font-light md:text-2xl bg-gray-800 p-5 text-xl">
    If a team includes a student with tool access while teammates from other colleges only
contribute to the theoretical aspects of the problem statement, a team size of 4 can be permitted.
This may be considered as a special case request, if required.
    </AccordionContent>
  </AccordionItem>
</Accordion>
            </div>
</div>
</div>
    
        </div>

        
            <Marquee direction="right" className="mt-16">
            <img src='/Mask group.webp' className="lg:h-[8vw] h-[12vw]"></img>
            <img src='/Mask group.webp' className="lg:h-[8vw] h-[12vw]"></img>
            <img src='/Mask group.webp' className="lg:h-[8vw] h-[12vw]"></img>
          </Marquee>
        </>
    )
}

export default HackathonMain