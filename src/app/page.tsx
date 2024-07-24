import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="h-full mt-28">
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactSection />
    </main>
  );
}
