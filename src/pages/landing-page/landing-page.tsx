import HeroSection from "@/components/landing-page/hero-section";
import FeaturesSection from "@/components/landing-page/features-section";
import HowItWorksSection from "@/components/landing-page/how-it-works-section";
import TestimonialsSection from "@/components/landing-page/testimonials-section";
import Footer from "@/components/layout/footer";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
