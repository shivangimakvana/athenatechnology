import React from "react";
import Image from "next/image";

const factsheetSections = [
  {
    title: "Basic Information",
    rows: [
      { label: "Nature of Business", value: "Exporter and Manufacturer" },
      { label: "Additional Business", value: <>Exporter<br />Service Provider<br />Supplier</> },
      { label: "Company CEO", value: "Sachin Salunke" },
      { label: "Registered Address", value: "Unit No. 140/141/142, Lodha Boulevard Mall, Lodha Paradise, Majiwada, Thane (W) 400 601. INDIA" },
      { label: "Total Number of Employees", value: "26 to 50 People" },
      { label: "Year of Establishment", value: "2010" },
      { label: "Legal Status of Firm", value: "Individual - Proprietor" },
      { label: "Annual Turnover", value: "Rs. 10 - 25 Crore" },
      { label: "Top Export Countries", value: <>Libya<br />Malaysia<br />Romania<br />Tanzania<br />South Sudan</> },
    ],
  },
  {
    title: "Trade & Market",
    rows: [
      { label: "Export Percentage", value: "20-40%" },
    ],
  },
  {
    title: "Statutory Profile",
    rows: [
      { label: "Import Export Code (IEC)", value: "03140*****" },
      { label: "Tan No.", value: "PNES4*****" },
      { label: "Banker", value: "" },
      { label: "GST No.", value: "27CPHPS7469R1ZJ" },
    ],
  },
];

export default function CompanyFactsheet() {
  return (
    <section className="py-[72px] bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex md:flex-row items-center md:items-start gap-8 mb-8">
          <div className="w-1/3 flex">
            <Image
              src="/images/CompanyFactsheet.png"
              alt="Exporter Badge"
              width={120}
              height={120}
              className="w-28 h-28 object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-[#223645] mb-4">Company Factsheet</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-2">
            <tbody>
              {factsheetSections.map((section, sIdx) => (
                <React.Fragment key={sIdx}>
                  <tr>
                    <th
                      colSpan={2}
                      className="text-left text-lg font-bold text-[#223645] border-b border-[#dbe3e6] pb-2 pt-6 bg-white"
                    >
                      {section.title}
                    </th>
                  </tr>
                  {section.rows.map((fact, idx) => (
                    <tr key={idx} className="align-top">
                      <td className="py-3 pr-4 text-[#223645] text-base font-medium border-b border-[#dbe3e6] w-1/3 min-w-[180px]">
                        {fact.label}
                      </td>
                      <td className="py-3 text-[#223645] text-base border-b border-[#dbe3e6]">
                        {fact.value}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}