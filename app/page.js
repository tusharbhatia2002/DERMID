import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/Testimonials';

export default function Home() {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <TestimonialsSection />
    <Footer />
    </div>
  );
};
