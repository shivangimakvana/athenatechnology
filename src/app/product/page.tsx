import React from 'react'
import PageTitle from '@/components/Title/PageTitle'
import { FaHome } from "react-icons/fa";

function page() {
  return (
    <div>
      
      <PageTitle
        title="Products"
        backgroundImage="/images/product-title-bg.jpg"
      >
        <FaHome className="inline mr-2" />
        Home <span className="mx-2">/</span> Products
      </PageTitle>
    </div>
  )
}

export default page
