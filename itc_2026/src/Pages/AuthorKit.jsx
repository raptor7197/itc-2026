import React from "react";
import ColourfulText from "../components/ui/colourful-text";
import { motion } from "motion/react";
import Header from "./Components/Header";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function AuthorKit() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-16">
        <img
          src="/Authorskitheading.png"
          style={{ width: "100vw", zIndex: "-50" }}
        ></img>
      </div>
      <p
        className="text-white mt-10 lg:text-5xl md:text-4xl text-3xl text-center font-semibold "
        style={{ fontFamily: '"Poppins", arial' }}
      >
        Final Paper Submission Guidelines For Authors
      </p>
      
      <div>
        
        <div
          className="mt-10 mx-8 p-6 pb-10 mb-10 rounded-xl border-4 border-blue-500"
          style={{ fontFamily: '"Poppins", arial' }}
        >
          <p className="text-justify text-white text-2xl mx-10">
            Author's please complete the following steps by <span className="text-blue-400">17th June 2025 </span>:
          </p>
          <div className="text-white text-xl py-6 px-12">
          <li className="mb-8">
          Prepare your final version, including the IEEE copyright notice
          </li>
          <li className="mb-8">
          PDF eXpress Online File Conversion/PDF Validation Tool
          </li>
          <li className="mb-8">
          Complete and submit one IEEE copyright form per paper
          </li>
          <li className="mb-8">
          Deadline for Final Paper Submission: June 17, 2025
          </li>
          <li className="">
          Register for the Conference: Before June 30, 2025
          </li>
          </div>
    <p className="text-justify font-semibold text-blue-500 lg:text-3xl md:text-2xl text-xl  mt-3 mx-10">
    1. Prepare your final version, including the IEEE copyright notice
    </p>
          
          <p className="text-justify text-white text-xl mt-10 mx-10">
          <span className="text-blue-300 font-semibold">Formatting Instructions:</span> Papers should not exceed <span className="font-semibold">SIX</span> pages, including figures, tables and references. IEEE is strict about the requirements for PDF files for inclusion in the IEEE Xplore® Digital Library. Format your paper according to IEEE conference style guidelines. Use the A4 format. DO NOT use the US Letter format and do not paginate your paper
          </p>
          

          <p className="text-justify mt-10 text-white text-xl mx-10">
          For more details about IEEE conference proceeding template and guidelines, please visit : 
          <a href="https://drive.google.com/drive/folders/1mvEjinUFONTlaJIPR-tO_lwl6eDSDREw" className="text-blue-400 hover:text-blue-500"> MS Word and Latex templates are HERE</a>
          </p>

          <div className="flex justify-center items-center lg:w-auto lg:flex-row flex-col gap-16 mt-20 mb-20">
          <a href="/ITC 2025 Poster Template.pptx">
          <div className="md:text-[3vw] text-[3.5vw] lg:text-[1.5vw] lg:w-auto md:w-[60%]  text-center font-bold  rounded-3xl border-blue-500 border-4 px-16 py-4 text-white hover:scale-[1.1] transition-[0.5s] hover:bg-black">
            
                POSTER TEMPLATE
            
          </div>
          </a>
          <a href="/itcauthorinstructions.doc">
          <div className="md:text-[3vw] text-[3.5vw] lg:text-[1.5vw] lg:w-auto md:w-[60%] text-center font-bold  rounded-3xl border-blue-500 border-4 px-10 py-4 text-white hover:scale-[1.1] transition-[0.5s] hover:bg-black">
            
              AUTHOR INSTRUCTIONS
            
          </div>
          </a>
          <a href="/ITC India Presentation Template.pptx" >
          <div className="md:text-[3vw] text-[3.5vw] lg:text-[1.5vw] lg:w-auto md:w-[60%]  text-center font-bold  rounded-3xl border-blue-500 border-4 px-7 py-4 text-white hover:scale-[1.1] transition-[0.5s] hover:bg-black">
            
              PRESENTATION TEMPLATE
            
          </div>
          </a>
        </div>

          <p className="text-justify mt-10 italic text-white text-xl mx-10">
          Add the IEEE Copyright Notice in the footer section to the bottom of the first page of your paper, prior to creating the final PDF version. 
          </p>
          <p className="text-justify text-white text-2xl mt-8 mx-10">
          Choose the appropriate notice from the following:
          </p>
          <div className="text-white text-xl py-6 px-12">
          <li className="mb-8">
          For papers in which all authors are employed by the US government, the copyright notice is: <span className="font-semibold ">U.S. Government work not protected by U.S. copyright</span>
          </li>
          <li className="mb-8">
          For papers in which all authors are employed by a Crown government (UK, Canada, and Australia), the copyright notice is: <span className="font-semibold ">979-8-3315-0129-7/25/$31.00 ©2025 Crown</span>
          </li>
          <li className="mb-8">
          For papers in which all authors are employed by the European Union, the copyright notice is: <span className="font-semibold ">979-8-3315-0129-7/25/$31.00©2025 European Union</span>
          </li>
          <li className="">
          For all other papers the copyright notice is: <span className="font-semibold ">979-8-3315-0129-7/25/$31.00 ©2025 IEEE</span>
          </li>
          </div>
          <p className="text-justify italic text-white text-xl mx-10">
          For more information on IEEE Copyright policy, <a href="https://www.ieee.org/publications/rights/copyright-policy" className="text-blue-400 hover:text-blue-500">click HERE</a>. Also review the IEEE Author Rights to Posting FAQ.
          </p>

          <p className="text-justify font-semibold text-blue-500 lg:text-3xl md:text-2xl text-xl  mt-10 mx-10">
    2. PDF eXpress Online File Conversion/PDF Validation Tool
    </p>
          
          <p className="text-justify text-white text-xl mt-10 mx-10">
          All papers submitted for publication must meet the IEEE standards. Access to PDF eXpress Plus site, the IEEE’s online file conversion/PDF validation tool, will assist authors in preparing suitable electronic files of their final papers. PDF eXpress Plus helps authors convert their papers into IEEE Xplore-compatible PDF files (conversion function) or to check their own PDF files for IEEE Xplore compatibility (PDF validation function). All final manuscripts must be generated using the PDF Xpress tool. Submit your final, ready-for-publication paper HERE. If you are a new user to IEEE PDF eXpress, you must set up an account before uploading your paper. To generate the IEEE Xplore compatible PDF file of your paper, follow these steps: 
          </p>
          <div className="text-white text-xl py-6 px-16 list-none">
          <li className="mb-8">
          a. Create your IEEE PDF eXpress account <a href="https://ieee-pdf-express.org" className="text-blue-400 hover:text-blue-500">here</a> 
          </li>
          <li className="mb-8">
          b. Conference ID: <span className="font-semibold">66078X</span>
          </li>
          <li className="">
          c. The first time you access the system, please follow the link to new user.
          </li>
          
          </div> 

          <p className="text-justify italic text-white text-xl mt-3 mx-10">
          Please note that in order to access the service, you need to allow the use of cookies from the PDF eXpress web site. 
          </p>
          <p className="text-justify mt-10 text-white text-xl mx-10">
          Once you have registered as a new user: 
          </p>
          <div className="text-white text-xl py-6 px-12">
          <li className="mb-8">
          Upload the source file (containing your paper) for conversion. 
          </li>
          <li className="">
          Receive by e-mail the IEEE Xplore-compatible PDF of your paper.
          </li>
          </div>

          <p className="text-justify text-white text-2xl mt-5 mx-10">
            Renaming your PDF File for Submission
          </p>

          <div className="text-white text-xl py-6 px-12">
          <li className="mb-8">
          The certified acceptable file you receive from PDF eXpress will be given a filename in the form PID123456.pdf.
          </li>
          <li className="">
          You should rename this exact file to conform to the following naming convention: paperID.pdf, where the paperID is the ITCIndia paper ID (obtained from Easychair) assigned to the submission. 
          </li>
          </div>

          <p className="text-justify font-semibold text-blue-500 lg:text-3xl md:text-2xl text-xl  mt-10 mx-10">
    3. Complete and submit one IEEE copyright form per paper
    </p>
          
          <p className="text-justify text-white text-xl mt-10 mx-10">
          IEEE policy requires that every submitted paper must be accompanied by a signed IEEE Copyright Form before publication can occur. The electronic copyright submission form will walk you through the steps to complete and submit the IEEE copyright form for your paper. Only one form is required per paper. 
          </p>

          <p className="text-justify italic text-white text-xl mt-10 mx-10">
          A LINK TO THE e-COPYRIGHT FORM WILL BE EMAILED TO ONLY A SINGLE CORRESPONDING AUTHOR FOR EACH PAPER. 
          </p>

          <p className="text-justify text-white text-xl mt-10 mx-10">
          Papers with more than one identified Corresponding Author will receive only one email regarding e-Copyright Form submission.
          </p>

          <p className="text-justify font-semibold text-blue-500 lg:text-3xl md:text-2xl text-xl  mt-10 mx-10">
    4. Final Paper PDF File Submission 
    </p>
          
          <p className="text-justify text-white text-xl mt-10 mx-10">
          Submit your paper through PDF eXpress Plus and when you are happy with the PDF file, click on the “approve for collection” link. Rename your file as explained in Step 2. 
          </p>

          <p className="text-justify italic text-white text-xl mt-10 mx-10">
          Please make sure that you are uploading the final paper (collected from PDF Express) uploaded into Easychair. 
          </p>

          <p className="text-justify text-white text-xl font-semibold mt-10 mx-10">
          Deadline for Final Paper Submission: 17th June , 2025. This is a hard deadline for papers to be included in the ITC India 2025 Proceedings on IEEE Xplore. 

          </p>

          <p className="text-justify font-semibold text-blue-500 lg:text-3xl md:text-2xl text-xl  mt-10 mx-10">
    5. Register for the Conference
    </p>
          
          <p className="text-justify text-white text-xl mt-10 mx-10">
          To be published in the ITC India 2025 Conference Proceedings, an author of an accepted paper is required to register and must present the paper at the conference. Register <Link to="https://itctestweekindia.org/Registration" className="text-blue-400 hover:text-blue-500">HERE</Link>
          </p>

          <p className="text-justify italic text-white text-xl mt-10 mx-10">
          Note: IEEE reserves the right to exclude a paper from distribution after the conference, including IEEE Xplore® Digital Library, if the paper is not presented by the author at the conference. Non-author, video conference, or pre-recorded presentations will not be included in the conference proceedings. Please note the following important dates: <br/>
          <span className="font-semibold">Camera Ready/Final paper submission: 20th June, 2025 </span>

          </p>

          <p className="text-justify text-white text-xl  mt-10 mx-10">
          <span className="font-semibold">Policy on Plagiarism:</span> All papers submitted to ITC India 2025 will be checked for plagiarism, inappropriate multiple submission, and inappropriate use of previous work. Potential issues will be handled in accordance with the IEEE Publication Services and Products Board Operations Manual.
          </p>

          <p className="text-justify text-xl font-semibold text-blue-500 mt-10 mx-10">
          For any assistance relating to the camera-ready paper preparation, PDF Express, IEEE Copyright transfer submission, please feel free to contact:
          </p>
          <p className="text-justify text-xl font-semibold text-white mt-10 mx-10">
          Dr. Sakthivel R  (rsakthivel@vit.ac.in)
          </p>
          <p className="text-justify text-xl font-semibold text-white mt-10 mx-10">
          Dr. Jayagowri R (rjayagowri.ece@bmsce.ac.in)
          </p>

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

export default AuthorKit;
