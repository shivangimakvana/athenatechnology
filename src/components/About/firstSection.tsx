import Image from 'next/image';

export default function FirstSection() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex lg:flex-row items-center justify-center gap-8 py-8">
                    {/* Image */}
                    <div className="w-full lg:w-1/2 min-w-0 flex justify-center mb-8 lg:mb-0">
                        <div className="border border-[#dee2e6] p-2 bg-white rounded shadow-lg">
                            <Image
                                src="/images/single-img.jpg"
                                alt="Athena Certificate"
                                width={500}
                                height={500}
                                className="rounded shadow-lg object-contain"
                            />
                        </div>
                    </div>
                    {/* Text */}
                    <div className="w-full lg:w-1/2 min-w-0 pl-0 lg:pl-8">
                        <h2 className="text-3xl font-bold mb-4 text-[#223645]">Athena Technology</h2>
                        <div className="text-[#7a8a9e] space-y-4">
                            <p className="break-words whitespace-normal">
                                Established in the year 2010, Athena Technology, an ISO 9001: 2008 Certified Company is a reputed manufacturer, exporter and trader of high quality scientific instruments and laboratory equipments. Our unparalleled array of products includes Nitrogen Evaporator, Nitrogen Gas Generator and Hydrogen Gas Generator. Under the brand name Athena, our products are known for their high efficiency, unmatched reliability, high durability, proven performance. Our instruments finds application in Research Labs, Colleges, Schools and various industries like Life sciences, Chemical, Petrochemical, Semiconductor, Pharmaceutical and Environmental. Moreover, we export our products to European Countries, Middle East, South East Asia, Africa and USA. In the future we hope to keep on contribution towards building a more affluent human society by providing the customers with innovation products, best quality and perfect Installation Services.
                            </p>
                            <p className="break-words whitespace-normal">
                                The infrastructure that we have set up for manufacturing our products is highly advanced and well equipped with modern technologies. The unit is segregated with several in-house departments like production, quality control, sales & marketing. All the high-tech machinery in our unit is handled by a team of skilled professionals. Their rich domain expertise and ability enable us to complete the exact requirements of our prestigious clients within the set time limit. Quality is of immense importance to our organization and hence, we ensure to develop our range of machinery as per the International Standards and Quality Norms. As per this policy, we use best quality raw material and innovative machines in the fabrication process approved by our quality experts.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <p className="break-words whitespace-normal text-[#7a8a9e]">
                        Under the able and efficient guidance of our mentor Mr. Milan Salunke, we have carved a niche for ourselves and have become one of the leading companies in the industry. His years of experience and strong business acumen have helped us in garnering a strong presence in the market.
                    </p>
                </div>
            </div>
        </section>
    );
}