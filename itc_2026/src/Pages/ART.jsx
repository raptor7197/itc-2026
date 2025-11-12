import React from "react"
import ColourfulText from "../components/ui/colourful-text";
import { motion } from "motion/react";
import  Header  from "./Components/Header";
import Marquee from "react-fast-marquee";

function ART() {
    return (
        <>
        <div>
        <Header/>
       </div>
       <div className="mt-16">
        <img src='/ARTHeading.png' style={{width:'100vw', zIndex:'-50'}}>
            
        </img>
        
       </div>
       <div className="text-white mt-10 lg:text-5xl md:text-4xl text-3xl text-center font-bold " style={{fontFamily:'"Poppins", arial'}}>
            IMPORTANT DATES
       </div>
       <div className="mt-10 textbg">
        <div className="h-[5px] bg-white ">
        </div>
        
        <div className="mt-12 w-[100vw]  md:gap-0 ">
            <div className="flex flex-col items-center md:flex-row justify-evenly">
                <div className="bg-[#00E0FF] text-center mb-6 md:mb-0 font-bold lg:w-[25vw] md:w-[30vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-3" style={{borderRadius:"60px"}}>Full Paper Submission Deadline<br/> 23 May, 2025</div>
                <div className="bg-[#00E0FF] text-center md:mb-0 font-bold lg:w-[25vw] md:w-[30vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-3" style={{borderRadius:"60px"}}>Final Manuscript Due<br/> 07 June, 2025</div>
            </div>
            <div className="flex flex-row md:mt-12 mt-6 mb-6 justify-evenly">
                <div className="bg-[#00E0FF] text-center mb-6 md:mb-0 font-bold md:w-[30vw] lg:w-[25vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-3" style={{borderRadius:"60px"}}>Author Notification<br/> 01 June, 2025</div>
                </div>
        </div>
        

        <div className="flex justify-center mt-20 mb-20"> 
        <div className="text-[5vw] md:text-[4vw] lg:text-[3vw]  text-center font-bold  rounded-3xl border-blue-500 border-4 px-7 py-4 text-white hover:scale-[1.1] transition-[0.5s] hover:bg-black">
        <a href="https://easychair.org/conferences/?conf=itcindia2025">SUBMIT ACADEMIA RESEARCH TRACK
        </a>
        </div>
        </div>
        <div className="h-[5px] bg-white ">
        </div>
       </div>
       <div>
       <div className="mt-10 bg-black py-2 lg:text-5xl md:text-4xl text-3xl  font-bold text-center text-blue-500">
        <Marquee className="h-[20vw] md:h-[10vw] ">
            <div className="mx-5 text-blue-300">Academia Research Track</div>
            <div className="mx-5"> • </div>
            <div className="mx-5 text-blue-300">Academia Research Track</div>
            <div className="mx-5"> • </div>
            <div className="mx-5 text-blue-300">Academia Research Track</div>
            <div className="mx-5"> • </div>
            <div className="mx-5 text-blue-300">Academia Research Track</div>
            <div className="mx-5"> • </div>
          </Marquee>
        </div>
        <div className="mt-10 mx-8 p-6 rounded-xl border-4 border-blue-500" style={{fontFamily:'"Poppins", arial'}}>
            <p className="text-justify text-white text-xl mx-10">International Test Conference, the world’s premier venue dedicated to the electronic test of devices, boards and systems, will host a dedicated Academia Research Track (ART) to manifest creative research ideas from students and young academicians. The key objective of this academia track, first time planned to be held with the International Test Conference, is to provide a dedicated informal forum for vigorous creative discussion and debate of this area from researchers of various academic institutes. The aim is to encourage the oral/poster presentation with discussion on truly innovative and “out-of-the-box” ideas that may not yet have been fully developed for presentation at reviewed conferences to address these challenges.</p>
<p className="text-justify text-white text-xl mt-10 mx-10">Students and young academicians are invited to submit original and high quality research work or innovative idea to this track. Selected ideas will interact with dedicated panel from industry to further extended the research work of common interests. ART is a platform of presenting late-breaking ideas, getting feedback on an innovative method, or participating without having to write a full paper.</p>
</div>

<div className="mt-10 text-blue-500  text-5xl font-bold text-center">Submission Guidelines</div>
        <div className="mt-10 mx-8 p-6 rounded-xl border-4 border-blue-500 text-white text-xl" style={{fontFamily:'"Poppins", arial'}}>
        <li className="mb-8">One or two topic(s) from the topic list, or a description of your topic.</li>
        <li className="mb-8">An abstract of 100 words or less to be entered online</li>
        <li className="mb-8">An electronic copy of the paper up to 3 pages or an extended summary up to 4 pages, double-columned in IEEE Format <a href="https://www.ieee.org/conferences/publishing/templates.html"><b>(Paper template)</b></a>.</li>
        <li className="mb-8">Your submission must include the problem statement and novelty of solution(s). It should not include information that serves to identify the authors of the manuscript, such as name(s) or affiliation(s) of the author(s). References and bibliographic citations to the author(s) own published works or affiliations should be made in the third person.</li>
        </div>

        <div className="mt-10 text-blue-500  text-5xl font-bold text-center">Selection Criteria</div>
        <div className="mt-10 mx-8 p-6 rounded-xl border-4 border-blue-500 text-white text-xl" style={{fontFamily:'"Poppins", arial'}}>
        <li className="mb-8">Abstracts will be selected based on the novelty of the work and its relevance to the conference. The selected abstracts would be later either categorized into poster presentation or oral presentation, solely based on the merit.</li>
        <li className="mb-8">Upon receiving the acceptance notification, the author will be informed if the paper is classified as a regular full paper or a poster.</li>
        <li className="mb-8">The selected papers would be later either categorized into poster presentation or oral presentation, solely based on the merit.</li>
        <li className="mb-8">If the submission got accepted under full paper category, it will be considered for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements.</li>
        </div>

        <div className="mt-10 text-blue-500  text-5xl font-bold text-center">Additional Benefits</div>
        <div className="mt-10 mx-8 p-6 rounded-xl border-4 border-blue-500 text-white text-xl" style={{fontFamily:'"Poppins", arial'}}>
        <li className="mb-8 font-semibold">Registration fee waiver and partial or full travel support will be provided through fellowship.</li>
        <li className="mb-8">Long term research plan with industry, if research interests align.</li>
        <li className="mb-8">High Impact Research award will be presented in conference banquet.</li>
        </div>

        </div>

        <div className="mt-10 text-blue-500 text-4xl lg:text-5xl font-bold text-center">Topics of interest include (not limited to)</div>
            <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 lg:gap-x-64 gap-y-8 mx-8 my-16">
            <div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">RF, mm-Wave and THz Testing</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Embedded BIST & DFT</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">3D/2.5D Test</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Emerging Defect Mechanisms</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Adaptive Test in Practice</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Hardware Security and Trust</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">ATE/Probe Card Design</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Known-Good-Die testing</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Advances in Boundary Scan</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Memory Test and Repair</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Data Driven Methods</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">MEMS Testing</div>
<div class="text-white text-lg lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Data Exchange and Infrastructure</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Mixed-Signal and Analog Test</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Defect-Oriented Testing</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">New Technologies and Test</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">DFM and Test Diagnosis</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">On-Chip Test Compression</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Economics of Test</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Online Test</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">End-to-End Data Analysis</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Pre- and Post-Silicon Validation</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Bring Up</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">System Test (Applications)</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Power Issues in Test</div>
<div class="text-white text-lg lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">System Test (Hardware/Software)</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Protocol-aware Test</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Test-to-Design Feedback</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Reliability and Resilience</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Test Escape Analysis</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Scan Based Test</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">SoC/SiP/NoC Test</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Silicon Debug</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">IoT Testing</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Simulation and Test</div>
<div class="text-white text-lg lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Jitter, High-Speed I/O and RF Test</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Test Flow Optimizations</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Test Generation and Validation</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Test Resource Partitioning</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Test Standards</div>
<div class="text-white text-lg lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Test Time Analysis and Reduction</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Testing High Speed</div>
<div class="text-white text-xl lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Optics/Photonics</div>
<div class="text-white text-lg lg:text-2xl px-6 font-semibold text-center bg-gray-700 py-4 rounded-3xl w-[80vw] md:w-[35vw] lg:w-[29vw]">Yield Analysis and Optimization</div>

            </div>
            </div>
            <Marquee direction="right">
            <img src='./Mask group.webp' className="lg:h-[8vw] h-[12vw]"></img>
            <img src='/Mask group.webp' className="lg:h-[8vw] h-[12vw]"></img>
            <img src='/Mask group.webp' className="lg:h-[8vw] h-[12vw]"></img>
          </Marquee>

        </>
    )
}

export default ART