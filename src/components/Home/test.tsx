"use client";

import { useState } from "react";

const products = [
  {
    label: "Hydrogen Gas Generator For GC",
    image: "/images/For_GC.jpg",
    description: `We provide a premium selection of Hydrogen Gas Generators for GC. These are carefully constructed using top-quality materials and advanced technology. Each unit is assessed against strict quality standards.`,
    info: [
      "Item Code: Hydrogen",
      "Pay Mode Terms: L/C, T/T, D/P, D/A, Other",
      "Port of Dispatch: Mumbai",
      "Production Capacity: 50 months",
      "Delivery Time: 2 weeks",
      "Packaging Details: Wooden box"
    ]
  },
  {
    label: "Nitrogen Evaporator",
    image: "/images/nitrogenevaporator.jpg",
    description: `AT-EV-50 Nitrogen Concentrator with 2-year warranty. Designed for precise evaporation with features like LCD display, gas station, thermal safety and full microprocessor control.`,
    info: [
      "Item Code: turbovap",
      "Pay Mode Terms: L/C, T/T, D/P, D/A, Other",
      "Port of Dispatch: Mumbai",
      "Production Capacity: 50 months",
      "Delivery Time: 1 week",
      "Packaging Details: Wooden Box Packing"
    ]
  },
  {
    label: "Nitrogen Gas Generator",
    image: "/images/product-nitrogen-gas.png",
    description: `Our Nitrogen Gas Generators are ideal for analytical instruments, made with premium components for durability, low maintenance, and high performance.`,
    info: [
      "Item Code: Athena Generator",
      "Pay Mode Terms: L/C, T/T",
      "Port of Dispatch: Mumbai",
      "Production Capacity: 20 months",
      "Delivery Time: 1-2 weeks",
      "Packaging Details: Wooden box"
    ]
  },
  {
    label: "Probe Sonicator",
    image: "/images/product-sonicator.png",
    description: `Probe Sonicators are ideal for disrupting cells, fragmenting DNA, and dispersing nanoparticles. Compact, precise, and used in biotech and nanotech applications.`,
    info: [
      "Item Code: ATP250",
      "Pay Mode Terms: L/C, T/T, D/P, D/A, Other",
      "Port of Dispatch: Mumbai",
      "Production Capacity: 25 months",
      "Delivery Time: 1-2 weeks",
      "Packaging Details: Standard Packing"
    ]
  },
  {
    label: "PSA Nitrogen Plant",
    image: "/images/product-psa.jpg",
    description: `Nitrogen gas solutions for food packaging. Safely removes oxygen to preserve freshness. Athena’s Nitrogen Generators offer reliability and cost-effectiveness.`,
    info: [
      "Item Code: ATNP",
      "Production Capacity: 20",
      "Delivery Time: 3-4 weeks"
    ]
  },
  {
    label: "Positive Pressure Manifold",
    image: "/images/product-ppm.jpg",
    description: `Athena’s 96-well Positive Pressure Manifolds ensure consistent flow for sample prep, ideal for both low and high viscosity liquids.`,
    info: [
      "Item Code: SPE 48 144 96",
      "Minimum Order Quantity: 1 Piece",
      "Pay Mode Terms: L/C, T/T",
      "Port of Dispatch: Mumbai",
      "Production Capacity: 10",
      "Delivery Time: 1-2 weeks",
      "Packaging Details: Wooden Box Packing"
    ]
  }
];

export default function ProductTabs() {
  const [active, setActive] = useState(0);
  const product = products[active];
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-wrap">
        <h2 className="text-3xl font-bold text-[#223645] mb-2">Our Products</h2>
        <p className="text-[#6c7a89] border-l border-[#6c7a89] pl-4 ml-4 text-lg">
          Athena Technology provides a huge selection of high-quality scientific equipment and lab supplies at affordable prices, together withindividualised customer service.
        </p>
      </div>
      <div>{products.map((p, idx) => (
        <button
          key={p.label}
          onClick={() => setActive(idx)}
          className={`relative p-[20px] border m-[5px] transition-colors
                ${active === idx
              ? "bg-[#1d4783] text-[#fff] shadow-lg border-2 border-[#ef8013]"
              : "border-[#f0f0f0] text-[#223645] hover:bg-[#1d4783] hover:text-[#fff]"}
              `}
          style={{
            zIndex: active === idx ? 10 : 1,
          }}
        >
          {p.label}
          {active === idx && (
            <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#ef8013] mt-[35px]" />
          )}
        </button>
      ))}</div>
      <div className='flex flex-wrap justify-center p-4 bg-gray-100'>
        <div className="w-full max-w-[500px]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#223645]">{product.label}</h2>
          <p className="w-full break-words whitespace-normal text-[#6c7a89]">
            {product.description}
          </p>
          <ul className="space-y-2 text-[#6c7a89] text-sm md:text-base">
            {product.info.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="bg-[#ef8013] text-[#fff] rounded-full mr-[5px] mb-[5px]  text-[10px] px-[4px] py-[2px]">➔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#ebf5f5] p-[15px] pb-[30px]">
          <img
            src={product.image}
            alt={product.label}
            className="w-[500px]"
          />
        </div>
      </div>
      <div className='text-center'>
        <div className="relative flex items-center justify-center gap-4">
          <div className="md:block h-[1px] w-[30%] bg-[#e4e4e4] transition-all duration-300"></div>
          <a href="product.html" className="no-underline relative z-10 mx-[20px]">
            <span className="inline-flex items-center justify-center h-[40px] w-[40px] border border-black rounded-full text-black text-xl font-bold hover:bg-gray-100 transition-all">
              +
            </span>
          </a>
          <div className="md:block h-[1px] w-[30%] bg-[#e4e4e4] transition-all duration-300"></div>
        </div>
        <span className="uppercase">View all products</span>
      </div>
    </div>
  );
}
