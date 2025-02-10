"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import "../animations/animation.css"; // Ensure this path is correct

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center bg-primary-dark text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container text-center relative z-10"
      >
        <h1 className="text-5xl font-bold mb-6">
          Building Future-Ready Solutions
        </h1>
        <p className="text-xl mb-8">
          Comprehensive MEP Solutions for Sustainable Construction
        </p>
        <Button size="lg" className="bg-secondary hover:bg-secondary-dark">
          Get Started
        </Button>
      </motion.div>
    </section>
  );
};
