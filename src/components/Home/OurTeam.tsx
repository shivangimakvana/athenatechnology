import Image from 'next/image';

export default function OurTeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-orange-600 uppercase font-semibold text-sm mb-2">Our Team</h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Athena Technology</h2>
          <p className="text-gray-600 max-w-2xl">
            The organization has witnessed tremendous growth in the recent years, mainly due
            to the contribution and hard work of its workforce.
          </p>
        </div>

        <div className="flex lg:flex-row gap-8">
          {/* Left Images */}
          <div className="flex gap-4 w-full lg:w-2/3">
            <div className="overflow-hidden rounded shadow">
              <Image
                src="/images/services/services-01.jpg"
                alt="Team Workspace 1"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded shadow">
              <Image
                src="/images/services/services-02.jpg"
                alt="Team Workspace 2"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Tabs */}
          <ul className="lg:w-1/3 space-y-4">
            {[
              'Technical experts',
              'Inspection & quality control staff',
              'Sales & marketing professionals',
              'Administration personnel',
              'Procurement experts',
              'Warehousing experts'
            ].map((role, index) => (
              <li
                key={index}
                className={`p-5 rounded shadow-md border cursor-pointer transition hover:shadow-lg ${
                  index === 2 ? 'border-orange-500 border-l-4 bg-orange-50' : 'bg-white'
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-800">{role}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
