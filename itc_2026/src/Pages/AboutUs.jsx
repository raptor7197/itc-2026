import Header from "./Components/Header";

function AboutUs() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-16">
        {/* If a specific banner image exists, it can be added here similar to other pages */}
        <div
          className="text-white mt-10 lg:text-5xl md:text-4xl text-3xl text-center font-bold"
          style={{ fontFamily: '"Poppins", arial' }}
        >
          ABOUT ITC INDIA
        </div>
      </div>

      <div className="flex justify-center">
        <div
          className="mt-10 mx-8 p-6 rounded-xl border-4 border-blue-500 max-w-[90vw] bg-black/30 backdrop-blur-sm"
          style={{ fontFamily: '"Poppins", arial' }}
        >
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-blue-400 text-2xl font-bold mb-4 ml-4 md:ml-10">
                Global Premier Venue
              </h3>
              <p className="text-justify text-white text-xl mx-4 md:mx-10 leading-relaxed">
                International Test Conference (ITC) is the world’s premier venue
                dedicated to the electronic test of devices, boards, and
                systems. It covers the complete cycle from design verification,
                design-for-test, design-for-manufacturing, silicon debug,
                manufacturing test, system test, diagnosis, reliability, and
                failure analysis, back to process and design improvement.
              </p>
            </div>

            <div>
              <h3 className="text-blue-400 text-2xl font-bold mb-4 ml-4 md:ml-10">
                ITC India Mission
              </h3>
              <p className="text-justify text-white text-xl mx-4 md:mx-10 leading-relaxed">
                At ITC India, design, test, and yield professionals can confront
                challenges faced by the industry and learn how these challenges
                are being addressed by the combined efforts of academia, design
                tool and equipment suppliers, designers, and test engineers. It
                serves as a vital platform for the semiconductor community in
                the region and globally to exchange ideas and foster innovation.
              </p>
            </div>

            <div>
              <h3 className="text-blue-400 text-2xl font-bold mb-4 ml-4 md:ml-10">
                Conference Scope
              </h3>
              <p className="text-justify text-white text-xl mx-4 md:mx-10 leading-relaxed">
                The conference focuses on the latest advancements in test
                technology, including AI/ML in testing, automotive reliability,
                hardware security, and emerging memory technologies. It brings
                together experts to discuss the practical and theoretical
                aspects of VLSI testing, ensuring the quality and reliability of
                future electronic systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-16 mb-20">
        <div
          className="text-blue-500 text-3xl md:text-4xl font-bold text-center mb-10"
          style={{ fontFamily: '"Poppins", arial' }}
        >
          Our History
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-8 max-w-[80vw]">
            {[
              "2017",
              "2018",
              "2019",
              "2020",
              "2021",
              "2022",
              "2023",
              "2024",
              "2025",
            ].map((year) => (
              <div
                key={year}
                className="bg-gray-900 border-2 border-blue-500 rounded-lg p-4 text-center text-white font-bold hover:bg-blue-600 hover:border-white transition-all duration-300 cursor-default"
              >
                ITC India {year}
              </div>
            ))}
          </div>
        </div>*/}
        {/* <p className="text-center text-gray-400 mt-8 mx-10">
          Celebrating our 10th Edition in 2026
        </p>
      </div>*/}
    </>
  );
}

export default AboutUs;
