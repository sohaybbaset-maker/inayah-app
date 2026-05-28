import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import Trust from "@/components/sections/Trust";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Trust />
        <Pricing />
      </main>
      <Footer />
      <StickyCtaBar />
    </>
  );
}
