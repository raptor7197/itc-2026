import { useState } from "react";
import React from "react";
import Header from "./Components/Header";
import Marquee from "react-fast-marquee";
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

const type = [
  [
    {
      category: 'industry',
      options: [
        { type: 'tutorial', indianPrice: '₹4000', indianPriceOld: '₹5000', deadline: 'June 30th' },
        { type: 'conference', indianPrice: '₹7600', indianPriceOld: '₹9500', deadline: 'June 30th' },
        { type: 'both', indianPrice: '₹10000', indianPriceOld: '₹12500', deadline: 'June 30th' }
      ]
    },
    {
      category: 'academia',
      options: [
        { type: 'tutorial', indianPrice: '₹4000', indianPriceOld: '₹5000', deadline: 'June 30th' },
        { type: 'conference', indianPrice: '₹7600', indianPriceOld: '₹9500', deadline: 'June 30th' },
        { type: 'both', indianPrice: '₹10000', indianPriceOld: '₹12500', deadline: 'June 30th' }
      ]
    },
    {
      category: 'ieee',
      options: [
        { type: 'tutorial', indianPrice: '₹4000',indianPriceOld: '₹5000', deadline: 'June 30th' },
        { type: 'conference', indianPrice: '₹7600', indianPriceOld: '₹9500', deadline: 'June 30th' },
        { type: 'both', indianPrice: '₹10000', indianPriceOld: '₹12500', deadline: 'June 30th' }
      ]
    }
  ],
  [
    {
      category: 'industry',
      options: [
        { type: 'tutorial', internationalPrice: '$80', internationalPriceOld: '$100', deadline: 'June 30th' },
        { type: 'conference', internationalPrice: '$160', internationalPriceOld: '$200', deadline: 'June 30th' },
        { type: 'both', internationalPrice: '$200',internationalPriceOld: '$240', deadline: 'June 30th' }
      ]
    },
    {
      category: 'academia',
      options: [
        { type: 'tutorial', internationalPrice: '$80', internationalPriceOld: '$100', deadline: 'June 30th' },
        { type: 'conference', internationalPrice: '$160', internationalPriceOld: '$200', deadline: 'June 30th' },
        { type: 'both', internationalPrice: '$200', internationalPriceOld: '$240', deadline: 'June 30th' }
      ]
    },
    {
      category: 'ieee',
      options: [
        { type: 'tutorial', internationalPrice: '$80',internationalPriceOld: '$100', deadline: 'June 30th' },
        { type: 'conference', internationalPrice: '$160', internationalPriceOld: '$200', deadline: 'June 30th' },
        { type: 'both', internationalPrice: '$200', internationalPriceOld: '$240', deadline: 'June 30th' }
      ]
    }
  ]
];

function Registration() {
  const [selectedType, setSelectedType] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="mt-16">
        <img src="/RegistrationHeading.png" style={{ width: '100vw', zIndex: '-50' }} alt="Registration Heading" />
      </div>
      <div className="text-white mt-16 mb-16 lg:text-5xl md:text-4xl text-3xl text-center font-bold " style={{fontFamily:'"Poppins", arial'}}>
            PRICING
       </div>
      <div className="flex flex-col justify-center items-center" style={{fontFamily:'"Poppins", arial'}}>
        <div className="flex justify-center gap-3">
        <button
  className={`text-white lg:text-5xl md:text-4xl text-xl border border-4 md:px-16 px-10 md:py-4 py-2 px-6 rounded-2xl transition-[0.3s] ${
    selectedType === 0 ? 'bg-blue-800 border-blue-800' : 'bg-transparent border-blue-800'
  }`}
  onClick={() => setSelectedType(0)}
>
  National
</button>

<button
  className={`text-white lg:text-5xl md:text-4xl text-xl border border-4 md:ml-20  md:px-6 px-1 md:py-4 py-2 rounded-2xl transition-[0.3s] ${
    selectedType === 1 ? 'bg-blue-800 border-blue-800' : 'bg-transparent border-blue-800'
  }`}
  onClick={() => setSelectedType(1)}
>
  International
</button>
        </div>
        <div className="mt-16 justify-center" > 
        <button
  className={`text-white lg:text-5xl md:text-4xl text-lg border border-4 lg:px-10 lg:py-4 md:px-7 md:py-3 px-3 py-2 rounded-2xl transition-[0.3s] ${
    selectedCategory === 0 ? 'bg-blue-400 border-blue-400' : 'bg-transparent border-blue-400'
  }`}
  onClick={() => setSelectedCategory(0)}
>
  Industry
</button>

<button
  className={`text-white lg:text-5xl md:text-4xl text-lg border border-4 lg:ml-20 md:ml-10 ml-2 lg:px-6 lg:py-4 md:px-4 md:py-3 px-1 py-2 rounded-2xl transition-[0.3s] ${
    selectedCategory === 1 ? 'bg-blue-400 border-blue-400' : 'bg-transparent border-blue-400'
  }`}
  onClick={() => setSelectedCategory(1)}
>
  Academia
</button>
<button
  className={`text-white lg:text-5xl md:text-4xl text-lg border border-4 lg:ml-20 md:ml-10 ml-2 lg:px-20 lg:py-4 md:px-16 md:py-3 px-6 py-2 rounded-2xl transition-[0.3s] ${
    selectedCategory === 2 ? 'bg-blue-400 border-blue-400' : 'bg-transparent border-blue-400'
  }`}
  onClick={() => setSelectedCategory(2)}
>
  IEEE
</button>
</div>

          <div className="flex justify-center lg:flex-row flex-col gap-32 p-4 mt-12">
            {
              type[selectedType][selectedCategory].options.map((option, index) => (
                <div key={index} className="bg-gray-950 border rounded-2xl flex flex-col gap-2  shadow-2xl shadow-blue-800 text-2xl p-8 rounded shadow">
                  <p className="font-bold text-white text-3xl capitalize">{option.type}</p>
                  <p className="text-white"><span className="text-blue-300">Price:</span> {option.indianPriceOld || option.internationalPriceOld}</p>
                  </div>
              ))
            }
          </div>
          
          <div className="italic font-light text-white mt-20">*All prices are GST exclusive.</div>
        </div>
        
            <div>
            <div className="text-white mt-16 mb-5 lg:text-4xl md:text-3xl text-2xl text-center font-bold " style={{fontFamily:'"Poppins", arial'}}>
            AVAIL BULK DISCOUNT
       </div>
       <div className="text-white mt-5 lg:text-2xl text-xl text-center font-semibold " style={{fontFamily:'"Poppins", arial'}}>
       contact us on
<a className="ml-1 text-blue-400">register.itc2025@gmail.com</a>
       </div>
       <div className="mt-8"  style={{fontFamily:'"Poppins", arial'}}>
       <div className='text-white mt-5 flex items-center justify-center gap-16'>
            <div className='text-5xl text-blue-400 font-semibold'>Group Size</div>
            <div className='text-5xl text-blue-400 font-semibold'>Discount</div>    
          </div>
          <div className='text-white flex mt-5 items-center justify-center gap-48'>
            <div className='text-3xl '>5-20 People</div>
            <div className='text-3xl'>20%</div>
            </div>
            <div className='text-white flex mt-5 items-center justify-center gap-48'>
            <div className='text-3xl'>21 and more</div>
            <div className='text-3xl'>25%</div>
            </div>
       </div>
       
            </div>

      <div className="h-[20vw] flex items-center justify-center">
        <div className="text-[5vw] md:text-[4vw] lg:text-[3vw] text-center font-bold rounded-3xl border-blue-500 border-4 px-7 py-4 text-white hover:scale-[1.1] transition-[0.5s] hover:bg-black">
          <a href="https://itc.expoplato.com" target="_blank" rel="noopener noreferrer">
            REGISTER HERE
          </a>
        </div>
      </div>

      <div>
      
      </div>

      <Marquee direction="right" className="mt-16">
        <img src="/Mask group.webp" className="lg:h-[8vw] h-[12vw]" alt="logo" />
        <img src="/Mask group.webp" className="lg:h-[8vw] h-[12vw]" alt="logo" />
        <img src="/Mask group.webp" className="lg:h-[8vw] h-[12vw]" alt="logo" />
      </Marquee>
    </>
  );
}

export default Registration;
