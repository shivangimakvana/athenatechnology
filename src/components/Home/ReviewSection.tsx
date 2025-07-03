"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
     {
        name: "KINTALI MANOHOR PRASAD",
        location: "Rayagada, Odisha",
        date: "05-December-22",
        rating: 5,
        avatar: "k",
        review: [""],
    },
    {
        name: "B. Srikanth Ragunath",
        location: "Thanjavur, Tamil Nadu",
        date: "06-October-22",
        rating: 5,
        avatar: "B",
        review: ["response"],
    },
    {
        name: "Ketan Prajapati",
        location: "Surat, Gujarat",
        date: "06-October-22",
        rating: 4,
        avatar: "K",
        review: ["response", "Quality"],
    },
    {
        name: "Majid Al Maharbi",
        location: "",
        date: "06-October-21",
        rating: 5,
        avatar: "M",
        review: ["response", "Quality", "Delivery"],
    },
];

export default function ReviewSection() {
    return (
        <section className="py-12">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-4xl font-bold text-[#223645] text-center mb-2">
                    Reviews &amp; Rating
                </h2>
                <div className="text-center text-lg text-[#7a8a9e] mb-8">
                    Most Relevant Reviews
                </div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-8"
                >
                    {reviews.map((r, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="pt-[30px] pr-[32px] pb-[30px] pl-[33px] mt-[27px] mb-[30px] relative bg-[#fff] drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
                                {/* Quotation Mark */}
                                <div className="absolute  bg-[#1D4783] text-[18px] font-normal top-[-20px] right-[35px] w-[45px] h-[45px] leading-[48px] text-[#fff] rounded-full text-center">
                                    <span>&rdquo;</span>
                                </div>
                                {/* Stars */}
                                <div className="flex gap-1 mb-2 text-[#ffb400]">
                                    {Array.from({ length: r.rating }).map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                {/* Name and Details */}
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-[#223645]">
                                        {r.avatar}
                                    </div>
                                    <div>
                                        <div className="font-bold italic text-lg text-[#223645]">{r.name}</div>
                                        <div className="text-gray-500 italic text-sm">{r.location}</div>
                                        <div className="text-gray-400 text-xs">{r.date}</div>
                                    </div>
                                </div>
                                {/* Review Tags */}
                                <div className="flex flex-wrap gap-4 mt-2">
                                    {r.review.map((tag, i) => (
                                        <span key={i} className="flex items-center text-[#6c7a89] text-lg">
                                            <i className="fa fa-thumbs-up mr-1 text-[#6c7a89]" />{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <span
                                className="absolute left-10 -bottom-5 w-0 h-0 border-l-[18px] border-r-[18px] border-b-[18px] border-l-transparent border-r-transparent border-b-[#fff] z-0 rotate-180 mt-[-30px] ml-[15px]"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}