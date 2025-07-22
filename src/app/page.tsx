import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { FeaturedCases } from '@/components/FeaturedCases';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { ScrollToHashOnLoad } from '@/components/ScrollToHashOnLoad';

export default function HomePage() {
  return (
    <div className="scroll-snap-container">
      <ScrollToHashOnLoad />
      <Hero />
      <Services />
      <FeaturedCases />
      <Process />
      <Testimonials />
      <CTA />
    </div>
  );
}
