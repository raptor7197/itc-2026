import React, { useState } from 'react';
import Header from '../Pages/Components/Header.jsx';
import { Button } from "../components/ui/button.js"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog.js"

const Agenda = () => {
  const [activeTab, setActiveTab] = useState('day0');

  const TabButton = ({ tabId, children, isActive, onClick }) => (
    <button
      onClick={() => onClick(tabId)}
      className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-medium rounded-t-lg transition-colors duration-200 ${
        isActive
          ? 'bg-blue-600 text-white border-b-2 border-blue-400'
          : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
      }`}
    >
      {children}
    </button>
  );

  const Day0Content = () => (
    <div className="mb-10 sm:mb-12 ">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-100 bg-gray-800 p-3 rounded-lg border border-gray-700 text-center">
        Day 0: Tutorials <br />
        Sunday, July 20, 2025
      </h2>
      
      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="w-full border-collapse mb-6 text-sm sm:text-md">
          <thead>
            <tr className="">
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left bg-gray-700 font-semibold text-white ">Time</th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-bold bg-blue-500 text-black ">Track 1 (a)<br/>GRAND VICTORIA 1<br/><span className="text-xs font-semibold">Analog and Mixed-Signal Test and Failure Analysis<br/>Session Chair | Mehala Balasundaram</span></th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-bold bg-blue-500 text-black ">Track 2 (a)<br/>GRAND VICTORIA 2<br/><span className="text-xs font-semibold">Silicon to Systems Test<br/>Session Chair | Abhishek Chaudhary</span></th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-bold bg-green-500 text-black ">Track 3 (a)<br/>ARABICA & ROBUSTA<br/><span className="text-xs font-semibold">Test Security<br/>Session Chair | Bharath Nandakumar</span></th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-bold bg-orange-500 text-black ">Track 4<br/>BRAIN BOX<br/><span className="text-xs font-semibold">Invited Tutorial<br/>Session Chair | Lakshmanan Balasubramanian</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">08:00am - 09:15am</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center bg-gray-700" colSpan="4">
                <strong> REGISTRATIONS</strong>
              </td>
            </tr>


            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">09:15am - 10:45am</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black ">
                <strong>Advanced Power MOSFET Testing: Methodologies, Challenges,
and Best Practices</strong><br/>
                <span className="text-xs text-black ">Manoj Pachaiyan, Kalyana Sundaram Chandran and Senthilkumar Dhamodharan 
(Caliber Interconnects, India)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black ">
                <strong>Silicon Lifecycle Management: Pivotal component in extension of Silicon to Systems</strong><br/>
                <span className="text-xs text-black ">Leela Krishna Thota, Ravi Teja Vemuri and Veeramani Rajalingam 
(Synopsys, India)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-green-300 text-black ">
                <strong>Silent Data Corruption: A Designer's View</strong><br/>
                <span className="text-xs text-black ">Ankush Srivastava 
(Qualcomm, India)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-orange-300 text-black ">
                <strong>Scaling up DFT and Test to Bridge Today's Gaps</strong><br/>
                <span className="text-xs text-black ">Rubin Parekhji 
(Texas Instruments, India)</span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">10:45pm - 11:15pm</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center bg-gray-700" colSpan="4">
                <strong>Tea/Coffee/Break</strong>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">11:15am - 12:45pm</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black ">
                <strong>Electrical Failure Analysis for Low Power Mixed-Signal
                  
Integrated Circuit Failure Debug - Tools and Techniques</strong><br/>
                <span className="text-xs text-black ">Lakshmanan Balasubramanian, Murugesh Prashanth Subramaniam, Srinivas V V, Sourabh Gupta (Texas Instruments, India)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black ">
                <strong>iJTAG – Lifeline of modern era SoC DFT</strong><br/>
                <span className="text-xs text-black ">Divyank Mittal, Sagar Kumar and Vaibhav Mishra 
(Cadence, India)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-green-300 text-black ">
                <strong>Scan based Testing and Test security challenges: Scan and
security can live together</strong><br/>
                <span className="text-xs text-black ">Jayagowri R
 (BMS College of Engineering, India)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-orange-300 text-black ">
                <strong>Invite Only Session</strong>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">12:45pm - 01:45pm</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center bg-gray-700" colSpan="4">
                <strong>LUNCH BREAK</strong>
              </td>
              {/* <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-orange-300 text-black">
                <strong>Invite only Session (Industry Test Challenge)</strong>
              </td> */}
            </tr>
            <tr>
              
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">TRACKS</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-500 text-black">
                <strong>Track 1 (b): <br />
                
                GRAND VICTORIA 1 <br /></strong>

                <span className='font-semibold'>Recent Advances in Test</span><br/>
                <span className="text-xs text-black">Session Chair | Lakshmanan Balasubramanian</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-500 text-black">
                <strong>Track 2 (b): <br />GRAND VICTORIA 2 </strong>
                   <br /><span className='font-semibold'> 3D Integration & Test</span><br/>
                <span className="text-xs text-black">Session Chair | Mehala Balasundaram	</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-green-500 text-black">
                <strong>Track 3 (b): <br />
                <span className='font-semibold'> 
                    Memory Test
                </span>
                 </strong><br/>
                <span className="text-xs text-black">Session Chair | Bharath Nandakumar</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-orange-300 text-black">
                <strong>Invite only Session (Industry Test Challenge)</strong>
              </td>
            </tr>
            <tr>
              
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">01:45 pm - 03:15 pm</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black">
                <strong>A  Review of Recent Advances in Test: Cell Aware Test, Timing Aware Test and System Level Tests</strong><br/>
                <span className="text-xs text-black">Adit Singh (Auburn University, USA)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black">
                <strong>Demystifying DFT: Basics of VLSI testing and evolution of DFT</strong><br/>
                <span className="text-xs text-black">Abhishek Chaudhary and Arun Vasudevan (AMD, India)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-green-300 text-black">
                <strong>Advances in Memory Design and Testing: Insights from Academia and Industry - 
Part I</strong><br/>
                <span className="text-xs text-black">Sakthivel Ramachandram (VIT Vellore), Sanjith Sleeba, Rahul Sahu and Subhadip Kundu (Qualcomm)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-orange-300 text-black">
                <strong>Invite only Session (Industry Test Challenge)</strong>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">03:15pm - 03:45pm</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center bg-gray-700" colSpan="4">
                <strong>Tea/Coffee/Break</strong>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">03:45pm - 05:15pm</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black">
                <strong>A  Review of Recent Advances in Test: Cell Aware Test, Timing Aware Test and System Level Tests</strong><br/>
                <span className="text-xs text-black">Adit Singh (Auburn University, USA)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black">
                <strong>Demystifying DFT for 3D: Test techniques and repair strategy for multi-die and 3D devices</strong><br/>
                <span className="text-xs text-black">Lee Harrison (Siemens EDA, UK)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-green-300 text-black">
                <strong>Advances in Memory Design and Testing: Insights from Academia and Industry - 
Part II</strong><br/>
                <span className="text-xs text-black">Sakthivel Ramachandram (VIT Vellore), Sanjith Sleeba, Rahul Sahu and Subhadip Kundu (Qualcomm)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-orange-300 text-black">
                <strong>Invite only Session (Industry Test Challenge)</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const Day1Content = () => (
    <div className="mb-10 sm:mb-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-100 bg-gray-800 p-3 rounded-lg border border-gray-700 text-center">
        Day 1: Keynotes, Invited-Talks, Papers, ART, Posters and Panels <br /> Monday, July 21, 2025
      </h2>
      
      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="w-full border-collapse mb-6 text-sm sm:text-md">
          <thead>
            <tr className="text-center">l
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left bg-gray-800 font-semibold text-white ">08:00am - 09:00am</th>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-700 text-white col-span-4 text-center"><strong>REGISTRATIONS</strong></td>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-bold">HALL NAME</td>
                            <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-500 text-black col-span-4 text-center"><strong>GRAND VICTORIA</strong></td>

            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">09:00am - 09:30am</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black text-center ">
                <strong>Conference Inauguration | General Co-Chairs, ITC India 2025</strong><br/>
                <span className="text-xs text-gray-800">(Opening Remarks, Conference Highlights, Lamp Lighting by Chief Guests)</span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">09:30am - 10:00am</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black text-center">
                <strong>Keynote Address</strong><br/>
                <span className="text-xs text-gray-800"><strong>
                  Transformative Design for Test Technologies for Silicon Lifecycle Management</strong><br/>Janusz Rajski (Siemens EDA, USA)</span>
              </td>
              {/* <td className="border border-gray-700 px-2 sm:px-4 py-2">GRAND VICTORIA</td> */}
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">10:00am - 10:30am</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black text-center">
                <strong>Keynote Address</strong><br/>
                <span className="text-xs text-gray-800 "> <strong>Future of AI Hardware Enabled by Advanced Packaging</strong> <br/>Raja Swaminathan (AMD, USA)</span>
              </td>
              {/* <td className="border border-gray-700 px-2 sm:px-4 py-2">GRAND VICTORIA</td> */}
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">10:30am - 11:00am</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black text-center">
                <strong>Keynote Address</strong><br/>
                <span className="text-xs text-gray-800"><strong>Enabling efficient prototyping for Fabless design houses</strong><br/> Rajesh V (Tessolve, India)</span>
              </td>
              {/* <td className="border border-gray-700 px-2 sm:px-4 py-2">GRAND VICTORIA</td> */}
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">11:00am - 11:05am</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black text-center"><strong>Exhibit Booth Inauguration</strong></td>
              {/* <td className="border border-gray-700 px-2 sm:px-4 py-2">GRAND VICTORIA</td> */}
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">11:00am - 11:30am</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-700 text-center"><strong>TEA/COFFEE BREAK</strong></td>
              {/* <td className="border border-gray-700 px-2 sm:px-4 py-2"></td> */}
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse mb-6 text-sm sm:text-md">
          <thead>
            <tr className="">
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left bg-gray-700 font-semibold text-white">Time</th>
              <th className='border border-gray-700 px-2 sm:px-4 py-2 text-left font-bold bg-blue-500 text-black '>Paper Session 1<br/>GRAND VICTORIA 1<br/><span className="text-xs font-semibold">AI in Test: Detect, Predict, Compensate<br/>Session Chair | Manivannan Ethiraj</span></th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-bold bg-blue-500 text-black ">Paper Session 2<br/>GRAND VICTORIA 2<br/><span className="text-xs font-semibold">ATE Intelligence: Speed Meets Precision<br/>Session Chair | Abhishek Chaudary</span></th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-bold bg-green-500 text-black ">Paper Session 3<br/>ARABICA & ROBUSTA<br/><span className="text-xs font-semibold">Accelerated Chiplet Testing:  Interconnects to IJTAG<br/>Session Chair | Rajesh Kumar Tiwari </span></th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-bold bg-orange-500 text-black ">Academic Research Track (ART) Session 1<br/>BRAIN BOX<br/><span className="text-xs font-semibold">Session Chair | Leela Krishna Thota</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">11:30am - 01:00pm</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black">
                <strong>1.1: Anomaly Ranking of LPDDR4 Shmoo Results using Machine Learning</strong><br/>
                <span className="text-xs text-gray-900">Vinodh J Rakesh and  Chaitanya Kumar Reddy Mallu (Infineon Technologies, India)</span><br/><br/>
                <strong>1.2:  Machine Learning-Based High Vmin Prediction for Enhanced Pre-Silicon Reliability</strong><br/>
                <span className="text-xs text-gray-900">Sudheer Anumala, Satya Ramoji Chikkam (Intel, India); 
Yu Tin Cheong, Xin Rou Chong and Mohd Azwann Zulkefle (Intel, Malasia)</span><br/><br/>
                <strong>1.3: A Machine Learning-based Structural Built-in Self-Test for Lifetime Frequency Drift Compensation of Precision Oscillators</strong><br/>
                <span className="text-xs text-gray-900">Ritik Gupta (IISc Bangalore, India); 
Aswin R, Rubin Parekhji (Texas Instruments, India) and 
Gaurab Banerjee
(IISc Bangalore, India)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black">
                <strong>2.1: Test Time Reduction in Current Sense Amplifiers via Optimized Current Range Across Wafer Touchdowns and Gain Reordering on V93K SMT8</strong><br/>
                <span className="text-xs text-gray-900">Hemanthkumar V
(Infineon Technologies, India)</span><br/><br/>
                <strong>2.2: Accelerating Time to Market of Semiconductor IC's using Smart ATE PCB Routing System</strong><br/>
                <span className="text-xs text-gray-900">B Lokapriya, A Dyaneswaran, R Karthika, S Lokendran and Dhamodharan Senthilkumar
(Caliber Interconnects, India)</span><br/><br/>
                <strong>2.3: Accelerating ATE Pattern Verification & Debug  using Emulation Platform - Enabling First-pass  Success on Silicon</strong><br/>
                <span className="text-xs text-gray-900">Kumar Gaurav Singh, Praveen Kumar Ravichandran, Saurabh Karkun, Karthik Rajakumar, Yogeshwaran Shanmugam and Pratibha Gupta
(Texas Instruments, India)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-green-300 text-black">
                <strong>3.1: Test Selection and Scheduling for 3D-Stacked Chiplet-based Designs</strong><br/>
                <span className="text-xs text-gray-900">Ravikumar C P (Vinyana Tech, India) and Shiva Shankar B (IIIT Dharwad, India)</span><br/><br/>
                <strong>3.2: Effective 3D IC Interconnect Test Using Defect Distance and Bump Placement Location</strong><br/>
                <span className="text-xs text-gray-900">Anshuman Chandra (Siemens DIS, USA; Barbara Działowska, Marta Stępniewska (Siemens DIS, Canada); Chi-Chun Yang (Siemens DIS, Taiwan); and Jonathan Gaudet (Siemens DIS, Canada)</span><br/><br/>
                <strong>3.3: Implementation and Optimization of High-Bandwidth IJTAG for Enhanced Test Time Reduction in Complex SoCs</strong><br/>
                <span className="text-xs text-gray-900">Sandipan Sharma, Nikita Naresh (Google, India); Wilson Pradeep (Google, USA); 
Karthick Prabhu (Siemens DISW, Poland); and Olga Przybysz (Siemens DISW, India)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-orange-300 text-black">
                <strong>ART 1.1: LLMCov: A Methodology for LLM-aided DfT Coverage Improvement in Open-Source Designs</strong><br/>
                <span className="text-xs text-gray-900">Manisha Kumari, Subharthi Roy (IIT Jodhpur, India); Masahiro Fujita (University of Tokyo, Japan); and Binod Kumar (IIT Jodhpur, India)</span><br/><br/>
                <strong>ART 1.2: Optimal Test Point Insertion for Enhanced Small
Delay Defect Coverage</strong><br/>
                <span className="text-xs text-gray-900">Faraz Aatif, Prathiba Muthukrishnan and Sivanantham Sathasivam (VIT Vellore, India)</span><br/><br/>
                <strong>ART 1.3: Assertion-Driven Formal Verification for Custom RISC-V Core</strong><br/>
                <span className="text-xs text-gray-900">Sree Sankar E, Sakshi Thakur and Binod Kumar (IIT Jodhpur, India)</span><br/><br/>
                <strong>ART 1.4: Enhanced Power Estimation of Digital VLSI Circuits using Machine Learning</strong><br/>
                <span className="text-xs text-gray-900">Maniyar Mohammed Saqlain and Sakthivel Ramachandran (VIT Vellore, India)</span><br/><br/>
                <strong>ART 1.5: Implementation of Memory Built-In Self-Test</strong><br/>
                <span className="text-xs text-gray-900">Amol G. Patil, Suhas B Shirol and Vikas K R
(KLE Technological University, India)</span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium text-blue-300">01:00pm - 02:00pm</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center bg-gray-700" colSpan="4">
                <strong>LUNCH BREAK</strong>
              </td>
            </tr>
            <td className='border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium'>
              SESSIONS
            </td>
            <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-500 font-medium text-black">
             <strong>
               Paper Session 4: Aging & Escapes: The Silent Threat
             </strong><br />
Session Chair | Nikita Naresh <br />GRAND VICTORIA 1
            </td>
            <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-500 font-medium text-black">
              <strong>
                Paper Session 5: From Design to Debug: Silicon Validation
              </strong><br />
Session Chair | Rahul Anand <br /> GRAND VICTORIA 2
            </td>
            <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-green-500 font-medium text-black">
             <strong>
               Paper Session 6: Innovative Test for Flexible & Mixed-Signal ICs</strong><br /> Session Chair | Kiran Rajmohan <br />  ARABICA & ROBUSTA
            </td> 

            <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-orange-500 font-medium text-black">
              <strong>
                Academic Research Track (ART) Session 2</strong><br /> Session Chair | Prof.Binod Kumar <br />  BRAIN BOX
            </td>


            
            <tr>
              
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">02:00pm - 03:30pm</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black">
                <strong>4.1: From Structural Test Escapes to Silent Data Errors: A preliminary analysis</strong><br/>
                <span className="text-xs text-gray-900">Paolo Bernardi, Francesco Angione (Politecnico di Torino, Italy); and Arani Sinha (Intel, USA)</span><br/><br/>
                <strong>4.2: Lite-CMOS Transition Fault Model for Legacy Design</strong><br/>
                <span className="text-xs text-gray-900">Yi Sun (NXP Semiconductors, USA), Qiong Wang (NXP Semiconductors, China), Saidapet Ramesh (NXP Semiconductors, USA) and Cunyu Shi (NXP Semiconductors, China)</span><br/><br/>
                <strong>4.3: Assessing Long-Term Reliability through Accelerated Aging Stress Tests on a On-chip Quality and Reliability Platform : A Band Gap Reference case study</strong><br/>
                <span className="text-xs text-gray-900">Shiv Shankar Gupta, Javed GS and Rahul Sharma 
(Intel, India)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black">
                <strong>5.1: VTEST: FPGA-Based SoC Validation Framework</strong><br/>
                <span className="text-xs text-gray-900">Srikanth Neelam, Sreekanth Arati (VConnecTech Systems Pvt. Ltd, India); and Amalin Prince A (BITS Pilani, India)</span><br/><br/>
                <strong>5.2 Novel approach for implementation and validation of scan dump debug methodology</strong><br/>
                <span className="text-xs text-gray-900">Savan Bhatelia and Mahesh Bendre (Intel, India)</span><br/><br/>
                <strong>5.3: Novel Post Silicon Validation Strategies for the New Era of UCIe Chiplets</strong><br/>
                <span className="text-xs text-gray-900">Bhuvana Chandar, Anirudha Rao, Santhosh Kumar S, Meghana Bukkapatnam, Deepak Baliga (Intel, India); and Chad E Beach (Intel, USA)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-green-300 text-black">
                <strong>6.1: An Integrated Environment for Simulation of Mixed Signal Tests using Open-Source Tools</strong><br/>
                <span className="text-xs text-gray-900">Gursimran Singh, Irawati Thete, Pammy Thakur and Rajesh Jabade (Texas Instruments, Bangalore)</span><br/><br/>
                <strong>6.2: A Smart Framework for Cost-Effective Characterization of Touch-Sensing Controller</strong><br/>
                <span className="text-xs text-gray-900">Paul Ngoy (Infineon Technologies, USA); Abhishek Ganesh Poojary, Jagadish Raju K and Keerthan Rai (Infineon Technologies, India)</span><br/><br/>
                <strong>6.3: Automated BIST Technique for Interconnect Characterization and Reliability Enhancement in Flexible Electronic Circuits</strong><br/>
                <span className="text-xs text-gray-900">Harshad Singh, Kirti Srivastava and Oppili Prasad L (IIT-BHU, India)</span>
              </td>
              
              <table className="table-auto border border-collapse border-gray-700 bg-teal-900 ">
  <tbody className='bg-orange-300 '>
    <tr className=''>
      <td className="border border-orange-300 px-2 sm:px-4 py-2 font-bold text-black">
        Special Address by Dr. Sreejit Chakravarty (Ampere Computing, USA) - 30 mins
      </td>
    </tr>
    <tr>
      <td className="border border-orange-300 px-2 sm:px-4 py-2 font-bold text-black">
        General Chairs & Fellowship Dialogue - 30 mins
      </td>
    </tr>
    <tr>
      <td className="border border-orange-300 px-2 sm:px-4 py-2 font-bold text-black">
        VLSI Test Coverage Optimization Hackathon Introduction & Talks by Top-3 Teams (30mins)
      </td>
    </tr>
    <tr>
      <td className="border border-orange-300 px-2 sm:px-4 py-2 text-gray-900">
        <strong className='text-black'>Titans</strong> - KLE Technological University, Hubli
      </td>
    </tr>
    <tr>
      <td className="border border-orange-300 px-2 sm:px-4 py-2 text-gray-900">
        <strong className='text-black'>
          Flipflop fixers</strong> - BMS College of Engineering, Bengaluru
      </td>
    </tr>
    <tr>
      <td className="border border-orange-300 px-2 sm:px-4 py-2 text-gray-900">
        <strong className='text-black'>
          Quantum Bytes</strong> - Indian Institute of Information Technology, Guwahati
      </td>
    </tr>
    <tr>
      <td className="border border-orange-300 px-2 sm:px-4 py-2 text-black">
        Honorable Mention: Impro_DFT, Einfochips (An Arrow Company) pvt. ltd.
      </td>
    </tr>
  </tbody>
</table>

            </tr>
            <tr>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">03:30pm - 04:00pm</td>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center bg-gray-700" colSpan="3">
      <strong>TEA/COFFEE BREAK</strong>
    </td>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-pink-700 text-white text-xs" rowSpan="4">
  <div className="text-center">
    <strong className="text-base ">Poster Session</strong><br />
    <em>(Venue: Front Lobby)</em><br /><br />
    <strong>Paper IDs:</strong><br />
    99, 135, 159, 246, 249,<br />
    260, 289, 291, 294, 351,<br />
    365, 370, 372, 377, 378,<br />
    384, 385, 387, 388,<br />
    390, 397, 398
  </div>
</td>

  </tr>
  <tr className=''>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">HALL NAME</td>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center bg-blue-500" colSpan="3">
      <strong className='text-black'>GRAND VICTORIA</strong><br />
      </td>
  </tr>
  <tr>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">04:00pm - 04:25pm</td>
    <td className="border text-center border-gray-700 px-2 sm:px-4 py-2 bg-blue-300" colSpan="3">
      <strong className='text-black'>Distinguished Address</strong><br />
      <strong className='text-black'>The Standard for Test - IEEE 1838 for 3D-IC</strong><br />
      <span className="text-xs text-gray-900">Adam Cron (Synopsys)</span>
    </td>
  </tr>
  <tr>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">04:25pm - 05:30pm</td>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-center" colSpan="3">
      <strong className='text-black'>Panel Discussion</strong><br />
      <span className="text-xs text-gray-900 ">
<strong>
          India's Semiconductor Test Ecosystem: Building for Scale and Innovation<br />
</strong>        Ruchir Dixit (Siemens), Venkata Rangamtotakura (Infineon), Paresh Bharkhada (Teradyne),<br />
        Anand Muthaiah (Tessolve), Senthil (Caliber Interconnect)
      </span>
    </td>
  </tr>
  <tr>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">05:30pm - 05:45pm</td>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-red-900 text-center" colSpan="4">
      <strong>Closing Remarks | General Co-Chairs, ITC India 2025</strong>
    </td>
  </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const Day2Content = () => (
    <div className="mb-10 sm:mb-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-100 bg-gray-800 p-3 text-center rounded-lg border border-gray-700">
        Day 2: Keynotes, Invited-Talks, Papers, ART, TRC, Special Talks and Panels <br /> Tuesday, July 22, 2025
      </h2>
      
      <div className="overflow-x-auto rounded-lg border border-gray-700 ">
        <table className="w-full border-collapse mb-4 sm:mb-6 text-xs sm:text-sm">
          <thead>
            <tr className="bg-gray-800 text-black">
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-semibold text-blue-300">Time</th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-semibold text-blue-300">Activity/Session</th>
              {/* <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-semibold text-blue-300">Hall</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">08:30am - 09:15am</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-700 text-center "><strong>REGISTRATIONS</strong></td>
            </tr>
            <tr>
              <td className='border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium'>
                HALL NAME
              </td>
              <td className='border border-gray-700 px-2 sm:px-4 py-2 font-semibold text-black text-center bg-blue-500'>
                GRAND VICTORIA
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">09:15am - 09:30am</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-center text-black">
                
                <strong>Welcome / Day 1 Summary | General Co-Chairs, ITC India 2025</strong>
              </td>
              {/* <td className="border border-gray-700 px-2 sm:px-4 py-2">GRAND VICTORIA</td> */}
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">09:30am - 10:00am</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-center text-black">
                <strong>Keynote Address</strong><br/>
                <span className="text-xs  text-gray-800"><strong>The Right Testing Strategy Can Save Designs</strong><br/>Nitza Basoco (Teradyne)</span>
              </td>
              {/* <td className="border border-gray-700 px-2 sm:px-4 py-2">GRAND VICTORIA</td> */}
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">10:00am - 10:30am</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-center text-black">
                <strong>Keynote Address</strong><br/>
                <span className="text-xs  text-gray-800"><strong>Rethinking Silicon Test to reduce DPPM and SDC</strong><br/>Dr. Sreejit Chakravarty (Ampere Computing, USA)</span>
              </td>
              {/* <td className="border border-gray-700 px-2 sm:px-4 py-2">GRAND VICTORIA</td> */}
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">10:30am - 11:00am</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-center text-black">
                <strong>Keynote Address</strong><br/>
                <span className="text-xs text-gray-800 "><strong>From Silicon to Solutions: The Societal Impact of Semiconductor Leadership</strong><br/>Suresh Babu K (Caliber Interconnect Solutions, India)</span>
              </td>
              {/* <td className="border border-gray-700 px-2 sm:px-4 py-2">GRAND VICTORIA</td> */}
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium ">11:00am - 11:30am</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-700 text-center "><strong>TEA/COFFEE BREAK</strong></td>
            </tr>
          </tbody>
        </table>

        <table className="w-full border-collapse mb-4 sm:mb-6 text-xs sm:text-sm">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-semibold text-blue-300">Time</th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-semibold  bg-blue-500 text-black ">Industry Session 1<br/>GRAND VICTORIA 1<br/><span className="text-xs">Session Chair | Shamitha rao</span></th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-semibold bg-blue-500 text-black">Paper Session 7<br/>GRAND VICTORIA 2<br/><span className="text-xs">Smart SoC Testing: Access, Memory, Reliability<br/>Session Chair | Sudhir Raut</span></th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-semibold bg-green-500 text-black ">Paper Session 8<br/>ARABICA & ROBUSTA<br/><span className="text-xs">Secure and Efficient SoC Test Infrastructure<br/>Session Chair | Rajesh Khurana</span></th>
              <th className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-semibold bg-orange-500 text-black">Test Reality Check (TRC)<br/>BRAIN BOX<br/><span className="text-xs">Session Chair | Rajit Karmakar</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">11:30am - 01:00pm</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black">
                <strong>Advanced Yield Analysis Capabilities for the Hyper-scaler Era</strong><br/>
                <span className="text-xs text-gray-900">Kort Longenbach (Marvell)</span><br/><br/>
                <strong>Serving the Era of Complexity through Continuous Innovations</strong><br/>
                <span className="text-xs text-gray-900">Raj Singam (Advantest)</span><br/><br/>
                <strong>Emerging challenges and new approaches in Validation of Mixed signal SoCs</strong><br/>
                <span className="text-xs text-gray-900">Pradeep Nair (Texas Instruments)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black">
                <strong>7.1: Exploring Tessent Two Pin Serial Port for MBIST, LBIST and ATPG for a low pin count SoC</strong><br/>
                <span className="text-xs text-gray-900">Ratheesh Thekke Veetil, Soumyajyoti Paul, Prakash Kumar, Anvesh Gadi (Analog Device, India); Ajay Purushotham and Vidya Neerkundar (Siemens EDA, India)</span><br/><br/>
                <strong>7.2: Enhanced RTL Test Point Insertion Flow with Improved Functional Block Testability</strong><br/>
                <span className="text-xs text-gray-900">Nikita Naresh, Naushad Ali (Google, India);  Wilson Pradeep(Google, USA);  Oussama Laouamri (Siemens USA); Surya Phanindra Chatla, Karthick Prabhu B (Siemens India); Nilanjan Mukherjee (Siemens USA)</span><br/><br/>
                <strong>7.2: Enhancing Memory Reliability: Integrating Error Correction Codes with Memory Built-In Self-Test for Effective Validation</strong><br/>
                <span className="text-xs text-gray-900">Luc Romain (Siemens, Canada); Paul-Patrick Nordmann (Siemens, Germany); Albert Au (Siemens, Canada);  Wei Zou, Harshitha Kodali , Martin Keim and Lori Schramm (Siemens, USA)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-green-300 text-black">
                <strong>8.1: Hybrid Bscan and Self-Test IOs to Reduce IO Test Time</strong><br/>
                <span className="text-xs text-black">Mathangi Raghuraman, Sujith Thomas, Sharmila Jayakumar and Ramakrishnan Subramanian (Sandisk, India)</span><br/><br/>
                <strong>8.2: Concurrent ATE testing of MSIP PHYs in  SOC via Scan Streaming Fabric</strong><br/>
                <span className="text-xs text-gray-900">Kriti Sundar Das, Paras Jain (Google LLC, India); and Harini Kulkarni (AMD, India)</span><br/><br/>
                <strong>8.3: FuseLock: Dynamic Taint-Based Scan Chain Protection with Fuse-Guarded Counters</strong><br/>
                <span className="text-xs text-gray-900">Niranjana Ithal, Gautham Varma Kanumuru, Lasya Chidanand Hegde, Tanish Shet and Sudeendra Kumar K (PES University, India)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-orange-300 text-black">
                <strong>TRC 1.1: IDDq Vector Quality (FTRV) Improvement on Mature Technodes through Prime Time Power EXtension (PTPX) Simulation at Pre-Silicon</strong><br/>
                <span className="text-xs text-gray-900">Marijune Samaniego, Hariharan Krishnamurthy (Qualcomm, Singapore); Sudheer Yadapalli, Shilpa Bhardwaj, Tanu Pruthi and Maharshi Pandya (Qualcomm, India)</span><br/><br/>
                <strong>TRC 1.2: . Incremental Memory Repair Techniques with Synopsys SMS for Multi-hierarchy Server Architecture</strong><br/>
                <span className="text-xs text-gray-900">Ankit Bansal (Synopsys, India); and Ajay Chauhan (Marvell, India)</span><br/><br/>
                <strong>TRC 1.3: . Automated and Verifiable Security Exclusion Management for Scan-Based Debug: The SDEX Methodology</strong><br/>
                <span className="text-xs text-gray-900">Krunal Siddhapathak and Harsharaj Ellur (Google, India)</span><br/><br/>
                <strong>TRC 1.4: Redefining Low Power Scan Testing: A Novel Asymmetric Clock Gating</strong><br/>
                <span className="text-xs text-gray-900">Arshdeep Singh, Navaneeth R and Vishal Diwan (Texas Instruments, India)</span><br/><br/>
                <strong>TRC 1.5: Breaking the Drop: Innovative Methods for IR Drop Mitigation in Scan Testing</strong>
                <span className="text-xs text-gray-900"><br />
                    Rahul Pandey, Karthik Potturu, Suresh Ambati and Dhirendra Sharma (Samsung, India)
                </span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">01:00pm - 02:00pm</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center bg-gray-700" colSpan="4">
                <strong>LUNCH BREAK</strong>
              </td>
            </tr>
            <tr className='border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 '>
              <td className='border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800'>
                SESSIONS
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-semibold  bg-blue-500 text-black">
                Industry Session 2 Session Chair | Sandeep Jain <br />GRAND VICTORIA 1
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-semibold bg-blue-500 text-black">
                Paper Session 9: Test Cost Optimization: Scan and LBIST Advances Session Chair | Anirudh Kadiyala <br />GRAND VICTORIA 2
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-semibold bg-green-500 text-black">
                Paper Session 10: Secure Resilient Fabrics: Designing for Reliability and Unclonability Session Chair | Prof. Binod Kumar <br />ARABICA & ROBUSTA
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-semibold bg-orange-500 text-black">
                Learning Corner Series Session Chair | Veejaye Panayadiyan <br /> BRAIN BOX
              </td>

            </tr>
            {/* <tr className='border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800'>
              <td className='border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 text-'>
                HALL NAME
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-semibold text-blue-300">
                GRAND VICTORIA 1
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-semibold text-blue-300">
                GRAND VICTORIA 2
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-semibold text-blue-300">
                ARABICA & ROBUSTA
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 text-left font-semibold text-blue-300">
                BRAIN BOX
              </td>
            </tr> */}
            <tr>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">02:00pm - 03:30pm</td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black">
                <strong>Strategic Test Optimization in the Era of Flash Memory Scaling</strong><br/>
                <span className="text-xs text-gray-900 ">Prakash Talawar (Sandisk)</span><br/><br/>
                <strong>Anora Labs : Scope of Functional Testing in India</strong><br/>
                <span className="text-xs text-gray-900">Dr. Pramod Variyam (Anora Labs)</span><br/><br/>
                <strong>From Black Box to Glass Box: A Novel XAI Approach with GNNs for Test and Debug</strong><br/>
                <span className="text-xs text-gray-900">Dr. Shiva Kumar Kotikalapudi (DeFT Semiconductor )</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-blue-300 text-black">
                <strong>9.1: A Left Shifted Approach for Low Shift Power ATPG Decompression</strong><br/>
                <span className="text-xs text-gray-900">Hillol Maity, Hanumant Tuntoni, Sreenu Kakunuri (Synopsys, India); Peter Wohl (Synopsys, USA); and Parthajit Bhattacharya (Synopsys, India)</span><br/><br/>
                <strong>9.2: Optimized Grouping for Packetized Scan Solutions</strong><br/>
                <span className="text-xs text-gray-900">Bhavika Ranjeet Kumar, Aalhad Deshpande, Rama Sireesha Arisetti and Maheedhar Jalasutram (Google, India)</span><br/><br/>
                <strong>9.3: Tester time savings for LBIST diagnostics using enhanced version of On-chip MISR signature comparison with self-test and bypass</strong><br/>
                <span className="text-xs text-gray-900">Jaidev Shenoy, Kelly Ockunzzi (Marvell Technology Inc.) and Virendra Singh (IIT Bombay, India)</span>
              </td>
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-green-300 text-black">
                <strong>10.1: EFH - An Efficient Fault-Tolerant Routing Methodology for 2D Mesh NoCs</strong><br/>
                <span className="text-xs text-gray-900">Biswajit Bhowmik, Girish K K, Akot Jayesh Raju and Rohit Chakraborty 
(NIT Karnataka, India)</span><br/><br/>
                <strong>10.2: Design and Analysis of Complementary Cascode Current Mirror based Physically Unclonable Function using 65nm Predictive Technology Model</strong><br/>
                <span className="text-xs text-gray-900">Shreeji Shah and Rajesh Thakker (Gujarat Technological University, India)</span><br/><br/>
                <strong>10.3: Testing Systems-in-Package Based on Chiplets : Opportunities and Challenges
</strong><br/> Wilson Pradeep (Tenstorrent, USA)
              </td>
              {/* <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-amber-900">
                <strong>Learning Corner Series - ATMP/OSAT Fundamentals</strong><br/><br/>
                <strong>Speakers:</strong><br/>
                <strong>Paresh Bharkhada(Teradyne) - 30 mins</strong><br/>
                <strong>Shannen Koh(Advantest) - 30 mins</strong><br/><br />
                <strong>TBD - 30 mins</strong>
              </td> */}
              <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-orange-300 text-black">
  <strong>Learning Corner Series - ATMP/OSAT Fundamentals</strong><br /><br />
  <strong>Speakers:</strong><br />
  <strong>ATE in Action: Teradyne on Semiconductor Manufacturing Test & Value Creation</strong><br />
  Paresh Bharkhada (Teradyne) - 30 mins<br /><br />
  <strong>Scaling with Confidence: Seamless Navigation for High-Volume Semiconductor Testing</strong><br />
  Larry Liow (Advantest Singapore) - 30 mins<br /><br />
  <strong>Production Infrastructure and ATE Environment - The Fundamentals, Challenges of Existing Flows and Future Trends</strong><br/> Gaurav Mittal, Rajesh Jabade (Texas Instruments)
</td>

            </tr>
            <tr>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">03:30pm - 04:00pm</td>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center bg-gray-700" colSpan="3">
      <strong>TEA/COFFEE BREAK</strong>
    </td>
    <td className="border border-gray-700 px-1 sm:px-4 py-1 bg-pink-900 text-green-300 text-xs" rowSpan="5">
      <div className="text-center">
    <strong className="text-base">Poster Session</strong><br />
    <em>(Venue: Front Lobby)</em><br /><br />
    <strong>Paper IDs:</strong><br />
    99, 135, 159, 246, 249,<br />
    260, 289, 291, 294, 351,<br />
    365, 370, 372, 377, 378,<br />
    384, 385, 387, 388,<br />
    390, 397, 398
  </div>
  <br /><br /><br />
    </td>
  </tr>
  <tr>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">HALL NAME</td>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 text-center bg-purple-900" colSpan="3">
      <strong>GRAND VICTORIA</strong><br />
      </td>
  </tr>
  
  
  <tr>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">04:00 pm - 05:15pm</td>
    <td className="border text-center border-gray-700 px-2 sm:px-4 py-2 bg-purple-900" colSpan="3">
    <strong>Distinguished Address Series</strong><br />
    <span className="font-semibold text-sm">
      Transformation of DFT: From being a necessary evil to strategic differentiator
    </span><br />
    <span className="text-xs text-gray-300">
      Jais Abraham (<em>Qualcomm</em>); Pradeep Nagaraj (<em>Cadence</em>); Srinivas Vooka (<em>Google</em>)
    </span>
    
    </td>
  </tr>
  <tr>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-gray-800 font-medium">05:15pm - 05:45pm</td>
    <td className="border border-gray-700 px-2 sm:px-4 py-2 bg-red-900 text-center" colSpan="4">
      <strong>Awards Ceremony and Valedictory session | General Co-Chair, ITC India 2025</strong>
    </td>
  </tr>

  
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <>
      <div className='mb-8'>
        <Header/>
      </div>
      <img src='/AgendaHeading.png'></img>
      
      <div className="max-w-7xl mt-12 mx-auto p-4 sm:p-6 bg-gray-900 text-gray-200" style={{fontFamily:'"Poppins", arial'}}>
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-blue-400">
          ITC India 2025 Conference Schedule
        </h1>
        
        <div className="mt-8">
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            <button 
              onClick={() => setActiveTab('day0')}
              className={`px-4 py-2 rounded-2xl font-medium transition-colors ${
                activeTab === 'day0'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              Day 0
            </button>
            <button
              onClick={() => setActiveTab('day1')}
              className={`px-4 py-2 rounded-2xl font-medium transition-colors ${
                activeTab === 'day1'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              Day 1
            </button>
            <button
              onClick={() => setActiveTab('day2')}
              className={`px-4 py-2 rounded-2xl font-medium transition-colors ${
                activeTab === 'day2'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              Day 2
            </button>
          </div>
          <div className="mt-8">
          {activeTab === 'day0' && <Day0Content />}
          {activeTab === 'day1' && <Day1Content />}
          {activeTab === 'day2' && <Day2Content />}
        </div>

        <div className="mt-6 p-3 sm:p-4 bg-gray-800 rounded-lg border border-gray-700 text-xs sm:text-sm">
            <h3 className="text-base sm:text-lg font-bold mb-2 text-blue-300">Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 content-center">
              {/* <div className="flex items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-800 border border-blue-600 mr-2"></div>
                <span className="text-gray-200">Keynotes</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-900 border border-purple-700 mr-2"></div>
                <span className="text-gray-200">Special Events</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-700 border border-gray-600 mr-2"></div>
                <span className="text-gray-200">Breaks</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-700 border border-gray-600 mr-2"></div>
                <span className="text-gray-200">Registration/Meals</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-indigo-900 border border-indigo-700 mr-2"></div>
                <span className="text-gray-200">Industry Sessions</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 border border-teal-700 mr-2"></div>
                <span className="text-gray-200">ART Sessions</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-900 border border-cyan-700 mr-2"></div>
                <span className="text-gray-200">TRC Sessions</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-900 border border-pink-700 mr-2"></div>
                <span className="text-gray-200">Poster Sessions</span>
              </div> */}
              <div className="flex items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 border border-blue-500 mr-2"></div>
                <span className="text-gray-200">GRAND VICTORIA 1 & 2</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 border border-green-500 mr-2"></div>
                <span className="text-gray-200">ARABICA & ROBUSTA</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 border border-orange-500 mr-2"></div>
                <span className="text-gray-200">BRAIN BOX</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-700 border border-pink-700 mr-2"></div>
                <span className="text-gray-200">Front Lobby</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Agenda;
