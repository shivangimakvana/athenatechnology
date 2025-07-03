import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const logos = [
  "aarti_drugs.jpg","ab-sciex.jpg","accutest.jpg","actimus-bio.jpg","adani.jpg", "aizent.jpg",
  "ajanta-pharma.jpg","ajilent-technology.jpg", "alembic.jpg","alkem.jpg","barc.jpg","bsi.jpg","csir.jpg",
];

const logoTestimonials = logos.map((logo, idx) => ({
  quote: "",
  name: (
    <img
      src={`/images/client/${logo}`}
      alt={logo.replace(/\.jpg|\.png|\.jpeg/, "")}
      className="h-16 w-auto object-contain mx-auto"
      loading="lazy"
      key={idx}
    />
  ),
  title: "",
}));

export function OurReputedCustomer() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl font-bold text-[#223645] text-center mb-8">
          Our Reputed Customer
        </h2>
        <InfiniteMovingCards
          items={logoTestimonials}
          direction="left"
          speed="slow"
          className="py-[72px]"
        />
      </div>
    </section>
  );
}