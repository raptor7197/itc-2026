import React from "react";
import Header from './Components/Header'


export default function Sponsors(){
    return (
        <div>
             <div className="z-[1000]">
        <Header/>
       </div>
    <div className="text-white flex flex-row mt-24 justify-center text-7xl font-bold " >Our Sponsors</div>
    <div className="mt-12 flex px-8 justify-center items-center flex-col">
          <h2 className="mt-10 text-[#E5E4E2] lg:text-5xl text-4xl font-bold text-center" style={{fontFamily:'"Poppins",arial'}}>Platinum</h2>
          <div className="w-[100vw] flex flex-col lg:flex-row mt-16 lg:gap-8 md:gap-20 gap-20 items-center justify-evenly">
              <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center shadow-2xl shadow-[#999999] hover:shadow-[#E5E4E2] duration-300 rounded-xl">
                <img src={'/CaliberWhiteLogo.png'} className=""></img>
              </div>
              <div className="lg:w-[22vw] md:w-[38vw] w-[60vw]  lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center shadow-2xl shadow-[#999999] hover:shadow-[#E5E4E2] duration-300 rounded-xl">
                <img src={'/siemens_logo_white.png'} className=""></img>
              </div>
              <div className="lg:w-[22vw] md:w-[38vw] w-[60vw]  lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center  shadow-2xl shadow-[#999999] hover:shadow-[#E5E4E2] duration-300 rounded-xl">
                <img src={'/tessolve1.png'} className=""></img>
              </div>
          </div>
          <h2 className="text-[#FFD700] lg:text-5xl text-4xl lg:mt-20 mt-32 font-bold text-center" style={{fontFamily:'"Poppins",arial'}}>Gold</h2>
          <div className="w-[100vw] flex flex-col lg:flex-row mt-16 lg:gap-96 gap-20 items-center justify-evenly">
              <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center shadow-2xl shadow-[#a28a02] hover:shadow-[#FFD700] duration-300 rounded-xl">
                <img src={'/cadence.png'} className=""></img>
              </div>
              <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 flex items-center justify-center  p-10 shadow-2xl shadow-[#a28a02] hover:shadow-[#FFD700] duration-300 rounded-xl">
                <img src={'/google.png'} className=""></img>
              </div>
              
          </div>
          <div className="w-[100vw] flex flex-col gap-20 lg:gap-0 lg:flex-row mt-20 items-center justify-evenly">
              <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center  shadow-2xl shadow-[#a28a02] hover:shadow-[#FFD700] duration-300 rounded-xl">
                <img src={'/synopsys.png'} className=""></img>
              </div>
              <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 shadow-2xl flex items-center justify-center  shadow-[#a28a02] hover:shadow-[#FFD700] duration-300 rounded-xl">
                <img src={'/qualcomm.png'} className=""></img>
              </div>
              
          </div>
          <h2 className="text-[#C0C0C0] lg:text-5xl text-4xl lg:mt-20 mt-32 font-bold text-center" style={{fontFamily:'"Poppins",arial'}}>Silver</h2>
          <div className="w-[100vw] flex flex-col lg:flex-row mt-16 lg:gap-8 md:gap-20 gap-20 items-center justify-evenly">
          <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center  shadow-2xl shadow-[#6e6e6e] hover:shadow-[#C0C0C0] duration-300 rounded-xl">
                <img src={'/advantest.svg'} className="lg:h-[5vw] md:h-[9vw]"></img>
              </div>
              
              <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center  shadow-2xl shadow-[#6e6e6e] hover:shadow-[#C0C0C0] duration-300 rounded-xl">
                <img src={'/marvell.png'} className="lg:h-[5vw] md:h-[9vw]"></img>
              </div>
              <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center  shadow-2xl shadow-[#6e6e6e] hover:shadow-[#C0C0C0] duration-300 rounded-xl">
                <img src={'/teradyne.png'} className=""></img>
              </div>
              
              
          </div>
          <h2 className="lg:mt-20 mt-32 text-[#CD7F32] lg:text-5xl text-4xl font-bold text-center" style={{fontFamily:'"Poppins",arial'}}>Bronze</h2>
          <div className="w-[100vw] flex flex-col lg:flex-row mt-16 lg:gap-96 gap-20 items-center justify-evenly">
              <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center  shadow-2xl shadow-[#8b5723] hover:shadow-[#CD7F32] duration-300 rounded-xl">
                <img src={'/anora.png'} ></img>
              </div>
              <div className="lg:w-[22vw]  md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center  shadow-2xl shadow-[#8b5723] hover:shadow-[#CD7F32] duration-300 rounded-xl">
                <img src={'/deft.png'} className=" lg:h-[7vw] md:h-[13vw]"></img>
              </div>
              
          </div>
          <div className="w-[100vw] flex flex-col lg:flex-row mt-20 items-center lg:gap-0 gap-20 justify-evenly">
              
              <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center  shadow-2xl shadow-[#8b5723] hover:shadow-[#CD7F32] duration-300 rounded-xl">
                <img src={'/texas.png'} className=""></img>
              </div>
              <div className="lg:w-[22vw] md:w-[38vw] w-[60vw] lg:h-[17.5vh] md:h-[22vh] h-[25vh] bg-gray-950 p-6 flex items-center justify-center shadow-2xl shadow-[#8b5723] hover:shadow-[#CD7F32] duration-300 rounded-xl">
                <img src={'/sandisk1.png'} className=""></img>
              </div>
              
          </div>
          
          <div className="h-[10vw]"></div>
          </div>
        </div>
    )
}