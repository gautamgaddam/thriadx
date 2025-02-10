"use client";
import { motion } from "framer-motion";

export const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    {children}
  </motion.div>
);
