import Slider from '@/components/Home/slider';
import Welcome from '@/components/Home/welcome';
import AboutSection from "@/components/Home/AboutSection";
import ProductTabs from '@/components/Home/ProductSection';
import ProductVideos from '@/components/Home/ProductVideos';
import ContactSection from '@/components/Home/ContactSection';
import { OurReputedCustomer } from '@/components/Home/OurReputedCustomer';
import ReviewSection from '@/components/Home/ReviewSection';
import OurTeam from '@/components/Home/OurTeam';
import GallerySection from '@/components/Home/OurGallery';
import Counter from '@/components/Home/Counter';
import Test from '@/components/Home/test';

export default function HomePage() {
  return (
    <main>
      {/* <Test /> */}
      <div className="site-main">
        <Slider />
        <Welcome />
        <AboutSection />
        <ProductTabs />
        <ProductVideos />
        <ContactSection />
        <GallerySection />
        <Counter />
        <OurTeam />
        <ReviewSection />
        <OurReputedCustomer />
      </div>
    </main>
  );
}




