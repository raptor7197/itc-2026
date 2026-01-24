import CommCard from "./Components/CommCard";
import * as mem from "./Components/Members";
import Header from "./Components/Header";
import { MagicCard } from "../components/magicui/magic-card";

function createCard(mem) {
  return (
    <a href={mem.link} target="_blank" rel="noopener noreferrer" className="block">
      <MagicCard
        key={mem.id}
        className="bg-gray-950 shadow-2xl shadow-blue-800 flex-col items-center justify-center w-[16rem] h-[22rem] text-4xl"
        gradientColor={"#1c3659"}
      >
        <CommCard
          img={mem.img}
          name={mem.name}
          company={mem.comp}
        />
      </MagicCard>
    </a>
  );
}

export default function Committee() {
  return (
    <div style={{ fontFamily: '"Poppins", arial' }}>
      <div className="z-[1000]">
        <Header />
      </div>
      <div className="text-white flex flex-row mt-24 mb-16 justify-center text-5xl md:text-6xl lg:text-7xl font-bold ">
        Committee
      </div>

      <div className="mb-12">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          General Chairs
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.default.map(createCard)}
        </div>
      </div>

      <div className="mb-12">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          Technical Program Co-Chairs (TPC)
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.members2.map(createCard)}
        </div>
      </div>

      <div className="mb-12">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          Tutorial Co-Chairs
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.members3.map(createCard)}
        </div>
      </div>

      <div className="mb-12">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          Industry Test Challenges Co-Chairs
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.members4.map(createCard)}
        </div>
      </div>

      <div className="mb-12">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          Industry Sessions Co-Chairs
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.members5.map(createCard)}
        </div>
      </div>

      <div className="mb-12">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          Academia-Research Track Co-Chairs (ART)
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.members6.map(createCard)}
        </div>
      </div>

      <div className="mb-12">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          Panel Co-Chair
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.members7.map(createCard)}
        </div>
      </div>

      {/* <div className="mb-12">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          Poster Co-Chair
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.members17.map(createCard)}
        </div>
      </div> */}

      <div className="mb-12">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          Publication Co-Chair
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.members8.map(createCard)}
        </div>
      </div>

      <div className="mb-12">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          Fellowship Co-Chairs
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.members9.map(createCard)}
        </div>
      </div>

      <div className="mb-12">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          Finance Chair
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.members10.map(createCard)}
        </div>
      </div>

      <div className="mb-12">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          Communication/Website Co-Chairs
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.members11.map(createCard)}
        </div>
      </div>

      <div className="mb-12">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          Registration Chair
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.members12.map(createCard)}
        </div>
      </div>

      <div className="mb-12">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          Marketing and Conference Management Co-Chairs
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.members13.map(createCard)}
        </div>
      </div>

      {/* <div className="mb-12">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          New Volunteers
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.members14.map(createCard)}
        </div>
      </div>*/}

      {/* <div className="mb-12">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          TPC Advisory Committee
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.members15.map(createCard)}
        </div>
      </div>*/}

      {/* <div className="mb-16">
        <div className="text-blue-500 flex flex-row justify-center text-center text-2xl md:text-3xl font-semibold mt-12 mb-8">
          Advisory Committee
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {mem.members16.map(createCard)}
          {mem.members17.map(createCard)}
          {mem.members18.map(createCard)}
          {mem.members19.map(createCard)}
          {mem.members20.map(createCard)}
        </div>
      </div>*/}
    </div>
  );
}
