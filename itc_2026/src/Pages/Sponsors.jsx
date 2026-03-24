import Header from "./Components/Header";
import { Link } from "react-router-dom";

const sponsorsData = [
  {
    tier: "Silicon Sponsor",
    color: "#6aaff1",
    borderColor: "border-[#6aaff1]",
    shadowColor: "shadow-[#6aaff1]/20",
    hoverShadow: "hover:shadow-[#6aaff1]/40",
    sponsors: [
      {
        name: "Caliber Interconnect",
        image: "/public/caliber.png",
        url: "https://caliberinterconnect.com/",
        className: "h-16 md:h-24 bg-white p-2",
      },
    ],
  },
  {
    tier: "Platinum Sponsor",
    color: "#E5E4E2",
    borderColor: "border-[#E5E4E2]",
    shadowColor: "shadow-[#E5E4E2]/20",
    hoverShadow: "hover:shadow-[#E5E4E2]/40",
    sponsors: [
      {
        name: "Siemens",
        image: "/siemens_logo_white.png",
        url: "https://www.siemens.com/",
        className: "h-16 md:h-20",
      },
    ],
  },
  {
    tier: "Gold Sponsors",
    color: "#FFD700",
    borderColor: "border-[#FFD700]",
    shadowColor: "shadow-[#FFD700]/20",
    hoverShadow: "hover:shadow-[#FFD700]/40",
    sponsors: [
      {
        name: "Qualcomm",
        image: "/qualcomm.png",
        url: "https://www.qualcomm.com/",
      },
      {
        name: "Cadence",
        image: "/public/cadence.png",
        url: "https://www.cadence.com/",
        classname:"w-15 h-15"
      },
      {
        name: "Synopsys",
        image: "/synopsys.png",
        url: "https://www.synopsys.com/",
      },
      {
        name: "Teradyne",
        image: "/teradyne.png",
        url: "https://www.teradyne.com/",
      },
    ],
  },
  {
    tier: "Silver Sponsor",
    color: "#C0C0C0",
    borderColor: "border-[#C0C0C0]",
    shadowColor: "shadow-[#C0C0C0]/20",
    hoverShadow: "hover:shadow-[#C0C0C0]/40",
    sponsors: [
      {
        name: "Anora Labs",
        image: "/public/anora.jpeg",
        url: "https://www.anoralabs.com/",
      },
    ],
  },
  {
    tier: "Bronze Sponsors",
    color: "#CD7F32",
    borderColor: "border-[#CD7F32]",
    shadowColor: "shadow-[#CD7F32]/20",
    hoverShadow: "hover:shadow-[#CD7F32]/40",
    sponsors: [
      {
        name: "Marvell",
        image: "/marvell.png",
        url: "https://www.marvell.com/",
        className: "h-12 md:h-16",
      },
      {
        name: "Texas Instruments",
        image: "/texas.png",
        url: "https://www.ti.com/",
      },
    ],
  },
];

export default function Sponsors() {
  return (
    <>
      <div className="z-[1000]">
        <Header />
      </div>
      <main className="min-h-screen relative text-white selection:bg-white/20 pb-20">
        <div className="relative z-10 pt-[50px] md:pt-[100px] px-4 md:px-10 max-w-[1400px] mx-auto flex flex-col">
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-[56px] font-bold tracking-tight text-white mb-6"
              style={{ fontFamily: '"Poppins", arial' }}
            >
              OUR SPONSORS
            </h1>
            <div className="w-24 h-1 bg-[#6aaff1] mx-auto rounded-full mb-8"></div>
            <p
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: '"Poppins", arial' }}
            >
              We proudly acknowledge the support of our industry partners who
              help make ITC India 2026 a premier event for the semiconductor
              test community.
            </p>
          </div>

          {sponsorsData.map((tierData) => (
            <section key={tierData.tier} className="mb-24">
              <div className="flex items-center justify-center gap-4 mb-12">
                <div
                  className={`h-[1px] bg-gradient-to-r from-transparent to-[${tierData.color}] w-24 md:w-48`}
                  style={{
                    backgroundImage: `linear-gradient(to right, transparent, ${tierData.color})`,
                  }}
                ></div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-center tracking-wide uppercase px-4"
                  style={{
                    color: tierData.color,
                    fontFamily: '"Poppins", arial',
                  }}
                >
                  {tierData.tier}
                </h2>
                <div
                  className={`h-[1px] bg-gradient-to-l from-transparent to-[${tierData.color}] w-24 md:w-48`}
                  style={{
                    backgroundImage: `linear-gradient(to left, transparent, ${tierData.color})`,
                  }}
                ></div>
              </div>

              <div className="flex flex-wrap justify-center gap-8">
                {tierData.sponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className={`group relative w-full ${
                      tierData.tier.includes("Silicon")
                        ? "max-w-lg"
                        : "max-w-xs md:max-w-sm"
                    } bg-gray-900/80 rounded-xl overflow-hidden border border-gray-700 shadow-[0_0_20px_rgba(0,0,0,0.5)] ${
                      tierData.hoverShadow
                    } transition-all duration-500 transform hover:-translate-y-2`}
                  >
                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative p-8 flex flex-col items-center justify-center min-h-[200px] text-center">
                      <div className="transform group-hover:scale-110 transition-transform duration-500 flex items-center justify-center w-full h-full">
                        <img
                          src={sponsor.image}
                          alt={sponsor.name}
                          className={`${
                            sponsor.className || "h-16 md:h-20"
                          } object-contain max-w-full`}
                        />
                      </div>

                      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4">
                        <span className="text-[#6aaff1] font-semibold text-sm tracking-widest uppercase border-b-2 border-[#6aaff1]">
                          Visit Website
                        </span>
                      </div>
                    </div>

                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-20"
                      aria-label={`Visit ${sponsor.name}`}
                    ></a>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="mt-10 text-center bg-gradient-to-b from-white/5 to-white/[0.02] p-10 md:p-16 rounded-3xl border border-white/10 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#6aaff1] to-transparent opacity-50"></div>

            <h3
              className="text-2xl md:text-3xl font-bold mb-4 text-white"
              style={{ fontFamily: '"Poppins", arial' }}
            >
              Become a Sponsor
            </h3>
            <p
              className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
              style={{ fontFamily: '"Poppins", arial' }}
            >
              Join <strong>Caliber Interconnect</strong> and other industry
              leaders in shaping the future of semiconductor testing. Showcase
              your brand to a global audience of experts and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/CallForSponsors"
                className="inline-flex justify-center items-center bg-[#6aaff1] hover:bg-[#6aaff1]/90 text-[#03396c] font-bold text-lg px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                View Packages
              </Link>
              <a
                href="mailto:info@itctestweekindia.org"
                className="inline-flex justify-center items-center bg-transparent border-2 border-white/30 hover:border-white text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
