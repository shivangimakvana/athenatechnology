
export default function ContactSection() {
  return (
    <section className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col md:flex-row justify-between relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('/images/row-bgimage.jpg')`,}}>
      <div className="container md:w-1/2 z-10 py-[72px] text-[#fff]">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Contact To Athena Technology
        </h2>
        <p className="text-lg mb-2">
          UNIT NO. 140/141/142, LODHA BOULEVARD MALL, LODHA PARADISE, MAJIWADA,
        </p>
        <p className="text-lg mb-6">
          THANE (W) 400 601. INDIA
        </p>
        <button className="bg-[#1D4783] hover:bg-[#223645] font-semibold px-[30px] py-[14px] rounded border-[1px] border-[#ef8013] hover:border-[#223645]">
          READ MORE
        </button>
      </div>

    </section>
  );
}
