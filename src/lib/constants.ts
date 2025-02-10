import { Wrench, Lightbulb, Droplets } from "lucide-react";

export const services = [
  {
    title: "MEP Design & Installation",
    description: "Full-spectrum mechanical, electrical, and plumbing solutions",
    icon: Wrench,
  },
  {
    title: "Energy Efficiency",
    description: "Sustainable systems reducing operational costs",
    icon: Lightbulb,
  },
  {
    title: "Water Management",
    description: "Smart plumbing solutions for resource optimization",
    icon: Droplets,
  },
];

export const expertise = [
  { title: "Projects Completed", value: "250+" },
  { title: "Expert Engineers", value: "50+" },
  { title: "Years Experience", value: "15" },
];

export const projects = [
  {
    title: "Green Tower Complex",
    description:
      "Full MEP implementation for LEED Platinum certified commercial tower",
    tags: ["HVAC", "Electrical", "Plumbing"],
    image: "/images/projects/project-1.jpg",
  },
  {
    title: "Hospital Modernization",
    description: "Critical systems upgrade for 500-bed tertiary care facility",
    tags: ["Fire Safety", "Medical Gas", "BMS"],
    image: "/images/projects/project-2.jpg",
  },
  {
    title: "Data Center Campus",
    description: "Mission-critical cooling and power systems for hyperscale DC",
    tags: ["Cooling", "Power Backup", "SCADA"],
    image: "/images/projects/project-3.jpg",
  },
];
