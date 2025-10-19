'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'


const HomeList = [
  { name: 'Agenda', href: "/Agenda"},
  
  
]

const ProgramList = [
  { name: 'Agenda', href: "/Agenda"},
  { name: 'Proceedings', href: "/Proceedings"},
]

const AuthorList = [
  { name: 'Regular Papers/Posters Track',href : "/CFP"},
  {/* {name: 'Tutorials Track', href: "/CFT"}, */}
]

const SponsorsList = [
  { name: 'Our Sponsors',href : "/Sponsors"},
  { name: 'Call For Sponsors',href : "/CallForSponsors"}
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (

<>
<div className="herobg  pt-2 pb-10 pr-8 flex flex-col md:flex-row justify-evenly lg:gap-16  md:pl-16 w-[100vw] z-[-1]  items-center" >
  <Link to="/"> 

          <img src="/2018-ITC-logo-2-1-975x1024-1-1-2-qis8x6bbixjssd2bmb2tk8jwo4xzscf5cx0zrxymso.png" className="lg:w-[12vw] ml-5 lg:h-[12vw] md:w-[15vw] md:h-[15vw] h-[20vw] w-[20vw]"></img>
  </Link>
          <div className=" flex flex-col gap-4 ml-8 md:ml-12">
            <div className="text-white text-center md:text-start text-[6vw]  pt-5 md:text-[2.5vw] md:leading-[5vw] lg:text-[2vw] font-bold" style={{fontFamily:'"Poppins", arial'}}>10 <sup>th</sup> IEEE International Test Conference India 2026</div>
          <div className="flex flex-row justify-center md:justify-start text-white md:gap-16 gap-8  text-4xl" style={{fontFamily:'"Poppins", arial'}}>
            <Link to="https://maps.app.goo.gl/Su9eU1hLBaaRZcKEA" className=" p-[1vw] px-[2vw] text-center font-bold text-[2.1vw] md:text-[1vw]" style={{borderRadius:'20px', backgroundColor:'rgba(200, 219, 254, 50%)'}}>RADISSON BLU, MARATHAHALLI , BENGALURU</Link>
            </div>
            </div>
        </div>
    <header className="bg-blue-950 bg-opacity-60 ml-1 mr-1 mt-2 backdrop-brightness-50 z-[1000]" style={{borderRadius:'20px', fontFamily:'"Poppins",arial'}}>
      <nav aria-label="Global" className=" flex text-2xl justify-center items-center  pt-6 pb-6 lg:px-8">
        
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6 mr-3" style={{color:'white'}} />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-[1.3vw] font-semibold text-white hover:text-blue-400 " style={{transition:"0.2s"}}>
              <Link to="/">Home</Link>
              </PopoverButton>

           </Popover>
          
          <Popover className="relative">
            
            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-[10000] mt-3 w-72 max-w-sm overflow-hidden rounded-3xl bg-gray-950 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4 z-[50]">
                {ProgramList.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 z-[50]"
                  >
                    
                    <div className="flex-auto z-[20]">
                      <Link to={item.href} className="block font-semibold text-white hover:text-blue-400 z-[50]" style={{transition:"0.2s"}} onClick={() => setOpen(false)} >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                   
                    </div>
                  </div>
                ))}
              </div>
              
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-[1.3vw] font-semibold text-white hover:text-blue-400 " style={{transition:"0.2s"}}>
              Submissions
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-[10000] mt-3 w-72 max-w-sm overflow-hidden rounded-3xl bg-gray-950 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4 z-[50]">
                {AuthorList.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 z-[50]"
                  >
                    
                    <div className="flex-auto z-[20]">
                      <Link to={item.href} className="block font-semibold text-white hover:text-blue-400 z-[50]" style={{transition:"0.2s"}} onClick={() => setOpen(false)} >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                   
                    </div>
                  </div>
                ))}
              </div>
              
            </PopoverPanel>
          </Popover>
          
          
          
          
          
        </PopoverGroup>
        
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root" style={{fontFamily:"'Poppins', arial"}}>
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-white text-xl hover:text-blue-500">
                    <Link to="/" onClick={() => setMobileMenuOpen(false)} >Home</Link>
                    
                  </DisclosureButton>
                  
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-white text-xl hover:text-blue-500">
                    Program
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...ProgramList, ].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as={Link}
                        to={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white hover:text-blue-500"
                        onClick={() => setMobileMenuOpen(false)} 
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                
                
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-white text-xl hover:text-blue-500">
                    Submissions
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...AuthorList, ].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as={Link}
                        to={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white hover:text-blue-500"
                        onClick={() => setMobileMenuOpen(false)} 
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-white text-xl hover:text-blue-500">
                    Sponsors
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...SponsorsList, ].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as={Link}
                        to={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white  hover:text-blue-500"
                        onClick={() => setMobileMenuOpen(false)} 
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                
                
              </div>
              
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    </>
  )
}