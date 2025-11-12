import React from "react"
import ColourfulText from "../components/ui/colourful-text";
import { motion } from "motion/react";
import  Header  from "./Components/Header";
import Marquee from "react-fast-marquee";

function TRC() {
    return (
        <>
        <div>
        <Header/>
       </div>
       <div className="mt-16">
        <img src='/TRCheading.png' style={{width:'100vw', zIndex:'-50'}}>
            
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
                <div className="bg-[#00E0FF] text-center mb-6 md:mb-0 font-bold lg:w-[25vw] md:w-[30vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-3" style={{borderRadius:"60px"}}>Submission Deadline<br/> 30 May, 2025</div>
                <div className="bg-[#00E0FF] text-center md:mb-0 font-bold lg:w-[25vw] md:w-[30vw] w-[60vw] lg:text-[1.4vw] md:text-[1.7vw] text-[3.5vw] px-7 py-3" style={{borderRadius:"60px"}}>Author Notification<br/> 30 June, 2025</div>
            </div>
        </div>
        
        <div className="flex justify-center mt-20 mb-20"> 
        <div className="text-[5vw] md:text-[4vw] lg:text-[3vw]  text-center font-bold  rounded-3xl border-blue-500 border-4 px-7 py-4 text-white hover:scale-[1.1] transition-[0.5s] hover:bg-black">
        <a href="https://easychair.org/conferences/?conf=itcindia2025">SUBMIT TEST REALITY CHECK
        </a>
        </div>
        </div>
        <div className="h-[5px] bg-white ">
        </div>
       </div>
       <div>
        <div className="mt-10 bg-black py-2 lg:text-5xl md:text-4xl text-3xl  font-bold text-center text-blue-500">
        <Marquee className="h-[20vw] md:h-[10vw] h-[8vw]">
            <div className="mx-5 text-blue-300">Test Reality Check is Live</div>
            <div className="mx-5"> • </div>
            <div className="mx-5 text-blue-300">Test Reality Check is Live</div>
            <div className="mx-5"> • </div>
            <div className="mx-5 text-blue-300">Test Reality Check is Live</div>
            <div className="mx-5"> • </div>
            <div className="mx-5 text-blue-300">Test Reality Check is Live</div>
            <div className="mx-5"> • </div>
          </Marquee>
        </div>
        <div className="mt-10 mx-8 p-6 rounded-xl border-4 border-blue-500" style={{fontFamily:'"Poppins", arial'}}>
        <div className="text-justify text-white text-xl mx-10 mb-4"><p>The objective of this track is to provide an informal platform for Chip Designers, EDA solution providers, product companies to debate about any specific test topic of interest with test community at large. The TRC track comprises of following two sections:</p></div>
                <ul className="text-justify text-white text-xl mx-10 list-disc">
                    <li className="mb-4"><b>User Stories</b>: The designers can present their test success stories, the best practices that lead to reduce turnaround time, test quality improvements, eliminating human errors and flow automation.</li>
                    <li><b>TechBuzz</b>: This is a new TRC track concept wherein user can come up with a problem statement or some topic related to Test/DFT and our Industry Experts, experts from audience and others with knowledge from the domain can provide valuable suggestions leading to healthy Technical Conversation with Test community.</li>
                </ul>
        </div>

        <div className="mt-10 text-blue-500  text-5xl font-bold text-center">Submission Guidelines</div>
        <div className="mt-10 mx-8 p-6 rounded-xl border-4 border-blue-500 text-white text-xl" style={{fontFamily:'"Poppins", arial'}}>
        <div className="mb-6 text-center font-semibold italic"><p>The TRC track does not require formal full paper for an entry.</p></div>
        <div className="mb-4"><p>Authors are invited to submit a crisp power point presentation regarding their topic for this track or an extended abstract which is no less than two pages. The presentations from this track will not be published in IEEE Explore as part of ITC main conference proceedings.</p></div>
        <ul className="text-justify text-white text-xl mx-10 list-disc">
            <li className="mb-4">For <b>User Stories</b> section, a full presentation with title needs to be submitted as an entry. The duration of the presentation shall not exceed 20 minutes and 5 minutes will be reserved for Q A. The entries will be selected based on the practicality, novelty, versatility and tangible benefits based on real time data from industrial designs.</li>
            <li>For <b>TechBuzz</b> section, a clear description of a problem or topic of interest in a couple of power point slides deck can be submitted as an entry. The entries will be selected based on the criticality and clarity of the problems/topic. Each speaker will be given 5 minutes for their problem description and another 15 minutes for the audience feedback and discussion.</li>
        </ul>
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
            <img src='/Mask group.webp' className="lg:h-[8vw] h-[12vw]"></img>
            <img src='/Mask group.webp' className="lg:h-[8vw] h-[12vw]"></img>
            <img src='/Mask group.webp' className="lg:h-[8vw] h-[12vw]"></img>
          </Marquee>

        </>
    )
}

export default TRC