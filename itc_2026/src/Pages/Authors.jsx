import React from "react"
import Header from "./Components/Header";

export default function ContactUs(){
    return(
        <>
            <div>
                <Header />
            </div>
            <div className="mt-16">
        <img src='/AuthorsHeading.png'style={{width:'100vw', zIndex:'-50'}}>
            
        </img>
        
       </div>
        <div className="text-center mb-8">
            <div className="lg:ml-16 lg:mr-16 md:ml-7 p-8 md:mr-7 ml-3 mr-3 pl-3 pr-3 mt-10 lg:mt-5 rounded-xl" style={{fontFamily:'"Montserrat", arial'}}>
            
            
            <div className="border-blue-500 pb-12 rounded-xl border-4 mt-12 p-5" style={{fontFamily:"'Poppins',arial"}}>
                <div className="text-7xl mt-8 mb-16 text-white font-bold">
                    Keynote Speakers
                </div>
                <div className="flex flex-col mt-10 pr-6 pl-6 gap-16 lg:flex-row items-center">
                    <div className="lg:w-[30%] flex justify-center">
                    <img src='/Janusz.png' className="lg:w-[20vw] md:w-[35vw] w-[40vw]"></img>
                    </div>
                    <div className="lg:w-[70%]  text-justify">
                        <div className="text-blue-300 mb-5 text-4xl font-semibold ">Janusz Rajski, <span className="font-normal text-white">Siemens EDA</span></div>
                        <div className="text-blue-400 mb-5 text-2xl font-semibold ">Transformative Design for Test Technologies for Silicon Lifecycle Management</div>
                        <div className="text-white text-lg">During his tenure at Mentor Graphics and Siemens, Janusz has built a strong R&D organization with a focus on innovative DFT and SLM technologies. The team has developed several revolutionary products: TestKompress, Cell-Aware Test, and Streaming Scan Network. He has published more than 280 IEEE research papers and is a co-inventor of 130 US and international patents. A Lifetime Fellow of the IEEE, he holds a Ph.D. degree in electrical engineering as well as an honorary doctorate from the Poznań University of Technology. In 2003, he was awarded the prestigious title of “Professor of Science” by the President of Poland. In 2009 he received the Stephen Swerling Innovation Award from Mentor Graphics “for his breakthrough innovation, TestKompress, and his many contributions to revitalizing Mentor's DFT business to its current position as the #1 test business in EDA”. In 2018, Janusz received the Siemens Inventor of the Year Lifetime Achievement Award “in recognition of his outstanding achievements which have led to valuable inventions in the field of DFT of integrated circuits”. In 2022 he received the Siemens Inventor of the Year Award for co-inventing the Streaming Scan Network. </div>
                    </div>
                    
                </div>

                <div className="flex flex-col-reverse mt-16 pl-6 pr-6 gap-16 lg:flex-row items-center">
                    
                    <div className="lg:w-[70%] ">
                        <div className="text-blue-300 text-start lg:text-end mb-5 text-4xl font-semibold ">Raja Swaminanthan, <span className="font-normal text-white">AMD</span></div>
                        <div className="text-blue-400 text-start lg:text-end mb-5 text-2xl font-semibold ">Future of AI Hardware Enabled by Advanced Packaging</div>
                        <div className="text-white text-justify text-lg"> Dr. Raja Swaminathan is the Corporate Vice President of Packaging at AMD, spearheading the development of AMD's advanced packaging and heterogeneous integration roadmap. With a distinguished career spanning roles at Intel, Apple, and now AMD, Dr. Swaminathan's expertise in design-technology co-optimization and dedication to optimizing power, performance, area, and cost (PPAC) have led to significant technological advancements such as EMIB, Apple's Mx packages, 3D V-Cache, and 3.5D architectures for AI accelerators. Dr. Swaminathan holds a PhD from Carnegie Mellon University and an undergraduate degree from IIT Madras. With over 100 patents and more than 40 published papers to their name, Dr. Swaminathan was recently recognized as an IEEE Fellow and serves as a technical advisor to multiple startups. His unwavering commitment to heterogeneous integration continues to drive the boundaries of silicon technology. He also shares his insights on life and leadership, drawing lessons from the semiconductor industry, on his LinkedIn profile.
</div>
                    </div>
                    <div className="lg:w-[30%] flex justify-center">
                    <img src='/Raja.png' className="lg:w-[20vw] md:w-[35vw] w-[40vw]"></img>
                    </div>
                    
                </div>
                <div className="flex flex-col mt-16 pr-6 pl-6 gap-16 lg:flex-row items-center">
                    <div className="lg:w-[30%] flex justify-center">
                    <img src='/Nitza.png' className="lg:w-[20vw] md:w-[35vw] w-[40vw]"></img>
                    </div>
                    <div className="lg:w-[70%] text-justify">
                        <div className="text-blue-300 mb-5 text-4xl font-semibold ">Nitza Basoco, <span className="font-normal text-white">Teradyne</span> </div>
                        <div className="text-blue-400 mb-5 text-2xl font-semibold ">The Right Testing Strategy Can Save Designs</div>
                        <div className="text-white text-lg">Nitza Basoco is the Technology and Market Strategist in the Semiconductor Test Division at Teradyne, focusing on start-ups, emerging companies and hyperscalers.  With over 24 years of experience in the semiconductor industry, Nitza is a proven leader with deep technical expertise in bringing emerging technologies to market.  Prior to Teradyne, Nitza was the Vice President of Business Development at proteanTecs, responsible for their partnership strategy and value-add ecosystem growth.  Before that she was Vice President of Operations of Synaptics and held various leadership positions at MaxLinear. Her time as a principal test development engineer (TDE) at Broadcom provided vital experience in semiconductor test. 
<br/><br/>Nitza holds a Master of Engineering and a Bachelor of Science degree in Electrical Engineering from MIT and an Executive Master of Business Administration (EMBA) from Quantic School of Business and Technology.  She is an active volunteer with the Global Semiconductor Alliance Women’s Leadership Initiative (GSA WLI), a mentor in the GSA Women in Hardware program (WHM) and on the National Academy Foundation (NAF) Advisory Board of the Compton Unified School District. 
</div>
                    </div>
                    
                </div>

                <div className="flex flex-col-reverse mt-16 pl-6 pr-6 gap-16 lg:flex-row items-center">
                    
                    <div className="lg:w-[70%] ">
                        <div className="text-blue-300 text-start lg:text-end mb-5 text-4xl font-semibold ">Sreejit Chakravarty, <span className="font-normal text-white">Ampere Computing</span> </div>
                        <div className="text-blue-400 text-start lg:text-end mb-5 text-2xl font-semibold ">Rethinking Silicon Test to reduce DPPM and SDC</div>
                        <div className="text-white text-justify text-lg">Dr. Sreejit Chakravarty is an IEEE Fellow, a highly recognized Researcher, Inventor, and a Distinguished Engineering Leader, with extensive industry and academic experience.
<br/><br/>
He is currently a Distinguished Engineer at Ampere Computing, Santa Clara, CA, USA where he drives strategic initiatives for product quality. Prior to this he had over 25 years of industry experience as a Principal Engineer with Intel Corporation and Distinguished Engineer at LSI and AVAGO (now Broadcom). He started his career in academia as an Associate professor of Computer Science, at The State University of New York at Buffalo, where his work was funded by multiple National Science Foundation Grants.
<br/><br/>
He has architected innovative solutions across the entire silicon life cycle spanning Silicon Quality and Reliability (RAS, Functional Safety and Silent Data Errors); and subsequently drove them from concept to product intercept.
<br/><br/>
He has published 1 book, authored 145+ IEEE papers and has 23 issued US patents. He has served in various capacity at numerous IEEE conferences and delivered multiple keynote addresses, the latest being at the IEEE Asina Test Symposium, 2023. He has mentored research at several universities like Princeton, USC, UIUC, etc. For his professional work he has been recognized as an IEEE Fellow and SUNY Distinguished Alumni. He currently chairs the IEEE P3405 Work Group on Chip-let Interconnect Test and Repair, which aims to standardize the test and repair of chip-let interconnects which will lay the foundation to realize the chip-let revolution.
</div>
                    </div>
                    <div className="lg:w-[30%] flex justify-center">
                    <img src='/Sreejit.png' className="lg:w-[20vw] md:w-[35vw] w-[40vw]"></img>
                    </div>
                    
                </div>
                <div className="flex flex-col mt-16 pr-6 pl-6 gap-16 lg:flex-row items-center">
                    <div className="lg:w-[30%] flex justify-center">
                    <img src='/Suresh.png' className="lg:w-[20vw] md:w-[35vw] w-[40vw]"></img>
                    </div>
                    <div className="lg:w-[70%] text-justify">
                        <div className="text-blue-300 mb-5 text-4xl font-semibold ">Suresh Babu K. , <span className="font-normal text-white">Caliber Interconnect Solutions Pvt. Ltd.</span>  </div>
                        <div className="text-blue-400 mb-5 text-2xl font-semibold ">From Silicon to Solutions: The Societal Impact of Semiconductor Leadership</div>
                        <div className="text-white text-lg">Suresh began his entrepreneurial journey at the age of 32 in the year 2000, driven by his passion for business and software. Remarkably, he had already developed his first test hardware design IPs 25 years earlier, during a time when modern EDA tools were still in their infancy. Capitalizing on his deep technical expertise, he became a trusted vendor, offering design and test development services to major semiconductor and ATE (Automatic Test Equipment) companies.
<br/><br/>Throughout his career, Suresh successfully built and led high-performing teams specializing in test development, test hardware design, packaging, and high-speed digital/RF simulation. His interests extended beyond semiconductor electronics, branching into power systems, medical devices, and robotics. Under his leadership, these multidisciplinary teams delivered cutting-edge solutions to clients in the automotive and railway sectors. Suresh holds an engineering degree and a postgraduate degree in Consultancy Management from BITS Pilani, further complementing his technical and managerial acumen.
</div>
                    </div>
                    
                </div>

                <div className="flex flex-col-reverse mt-16 pl-6 pr-6 gap-16 lg:flex-row items-center">
                    
                    <div className="lg:w-[70%] ">
                        <div className="text-blue-300 text-start lg:text-end mb-5 text-4xl font-semibold ">Rajesh V, <span className="font-normal text-white">Tessolve</span>  </div>
                        <div className="text-blue-400 text-start lg:text-end mb-5 text-2xl font-semibold ">Enabling Efficient Prototyping for Fabless Design Houses</div>
                        <div className="text-white text-justify text-lg">Over 25 years of experience with a solid track record of driving revenue growth, leading organizations, and enhancing strategic partnerships. As the P&L owner for global Test Engineering services, specialize in a range of technologies, including Digital, Analog, Mobile, Automotive, Cloud, and AI. These efforts have successfully expanded the Tessolve Test Business Unit to include over 1500+ engineers across divisions such as Bench Characterization Engineering, Test and Product Engineering, Quality, and Automation. We have set up the Test labs with high-volume manufacturing equipment in San Jose and Austin, which are equipped with advanced Automated Test Equipment (ATEs), Probers, and Handlers, setting new standards in industry capabilities.</div>
                    </div>
                    <div className="lg:w-[30%] flex justify-center">
                    <img src='/Rajesh.png' className="lg:w-[20vw] md:w-[35vw] w-[40vw]"></img>
                    </div>
                    
                </div>
            </div>

            <div className="border-blue-500 pb-12 rounded-xl border-4 mt-12 p-5" style={{fontFamily:"'Poppins',arial"}}>
                <div className="text-7xl mt-8 mb-16 text-white font-bold">
                    Distinguished Addresses
                </div>
                <div className="flex flex-col mt-10 pr-6 pl-6 gap-16 lg:flex-row items-center">
                    <div className="lg:w-[30%] flex justify-center">
                    <img src='/Janusz.png' className="lg:w-[20vw] md:w-[35vw] w-[40vw]"></img>
                    </div>
                    <div className="lg:w-[70%]  text-justify">
                        <div className="text-blue-300 mb-5 text-4xl font-semibold ">Janusz Rajski, <span className="font-normal text-white">Siemens EDA</span></div>
                        <div className="text-blue-400 mb-5 text-2xl font-semibold ">Transformative Design for Test Technologies for Silicon Lifecycle Management</div>
                        <div className="text-white text-lg">During his tenure at Mentor Graphics and Siemens, Janusz has built a strong R&D organization with a focus on innovative DFT and SLM technologies. The team has developed several revolutionary products: TestKompress, Cell-Aware Test, and Streaming Scan Network. He has published more than 280 IEEE research papers and is a co-inventor of 130 US and international patents. A Lifetime Fellow of the IEEE, he holds a Ph.D. degree in electrical engineering as well as an honorary doctorate from the Poznań University of Technology. In 2003, he was awarded the prestigious title of “Professor of Science” by the President of Poland. In 2009 he received the Stephen Swerling Innovation Award from Mentor Graphics “for his breakthrough innovation, TestKompress, and his many contributions to revitalizing Mentor's DFT business to its current position as the #1 test business in EDA”. In 2018, Janusz received the Siemens Inventor of the Year Lifetime Achievement Award “in recognition of his outstanding achievements which have led to valuable inventions in the field of DFT of integrated circuits”. In 2022 he received the Siemens Inventor of the Year Award for co-inventing the Streaming Scan Network. </div>
                    </div>
                    
                </div>

                <div className="flex flex-col-reverse mt-16 pl-6 pr-6 gap-16 lg:flex-row items-center">
                    
                    <div className="lg:w-[70%] ">
                        <div className="text-blue-300 text-start lg:text-end mb-5 text-4xl font-semibold ">Raja Swaminanthan, <span className="font-normal text-white">AMD</span></div>
                        <div className="text-blue-400 text-start lg:text-end mb-5 text-2xl font-semibold ">Future of AI Hardware Enabled by Advanced Packaging</div>
                        <div className="text-white text-justify text-lg"> Dr. Raja Swaminathan is the Corporate Vice President of Packaging at AMD, spearheading the development of AMD's advanced packaging and heterogeneous integration roadmap. With a distinguished career spanning roles at Intel, Apple, and now AMD, Dr. Swaminathan's expertise in design-technology co-optimization and dedication to optimizing power, performance, area, and cost (PPAC) have led to significant technological advancements such as EMIB, Apple's Mx packages, 3D V-Cache, and 3.5D architectures for AI accelerators. Dr. Swaminathan holds a PhD from Carnegie Mellon University and an undergraduate degree from IIT Madras. With over 100 patents and more than 40 published papers to their name, Dr. Swaminathan was recently recognized as an IEEE Fellow and serves as a technical advisor to multiple startups. His unwavering commitment to heterogeneous integration continues to drive the boundaries of silicon technology. He also shares his insights on life and leadership, drawing lessons from the semiconductor industry, on his LinkedIn profile.
</div>
                    </div>
                    <div className="lg:w-[30%] flex justify-center">
                    <img src='/Raja.png' className="lg:w-[20vw] md:w-[35vw] w-[40vw]"></img>
                    </div>
                    
                </div>
                <div className="flex flex-col mt-16 pr-6 pl-6 gap-16 lg:flex-row items-center">
                    <div className="lg:w-[30%] flex justify-center">
                    <img src='/Nitza.png' className="lg:w-[20vw] md:w-[35vw] w-[40vw]"></img>
                    </div>
                    <div className="lg:w-[70%] text-justify">
                        <div className="text-blue-300 mb-5 text-4xl font-semibold ">Nitza Basoco, <span className="font-normal text-white">Teradyne</span> </div>
                        <div className="text-blue-400 mb-5 text-2xl font-semibold ">The Right Testing Strategy Can Save Designs</div>
                        <div className="text-white text-lg">Nitza Basoco is the Technology and Market Strategist in the Semiconductor Test Division at Teradyne, focusing on start-ups, emerging companies and hyperscalers.  With over 24 years of experience in the semiconductor industry, Nitza is a proven leader with deep technical expertise in bringing emerging technologies to market.  Prior to Teradyne, Nitza was the Vice President of Business Development at proteanTecs, responsible for their partnership strategy and value-add ecosystem growth.  Before that she was Vice President of Operations of Synaptics and held various leadership positions at MaxLinear. Her time as a principal test development engineer (TDE) at Broadcom provided vital experience in semiconductor test. 
<br/><br/>Nitza holds a Master of Engineering and a Bachelor of Science degree in Electrical Engineering from MIT and an Executive Master of Business Administration (EMBA) from Quantic School of Business and Technology.  She is an active volunteer with the Global Semiconductor Alliance Women’s Leadership Initiative (GSA WLI), a mentor in the GSA Women in Hardware program (WHM) and on the National Academy Foundation (NAF) Advisory Board of the Compton Unified School District. 
</div>
                    </div>
                    
                </div>

                <div className="flex flex-col-reverse mt-16 pl-6 pr-6 gap-16 lg:flex-row items-center">
                    
                    <div className="lg:w-[70%] ">
                        <div className="text-blue-300 text-start lg:text-end mb-5 text-4xl font-semibold ">Sreejit Chakravarty, <span className="font-normal text-white">Ampere Computing</span> </div>
                        <div className="text-blue-400 text-start lg:text-end mb-5 text-2xl font-semibold ">Rethinking Silicon Test to reduce DPPM and SDC</div>
                        <div className="text-white text-justify text-lg">Dr. Sreejit Chakravarty is an IEEE Fellow, a highly recognized Researcher, Inventor, and a Distinguished Engineering Leader, with extensive industry and academic experience.
<br/><br/>
He is currently a Distinguished Engineer at Ampere Computing, Santa Clara, CA, USA where he drives strategic initiatives for product quality. Prior to this he had over 25 years of industry experience as a Principal Engineer with Intel Corporation and Distinguished Engineer at LSI and AVAGO (now Broadcom). He started his career in academia as an Associate professor of Computer Science, at The State University of New York at Buffalo, where his work was funded by multiple National Science Foundation Grants.
<br/><br/>
He has architected innovative solutions across the entire silicon life cycle spanning Silicon Quality and Reliability (RAS, Functional Safety and Silent Data Errors); and subsequently drove them from concept to product intercept.
<br/><br/>
He has published 1 book, authored 145+ IEEE papers and has 23 issued US patents. He has served in various capacity at numerous IEEE conferences and delivered multiple keynote addresses, the latest being at the IEEE Asina Test Symposium, 2023. He has mentored research at several universities like Princeton, USC, UIUC, etc. For his professional work he has been recognized as an IEEE Fellow and SUNY Distinguished Alumni. He currently chairs the IEEE P3405 Work Group on Chip-let Interconnect Test and Repair, which aims to standardize the test and repair of chip-let interconnects which will lay the foundation to realize the chip-let revolution.
</div>
                    </div>
                    <div className="lg:w-[30%] flex justify-center">
                    <img src='/Sreejit.png' className="lg:w-[20vw] md:w-[35vw] w-[40vw]"></img>
                    </div>
                    
                </div>
                <div className="flex flex-col mt-16 pr-6 pl-6 gap-16 lg:flex-row items-center">
                    <div className="lg:w-[30%] flex justify-center">
                    <img src='/Suresh.png' className="lg:w-[20vw] md:w-[35vw] w-[40vw]"></img>
                    </div>
                    <div className="lg:w-[70%] text-justify">
                        <div className="text-blue-300 mb-5 text-4xl font-semibold ">Suresh Babu K. , <span className="font-normal text-white">Caliber Interconnect Solutions Pvt. Ltd.</span>  </div>
                        <div className="text-blue-400 mb-5 text-2xl font-semibold ">From Silicon to Solutions: The Societal Impact of Semiconductor Leadership</div>
                        <div className="text-white text-lg">Suresh began his entrepreneurial journey at the age of 32 in the year 2000, driven by his passion for business and software. Remarkably, he had already developed his first test hardware design IPs 25 years earlier, during a time when modern EDA tools were still in their infancy. Capitalizing on his deep technical expertise, he became a trusted vendor, offering design and test development services to major semiconductor and ATE (Automatic Test Equipment) companies.
<br/><br/>Throughout his career, Suresh successfully built and led high-performing teams specializing in test development, test hardware design, packaging, and high-speed digital/RF simulation. His interests extended beyond semiconductor electronics, branching into power systems, medical devices, and robotics. Under his leadership, these multidisciplinary teams delivered cutting-edge solutions to clients in the automotive and railway sectors. Suresh holds an engineering degree and a postgraduate degree in Consultancy Management from BITS Pilani, further complementing his technical and managerial acumen.
</div>
                    </div>
                    
                </div>

                <div className="flex flex-col-reverse mt-16 pl-6 pr-6 gap-16 lg:flex-row items-center">
                    
                    <div className="lg:w-[70%] ">
                        <div className="text-blue-300 text-start lg:text-end mb-5 text-4xl font-semibold ">Rajesh V, <span className="font-normal text-white">Tessolve</span>  </div>
                        <div className="text-blue-400 text-start lg:text-end mb-5 text-2xl font-semibold ">Enabling Efficient Prototyping for Fabless Design Houses</div>
                        <div className="text-white text-justify text-lg">Over 25 years of experience with a solid track record of driving revenue growth, leading organizations, and enhancing strategic partnerships. As the P&L owner for global Test Engineering services, specialize in a range of technologies, including Digital, Analog, Mobile, Automotive, Cloud, and AI. These efforts have successfully expanded the Tessolve Test Business Unit to include over 1500+ engineers across divisions such as Bench Characterization Engineering, Test and Product Engineering, Quality, and Automation. We have set up the Test labs with high-volume manufacturing equipment in San Jose and Austin, which are equipped with advanced Automated Test Equipment (ATEs), Probers, and Handlers, setting new standards in industry capabilities.</div>
                    </div>
                    <div className="lg:w-[30%] flex justify-center">
                    <img src='/Rajesh.png' className="lg:w-[20vw] md:w-[35vw] w-[40vw]"></img>
                    </div>
                    
                </div>
            </div>
            <div className="border-blue-500 pb-12 rounded-xl border-4 mt-12 p-5" style={{fontFamily:"'Poppins',arial"}}>
                <div className="text-7xl mt-8 mb-16 text-white font-bold">
                    Expert Speakers
                </div>
                <div className="flex flex-col mt-10 pr-8 gap-16 lg:flex-row items-center">
                    <div className="w-[25%] flex justify-center">
                    <img src='/Abhishek.png' className="lg:w-[15vw] md:w-[25vw] w-[70vw]"></img>
                    </div>
                    <div className="w-[70%] text-justify">
                        <div className="text-blue-300 mb-5 text-4xl font-semibold ">Abhishek Chaudhary</div>
                        <div className="text-blue-400 mb-5 text-2xl font-semibold ">AMD</div>
                        <div className="text-white text-lg">Abhishek Chaudhary is an experienced DFT Engineer with 18 years of experience in the semiconductor industry. He is presently working at AMD Bangalore as part of the DFT team for server designs. Prior to joining AMD, Abhishek has worked at Texas Instruments, Rambus and Freescale Semiconductor in different capacities, primarily in the area of DFT and test. 
<br/><br/>
Abhishek has a passion for continued education and is an active volunteer in TTTC events and has presented on DFT topics at various external events and conferences. Abhishek holds a Master's degree from IIT Delhi and Bachelors from Visvesvaraya National Institute of Technology, Nagpur.

</div>
                    </div>
                    
                </div>

                <div className="flex flex-col mt-16 pl-6 gap-16 lg:flex-row items-center">
                    
                    <div className="w-[70%] ">
                        <div className="text-blue-300 text-end mb-5 text-4xl font-semibold ">Ankush Srivastava</div>
                        <div className="text-blue-400 text-end mb-5 text-2xl font-semibold ">QUALCOMM</div>
                        <div className="text-white text-justify text-lg">Ankush Srivastava is currently involved in enabling Industry leading DFT methodologies for Qualcomm’s state-of-the-art SoCs. He completed Ph.D. from IIT Bombay and M.E. from the BITS Pilani, all in Electrical Engineering and has 17+ years of industrial experience. He holds several international patents, Intellectual Property white papers, Journals and presented various papers in premier IEEE conferences. He served as a program committee member of Internal Test Conference India (ITC India), Asian Test Symposium (ATS), VLSI Design (VLSID), and VDAT. He has won 2020 Journal of Electronic Testing (JETTA) - Test Technology Technical Council (TTTC) Best Paper Award. He hails from Lucknow, and cycling is his hobby.
</div>
                    </div>
                    <div className="w-[25%] flex justify-center">
                    <img src='/Ankush.png' className="lg:w-[15vw] md:w-[25vw] w-[70vw]"></img>
                    </div>
                    
                </div>
                <div className="flex flex-col mt-16 pr-6 gap-16 lg:flex-row items-center">
                    <div className="w-[25%] flex justify-center">
                    <img src='/Vasudevan.png' className="lg:w-[15vw] md:w-[25vw] w-[70vw]"></img>
                    </div>
                    <div className="w-[70%] text-justify">
                        <div className="text-blue-300 mb-5 text-4xl font-semibold ">Arun Vasudevan</div>
                        <div className="text-blue-400 mb-5 text-2xl font-semibold ">AMD</div>
                        <div className="text-white text-lg">Arun Vasudevan works as a Principal member of technical staff in the Server SOC DFT team at AMD. He has 18+years of experience in DFT. Arun has also worked at ARM and Intel in different capacities mostly in the area of DFT.
Arun holds a bachelor’s degree in electronics from MS Ramaiah institute of technology, Bangalore.
</div>
                    </div>
                    
                </div>

                <div className="flex flex-col mt-16 pl-6 gap-16 lg:flex-row items-center">
                    
                    <div className="w-[70%] ">
                        <div className="text-blue-300 text-end mb-5 text-4xl font-semibold ">Jayagowri R</div>
                        <div className="text-blue-300 text-end mb-5 text-2xl font-semibold ">BMS COLLEGE OF ENGINEERING</div>
                        <div className="text-white text-justify text-lg">Dr. R. Jayagowri working as Professor in Department of Electronics and Communication Engineering ( PG faculty of VLSI stream), BMS College of Engineering, Karnataka, India. She is the author of two books in the field of VLSI, three Indian patents and more than 70 technical research papers in highly peer reviewed conferences and journals. Her area of research interest is Low power ASIC design and Design for Testability. She is the senior member of IEEE, member IETE and life member of ISTE. She and her team won few national levels project awards in VLSI design.

</div>
                    </div>
                    <div className="w-[25%] flex justify-center">
                    <img src='/Jayagowri.png' className="lg:w-[15vw] md:w-[25vw] w-[70vw]"></img>
                    </div>
                    
                </div>
                <div className="flex flex-col mt-16 pr-6 gap-16 lg:flex-row items-center">
                    <div className="w-[25%] flex justify-center">
                    <img src='/Kalyana.png' className="lg:w-[15vw] md:w-[25vw] w-[70vw]"></img>
                    </div>
                    <div className="w-[70%] text-justify">
                        <div className="text-blue-300 mb-5 text-4xl font-semibold ">Kalyana Sundaram Chandran</div>
                        <div className="text-blue-400 mb-5 text-2xl font-semibold ">CALIBER INTERCONNECT SOLUTIONS PVT. LTD.</div>
                        <div className="text-white text-lg">Kalyana Sundaram Chandran possessing 18 years of experience and he is currently working as a Test Lead at Caliber Interconnect Solutions, where he focuses on testing digital and mixed-signal ICs using various tester platforms. He specializes in research and development, creating advanced testing techniques and methodologies to drive product innovation and quality. His notable contributions in
R&D also include progress in biomedical VLSI signal processing and programming in Verilog and VHDL. He has an impressive academic record with 25 international journal publications and over 20 papers
presented at international conferences. He holds two patents and two copyrights. 
He earned his Ph.D. in Biomedical VLSI Signal Processing from Anna University, Chennai. Outside of work, he enjoys reading historical novels and traveling, which fuel his passion for creative thinking.
</div>
                    </div>
                    
                </div>

                <div className="flex flex-col mt-16 pl-6 gap-16 lg:flex-row items-center">
                    
                    <div className="w-[70%] ">
                        <div className="text-blue-300 text-end mb-5 text-4xl font-semibold ">Lakshmanan Balasubramanian</div>
                        <div className="text-blue-400 text-end mb-5 text-2xl font-semibold ">TEXAS INSTRUMENTS</div>
                        <div className="text-white text-justify text-lg">
                        Lakshmanan Balasubramanian is presently working as a eTechnologist & Senior Member Technical Staff, responsible for AMS SoC design integration & verification with Texas Instruments.
He is a Senior Member in IEEE, Member, IPRA, & PRI, The IET; Member ACM; CEng EC (UK); Member ACCS; Member VSI. 
He actively contributes to IEEE, Accellera and Si2 standards working groups on AMS extensions of HDLs, AMS test aspects, and low power aspects.
He is an expert and go-to person for AMS and LP design, verification, and silicon debug aspects; consulting across businesses within TI and industry. As an Industrial Liaison for TI in SRC, actively collaborating and driving industry sponsored academic research worldwide
                        </div>
                    </div>
                    <div className="w-[25%] flex justify-center">
                    <img src='/Lakshmanan.png' className="lg:w-[15vw] md:w-[25vw] w-[70vw]"></img>
                    </div>
                    
                </div>
                <div className="flex flex-col mt-16 pr-6 gap-16 lg:flex-row items-center">
                    <div className="w-[25%] flex justify-center">
                    <img src='/Manoj.png' className="lg:w-[15vw] md:w-[25vw] w-[70vw]"></img>
                    </div>
                    <div className="w-[70%] text-justify">
                        <div className="text-blue-300 mb-5 text-4xl font-semibold ">Manoj Pachaiyan</div>
                        <div className="text-blue-400 mb-5 text-2xl font-semibold ">CALIBER INTERCONNECT SOLUTIONS PVT. LTD.</div>
                        <div className="text-white text-lg">
                        Manoj Pachaiyan holds a Master’s degree in Power Electronics from Anna University and has over 10 years of professional experience, including more than 5 years in IC testing. Currently serving as the Team Lead of IC Testing at Caliber Interconnect, he specializes in post-silicon validation of Power Management ICs, mixed-signal testing, and high-speed interface blocks. With a strong foundation from his earlier academic career as an Assistant Professor in Analog Electronics, Manoj has developed deep expertise in both ATE and bench-level testing. His work includes advanced validation methodologies, automation using Python and LabVIEW, and hand-son experience with tools like oscilloscopes, SMUs, and high-speed test instruments.
                        </div>
                    </div>
                    
                </div>

                <div className="flex flex-col mt-16 pl-6 gap-16 lg:flex-row items-center">
                    
                    <div className="w-[70%] ">
                        <div className="text-blue-300 text-end mb-5 text-4xl font-semibold ">Piyushkumar Chaniyara</div>
                        <div className="text-blue-400 text-end mb-5 text-2xl font-semibold ">TEXAS INSTRUMENTS</div>
                        <div className="text-white text-justify text-lg">
                        Piyushkumar Chaniyara is a DFT engineer with more than 8 years of experience in the field. He has been associated with Texas Instruments since 2021 and has worked across multiple teams in Processors. He has expertise in both pre-silicon development and post-silicon validation.
</div>
                    </div>
                    <div className="w-[25%] flex justify-center">
                    <img src='/Piyushkumar.png' className="lg:w-[15vw] md:w-[25vw] w-[70vw]"></img>
                    </div>
                    
                </div>
                <div className="flex flex-col mt-16 pr-6 gap-16 lg:flex-row items-center">
                    <div className="w-[25%] flex justify-center">
                    <img src='/Rubin.png' className="lg:w-[15vw] md:w-[25vw] w-[70vw]"></img>
                    </div>
                    <div className="w-[70%] text-justify">
                        <div className="text-blue-300 mb-5 text-4xl font-semibold ">Rubin Parekhji</div>
                        <div className="text-blue-400 mb-5 text-2xl font-semibold ">TEXAS INSTRUMENTS</div>
                        <div className="text-white text-lg">
                        Rubin Parekhji has been with Texas Instruments (India), Bangalore, since 1996, where he has mentored and led DFT teams on various IP / SOC design and test technology projects across multiple groups, resulting in many DFT and test innovations, and adoption of new test technologies across TI WW.
He has co-authored more than 70 peer reviewed technical papers and has contributed to more than 20 tutorials and special sessions in leading international conferences. He has also co-authored a similar number of papers / presentations in TI internal conferences. He is the joint inventor of 25 granted patents and is a DMTS. 
He has played chair roles in IEEE conferences and standards. He has been a visiting faculty member at IIT Bombay and IISc Bangalore, has guided a large number of students on industrial projects, and is an active liaison for several TI sponsored SRC projects. He has a Ph.D. from Indian Institute of Technology, Bombay.  
                        </div>
                    </div>
                    
                </div>

                <div className="flex flex-col mt-16 pl-6 gap-16 lg:flex-row items-center">
                    
                    <div className="w-[70%] ">
                        <div className="text-blue-300 text-end mb-5 text-4xl font-semibold ">Sakthivel Ramachandran</div>
                        <div className="text-blue-400 text-end mb-5 text-2xl font-semibold ">VIT VELLORE</div>
                        <div className="text-white text-justify text-lg">
                        Dr. Sakthivel Ramachandran (Senior Member, IEEE) received B.E(EEE) from Madras University, 2000 and M.E in Applied Electronics from Anna University, 2004, and the Ph.D. degree in low-power high-speed architecture development for signal processing and cryptography applications. I am currently working as a Professor with the School of Electronics Engineering, Dept of Micro and Nano Electronics, Vellore Institute of Technology (VIT), Vellore, India. I am the co-author of the book “Basic Electrical Engineering published by Sonaversity, 2001 and the author of the “VLSI Design” published by S. Chand in 2007. I have published more than 75 peer reviewed papers in international conferences/journals. I have delivered around 50 guest lectures/invited talk and hands on workshop in FPGA-based system design, full custom IC design, RTL to GDSII and ASIC Design, VLSI Testing and Testability (DFT), Neuromorphic computing. My research interests include low-power VLSI design, DFT, Repairable Logic Development, ASIC Design and efficient hardware development for AI and ML. I was heading the VLSI division at VIT, Vellore, India since 2009 to 2012. During my tenure I was instrumental in setting up SoC Design Lab, FPGA/ASIC Lab, Analog IC Design Lab in association with Cadence, Altera and Texas Instruments (India) Respectively.
</div>
                    </div>
                    <div className="w-[25%] flex justify-center">
                    <img src='/Sakthivel.png' className="lg:w-[15vw] md:w-[25vw] w-[70vw]"></img>
                    </div>
                    
                </div>
                <div className="flex flex-col mt-16 pr-6 gap-16 lg:flex-row items-center">
                    <div className="w-[25%] flex justify-center">
                    <img src='/Satish.png' className="lg:w-[15vw] md:w-[25vw] w-[70vw]"></img>
                    </div>
                    <div className="w-[70%] text-justify">
                        <div className="text-blue-300 mb-5 text-4xl font-semibold ">Satish Sajjanar</div>
                        <div className="text-blue-400 mb-5 text-2xl font-semibold ">TEXAS INSTRUMENTS</div>
                        <div className="text-white text-lg">
                        Satish Sajjanar is a DFT engineer with more than 7 years of experience in the field. Along with the DFT execution across various test aspects, he is also heavily involved in flow automation and key enabler for existing DFT flows developed for Processors devices. 
                        </div>
                    </div>
                    
                </div>

                <div className="flex flex-col mt-16 pl-6 gap-16 lg:flex-row items-center">
                    
                    <div className="w-[70%] ">
                        <div className="text-blue-300 text-end mb-5 text-4xl font-semibold ">Senthilkumar Dhamodharan</div>
                        <div className="text-blue-400 text-end mb-5 text-2xl font-semibold ">CALIBER INTERCONNECT SOLUTIONS PVT. LTD.</div>
                        <div className="text-white text-justify text-lg">
                        Senthilkumar Dhamodharan currently serves as Director of Semiconductor Test Engineering at Caliber, where he leads the Test Engineering Division, responsible for overseeing the testing of Digital/Mixed Signal/RF products on ATE/Bench platforms. He is a proactive advocate for driving the development of intellectual property (IP) to stimulate innovations in silicon testing. Within his role, he shoulders the responsibility of mapping out the strategic direction for Test Engineering, wielding his influence across a wide array of areas, including the adept leadership of teams in Physical Design and DFT. Senthil takes immense pride in his well-established track record of assembling high-performance testing teams, a formidable force comprising over 200 skilled test engineers. Their primary mission is to consistently deliver outstanding value to clients on a global scale. He holds a Master's degree from Anna University in VLSI Design and boasts an impressive 18+ year tenure working with global technology giants such as Qualcomm, AMD and NXP. Driven by an authentic passion for technology, he derives immense joy from engaging with individuals and embarking on journeys to explore diverse destinations around the world.
                        </div>
                    </div>
                    <div className="w-[25%] flex justify-center">
                    <img src='/Senthilkumar.png' className="lg:w-[15vw] md:w-[25vw] w-[70vw]"></img>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
        </>
    )
}