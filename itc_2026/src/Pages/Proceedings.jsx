// import React from "react"
// import Header from "./Components/Header";

// export default function Proceedings(){
//     return(
//         <>
//             <div>
//                 <Header />
//             </div>
//         <div className="text-center mb-8">
//             <div className="lg:ml-16 lg:mr-16 md:ml-7 p-8 md:mr-7 ml-3 mr-3 pl-3 pr-3 mt-10 lg:mt-5 rounded-xl" style={{fontFamily:'"Montserrat", arial'}}>
//             <div className="text-white text-5xl">
//                 <b>PROCEEDINGS</b>
//             </div>
//             <div>
//             <div className="flex justify-center mt-20 mb-20"> 
//         <a href="https://drive.google.com/drive/folders/1iCDqBrzyr2MHhti1828_IOo8z6Vx7Ij9?usp=sharing">
//         <div className="text-[5vw] md:text-[4vw] lg:text-[3vw]  text-center font-bold  rounded-3xl border-blue-500 border-4 px-7 py-4 text-white hover:scale-[1.1] transition-[0.5s] hover:bg-black">
//         DOWNLOAD PROCEEDINGS
        
//         </div>
//         </a>
//         </div>
//             </div>
//             <iframe src="../../Proceedings ITC India 2025.pdf" width="600" height="800" style="border:none;"></iframe>

//             </div>
//         </div>
//         </>
//     )
// }

import React from "react"
import Header from "./Components/Header";

export default function Proceedings(){
    return(
        <>
            <div>
                <Header />
            </div>
            <div className="text-center mb-8">
                <div className="lg:ml-16 lg:mr-16 md:ml-7 p-8 md:mr-7 ml-3 mr-3 pl-3 pr-3 mt-10 lg:mt-5 rounded-xl" style={{fontFamily:'"Montserrat", arial'}}>
                    <div className="text-white text-5xl">
                        <b>PROCEEDINGS</b>
                    </div>
                    <div>
                        <div className="flex justify-center mt-20 mb-20"> 
                            <a href="./ITC India 2025 Proceedings.pdf">
                                <div className="text-[5vw] md:text-[4vw] lg:text-[3vw] text-center font-bold rounded-3xl border-blue-500 border-4 px-7 py-4 text-white hover:scale-[1.1] transition-[0.5s] hover:bg-black">
                                    DOWNLOAD PROCEEDINGS
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div className="w-full flex justify-center">
                        <iframe 
                            src="../../Proceedings ITC India 2025.pdf"
                            className="w-full max-w-4xl h-96 md:h-[600px] lg:h-[800px]" 
                            style={{border:"none"}}
                            title="Proceedings PDF"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
