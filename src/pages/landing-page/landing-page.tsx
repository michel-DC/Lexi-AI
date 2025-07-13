import HeroSection from "@/components/landing-page/hero-section";
import FeaturesSection from "@/components/landing-page/features-section";
import HowItWorksSection from "@/components/landing-page/how-it-works-section";
import PricingSection from "@/components/landing-page/pricing-section";
import TestimonialsSection from "@/components/landing-page/testimonials-section";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import FAQSection from "@/components/landing-page/faq-section";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
