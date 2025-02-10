"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
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

export const ProjectsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing our technical excellence in complex building systems
            implementation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
