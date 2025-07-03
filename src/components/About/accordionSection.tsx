import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const accordionData = [
    {
        value: "item-1",
        title: "Commitment To Quality:",
        content: [
            "ATHENA (An ISO 9001 : 2008 Certified Company) is obligated to supply its customers with products that meet agreed requirements for Quality, Price,Quantity, Delivery and Schedule",
        ],
    },
    {
        value: "item-2",
        title: "Genuine Value:",
        content: [
            "Quality products, technical support and guaranteed performance define value at ATHENA. Value is enhanced by competitive pricing, and measured by the growing satisfaction of customers, who trust ATHENA to supply their analytical needs",
        ],
    },
    {
        value: "item-3",
        title: "Technical Support:",
        content: [
            "At ATHENA, we understand your applications, and can help you get the best results from our products. You can feel confident knowing the products offered are selected for performance and quality.",
        ],
    },
    {
        value: "item-4",
        title: "Specialty Manufacturing:",
        content: [
            "ATHENA is dedicated to innovation in supplying new products for end users and OEMs. We can take the project from concept through design, to production and on-time shipment.",
        ],
    },
    {
        value: "item-5",
        title: "Product Development:",
        content: [
            "ATHENA works closely with instrument manufacturers and laboratories to design new custom-manufactured products. Our attentiveness to our customers results in chromatography accessories that set new levels of performance, quality and value.",
        ],
    },
     {
        value: "item-6",
        title: "Quick Delivery:",
        content: [
            "ATHENA stocks thousands of our most popular items for immediate shipment. We can also supply the hard-to-find items you need. Most orders are shipped within 24 hours of receipt, and rush service is available.",
        ],
    },
];

export default function AccordionSection() {
    return (
        <section className="bg-[#eef7f8] py-12">
          
            <div className="max-w-[1200px] mx-auto px-4 py-[20px]">
                  <div className="title-header">
                <h2 className="title">About Athena Technology</h2>
            </div>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue={accordionData[0].value}
                >
                    {accordionData.map((item) => (
                        <AccordionItem key={item.value} value={item.value}>
                            <AccordionTrigger className="px-[20px] py-[16px] bg-[#fff] hover:bg-[#223645] text-[#223645] hover:text-[#fff] font-semibold rounded-t border-none text-[20px] font-[Amiri] hover:no-underline">
                                {item.title}
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col bg-white px-5 py-4 text-[#223645] text-base rounded-b">
                                {item.content.map((text, idx) => (
                                    <p key={idx}>{text}</p>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}