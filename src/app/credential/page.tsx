import React from 'react'
import PageTitle from '@/components/Title/PageTitle'
import { FaHome } from "react-icons/fa";

import Image from "next/image";

const certificates = [
  {
    link: "/images/certificates/certificate1.png",
    title: "Quality Assurance",
    image: "/images/certificates/certificate1.png",
  },
  {
    link: "/images/certificates/certificate2.jpg",
    title: "Quality Assurance",
    image: "/images/certificates/certificate2.jpg",
  },
  {
    link: "/images/certificates/Athena_Technology_CE.pdf",
    title: "CE Certificate",
    image: "/images/certificates/certificate3.jpg",
  },
  {
    link: "/images/certificates/UdyamRegistrationCertificate.pdf",
    title: "Udaym Registration",
    image: "/images/certificates/certificate4.jpg",
  },
  {
    link: "/images/certificates/NEW_GST_CERTIFICATE.pdf",
    title: "GST Certificate",
    image: "/images/certificates/certificate5.jpg",
  },
];

export default function page() {
  return (
    <div>
      <div>
        <PageTitle
          title="Credential"
          backgroundImage="/images/certificatebanner.jpg"
        >
          <FaHome className="inline mr-2" />
          Home <span className="mx-2">/</span> Credential
        </PageTitle>
      </div>
      <div className="max-w-[1200px] mx-auto bg-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 justify-evenly">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md p-4 hover:shadow-xl transition my-[20px] mx-[30px] px-[20px] rounded-[6px] shadow-[0px_2px_10px_0px_rgba(43,52,59,0.2)]"
              >
                <div className="text-center font-semibold text-gray-700 text-base  pt-[20px] px-[15px] pb-[10px]">{cert.title}</div>
                <div className="border border-[#808080] p-[10px]">
                  <a href={cert.link}>
                    <Image
                      className="object-cover transition-[box-shadow] duration-[500ms] ease hover:[box-shadow:0_0_0_10px_#f08b25]"
                      src={cert.image}
                      alt={cert.title}
                      width={270}
                      height={380}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

