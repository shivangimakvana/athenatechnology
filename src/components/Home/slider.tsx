'use client';
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

export default function Slider() {
    const slides = [
        {
            title: "Athena Technology",
            subtitle: (
            <>
                <span className="text-orange-500">TurboVap</span>Evaporator
            </>
            ),
            description: "Nitrogen Gas Generator",
            note: "an ISO 9001: 2008 Certified Company",
            bgImage: "/images/atnbanner2.jpg",
        },
        {
            title: "Athena Technology",
            subtitle: (
            <>
                <span className="text-orange-500">Nitrogen</span>Evaporator
            </>
            ),
            description: "Solvent Filtration",
            note: "an ISO 9001: 2008 Certified Company",
            bgImage: "/images/atnbanner3.jpg",
        },
        {
            title: "Athena Technology",
            subtitle: (
                <>
                <span className="text-orange-500">Probe</span> Sonicator
                </>
            ),
            description: "Hydrogen Gas Generator",
            note: "an ISO 9001: 2008 Certified Company",
            bgImage: "/images/athenabanner4.jpg",
        },
    ];

  return (
    <Carousel
      plugins={[Autoplay({ delay: 4000 })]}
      className="w-full mx-auto my-8"
    >
        <CarouselContent>
            {slides.map((slide, idx) => (
                <CarouselItem key={idx}>
                    <div className="h-full justify-center flex flex-col md:flex-row w-full min-h-[500px] bg-white rounded-lg shadow-lg p-8 bg-center bg-cover" style={{
                        backgroundImage: `url('${slide.bgImage}')`,
                        }}>
                        <div className="container">
                            <div className="flex-1 flex flex-col items-start justify-center max-w-xl border-l-4 border-[#1D4783] pt-[10px] pr-0 pb-[10px] pl-[30px]">
                                <div className="mb-4">
                                    <h2 className="text-[70px] md:text-6xl font-bold text-[#223645] mt-[10px] mb-[10px] animate__animated animate__fadeInDown">
                                        {slide.title}
                                    </h2>
                                    <h3 className="text-[42px] leading-[48px] md:text-4xl font-['Amiri',serif] text-[#223645] mt-[10px] mb-[10px] animate__animated animate__fadeInDown">
                                        {slide.subtitle}
                                    </h3>
                                    <h3 className="text-[42px] leading-[48px] md:text-4xl font-['Amiri',serif] text-[#223645] mt-[10px] mb-[10px] animate__animated animate__fadeInDown">
                                        {slide.description}
                                    </h3>
                                    <p className="text-lg text-[#223645] mt-2 animate__animated animate__fadeInDown">{slide.note}</p>
                                </div>
                                <div className="flex gap-4 mt-[30px] animate__animated animate__fadeInUp">
                                    <Button className="bg-transparent text-[#223645] hover:bg-[#223645] font-semibold px-[30px] py-[14px] rounded border-[1px] border-[#223645] hover:border-[#223645] hover:text-[#fff] mr-[15px]">
                                        VIEW MORE
                                    </Button>
                                    <Button className="bg-[#223645] hover:bg-[#1D4783] font-bold px-[30px] py-[14px] rounded border-none hover:border-[1px]  hover:border-[#ef8013] mr-[15px]">
                                        ENQUIRY NOW
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  );
}
