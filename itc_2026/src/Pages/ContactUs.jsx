import React from "react"
import Header from "./Components/Header";

export default function ContactUs(){
    return(
        <>
            <div>
                <Header />
            </div>
        <div className="text-center mb-8">
            <div className="lg:ml-16 lg:mr-16 md:ml-7 p-8 md:mr-7 ml-3 mr-3 pl-3 pr-3 mt-10 lg:mt-5 rounded-xl" style={{fontFamily:'"Montserrat", arial'}}>
            <div className="text-white text-5xl">
                <b>CONTACT US</b>
            </div>
            <div className="border-blue-500 rounded-xl border-4 mt-5 p-5">
            <div className="text-white text-3xl font-bold text-left ml-12">
                ITC SEMICONDUCTOR INDUSTRY SOCIETY
            </div>
            <div className="text-xl text-left ml-12 mt-4 font-semibold text-white">
                <div className="text-blue-500">Address:</div>
                ITC Semiconductor Industry Society, No 31, Electronic City Phase II, Bengaluru, Karnataka – 560100, India
            </div>
            <div className="text-blue-500 text-xl mt-8 text-left ml-12 font-semibold">
                Email ID: <a href="mailto:itctestweekindia@gmail.com"><div style={{color:"white"}} className="mt-3">itctestweekindia@gmail.com</div></a>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}