export default function GallerySection() {
  const galleryItems = [
    {
      img: "/images/gallary/img1.jpg",
      title: "HighVolume Nitrogen Evaporator",
      link: "nitrogen_evaporator.html#high_volume",
    },
    {
      img: "/images/gallary/img2.jpg",
      title: "Water Bath Evaporator",
      link: "nitrogen_evaporator.html#Water_Bath_Evaporator",
    },
    {
      img: "/images/gallary/img3.jpg",
      title: "Ultrasonic Probe Sonicator",
      link: "probe_sonicator.html#Ultrasonic_Probe_Sonicator",
    },
    {
      img: "/images/gallary/img4.jpg",
      title: "Two Stage Pressure Regulator",
      link: "cylinder_regulators_high_pressure.html#Two_Stage_Pressure_Regulator",
    },
    {
      img: "/images/gallary/img5.jpg",
      title: "100 Sample Nitrogen Concentrator",
      link: "turbovap_evaporator.html#100_Sample_Nitrogen_Concentrator",
    },
    {
      img: "/images/gallary/img6.jpg",
      title: "GC FID Hydrogen Gas Generator",
      link: "hydrogen_gas_generator.html#GC_FID_Hydrogen_Gas_Generator",
    },
  ];

  return (
    <section className="py-[75px]">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Our Gallery</h2>
      </div>
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-wrap gap-8 justify-center">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative flex group overflow-hidden shadow-md w-[370px] h-[270px]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {/* Content above overlay */}
              <div className="absolute inset-0 bg-[#223645]/80 opacity-0 w-[370px] h-[270px] group-hover:opacity-100 flex flex-col  items-center z-10">
                <h3 className="text-[#fff] text-2xl font-bold text-center px-2 mb-4">
                  {item.title}
                </h3>
                <div className="flex gap-4">
                  <a
                    href={item.img}
                    className="text-[#fff] text-xl hover:text-gray-300 bg-[#223645] rounded-full p-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-search">icon</i>
                  </a>
                  <a
                    href={item.link}
                    className="text-[#fff] text-xl hover:text-gray-300 bg-[#223645] rounded-full p-3"
                  >
                    <i className="fa fa-expand">icon</i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center'>
          <div className="relative flex items-center justify-center gap-4">
            <div className="md:block h-[1px] w-[30%] bg-[#e4e4e4] transition-all duration-300"></div>

            <a href="gallery.html" className="no-underline relative z-10 mx-[20px]">
              <span className="inline-flex items-center justify-center h-[40px] w-[40px] border border-black rounded-full text-black text-xl font-bold hover:bg-gray-100 transition-all">
                +
              </span>
            </a>

            <div className="md:block h-[1px] w-[30%] bg-[#e4e4e4] transition-all duration-300"></div>
          </div>
          <span>View More</span>
        </div>
      </div>
    </section>
  );
}







