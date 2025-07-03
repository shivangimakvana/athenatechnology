'use client';

const milestones = [
    {
        year: '2010',
        icon: '<i className="flaticon-investment"></i>',
        title: 'ATHENA (An ISO 9001 : 2008 Certified Company) is obligated to…',
        desc: 'supply its customers with products that meet agreed requirements for Quality, Price, Quantity, Delivery and Schedule.',
    },
    {
        year: '2015',
        icon: '<i className="flaticon-investment"></i>',
        title: 'Quality products, technical support and guaranteed performance define value…',
        desc: 'at ATHENA.',
    },
    {
        year: '2020',
        icon: '<i className="flaticon-investment"></i>',
        title: 'ATHENA is dedicated to innovation in supplying new products for end users…',
        desc: 'and OEMs.',
    },
    {
        year: '2022',
        icon: '<i className="flaticon-investment"></i>',
        title: 'we understand your applications, and can help you get the best results from…',
        desc: 'our products.',
    },
];

export default function secondSection() {
    return (
        <section className="bg-[#eef7f8] py-[72px]">
            <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-2">
                <div className="text-[#ef8013] font-bold uppercase tracking-wider">Growth</div>
                <h2 className="text-4xl font-bold text-[#223645] mb-6">Milestones</h2>
            </div>
            <div className="relative max-w-6xl mx-auto px-2">
                <div className="hidden md:block absolute left-0 right-0 top-1/2 h-4 z-0">
                    <div className="w-full h-4 bg-[#1d4783] rounded-l-full rounded-r-full flex">
                        <div className="relative">
                            <div className="absolute right-0 top-0 h-4 w-4 bg-[#223645] rotate-45 translate-x-1/2"></div>
                        </div>
                        <div className="relative">
                            <div className="absolute right-0 top-0 h-4 w-4 bg-[#223645] rotate-45 translate-x-1/2"></div>
                        </div>
                        <div className="relative">
                            <div className="absolute right-0 top-0 h-4 w-4 bg-[#223645] rotate-45 translate-x-1/2"></div>
                        </div>
                        <div className="flex-1"></div>
                    </div>
                </div>
                <div className="flex md:flex-row md:justify-between md:items-center relative z-10">
                    {milestones.map((m, i) => (
                        <div key={i} className="mb-16 md:mb-0">
                            <div className="bg-[#1d4783] rounded-full w-24 h-24 flex items-center justify-center shadow-lg z-10">
                                {m.icon}
                            </div>
                            <div className="md:hidden w-1 h-8 bg-[#1d4783]"></div>
                            <p className="mt-4 text-2xl font-bold text-[#223645]">{m.year}</p>
                            <div className="mt-2 text-center text-[#7a8a9e] text-lg max-w-xs mx-auto font-medium">
                                {m.title}
                                <p className="mt-1 text-base font-normal">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    );
}