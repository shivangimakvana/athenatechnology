import React from 'react'
import PageTitle from '@/components/Title/PageTitle'
import { FaHome, FaSearch, FaExpand } from "react-icons/fa";
import Image from "next/image";

const products = [
  {
    title: "HighVolume Nitrogen Evaporator",
    image: "/images/gallary/img1.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img2.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img3.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img4.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img5.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img6.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img7.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img8.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img9.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img10.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img11.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img12.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img13.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img14.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img15.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img16.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img17.jpg",
  },
  {
    title: "Nitrogen Gas Generator",
    image: "/images/gallary/img18.jpg",
  },
];

export default function page() {
  return (
    <div>
      <PageTitle
        title="Gallery"
        backgroundImage="/images/product-title-bg.jpg"
      >
        <FaHome className="inline mr-2" />
        Home <span className="mx-2">/</span> Gallery
      </PageTitle>

      <div className="max-w-[1200px] mx-auto flex flex-wrap sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 justify-evenly">
        {products.map((product, idx) => (
          <div key={idx} className="relative group rounded-lg overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={300}
              className="h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#2d5363]/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-72">
              <h2 className="text-2xl font-bold text-white mb-4 text-center drop-shadow">{product.title}</h2>
              <div className="flex gap-4">
                <button className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-white bg-transparent hover:bg-white/20 transition">
                  <FaSearch size={22} />
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-white bg-transparent hover:bg-white/20 transition">
                  <FaExpand size={22} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}