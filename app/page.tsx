import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="bg-[#080808] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      {/* <ScrollToTop /> */}
    </main>
  );
}