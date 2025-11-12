import react from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <div className="footer_bg text-white pb-6 font-semibold" style={{fontFamily:'"Montserrat", arial'}}>
            <div className="p-7">
            <div className="border-4 pb-5 border-[#1AD5EF] rounded-xl">
            <div className="flex flex-col leading-8">
                <div className="flex flex-col gap-6 lg:flex-row justify-evenly mt-8 ml-6 mr-6">
                    <div>
                        <img src='Group 1055.png' className="h-60"/>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-decoration-line: underline">Submissions</div>
                        <div>
                            <Link to="/CFP">
                                Call for Papers
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-decoration-line: underline">Conference</div>
                            <div>
                                <Link href="">
                                    About Us
                                </Link>
                        </div>
                        <div>
                                <Link href="">
                                    Privacy Policy
                                </Link>
                        </div>
                        <div>
                        <Link href="">
                                Refund Policy
                            </Link>
                        </div>
                        <div>
                        <Link href="">
                                Terms & Conditions
                            </Link>
                        </div>
                        <div>
                        <Link to="/contactus">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div>
                    <div className="text-xl font-bold text-decoration-line: underline">Conference Location</div> 
                    <div>
                        <Link to="https://maps.app.goo.gl/Su9eU1hLBaaRZcKEA
">
                                Radisson Blu, Bengaluru
                            </Link>
                        </div>
                        </div>
                </div>
                <div>
                    <img src="Group 33.png" className="h-40 object-bottom-left"></img>
                </div>
            </div>
            <div className="text-center mt-5">2026 © ITC Test Week India | All rights reserved</div>
            </div>
            </div>
            
        </div>
    )

}