"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input placeholder="Name" className="bg-white/10 border-none" />
              <Input
                placeholder="Email"
                type="email"
                className="bg-white/10 border-none"
              />
            </div>
            <Textarea
              placeholder="Message"
              rows={5}
              className="bg-white/10 border-none"
            />
            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary-dark"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
