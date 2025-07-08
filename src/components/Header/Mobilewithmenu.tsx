import React, { useState } from "react";
import Link from 'next/link';
import { MenuItem, HoveredLink } from "@/components/ui/navbar-menu";

export default function NavMenu() {
    const [active, setActive] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // 4 columns, each array is a column
    const products = [
        [
            { name: "Nitrogen Evaporator", href: "/products/nitrogen-evaporator" },
            { name: "Probe Sonicator", href: "/products/probe-sonicator" },
            { name: "TurboVap Evaporator", href: "/products/turbovap-evaporator" },
            { name: "Ultrasonic Cleaner", href: "/products/ultrasonic-cleaner" },
            { name: "HPLC Pump", href: "/products/hplc-pump" },
            { name: "Kbr Die Set", href: "/products/kbr-die-set" },
            { name: "Polymer Press", href: "/products/polymer-press" },
            { name: "Fume Hood", href: "/products/fume-hood" },
            { name: "Nitrogen Gas Plant", href: "/products/nitrogen-gas-plant" },
            { name: "Nitrogen Generator", href: "/products/nitrogen-generator" },
        ],
        [
            { name: "Sterility Test Apparatus", href: "/products/sterility-test-apparatus" },
            { name: "Sonicator with Chiller", href: "/products/sonicator-with-chiller" },
            { name: "Gas Purification And Control Panel", href: "/products/gas-purification-control-panel" },
            { name: "Gas Chromatography", href: "/products/gas-chromatography" },
            { name: "Cylinder Regulators High Pressure", href: "/products/cylinder-regulators-high-pressure" },
            { name: "Ultrasonic Extractor Reactor", href: "/products/ultrasonic-extractor-reactor" },
            { name: "Crimper Decrimper", href: "/products/crimper-decrimper" },
            { name: "Stomacher Blender", href: "/products/stomacher-blender" },
            { name: "Shakers Incubators Vortexes Stirrer", href: "/products/shakers-incubators-vortexes-stirrer" },
        ],
        [
            { name: "Hydrogen Generator", href: "/products/hydrogen-generator" },
            { name: "Laboratory Instruments", href: "/products/laboratory-instruments" },
            { name: "Gas Manifold System", href: "/products/gas-manifold-system" },
            { name: "SPE Positive Pressure Manifold", href: "/products/spe-positive-pressure-manifold" },
            { name: "REID VAPOUR PRESSURE/SAMPLING CYLINDERS", href: "/products/reid-vapour-pressure-sampling-cylinders" },
            { name: "Hydrogen Gas Generator", href: "/products/hydrogen-gas-generator" },
            { name: "3 in 1 Combination Gas Generator", href: "/products/3-in-1-combination-gas-generator" },
            { name: "Solvent Filtration", href: "/products/solvent-filtration" },
            { name: "Zero Air Gas Generator", href: "/products/zero-air-gas-generator" },
        ],
        [
            { name: "FTIR-IR XRF Accessories", href: "/products/ftir-ir-xrf-accessories" },
            { name: "Nitrogen Gas Generator", href: "/products/nitrogen-gas-generator" },
            { name: "Digital Bomb Calorimeter", href: "/products/digital-bomb-calorimeter" },
            { name: "Two Stage Cylinder Regulator", href: "/products/two-stage-cylinder-regulator" },
            { name: "Vacuum Pump Oil Free", href: "/products/vacuum-pump-oil-free" },
            { name: "Gas Sampling Bomb", href: "/products/gas-sampling-bomb" },
            { name: "SPE Vacuum Manifold", href: "/products/spe-vacuum-manifold" },
            { name: "Hydrogen Plant", href: "/products/hydrogen-plant" },
            { name: "Digital Rotary viscometers", href: "/products/digital-rotary-viscometers" },
            { name: "LCMS Nitrogen Gas Generator", href: "/products/lcms-nitrogen-gas-generator" },
        ],
    ];

    const baseLinkClass = "py-[8px] px-[12px] text-[#223645] no-underline uppercase tracking-wide hover:text-[#ef8013] transition-colors duration-200";
    const hoverLinkClass = "block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200 text-sm";

    return (
        <nav className="relative w-full flex justify-between items-center py-4 px-4 bg-white dark:bg-gray-900 shadow-sm z-10">
            <div className="flex items-center">
                <div className="flex md:hidden md:space-x-6 items-center bg-green-200">
                    <Link href={"/"} className={baseLinkClass}>Home</Link>
                    <Link href={"/about"} className={baseLinkClass}>About</Link>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Products"
                    >
                        {/* Desktop Mega Menu */}
                        <div className="w-max max-w-full left-1/2 -translate-x-1/2 absolute top-full mt-2 py-[20px] bg-[#fff] dark:bg-black shadow-lg grid grid-cols-4 gap-x-8 gap-y-4 z-50 border border-gray-200"
                            style={{ minWidth: "900px" }}>
                            {products.map((column, colIndex) => (
                                <div key={colIndex} className="flex flex-col gap-y-2 px-[15px]">
                                    {column.map((item) => (
                                        <HoveredLink key={item.href} href={item.href} className={hoverLinkClass} onClick={() => setActive(null)}>
                                            {item.name}
                                        </HoveredLink>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </MenuItem>
                    <Link href={"/gallery"} className={baseLinkClass}>Gallery</Link>
                    <Link href={"/credential"} className={baseLinkClass}>Credential</Link>
                    <Link href={"/contact"} className={baseLinkClass}>Contact</Link>
                </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex items-center md:hidden bg-red-200">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-gray-800 dark:text-white focus:outline-none p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-[#fff] dark:bg-gray-800 md:hidden shadow-lg space-y-3 z-50 border-t border-gray-200 dark:border-gray-700 py-[40px]">
                    <Link href={"/"} className="block py-2 text-gray-800 dark:text-white hover:text-[#ef8013] text-[#223645]" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href={"/about"} className="block py-2 text-gray-800 dark:text-white hover:text-[#ef8013] text-[#223645]" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Products"
                    >
                        {/* Mobile: All products in a single column */}
                        <div className="mt-1 px-2 py-2 bg-gray-50 dark:bg-gray-850 rounded-md shadow-inner">
                            {products.flat().map((item) => (
                                <HoveredLink key={item.href} href={item.href} className="block py-2 px-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md mb-1" onClick={() => { setActive(null); setIsMobileMenuOpen(false); }}>
                                    {item.name}
                                </HoveredLink>
                            ))}
                        </div>
                    </MenuItem>
                    <Link href={"/gallery"} className="block py-2 text-gray-800 dark:text-white hover:text-[#ef8013] text-[#223645]" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
                    <Link href={"/credential"} className="block py-2 text-gray-800 dark:text-white hover:text-[#ef8013] text-[#223645]" onClick={() => setIsMobileMenuOpen(false)}>Credential</Link>
                    <Link href={"/contact"} className="block py-2 text-gray-800 dark:text-white hover:text-[#ef8013] text-[#223645]" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}