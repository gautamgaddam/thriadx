"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import SlideUp from "../animations/slide-up";
import "../../styles/animation.css"; // Ensure this path is correct
import "../../styles/hero.css"; // Ensure this path is correct

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-primary-dark text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full parallax">
        <div className="galaxy"></div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <SlideUp>
        <div className="container text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 fade-in-up">
            Thiradx Building Future-Ready Solutions
          </h1>
          <div className="company-picture fade-in-up"></div>
          <p className="company-text">
            Comprehensive MEP Solutions for Sustainable Construction{" "}
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary-dark scale-up"
          >
            Get Started
          </Button>
        </div>
      </SlideUp>
    </section>
  );
};
