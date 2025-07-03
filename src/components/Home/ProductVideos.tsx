'use client';
import React from 'react';
import 'animate.css';

const videoData = [
    {
        title: 'Water Bath Evaporator',
        link: 'nitrogen_evaporator.html#Water_Bath_Evaporator',
        thumbnail: 'images/video/video1.jpg',
        videoUrl: 'https://youtu.be/NKl8vMmWoLs',
    },
    {
        title: 'Ultrasonic Probe Sonicator',
        link: 'probe_sonicator.html#Ultrasonic_Probe_Sonicator',
        thumbnail: 'images/video/video2.jpg',
        videoUrl: 'https://youtu.be/IXl_Cg0-ESM',
    },
    {
        title: 'Ultrasonic Emulsions Probe Sonicator',
        link: 'probe_sonicator.html#Ultrasonic_Emulsions_Probe_Sonicator',
        thumbnail: 'images/video/video3.jpg',
        videoUrl: 'https://youtu.be/kC-dgLWunO8',
    },
];

export default function ProductVideos() {
    return (
        <section className="py-[72px] bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-lg font-medium text-gray-500"></h3>
                    <h2 className="text-4xl font-bold text-gray-800">Product Videos</h2>
                </div>
                <div className="flex -mx-4 justify-center">
                    {videoData.map((video, index) => (
                        <div
                            key={index}
                            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 animate__animated animate__slower animate__slideInRight"
                        >
                            <div className="px-[20px] py-0 shadow-[0_2px_10px_0_rgba(43,52,59,0.2)] my-[20px] mx-auto">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#223645] text-center mb-4">
                                        <a href={video.link} className="no-underline text-[#223645]">
                                            {video.title}
                                        </a>
                                    </h3>
                                </div>
                                <div className="relative group w-full mb-[-30px]">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-56 object-cover rounded-xl shadow-md"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-xl">
                                        <a
                                            href={video.videoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white bg-orange-500 rounded-full p-5 hover:bg-orange-600 transition"
                                        >
                                            <i className="fa fa-play text-2xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <a href="video.html">
                        <button
                            type="button"
                            className="px-[30px] py-[14px] bg-orange-500 text-white text-md font-semibold hover:bg-orange-600 transition"
                        >
                            Watch More Videos
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

