import React from 'react';
import 'animate.css';
import { FiMail } from 'react-icons/fi';

const cards = [
  {
    stroke: "#ef8013",
    title: "Our Belief",
    desc: "Our belief is ‘To be credible in the market, we must be truthful’ So we work with utmost sincerity and truthfulness.",
  },
  {
    stroke: "#1D4783",
    title: "Our Goals",
    desc: "Our goal is to satisfy our client base with our products.",
  },
  {
    stroke: "#ff6f00",
    title: "Our Team",
    desc: "The organization has witnessed tremendous growth in the recent years, mainly due to the contribution and hard work of its workforce.",
  },
  {
    stroke: "#223645",
    title: "Our Infrastructure",
    desc: "We are facilitated with a sophisticated research and development wing backed by a diligent team of R & D experts.",
  },
];

export default function Welcome() {
  return (
    <section className="md:py-20 py-[72px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-center text-[#223645] text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-4">
            Welcome To Athena Technology
          </h2>
          <p className="text-[#7a8a9e] text-center text-sm sm:text-base leading-relaxed max-w-4xl mx-auto">
            About Company Nature of Business Exporter and Manufacturer Year of Establishment 2010.
            The production, exporting&nbsp;and distribution of supplies and accessories for Gas
            Chromatography (GC), HPLC, AAS, ICP, FTIR, GCMS, LC-MS, DSC, TGA, and GC are Athena
            Technology's specialties. We are a major supplier and exporter of PIR (Pre Installation
            Requirement) for GC, HPLC,AAS, ICP, TOC, GC-MS, LC-MS, FT-IR, DSC, and TGA as well as
            equally successful in the spares and consumables sector.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#fff] m-[15px] rounded-md animate__animated animate__slower animate__zoomIn hover:border-b-4 hover:border-[#ff6f00] transition-shadow duration-300 group relative flex flex-col items-center min-w-[260px] max-w-[320px] flex-1 drop-shadow-[0_0_20px_rgba(0,0,0,0.099)]"
            >
              <div className="w-full absolute top-[-15px] left-0 right-0 h-[50px] bg-[#fff] rounded-[19px] border-t-4 border-t-transparent transition-all duration-400 rotate-[-5deg] group-hover:rotate-[5deg] group-hover:border-t-[#ff6f00] z-0" />
              <div className="relative h-[67px] w-[67px] bg-[#1D4783] rounded-full flex flex-col items-center justify-center z-10 mt-2 mb-2">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center justify-center w-10 h-10 rounded-full hover:scale-110 transition"
                >
                  <FiMail
                    size={24}
                    style={{
                      stroke: card.stroke,
                      strokeWidth: 1.5,
                    }}
                  />
                </a>
              </div>
              <h3 className="text-[#223645] font-bold text-xl mb-2">{card.title}</h3>
              <p className="text-[#7a8a9e] text-center px-2 mb-4">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <div className="relative flex items-center justify-center gap-4">
            <div className="md:block h-[1px] w-[30%] bg-[#e4e4e4] transition-all duration-300"></div>
            <a href="about.html#our" className="no-underline relative z-10 mx-[20px]">
              <span className="inline-flex items-center justify-center h-[40px] w-[40px] border border-black rounded-full text-black text-xl font-bold hover:bg-gray-100 transition-all">
                +
              </span>
            </a>
            <div className="md:block h-[1px] w-[30%] bg-[#e4e4e4] transition-all duration-300"></div>
          </div>
          <span className="uppercase">Explore More</span>
        </div>
      </div>
    </section>
  );
}