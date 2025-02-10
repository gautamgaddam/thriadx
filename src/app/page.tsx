import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ExpertiseSection } from "@/components/sections/expertise";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
