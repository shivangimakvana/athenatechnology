'use client';

import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer
      className="bg-[#223645] pt-10 text-[#fff]" 
      style={{ backgroundImage: "url('/images/footer-bg.jpg')" }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-wrap gap-8 justify-between">
        {/* Contact Us */}
        <div className="flex-1 min-w-[220px] max-w-xs mb-8">
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <div className="text-[#FFFFFFD9] text-sm leading-relaxed">
            <p>
              Unit No. 140/141/142, Lodha <br />
              Bouleward Mall, Lodha Paradise, <br />
              Majiwada, Thane (W) 400 601. <br />
              INDIA
            </p>
            <div className="mt-2 font-semibold">EMAIL</div>
            <div>
              milan@athenatechnology.co.in <br />
              technology.athena@gmail.com <br />
              info@athenatechnology.co.in
            </div>
            <div className="mt-[2px] font-semibold">CONTACT NO</div>
            <div>
              97690 47445 / 88799 02481 <br />
              98214 88400 / 88795 53181 <br />
              81693 92733
            </div>
          </div>
        </div>

        {/* Quick Links & Working Hours */}
        <div className="flex-1 min-w-[180px] max-w-xs mb-8">
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm list-none">
            <li>
              <a className="text-[#FFFFFFD9] hover:underline" href="index">
                Home
              </a>
            </li>
            <li>
              <a className="text-[#FFFFFFD9] hover:underline" href="about">
                About
              </a>
            </li>
            <li>
              <a className="text-[#FFFFFFD9] hover:underline" href="product">
                Product
              </a>
            </li>
            <li>
              <a className="text-[#FFFFFFD9] hover:underline" href="gallery">
                Gallery
              </a>
            </li>
            <li>
              <a className="text-[#FFFFFFD9] hover:underline" href="contact">
                Contact
              </a>
            </li>
          </ul>
          <h3 className="font-bold text-lg mt-6 mb-2">Working Hours</h3>
          <div className="text-sm">
            10 am to 7pm <br />
            Monday to Saturday <br />
            <b>Sunday off</b>
          </div>
        </div>

        {/* Product Links */}
        <div className="flex-1 min-w-[180px] max-w-xs mb-8">
          <h3 className="font-bold text-lg mb-2">Product Links</h3>
          <ul className="space-y-1 text-sm list-none">
            <li>
              <a className="text-[#FFFFFFD9] hover:underline" href="nitrogen_evaporator">
                Nitrogen Evaporator
              </a>
            </li>
            <li>
              <a className="text-[#FFFFFFD9] hover:underline" href="probe_sonicator">
                Probe Sonicator
              </a>
            </li>
            <li>
              <a className="text-[#FFFFFFD9] hover:underline" href="cylinder_regulators_high_pressure">
                Cylinder Regulators High Pressure
              </a>
            </li>
            <li>
              <a className="text-[#FFFFFFD9] hover:underline" href="turbovap_evaporator">
                TurboVap Evaporator
              </a>
            </li>
            <li>
              <a className="text-[#FFFFFFD9] hover:underline" href="hydrogen_gas_generator">
                Hydrogen Gas Generator
              </a>
            </li>
          </ul>
          <a href="product" className="block mt-4">
            <Button className="bg-[#223645] font-semibold px-[30px] py-[14px] rounded border-[3px] border-[#fff] hover:text-[#ef8013]">
              VIEW MORE
            </Button>
          </a>
        </div>

        {/* Location */}
        <div className="flex-1 min-w-[220px] max-w-xs mb-8">
          <h3 className="font-bold text-lg mb-2">Location</h3>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15070.474570359278!2d72.985283!3d19.211852000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e2aa9b5ba1884c6!2sAthena%20Technology!5e0!3m2!1sen!2sus!4v1674198900446!5m2!1sen!2sus"
              width="250"
              height="220"
              className="border-0 w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Athena Technology Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 mt-8 py-4">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between text-center gap-4">
          <div className="text-sm">
            © Athena Technology | Design and promoted by&nbsp;
            <a
              className="text-[#FFFFFFD9] underline hover:text-[#ef8013]"
              href="https://www.itology.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Itology
            </a>
          </div>
          <ul className="flex gap-4 justify-center list-none">
            <li>
              <a className="text-[#FFFFFFD9] hover:text-[#ef8013]" href="#" aria-label="facebook">
                <i className="ti ti-facebook"></i>
              </a>
            </li>
            <li>
              <a className="text-[#FFFFFFD9] hover:text-[#ef8013]" href="#" aria-label="linkedin">
                <i className="ti ti-linkedin"></i>
              </a>
            </li>
            <li>
              <a className="text-[#FFFFFFD9] hover:text-[#ef8013]" href="#" aria-label="youtube">
                <i className="ti ti-youtube"></i>
              </a>
            </li>
            <li>
              <a className="text-[#FFFFFFD9] hover:text-[#ef8013]" href="#" aria-label="twitter">
                <i className="ti ti-twitter-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}