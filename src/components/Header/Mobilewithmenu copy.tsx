import React, { useState } from "react";
import Link from 'next/link';
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";

export default function NavMenu() {
    const [active, setActive] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const products = [
        { name: "Nitrogen Evaporator", href: "/products/nitrogen-evaporator" },
        { name: "Probe Sonicator", href: "/products/probe-sonicator" },
        { name: "LCMS Nitrogen Gas Generator", href: "/products/lcms-nitrogen-gas-generator" },
    ];

    const columnCount = 4;
    const itemsPerColumn = Math.ceil(products.length / columnCount);
    const columns = [];
    for (let i = 0; i < columnCount; i++) {
        columns.push(products.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
    }

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


                        
                        <div className="absolute top-full left-0 mt-2 p-4 bg-white dark:bg-black shadow-lg grid grid-cols-4 gap-x-8 gap-y-4 z-50 w-[750px]">
                           {columns.map((columnItems, colIndex) => (
                               <div key={colIndex} className="flex flex-col gap-y-2">
                                   {columnItems.map((item) => (
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

            <div className="flex items-center md:hidden bg-red-200">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-gray-800 dark:text-white focus:outline-none p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 md:hidden shadow-lg py-3 px-5 space-y-3 z-50 border-t border-gray-200 dark:border-gray-700">
                     <Link href={"/"} className="block py-2 text-gray-800 dark:text-white hover:text-[#ef8013]" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href={"/about"} className="block py-2 text-gray-800 dark:text-white hover:text-[#ef8013]" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Products"
                    >
                         <div className="mt-1 px-2 py-2 bg-gray-50 dark:bg-gray-850 rounded-md shadow-inner">
                             {products.map((item) => (
                                <HoveredLink key={item.href} href={item.href} className="block py-2 px-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md mb-1" onClick={() => { setActive(null); setIsMobileMenuOpen(false); }}>
                                    {item.name}
                                </HoveredLink>
                            ))}
                        </div>
                    </MenuItem>
                    <Link href={"/gallery"} className="block py-2 text-gray-800 dark:text-white hover:text-[#ef8013]" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
                    <Link href={"/credentials"} className="block py-2 text-gray-800 dark:text-white hover:text-[#ef8013]" onClick={() => setIsMobileMenuOpen(false)}>Credential</Link>
                    <Link href={"/contact"} className="block py-2 text-gray-800 dark:text-white hover:text-[#ef8013]" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}