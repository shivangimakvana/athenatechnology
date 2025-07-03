import Image from "next/image";

export default function ThredSection() {
    return (
        <section className="py-[72px] bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="text-center mb-8">
                    <div className="text-[#ef8013] font-bold uppercase tracking-wider mb-1">Certificate</div>
                    <h2 className="text-5xl font-bold text-[#223645] mb-2">Quality Assurance</h2>
                </div>
                <div className="bg-[#eef7f8] rounded-lg px-4 py-8">
                    <div className="flex lg:flex-row">
                        <div className="mx-[30px] bg-[#fff] px-[40px] lg:w-1/2 min-w-0 flexmb-8 lg:mb-0 animate__animated animate__slower	3s animate__fadeInLeft">
                            <a href="/images/team-member/certificate1.jpg" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/images/certificate.jpg"
                                    alt="Certificate"
                                    width={350}
                                    height={480}
                                    className="rounded shadow-lg object-contain"
                                />
                            </a>
                        </div>
                        <div className="w-full lg:w-1/2 min-w-0 rounded p-6 text-[#7a8a9e] text-lg animate__animated animate__slower	3s animate__fadeInRight">
                            <p className="mb-4 w-full break-words whitespace-normal text-[#6c7a89]">
                                Quality has always been one of the major concerns in our company since inception. We offer our range of products as per the ISO 9001:2008 standards. In addition, our products are manufactured as per industry set standards. Our team of procuring agents ensures that the raw material is procured from reliable vendors. Our in-house quality inspection department strictly tests & monitors the entire range at every level.
                            </p>
                            <div className="font-bold text-[#223645] mb-2">CE Certified</div>
                            <div className="font-bold text-[#223645] mb-2">ISO 9001:2008</div>
                            <div className="font-bold text-[#223645] mb-2">
                                Some of the parameters on which we test our range are mentioned below:
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Ease of operation</li>
                                <li>Durability</li>
                                <li>Accuracy</li>
                                <li>Finishing</li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-center mt-16'>
                        <div className="relative flex items-center justify-center gap-4">
                            <div className="md:block h-[1px] w-[30%] bg-[#e4e4e4] transition-all duration-300"></div>
                            <a href="product.html" className="no-underline relative z-10 mx-[20px]">
                                <span className="inline-flex items-center justify-center h-[40px] w-[40px] border border-black rounded-full text-black text-xl font-bold hover:bg-gray-100 transition-all">
                                    +
                                </span>
                            </a>
                            <div className="md:block h-[1px] w-[30%] bg-[#e4e4e4] transition-all duration-300"></div>
                        </div>
                        <span className="uppercase font-bold text-[#223645] mt-2 text-sm hover:text-[#ef8013] transition block">View more</span>
                    </div>
                </div>
            </div>
        </section>
    );
}