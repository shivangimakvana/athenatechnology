const beliefSections = [
  {
    icon: "✔️",
    title: "Our Belief",
    content: (
      <p>
        Our belief is ‘To be credible in the market, we must be truthful’ So we work with utmost sincerity and truthfulness.
      </p>
    ),
  },
  {
    icon: "✔️",
    title: "Our Goals",
    content: (
      <p>
        Our goal is to satisfy our client base with our products.
      </p>
    ),
  },
  {
    icon: "✔️",
    title: "Our Team",
    content: (
      <>
        <p className="mb-2">
          The organization has witnessed tremendous growth in the recent years, mainly due to the contribution and hard work of its workforce. We have a team of expert professionals which has years of experience in the industry. These professionals use their expertise and innovative approach to manufacture the best range of scientific instruments and laboratory equipments. We have strategically categorized our team according to the different work processes
        </p>
        <span className="font-bold text-[#223645]">Our team includes:</span>
        <ul className="list-disc pl-6 text-[#7a8a9e] text-lg mt-2">
          <li>Technical experts</li>
          <li>Procurement experts</li>
          <li>Inspection &amp; quality control staff</li>
          <li>Sales &amp; marketing professionals</li>
          <li>Warehousing experts</li>
          <li>Administration personnel</li>
        </ul>
      </>
    ),
  },
  {
    icon: "✔️",
    title: "Our Infrastructure",
    content: (
      <p>
        We are facilitated with a sophisticated research and development wing backed by a diligent team of R &amp; D experts. All their endeavors are directed towards development of products that are in conformation with ISO 9001:2008 standards. In order to provide quality range of products we undertake extensive research activities so as to cater to the client requirements. This not only helps us to keeping ourselves in line with the latest market trends and demand, but also enhances our market value. Our warehouse is built over a large area which helps us in safely storing our diverse range.In addition, our warehouse is regularly checked for moisture and dust.
      </p>
    ),
  },
  {
    icon: "✔️",
    title: "Our Services",
    content: (
      <ul className="list-disc pl-6 text-[#7a8a9e] text-lg mt-2">
        <li>Installation</li>
        <li>Repairing</li>
      </ul>
    ),
  },
  {
    icon: "✔️",
    title: "Major Market",
    content: (
      <p>
        We export our products in European Countries, Middle East, South East Asia, Africa and USA, Malaysia, Austria, Singapore, Philipines, Indonesia, Italy, Germany, Hungary, Slovakia, Russia, UK, France, Poland, Turkey, Greece, Egypt, Israel, UAE, Dubai, Saudi Arabia, Kenya, Uganda, S. Korea, Ethiopia,Canada, Guatemala, Mexico, Srilanka, Bangladesh, Nepal, Myanmar, Thailand, Iran, Iraq, Israel, Jordan, Kuwait, Oman.
      </p>
    ),
  },
];

export default function AboutBeliefSection() {
  return (
    <section className="py-16 mt-[50px]">
      <div className="max-w-[1200px] mx-auto px-4">
        {beliefSections.map((section, idx) => (
          <div className="mb-8" key={idx}>
            <h3 className="flex items-center font-bold text-[#223645] mb-2">
              <span className="mr-2">{section.icon}</span> {section.title}
            </h3>
            <div className="text-[#7a8a9e] text-lg">{section.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
}