import React from 'react'

import FirstSection from '@/components/About/firstSection'
import SecondSection from '@/components/About/secondSection'
import ThirdSection from '@/components/About/thredSection'
import AccordionSection from '@/components/About/accordionSection'
import BeliefSection from '@/components/About/beliefSection'
import CompanyFactsheet from '@/components/About/CompanyFactsheet'
import PageTitle from '@/components/Title/PageTitle'

import { FaHome } from "react-icons/fa";

function page() {
  return (
    <div>
      <PageTitle
        title="About"
        backgroundImage="/images/aboutbanner.jpg"
      >
        <FaHome className="inline mr-2" />
        Home <span className="mx-2">/</span> About
      </PageTitle>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <AccordionSection />
      <BeliefSection />
      <CompanyFactsheet />
    </div>
  )
}

export default page
