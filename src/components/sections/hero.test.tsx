import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroSection } from "./hero";

describe("HeroSection Component", () => {
    /**
    * This test ensures that the HeroSection component renders correctly by checking for 
    * the existence of key elements such as the heading, company text, and the Get Started button.
    */
    it("should render hero section with expected texts and elements", () => {
    render(<HeroSection />);

    // Check for the main heading
    expect(screen.getByRole("heading", { name: /Thiradx Building Future-Ready Solutions/i })).toBeInTheDocument();

    // Check for the company text paragraph
    expect(screen.getByText(/Comprehensive MEP Solutions for Sustainable Construction/i)).toBeInTheDocument();

    // Check for the "Get Started" button
    expect(screen.getByRole("button", { name: /Get Started/i })).toBeInTheDocument();

    // Check for the container that wraps the content
    expect(document.getElementsByClassName("container").length).toBeGreaterThan(0);
    });
});