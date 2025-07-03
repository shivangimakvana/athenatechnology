
import React, { useState } from "react";

import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";
import Link from 'next/link';

export default function NavMenu() {
    const [active, setActive] = useState<string | null>(null);

    return (
        <Menu setActive={setActive}>
            <Link href={"/"} className="p-[5px] no-underline text-[#223645] uppercase flex items-center hover:text-[#ef8013]">
                Home
            </Link>
            <Link href={"/"} className="p-[5px] no-underline text-[#223645] uppercase flex items-center hover:text-[#ef8013]">
                About
            </Link>
            <Link href={"/"} className="p-[5px] no-underline text-[#223645] uppercase flex items-center hover:text-[#ef8013]">
                <MenuItem setActive={setActive} active={active} item="Product">
                    <div className="row my-4">
                        <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <div className="list-group list-group-flush">
                            <HoveredLink  href="nitrogen_evaporator.html" className="list-group-item list-group-item-action">Nitrogen Evaporator </HoveredLink>
                            <HoveredLink  href="probe_sonicator.html" className="list-group-item list-group-item-action">Probe Sonicator </HoveredLink>
                            <HoveredLink  href="turbovap_evaporator.html" className="list-group-item list-group-item-action">TurboVap Evaporator </HoveredLink>
                            <HoveredLink  href="ultrasonic-cleaner.html" className="list-group-item list-group-item-action">Ultrasonic Cleaner </HoveredLink>
                            <HoveredLink  href="hplc-pump.html" className="list-group-item list-group-item-action">HPLC Pump </HoveredLink>
                            <HoveredLink  href="kbr-die-set.html" className="list-group-item list-group-item-action">Kbr Die Set </HoveredLink>
                            <HoveredLink  href="polymer-press.html" className="list-group-item list-group-item-action">Polymer Press </HoveredLink>
                            <HoveredLink  href="fume-hood.html" className="list-group-item list-group-item-action">Fume Hood </HoveredLink>
                            <HoveredLink  href="nitrogen-gas-generator.html" className="list-group-item list-group-item-action">Nitrogen Gas Plant </HoveredLink>
                            <HoveredLink  href="nitrogen-generator.html" className="list-group-item list-group-item-action">Nitrogen Generator </HoveredLink>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <div className="list-group list-group-flush">
                            <HoveredLink  href="sterility-test-apparatus.html" className="list-group-item list-group-item-action">Sterility Test Apparatus </HoveredLink>
                            <HoveredLink  href="sonicator_with_chiller.html" className="list-group-item list-group-item-action">Sonicator with Chiller </HoveredLink>
                            <HoveredLink  href="gas-purification-and-control-panel.html" className="list-group-item list-group-item-action">Gas Purification And Control Panel </HoveredLink>
                            <HoveredLink  href="gas-chromatography.html" className="list-group-item list-group-item-action">Gas Chromatography </HoveredLink>
                            <HoveredLink  href="cylinder_regulators_high_pressure.html" className="list-group-item list-group-item-action">Cylinder Regulators High Pressure </HoveredLink>
                            <HoveredLink  href="ultrasonic-extractor-reactor.html" className="list-group-item list-group-item-action">Ultrasonic Extractor Reactor </HoveredLink>
                            <HoveredLink  href="crimper-decrimper.html" className="list-group-item list-group-item-action">Crimper Decrimper </HoveredLink>
                            <HoveredLink  href="stomacher-blender.html" className="list-group-item list-group-item-action">Stomacher Blender </HoveredLink>
                            <HoveredLink  href="shakers-incubators-vortexes-stirrer.html" className="list-group-item list-group-item-action">Shakers Incubators Vortexes Stirrer </HoveredLink>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3 mb-md-0">
                        <div className="list-group list-group-flush">
                            <HoveredLink  href="hydrogen-generator.html" className="list-group-item list-group-item-action">Hydrogen Generator </HoveredLink>
                            <HoveredLink  href="laboratory-instruments.html" className="list-group-item list-group-item-action">Laboratory Instruments </HoveredLink>
                            <HoveredLink  href="gas-manifold-system.html" className="list-group-item list-group-item-action">Gas Manifold System </HoveredLink>
                            <HoveredLink  href="spe-positive-pressure-manifold.html" className="list-group-item list-group-item-action">SPE Positive Pressure Manifold </HoveredLink>
                            <HoveredLink  href="rvp-reid-vapour-pressure-sampling-cylinders.html" className="list-group-item list-group-item-action">REID VAPOUR PRESSURESAMPLING CYLINDERS  </HoveredLink>
                            <HoveredLink  href="hydrogen_gas_generator.html" className="list-group-item list-group-item-action">Hydrogen Gas Generator </HoveredLink>
                            <HoveredLink  href="3-in-1-combination-gas-generator.html" className="list-group-item list-group-item-action">3 in 1 Combination Gas Generator </HoveredLink>
                            <HoveredLink  href="solvent-filtration.html" className="list-group-item list-group-item-action">Solvent Filtration </HoveredLink>
                            <HoveredLink  href="zero-air-gas-generator.html" className="list-group-item list-group-item-action">Zero Air Gas Generator </HoveredLink>

                        </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                        <div className="list-group list-group-flush">
                            <HoveredLink  href="ftir-ir-xrf-accessories.html" className="list-group-item list-group-item-action">FTIR-IR XRF Accessories </HoveredLink>
                            <HoveredLink  href="nitrogen-gas-generator.html" className="list-group-item list-group-item-action">Nitrogen Gas Generator </HoveredLink>
                            <HoveredLink  href="digital-bomb-calorimterer.html" className="list-group-item list-group-item-action">Digital Bomb Calorimterer </HoveredLink>
                            <HoveredLink  href="two-stage-cylinder-regulator.html" className="list-group-item list-group-item-action">Two Stage Cylinder Regulator </HoveredLink>
                            <HoveredLink  href="vacuum-pump-oil-free.html" className="list-group-item list-group-item-action">Vacuum Pump Oil Free </HoveredLink>
                            <HoveredLink  href="gas-sampling-bomb.html" className="list-group-item list-group-item-action">Gas Sampling Bomb </HoveredLink>
                            <HoveredLink  href="spe-vacuum-manifold.html" className="list-group-item list-group-item-action">SPE Vacuum Manifold </HoveredLink>
                            <HoveredLink  href="hydrogen-plant.html" className="list-group-item list-group-item-action">Hydrogen Plant </HoveredLink>
                            <HoveredLink  href="digital-rotary-viscometers.html" className="list-group-item list-group-item-action">Digital Rotary viscometers </HoveredLink>
                            <HoveredLink  href="lcms-nitrogen-gas-generator.html" className="list-group-item list-group-item-action">LCMS Nitrogen Gas Generator </HoveredLink>
                        
                        </div>
                        </div>
                    </div>
                </MenuItem>
            </Link>
            <Link href={"/"} className="p-[5px] no-underline text-[#223645] uppercase flex items-center hover:text-[#ef8013]">
                Gallery
            </Link>
            <Link href={"/"} className="p-[5px] no-underline text-[#223645] uppercase flex items-center hover:text-[#ef8013]">
                Credential
            </Link>
            <Link href={"/"} className="p-[5px] no-underline text-[#223645] uppercase flex items-center hover:text-[#ef8013]">
                Contact
            </Link>
        </Menu>
    )
}
