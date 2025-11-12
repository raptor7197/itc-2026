import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Pages/Components/Footer";
import Committee from "./Pages/Committee";
import ConferenceCFP from "./Pages/ConferenceCFP";
import { Link } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Committee" element={<Committee />} />
        <Route path="/CFP" element={<ConferenceCFP />} />
      </Routes>
      <div className="z-5">
        <Sheet>
          <SheetTrigger
            className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-blue-800 text-white p-2 rounded-l-lg shadow-lg"
            style={{
              height: "60px",
              width: "60px",
              zIndex: "50",
              borderBottomLeftRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </SheetTrigger>
          <SheetContent className="bg-black ">
            <SheetHeader>
              <SheetTitle className="text-white font-semibold text-3xl">
                Additional Links
              </SheetTitle>
              <SheetDescription className="text-white">
                <Accordion type="single" collapsible className="w-full mt-4">
                  {/* <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl">
                      Conference
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-none ml-4 ">
                        <li>
                          <a href="" className="hover:text-purple-500 text-xl ">
                            Latest Agenda
                          </a>
                        </li>
                        <li className="mt-2">
                          <a href="" className="hover:text-purple-500 text-xl">
                            Tutorial Program
                          </a>
                        </li>
                        <li className="mt-2">
                          <a href="" className="hover:text-purple-500 text-xl">
                            Keynote
                          </a>
                        </li>
                        <li className="mt-2">
                          <a href="" className="hover:text-purple-500 text-xl">
                            Panel Discussion
                          </a>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-2xl">
                      Submissions
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-none ml-4 ">
                        <li>
                          <Link to="/CFP">
                            <div
                              href=""
                              className="hover:text-purple-500 text-xl"
                            >
                              Call for Papers (CFP)
                            </div>
                          </Link>
                        </li>
                        <li className="mt-2">
                          <Link
                            to="/CFT"
                            className="hover:text-purple-500 text-xl"
                          >
                            Call for Tutorials (CFT)
                          </Link>
                        </li>
                        <li className="mt-2">
                          <Link
                            to="/ART"
                            className="hover:text-purple-500 text-xl"
                          >
                            Academia Research Track (ART)
                          </Link>
                        </li>
                        <li className="mt-2">
                          <Link
                            to="TRC"
                            className="hover:text-purple-500 text-xl"
                          >
                            Test Reality Check (TRC)
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-2xl">
                      General Information
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-none ml-4 ">
                        <li>
                          <Link
                            to="/Committee"
                            className="hover:text-purple-500 text-xl "
                          >
                            Committee
                          </Link>
                        </li>
                        <li className="mt-2">
                          <Link
                            to="/ContactUs"
                            className="hover:text-purple-500 text-xl"
                          >
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem> */}
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-2xl">
                      ITC Archives
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-none ml-4 ">
                        <li>
                          <a
                            href="/itc_2024_archive/itc_2024.html"
                            className="hover:text-purple-500 text-xl "
                          >
                            ITC 2024
                          </a>
                        </li>
                        <li className="mt-2">
                          <a
                            href="/itcindia2023/index.html"
                            className="hover:text-purple-500 text-xl"
                          >
                            ITC 2023
                          </a>
                        </li>
                        <li className="mt-2">
                          <a
                            href="/itc_2022/index.html"
                            className="hover:text-purple-500 text-xl"
                          >
                            ITC 2022
                          </a>
                        </li>
                        <li className="mt-2">
                          <a
                            href="../public/itc_2021/index.html"
                            className="hover:text-purple-500 text-xl"
                          >
                            ITC 2021
                          </a>
                        </li>
                        <li className="mt-2">
                          <a href="" className="hover:text-purple-500 text-xl">
                            ITC 2020
                          </a>
                        </li>
                        <li className="mt-2">
                          <a href="" className="hover:text-purple-500 text-xl">
                            ITC 2019
                          </a>
                        </li>
                        <li className="mt-2">
                          <a href="" className="hover:text-purple-500 text-xl">
                            ITC 2018
                          </a>
                        </li>
                        <li className="mt-2">
                          <a href="" className="hover:text-purple-500 text-xl">
                            ITC 2017
                          </a>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div
        style={{ width: "100vw", height: "0.8px", backgroundColor: "white" }}
        className="mt-32 md:mt-16 lg:mt-6"
      ></div>
      <Footer />
    </>
  );
}

export default App;
