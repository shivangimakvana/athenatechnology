'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const teamTabs = [
  {
    label: 'Technical experts',
    image: '/images/services/services-02.jpg',
  },
  {
    label: 'Inspection & quality control staff',
    image: '/images/services/services-01.jpg',
  },
  {
    label: 'Sales & marketing professionals',
    image: '/images/services/services-03.jpg',
  },
  {
    label: 'Administration personnel',
    image: '/images/services/services-04.jpg',
  },
  {
    label: 'Procurement experts',
    image: '/images/services/services-05.jpg',
  },
  {
    label: 'Warehousing experts',
    image: '/images/services/services-06.jpg',
  },
];

export default function OurTeamSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-[#ef8013] text-[17px] leading-[15px] mb-[10px] uppercase font-semibold text-sm mb-2">Our Team</h3>
          <h2 className="text-4xl font-bold text-gray-900 m-[0px]">Athena Technology</h2>
          <p className="text-[#7a8a9e] max-w-2xl mx-auto">
            The organization has witnessed tremendous growth in the recent years, mainly due
            to the contribution and hard work of its workforce.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-row max-w-full">
          <div className="flex max-w-2/3 items-center justify-center">
            <div className="rounded shadow">
              <Image
                src={teamTabs[activeTab].image}
                alt={teamTabs[activeTab].label}
                width={750}
                height={480}
                className="max-w-full h-auto"
              />
            </div>
          </div>
          <div className="max-w-1/3">
            <ul className="space-y-4 w-full">
              {teamTabs.map((tab, idx) => (
                <li
                  key={idx}
                  className={`list-none relative p-5 rounded shadow-md border border-[#eeeeee] cursor-pointer transition hover:shadow-lg rounded-[6px] shadow-[0_0_10px_0_rgba(43,52,59,0.09)]   mb-[13px]
                  ${activeTab === idx
                      ? 'border-l-[#ef8013] border-l-4 bg-orange-50 after:content-[""] after:absolute after:bg-[#e6e6e6] after:top-0 after:left-0 after:w-full after:h-[5px] after:mt-[-5px]'
                      : 'bg-white'
                    }`}
                  onClick={() => setActiveTab(idx)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 px-[10px]">{tab.label}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}