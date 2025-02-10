"use client";
import { motion } from "framer-motion";
import { expertise } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, Clock } from "lucide-react";

export const ExpertiseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering precision-engineered solutions with 15+ years of industry
            experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 rounded-xl bg-green-50/50"
            >
              <div className="text-5xl font-bold text-primary mb-2">
                {item.value}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-2 gap-8 px-20"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Core Specializations</h3>
            <div className="space-y-4">
              {[
                {
                  icon: Users,
                  title: "Skilled Engineering Teams",
                  text: "Certified MEP specialists with 10+ years average experience",
                },
                {
                  icon: Briefcase,
                  title: "Turnkey Projects",
                  text: "End-to-end project management from design to commissioning",
                },
                {
                  icon: Clock,
                  title: "24/7 Maintenance",
                  text: "Round-the-clock support for critical infrastructure systems",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <item.icon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Industry Recognition</h3>
            <div className="space-y-4">
              <Badge className="bg-green-100 text-primary">
                ISO 9001 Certified
              </Badge>
              <Badge className="bg-green-100 text-primary">
                LEED Accredited
              </Badge>
              <Badge className="bg-green-100 text-primary">
                Safety Award 2023
              </Badge>
            </div>
            <p className="mt-6 text-muted-foreground">
              Certified partner for major construction tech providers including
              Siemens, Schneider Electric, and Mitsubishi
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
