"use client";
import { motion } from "framer-motion";
import react from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { ImagesSlider } from "../components/ui/images-slider";
import StarBorder from "./Components/StarBorder/StarBorder";
import ShinyText from "../components/ui/ShinyText/ShinyText";
import LogoWall from "../components/ui/LogoWall/LogoWall";
import { AuroraText } from "../components/magicui/aurora-text";
import Header from "./Components/Header";
import { Carousel } from "../components/ui/carousel";
import Highlights from "../components/ui/Highlights";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import Marquee from "react-fast-marquee";
import { Component } from "lucide-react";


export default function Home() {
  const pageUrl = 'https://itctestweekindia.org/share.html'; 
  const shareText = 'Check out this awesome banner!';

  // 2. URL-encode the data for safe use in links
  const encodedPageUrl = encodeURIComponent(pageUrl);
  const encodedShareText = encodeURIComponent(shareText);
  
  // 3. Create the final share URLs
  const shareLinks = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedPageUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedPageUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedShareText}%20${encodedPageUrl}`,
    twitter: `https://x.com/intent/tweet?url=${encodedPageUrl}&text=${encodedShareText}`
  };
  const images = ["/VGS02418.JPG", "/VGS02444.JPG", "/VGS02452.jpg"];

  const images2 = [
    {
      id: 1,
      image: "/VGS02417.JPG",
    },
    {
      id: 3,
      image: "/VGS02480.JPG",
    },
    {
      id: 4,
      image: "/VGS02556.JPG",
    },

    {
      id: 5,
      image: "/VGS02601.JPG",
    },
    {
      id: 6,
      image: "/VGS02714.JPG",
    },
    {
      id: 7,
      image: "/VGS02782.JPG",
    },
    {
      id: 8,
      image: "/VGS02894.JPG",
    },
    {
      id: 9,
      image: "/VGS02979.JPG",
    },
    {
      id: 10,
      image: "/VGS03010.JPG",
    },
    {
      id: 11,
      image: "/VGS06714.JPG",
    },
  ];

  const logoImgs = [
    { imgUrl: "/ieeeblr.png", altText: "IEEE BLR SOCIETY" },
    { imgUrl: "/IESA.jpg", altText: "React Bits Logo" },
    { imgUrl: "/images.png", altText: "React Bits Logo" },
    { imgUrl: "/1630572795938.jpg", altText: "React Bits Logo" },
    { imgUrl: "/ieeeblr.png", altText: "IEEE BLR SOCIETY" },
    { imgUrl: "/IESA.jpg", altText: "React Bits Logo" },
    { imgUrl: "/images.png", altText: "React Bits Logo" },
    { imgUrl: "/1630572795938.jpg", altText: "React Bits Logo" },
  ];

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex flex-row justify-center text-center mt-28   ml-6 mr-6">
        <h1
          className="text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          style={{ fontFamily: '"Poppins", arial' }}
        >
          Welcome to ITC Test Week India 2026
        </h1>
      </div>

      <div className=" flex flex-col lg:flex-row homebg">
        <div className="w-[100vw] lg:w-[60vw] mt-16 lg:mb-16">
          <div
            className="lg:text-4xl md:text-3xl text-2xl text-center text-white font-bold"
            style={{ fontFamily: '"Poppins",arial' }}
          >
            ABOUT US
          </div>
          <div
            className="text-xl ml-10 lg:mr-6 mr-10 mt-6 text-center text-white text-justify"
            style={{ fontFamily: '"Poppins",arial' }}
          >
            International Test Conference is the world's premier venue dedicated
            to the electronic test of devices, boards and systems-covering the
            complete cycle from design verification, design-for-test,
            design-for-manufacturing, silicon debug, manufacturing test, system
            test, diagnosis, reliability and failure analysis, and back to
            process and design improvement.
          </div>
          <div
            className="text-xl ml-10 lg:mr-6 mr-10 mt-6 text-center text-white text-justify"
            style={{ fontFamily: '"Poppins",arial' }}
          >
            At ITC India, design, test, and yield professionals can confront
            challenges faced by the industry, and learn how these challenges are
            being addressed by the combined efforts of academia, design tool and
            equipment suppliers, designers, and test engineers.
          </div>
        </div>
        <div className="w-[100vw] lg:w-[40vw] mt-16 mb-16">
          <div
            className="lg:text-4xl md:text-3xl text-2xl text-center text-white font-bold"
            style={{ fontFamily: '"Poppins",arial' }}
          >
            2025 HIGHLIGHTS
          </div>
          <div>
            <Highlights />
          </div>
        </div>
      </div>
      
      {/* <div className="mt-12">
        <Marquee direction="right">
          <img src="/Mask group.webp" className="lg:h-[8vw] h-[12vw]"></img>
          <img src="/Mask group.webp" className="lg:h-[8vw] h-[12vw]"></img>
          <img src="/Mask group.webp" className="lg:h-[8vw] h-[12vw]"></img>
        </Marquee>
      </div> */}

      

      <div className="mt-24 w-[100vw]">
        <Carousel items={images2} autoScrollInterval={5000} />
      </div>

      {/* SHARE POST */}

      {/* <div className="mt-24">
        <h1  className="lg:text-4xl md:text-3xl text-2xl text-center text-white font-bold"
            style={{ fontFamily: '"Poppins",arial' }}>Share with the world!</h1>
        <div className="flex justify-center">
            <img src="/Banner.png" className="lg:w-[50%] md:w-[60%] w-[70%] mt-8 "></img>
        </div>
        <div className="flex mt-8 justify-center gap-8">
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <div className="p-4 bg-blue-300 fill-black hover:bg-blue-800 hover:fill-white transition-[0.3s]">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </div>
        </a>

        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
          <div className="p-4 bg-blue-300 fill-black hover:bg-blue-600 hover:fill-white transition-[0.3s]">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
          </div>
        </a>

        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
          <div className="p-4 bg-blue-300 fill-black hover:bg-green-400 hover:fill-white transition-[0.3s]">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
          </div>
        </a>

        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
          <div className="p-4 bg-blue-300 fill-black hover:bg-black hover:fill-white transition-[0.3s]">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="bi bi-twitter-x" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </div>
        </a>
      </div>
      </div> */}
     


      {/* <div className="flex flex-col mt-20 ">
        <div
          className="mt-10 text-blue-500  lg:text-6xl text-5xl font-bold text-center"
          style={{ fontFamily: '"Poppins",arial' }}
        >
          Our Supporters
        </div>
        <div className="mt-12 flex px-8 justify-center items-center flex-col">
          <h2
            className="mt-10 text-[#E5E4E2] lg:text-5xl text-4xl font-bold text-center"
            style={{ fontFamily: '"Poppins",arial' }}
          >
            Platinum
          </h2>
          <div className="w-[100vw] flex flex-col lg:flex-row mt-16 lg:gap-8 md:gap-20 gap-20 items-center justify-evenly">
            <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center shadow-2xl shadow-[#999999] hover:shadow-[#E5E4E2] duration-300 rounded-xl">
              <img src={"/CaliberWhiteLogo.png"} className=""></img>
            </div>
            <div className="lg:w-[22vw] md:w-[38vw] w-[60vw]  lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center shadow-2xl shadow-[#999999] hover:shadow-[#E5E4E2] duration-300 rounded-xl">
              <img src={"/siemens_logo_white.png"} className=""></img>
            </div>
            <div className="lg:w-[22vw] md:w-[38vw] w-[60vw]  lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center  shadow-2xl shadow-[#999999] hover:shadow-[#E5E4E2] duration-300 rounded-xl">
              <img src={"/tessolve1.png"} className=""></img>
            </div>
          </div>
          <h2
            className="text-[#FFD700] lg:text-5xl text-4xl lg:mt-20 mt-32 font-bold text-center"
            style={{ fontFamily: '"Poppins",arial' }}
          >
            Gold
          </h2>
          <div className="w-[100vw] flex flex-col lg:flex-row mt-16 lg:gap-96 gap-20 items-center justify-evenly">
            <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center shadow-2xl shadow-[#a28a02] hover:shadow-[#FFD700] duration-300 rounded-xl">
              <img src={"/cadence.png"} className=""></img>
            </div>
            <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 flex items-center justify-center  p-10 shadow-2xl shadow-[#a28a02] hover:shadow-[#FFD700] duration-300 rounded-xl">
              <img src={"/google.png"} className=""></img>
            </div>
          </div>
          <div className="w-[100vw] flex flex-col gap-20 lg:gap-0 lg:flex-row mt-20 items-center justify-evenly">
            <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center  shadow-2xl shadow-[#a28a02] hover:shadow-[#FFD700] duration-300 rounded-xl">
              <img src={"/synopsys.png"} className=""></img>
            </div>
            <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 shadow-2xl flex items-center justify-center  shadow-[#a28a02] hover:shadow-[#FFD700] duration-300 rounded-xl">
              <img src={"/qualcomm.png"} className=""></img>
            </div>
          </div>
          <h2
            className="text-[#C0C0C0] lg:text-5xl text-4xl lg:mt-20 mt-32 font-bold text-center"
            style={{ fontFamily: '"Poppins",arial' }}
          >
            Silver
          </h2>
          <div className="w-[100vw] flex flex-col lg:flex-row mt-16 lg:gap-8 md:gap-20 gap-20 items-center justify-evenly">
            <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center  shadow-2xl shadow-[#6e6e6e] hover:shadow-[#C0C0C0] duration-300 rounded-xl">
              <img
                src={"/advantest.svg"}
                className="lg:h-[5vw] md:h-[9vw]"
              ></img>
            </div>

            <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center  shadow-2xl shadow-[#6e6e6e] hover:shadow-[#C0C0C0] duration-300 rounded-xl">
              <img src={"/marvell.png"} className="lg:h-[5vw] md:h-[9vw]"></img>
            </div>
            <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center  shadow-2xl shadow-[#6e6e6e] hover:shadow-[#C0C0C0] duration-300 rounded-xl">
              <img src={"/teradyne.png"} className=""></img>
            </div>
          </div>
          <h2
            className="lg:mt-20 mt-32 text-[#CD7F32] lg:text-5xl text-4xl font-bold text-center"
            style={{ fontFamily: '"Poppins",arial' }}
          >
            Bronze
          </h2>
          <div className="w-[100vw] flex flex-col lg:flex-row mt-16 lg:gap-96 gap-20 items-center justify-evenly">
            <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center  shadow-2xl shadow-[#8b5723] hover:shadow-[#CD7F32] duration-300 rounded-xl">
              <img src={"/anora.png"}></img>
            </div>
            <div className="lg:w-[22vw]  md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center  shadow-2xl shadow-[#8b5723] hover:shadow-[#CD7F32] duration-300 rounded-xl">
              <img src={"/deft.png"} className=" lg:h-[7vw] md:h-[13vw]"></img>
            </div>
          </div>
          <div className="w-[100vw] flex flex-col lg:flex-row mt-20 items-center lg:gap-0 gap-20 justify-evenly">
            <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center  shadow-2xl shadow-[#8b5723] hover:shadow-[#CD7F32] duration-300 rounded-xl">
              <img src={"/texas.png"} className=""></img>
            </div>
            <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center shadow-2xl shadow-[#8b5723] hover:shadow-[#CD7F32] duration-300 rounded-xl">
              <img src={"/sandisk1.png"} className=""></img>
            </div>
          </div>

          <div className="h-[10vw]"></div>
        </div>
      </div> */}
    </>
  );
}
