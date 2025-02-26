"use client";
import { useState, useEffect } from "react";
import SunLoaders from "@/components/ui/loader";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ExpertiseSection } from "@/components/sections/expertise";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <main className="relative overflow-hidden">
      <SunLoaders />
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
