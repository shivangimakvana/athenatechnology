'use client';

import NavMenu from "./NavMenu";
import MobilewithMenu from "@/components/Header/Mobilewithmenu";
import React from "react";

export default function Header() {
    return (
        <header className="sticky top-0 z-[1000] bg-gray-800 text-white p-4">
            <div className="bg-[#223645] h-[50px]">
                <div className="max-w-[1200px] mx-auto flex items-center justify-between h-full px-4">
                    <div className="flex border-r border-l border-[rgba(255,255,255,0.08)]">
                        <i className="ti ti-email" />
                        <a
                            className="no-underline text-[#fff] p-[12px] text-sm hover:underline"
                            href="mailto:info@athenatechnology.co.in"
                        >
                            info@athenatechnology.co.in
                        </a>
                    </div>
                    <ul className="flex list-none border-r border-l border-[rgba(255,255,255,0.08)]">
                        <li>
                            <a href="#!" aria-label="Facebook">
                                <img src="/images/facebook.png" alt="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#!" aria-label="Twitter">
                                <img src="/images/tweeter.png" alt="twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#!" aria-label="YouTube">
                                <img src="/images/youtube.png" alt="youtube" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sticky top-0 z-[1000] max-w-[1200px] mx-auto  bg-white shadow w-full">
                <div className="flex justify-between items-center py-4">
                    <a href="/" title="Athena Technology" rel="home">
                        <img src="/images/logo.png" alt="Athena Technology Logo" className="h-12" />
                    </a>
                    {/* <NavMenu /> */}
                    <MobilewithMenu />
                </div>
            </div>
        </header>
    );
}