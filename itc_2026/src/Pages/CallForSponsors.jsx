import React from 'react';
import StarBorder from "./Components/StarBorder/StarBorder";
import Header from './Components/Header'



export default function CallForSponsors() {
  const sponsorshipData = [
    {
      package: "Platinum",
      slots: 2,
      cost: "1000000 + 18% GST",
      benefits: [
        "Speaker Slot on Day 1 or 2 based on the selection by ITC Committee",
        "Inaugural Ceremony",
        "One Industry panel slot",
        "Exhibit booth – 9sqm x 2 stalls",
        "20 Free Conference Registrations",
        "20 Tutorial invitations",
        "Branding",
        "1 minute video during inauguration"
      ],
      passes: 20,
      booths: "2 Nos(3x3 sqm)",
      banquet: 20,
      bgColor: "bg-slate-700",
      textColor: "text-purple-100"
    },
    {
      package: "Gold",
      slots: 4,
      cost: "700000 + 18% GST",
      benefits: [
        "Speaker Slot on Day 1 or 2 based on the selection by ITC Committee",
        "Exhibit booth – 9sqm x 1 stall",
        "15 Free Conference Registrations",
        "15 Tutorial invitations",
        "Branding",
        "45 seconds video before the lunch break"
      ],
      passes: 15,
      booths: "3x3 sqm",
      banquet: 15,
      bgColor: "bg-slate-600",
      textColor: "text-blue-100"
    },
    {
      package: "Silver",
      slots: 5,
      cost: "550000 + 18% GST",
      benefits: [
        "Industry panel slot",
        "10 Free Conference Registrations",
        "10 Tutorial Invitations",
        "Branding",
        "60 seconds video played during the lunch sessions(3 times)"
      ],
      passes: 10,
      booths: "50% discount on Exhibit booth price",
      banquet: 10,
      bgColor: "bg-slate-700",
      textColor: "text-indigo-100"
    },
    {
      package: "Bronze",
      slots: 6,
      cost: "300000 + 18% GST",
      benefits: [
        "Branding",
        "5 Free Conference Registrations",
        "5 Tutorial Invitations"
      ],
      passes: 5,
      booths: "25% discount on Exhibit booth price",
      banquet: 5,
      bgColor: "bg-slate-600",
      textColor: "text-cyan-100"
    },
    {
      package: "Fellowship Program",
      slots: 7,
      cost: "250000 + 18% GST",
      benefits: [
        "Branding",
        "20 Fellowship sponsor",
        "4 Free Conference Registration",
        "4 Tutorial Invitations"
      ],
      passes: 4,
      booths: "25% discount on Exhibit booth price",
      banquet: 4,
      bgColor: "bg-slate-700",
      textColor: "text-sky-100"
    },
    {
      package: "Industry Test Challenges Session(Invite only session)",
      slots: 2,
      cost: "250000+ 18% GST",
      benefits: [
        "Dedicated sponsor for the session",
        "Branding",
        "4 Free Conference Registration",
        "4 Tutorial Invitations"
      ],
      passes: 4,
      booths: "25% discount on Exhibit booth price",
      banquet: 4,
      bgColor: "bg-slate-600",
      textColor: "text-white"
    },
    {
      package: "Exhibit Booths",
      slots: 15,
      cost: "75000 + 18% GST",
      benefits: ["NIL"],
      passes: 1,
      booths: "2x3 sqm",
      banquet: "NIL",
      bgColor: "bg-slate-700",
      textColor: "text-white"
    }
  ];

  const sponsorshipItems = [
    { id: 1, item: "Panel Discussions", slots: 8, price: 250000 },
    { id: 2, item: "Inaugural Ceremony/Cultural Event", slots: 1, price: 600000 },
    { id: 3, item: "Evening Hi-Tea", slots: 1, price: 500000 },
    { id: 4, item: "Awards Ceremony", slots: 1, price: 500000 },
    { id: 5, item: "Conference Kit Material", slots: 1, price: 75000 },
    { id: 6, item: "Conference Mugs", slots: 2, price: 250000 },
    { id: 7, item: "Student Program", slots: 4, price: 150000 },
    { id: 8, item: "Polo shirts", slots: 1, price: 400000 },
    { id: 9, item: "Registration Area", slots: 2, price: 500000 },
    { id: 10, item: "Delegate Badges", slots: 1, price: 500000 },
    { id: 11, item: "Delegate Bag Branding", slots: 2, price: 600000 },
    { id: 12, item: "Event Stationery/conference booklet", slots: 3, price: 500000 },
    { id: 13, item: "Speaker Mementos", slots: 2, price: 200000 },
    { id: 14, item: "Memento (for bag inserts)", slots: 10, price: 150000 },
    { id: 15, item: "Delegate bag inserts", slots: 10, price: 100000 },
    { id: 16, item: "Delegate caps", slots: 2, price: 200000 },
    { id: 17, item: "Delegate folders", slots: 4, price: 200000 },
    { id: 18, item: "Event Pen Drives", slots: 1, price: 200000 },
    { id: 19, item: "Delegate Pens", slots: 1, price: 200000 }
  ];

  return (
    <div>
      <div className='mb-10'>
        <Header/>
      </div>
    <div className=' flex flex-col items-center justify-center bg-gray-100 lg:mx-16 md:mx-4 mx-3 p-3 mt-10 lg:mt-5 rounded-xl' style={{fontFamily:'"Montserrat", arial'}}>
        <h1 className="text-purple-600 lg:text-4xl md:text-3xl text-2xl font-bold pt-3 mt-5" style={{fontFamily:'"Roboto", arial'}}>Call For Sponsorships</h1>
        
        <div className='text-justify lg:text-xl mx-4 md:mx-6 mt-10'>
          We are excited to announce the Ninth edition of the <span className='font-semibold'>International Test Conference (ITC) – India</span>, taking place in <span className='font-semibold'>Radisson Blu, Bengaluru, Karnataka, India</span>, from <span className='font-semibold'>July 20-22, 2025</span>. 
        </div>
        
        <div className='text-justify lg:text-xl mx-4 md:mx-6 mt-10'>
          Building upon the exceptional success of the first eight editions, this conference is a prime opportunity for researchers and industry professionals to showcase their innovative development work centered on India and the subcontinent. It is a platform for design teams operating across multiple countries and engaged in groundbreaking projects worldwide.
        </div>
        
        <div className='text-justify lg:text-xl mx-4 md:mx-6 mt-10'>
          The organizing committee is committed to ensuring robust participation, both in terms of quality and quantity, through a comprehensive and impactful technical program that features:
        </div>
        
        <ul className='self-start mx-8 md:mx-12 mt-4 lg:text-xl'>
            <li>- Keynote Speeches</li>
            <li>- Technical Papers</li>
            <li>- Industry Panels</li>
            <li>- Exhibits</li>
            <li>- Tutorials</li>
            <li>- Industry Test Challenges</li>
            <li>- Fellowship Program</li>
            <li>- Posters</li>
        </ul>

        <div className='text-justify lg:text-xl mx-4 md:mx-6 mt-10'>
          As an industry leader, you understand the importance of establishing your company's technical leadership and effectively highlighting your expertise to the broader technical community. ITC India is the perfect stage for you to achieve significant business value and elevate your organization's profile. Enclosed are the details of several sponsorship opportunities for your serious consideration. The attached sponsorship packages, enrollment forms, and detailed information about various sponsorship options are designed to deliver outstanding Return on Investment (ROI) for your company.
        </div>

        <h1 className="text-purple-600 lg:text-3xl md:text-2xl font-bold text-xl mb-12 pt-3 mt-8" style={{fontFamily:'"Roboto", arial'}}>Sponsorship Packages</h1>

       
        <div className=" hidden w-full md:block md:w-full overflow-x-scroll px-4 md:px-4">
          <div className="w-full md:w-5/6 lg:w-full"> 
            <table className="w-full border-collapse mb-8" style={{fontFamily: '"Montserrat", arial'}}>
              <thead>
                {/* <tr>
                  <th className="bg-slate-900 text-white px-4 py-2 text-center w-1/5 font-bold border border-black whitespace-nowrap md:w-60px">SPONSORSHIP PACKAGES</th>
                  <th className="bg-slate-900 text-white text-center w-1/12 border border-black whitespace-nowrap md:w-3px">TOTAL SLOTS</th>
                  <th className="bg-slate-900 text-white px-1 py-2 border w-1/5 border-black whitespace-nowrap md:w-1/12">SPONSORSHIP COST(in INR)</th>
                  <th className="bg-slate-900 text-white px-4 py-2 w-1/5 text-center border border-black" colSpan={4}>SPONSORSHIP BENEFITS AND OFFERINGS</th>
                </tr> */}
                 <tr>
          <th className="bg-slate-900 text-white px-2 py-2 text-center font-bold border border-black whitespace-nowrap text-sm md:text-base md:w-1/12">SPONSORSHIP PACKAGES</th>
          <th className="bg-slate-900 text-white text-center border border-black whitespace-nowrap text-sm md:text-base md:w-1/12">SLOTS</th>
          <th className="bg-slate-900 text-white px-1 py-2 border border-black whitespace-nowrap text-sm md:text-base md:w-1/5 ">COST(in INR)</th>
          <th className="bg-slate-900 text-white px-2 py-2 text-center border border-black text-sm md:text-base md:w-2/5" colSpan={5}>BENEFITS AND OFFERINGS</th>
        </tr>
                
              </thead>
              <tbody>
                {sponsorshipData.map((sponsor, index) => (
                  <tr key={index} className={sponsor.bgColor}>
                    <td className={`px-4 py-4 ${sponsor.textColor} border border-gray-800 whitespace-normal`}>{sponsor.package}</td>
                    <td className={`px-4 py-4 text-center ${sponsor.textColor} border border-gray-800`}>{sponsor.slots}</td>
                    <td className={`px-4 py-4 ${sponsor.textColor} border border-gray-800 whitespace-nowrap`}>{sponsor.cost}</td>
                    <td className={`px-4 py-4 text-sm ${sponsor.textColor} border border-gray-800`} colSpan={4}>
                      <ul className="list-disc pl-4 space-y-1">
                        {sponsor.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            
            </table>
            
            
          </div>
        </div>
        <div></div>

        {/* mobile here */}
        <div className="md:hidden w-full px-2 rounded-xl space-y-6 mb-8">
          {sponsorshipData.map((sponsor, index) => (
            <div key={index} className={`${sponsor.bgColor} rounded-lg shadow-lg p-4 w-full`}>
              <div className="flex flex-col mb-4">
                <h2 className={`${sponsor.textColor} text-xl font-bold mb-2`}>{sponsor.package}</h2>
                <span className={`${sponsor.textColor} text-sm`}>Slots: {sponsor.slots}</span>
              </div>
              
              <div className={`${sponsor.textColor} mb-4`}>
                <div className="font-semibold mb-2">Cost:</div>
                <div>{sponsor.cost}</div>
              </div>

              <div className={`${sponsor.textColor} mb-4`}>
                <div className="font-semibold mb-2">Benefits:</div>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  {sponsor.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className={`${sponsor.textColor} grid grid-cols-3 gap-2 text-center text-sm`}>
                <div>
                  <div className="font-semibold mb-1">Passes</div>
                  <div>{sponsor.passes}</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Booths</div>
                  <div className="text-xs">{sponsor.booths}</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Banquet</div>
                  <div>{sponsor.banquet}</div>
                </div>
              </div>
              <div>
              </div>
            </div>
            
          ))}
          
        </div>
        <div className=' '>
        <h1 className="text-purple-600 lg:text-3xl text-center md:text-2xl font-bold text-xl mb-12 pt-3 mt-8" style={{fontFamily:'"Roboto", arial'}}>Additional Sponsorship Items</h1>
          <div className='sm:flex justify-center'>
          <table classname = "flex justify-center">
                  <thead className='items-center'>
                    <tr>
                    <th className="bg-slate-900 text-xs md:text-md text-white p-1 md:p-4 text-left border">Sl. No</th>
                    <th className="bg-slate-900 text-xs md:text-md text-white p-1 md:p-4 text-left border">Item</th>
                    <th className="bg-slate-900 text-xs md:text-md text-white p-1 md:p-4 text-right border">Slots</th>
                    <th className="bg-slate-900 text-xs md:text-md text-white p-1 md:p-4 text-right border">Price (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
              {sponsorshipItems.map((item) => (
                <tr key={item.id} className={item.id % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="p-1 text-xs md:text-md md:p-4 border">{item.id}</td>
                  <td className="p-1 text-xs md:text-md md:p-4 border">{item.item}</td>
                  <td className="p-1 text-xs md:text-md md:p-4 border text-right">{item.slots}</td>
                  <td className="p-1 text-xs md:text-md md:p-4 border text-right">{item.price.toLocaleString()}</td>
                </tr>
              ))}
                  </tbody>
                </table> 
                </div>
          </div>
          <div className='text-justify lg:text-xl mx-4 md:mx-6 mt-16'>
          Your prompt decision to participate will enable us to better serve you and enhance the ROI you experience, ensuring that the conference meets and exceeds your expectations. We would be happy to provide further details and look forward to connecting with you soon.
        </div>

        <div className='font-bold lg:text-2xl lg:pl-16 text-xl lg:self-start mx-4 md:mx-6 mt-16'>
          General Chairs
        </div>
        <div className='flex flex-col items-center lg:flex-row mt-6 gap-8 justify-between pl-16 pr-16' style={{width:"100%"}}>
        <StarBorder
  className="md:w-[25rem] w-[80vw]  lg:w-[36vw]"
  color="purple"
  speed="3s"
>
    <div className="flex flex-col items-center md:flex-row gap-6 bg-transparent">
    <img src={'/p53.png'} className='w-[6rem]'></img>
<div className="flex flex-col gap-3 md:gap-0 text-left justify-center">
        <div className="font-bold lg:text-[1.5vw] text-center md:text-left text-purple-500">Sivanantham S, VIT Vellore</div>
        <div className="text-md lg:text-[1.3vw] ">ssivanantham@vit.ac.in</div>
</div>  
    </div>
  
</StarBorder>

<StarBorder
  className="md:w-[25rem] w-[80vw]  lg:w-[36vw]"
  color="purple"
  speed="3s"
>
    <div className="flex flex-col items-center md:flex-row gap-6 bg-transparent">
    <img src={'/p16.png'} className='w-[6rem]'></img>
<div className="flex flex-col gap-3 md:gap-0 text-left justify-center">
        <div className="font-bold lg:text-[1.5vw] text-center md:text-left text-purple-500">Gaurav Bhargava, Qualcomm</div>
        <div className="text-md lg:text-[1.3vw] ">gauravb@qti.qualcomm.com</div>
</div>  
    </div>
  
</StarBorder>
        </div>
        <div className='font-bold lg:text-2xl lg:pr-16 text-xl lg:self-end mx-4 md:mx-6 mt-16'>
          Marketing & Publicity Chairs
        </div>
        <div className='flex mb-8 flex-col items-center lg:flex-row mt-6 gap-8 justify-between pl-16 pr-16' style={{width:"100%"}}>
        <StarBorder
  className="md:w-[25rem] w-[80vw]  lg:w-[36vw]"
  color="purple"
  speed="3s"
>
    <div className="flex flex-col items-center md:flex-row gap-6 bg-transparent">
    <img src={'/p6.png'} className='w-[6rem]'></img>
<div className="flex flex-col gap-3 md:gap-0 text-left justify-center">
        <div className="font-bold lg:text-[1.5vw] text-center md:text-left text-purple-500">Veeresh Shetty, Siemens EDA</div>
        <div className="text-md lg:text-[1.3vw] ">veeresh.shetty@siemens.com</div>
</div>  
    </div>
  
</StarBorder>

<StarBorder
  className="md:w-[25rem] w-[80vw]  lg:w-[36vw]"
  color="purple"
  speed="3s"
>
    <div className="flex flex-col items-center md:flex-row gap-6 bg-transparent">
    <img src={'/p51.png'} className='w-[6rem]'></img>
<div className="flex flex-col gap-3 md:gap-0 text-left justify-center">
        <div className="font-bold lg:text-[1.5vw] text-center md:text-left text-purple-500">Samuel Dorairaj, Intel</div>
        <div className="text-md lg:text-[1.3vw] ">samuel.v.dorairaj@intel.com</div>
</div>  
    </div>
  
</StarBorder>
        </div>
     </div>
     </div>
  );
}