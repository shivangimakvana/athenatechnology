"use client";
import Image from 'next/image';

const aboutCards = [
    {
        img: "images/image-removebg-preview.png",
        title: "Nature of Business",
        link: "about.html#nature",
    },
    {
        img: "images/emp.png",
        title: "Total Number of Employees",
        link: "about.html#nature",
    },
    {
        img: "images/employee.png",
        title: "Year of Establishment",
        link: "about.html#nature",
    },
];

export default function AboutSection() {
    return (
        <section className="bg-[#0b2c45] mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex lg:flex-row gap-8">
                    <div className="flex items-end bg-[#fff] rounded z-[1]">
                        <Image src="/images/col-bgimage.jpg" alt="Product 1"
                            width={700}
                            height={630}
                            className="-mr-[95px] object-contain" />
                    </div>
                    <div className="flex items-end bg-[#0b2c45] h-[700px]">
                        <div className="max-w-[800px] flex-1 bg-[#0b2c45] text-white pt-[80px] pl-[140px] rounded relative">
                            <div className=''>
                                <h2 className="text-3xl font-bold mb-4 text-[#fff]">Athena Technology</h2>
                                <p className="text-sm leading-relaxed text-[#7a8a9e]">
                                    Established in the year 2010, Athena Technology, an ISO 9001:2008 Certified Company is a reputed manufacturer, exporter and trader of high quality scientific instruments and laboratory equipments. Our unparalleled array of products includes Nitrogen Evaporator, Nitrogen Gas Generator and Hydrogen Gas Generator.Under the brand name Athena, our products are known for their high efficiency, unmatched reliability, high durability, proven performance. Our instruments finds application in Research Labs,Colleges, Schools and various industries like Life sciences,Chemical, Petrochemical, Semiconductor, Pharmaceutical and Environmental. Moreover, we export our products to European Countries, Middle East, South East Asia, Africa and USA. In the future we hope to keep on contribution towards building a more affluent human society by providing the customers with innovation products, best quality and perfect Installation Services.
                                    <span className="text-sm text-gray-300">Read More...</span>
                                </p>
                                <div className="pl-[30px] pr-[30px] pt-[15px] pb-[15px] bg-[#fff]">
                                    <div className="flex -mr-[15px] -ml-[15px]">
                                        {aboutCards.map((card, idx) => (
                                            <div key={idx} className="relative w-full lg:w-1/3 pr-[15px] pl-[15px]">
                                                <div className="bg-[#1D4783] p-[20px] pt-[25px] pb-[15px] rounded-[6px] relative my-[15px] text-center">
                                                    <div className="featured-icon padding_top1">
                                                        <div className="mb-0 h-auto w-auto leading-[1]">
                                                            <a href={card.link}>
                                                                <img src={card.img} alt="" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="featured-content pt-[15px]">
                                                        <div className="featured-title">
                                                            <a className="no-underline" href={card.link}>
                                                                <h3 className="text-[#fff]">{card.title}</h3>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}