import { HeroSection } from "./hero";
import { HeroSection } from "./hero";
import { HeroSection } from "./hero";
import { HeroSection } from "./hero";
import { HeroSection } from "./hero";
import { render, screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom";

// No new imports are necessary for this test.
// No new imports are needed since React, render, screen, and the HeroSection component are already imported.
// If needed, please ensure "@testing-library/react", "@testing-library/jest-dom", and "./hero" are correctly imported.
test("HeroSection renders with expected elements including background stars and animated container", () => {
  render(<HeroSection />);
  const headerElement = screen.getByRole("heading", { name: /Building Future-Ready Solutions/i });
  expect(headerElement).toBeInTheDocument();
  const paragraphElement = screen.getByText(/Comprehensive MEP Solutions for Sustainable Construction/i);
  expect(paragraphElement).toBeInTheDocument();
  const buttonElement = screen.getByRole("button", { name: /Get Started/i });
  expect(buttonElement).toBeInTheDocument();
  const stars = document.querySelectorAll(".stars");
  expect(stars.length).toBeGreaterThan(0);
  const stars2 = document.querySelectorAll(".stars2");
  expect(stars2.length).toBeGreaterThan(0);
  const stars3 = document.querySelectorAll(".stars3");
  expect(stars3.length).toBeGreaterThan(0);
});
/**
 * This test verifies that the HeroSection component includes a background container
 * with absolute positioning containing exactly three background star elements.
 */
test("HeroSection includes a background container with absolute positioning and three star elements", () => {
  render(<HeroSection />);
  const backgroundContainer = document.querySelector("section > div.absolute");
  expect(backgroundContainer).toBeInTheDocument();
  const children = backgroundContainer?.children;
  expect(children?.length).toEqual(3);
  expect(backgroundContainer?.querySelector(".stars")).toBeInTheDocument();
  expect(backgroundContainer?.querySelector(".stars2")).toBeInTheDocument();
  expect(backgroundContainer?.querySelector(".stars3")).toBeInTheDocument();
});
/**
 * This test verifies that the main <section> element of the HeroSection component 
 * contains the expected classes ("h-screen", "flex", "bg-primary-dark", "text-white", "overflow-hidden")
 * to ensure that the layout and background styling are correctly applied.
 */
test("HeroSection section has the correct styling classes", () => {
  render(<HeroSection />);
  const sectionElement = document.querySelector("section");
  expect(sectionElement).toBeInTheDocument();
  const classList = sectionElement?.className;
  expect(classList).toContain("h-screen");
  expect(classList).toContain("flex");
  expect(classList).toContain("bg-primary-dark");
  expect(classList).toContain("text-white");
  expect(classList).toContain("overflow-hidden");
});
test("HeroSection has two main children: background container and animated container with proper classes", () => {
  render(<HeroSection />);
  const sectionElement = document.querySelector("section");
  expect(sectionElement).toBeInTheDocument();
  const children = sectionElement?.children;
  expect(children?.length).toEqual(2);
  const backgroundContainer = children?.[0];
  expect(backgroundContainer?.className).toContain("absolute");
  expect(backgroundContainer?.children.length).toEqual(3);
  const animatedContainer = children?.[1];
  expect(animatedContainer?.className).toContain("container");
  expect(animatedContainer?.className).toContain("text-center");
  expect(animatedContainer?.className).toContain("relative");
  expect(animatedContainer?.className).toContain("z-10");
});
test("HeroSection Button component renders with correct class names", () => {
  render(<HeroSection />);
  const buttonElement = screen.getByRole("button", { name: /Get Started/i });
  expect(buttonElement).toHaveClass("bg-secondary");
  expect(buttonElement).toHaveClass("hover:bg-secondary-dark");
});
test("HeroSection matches snapshot", () => {
  const { container } = render(<HeroSection />);
  expect(container.firstChild).toMatchSnapshot();
});
/**
 * This test verifies that the HeroSection component unmounts cleanly without errors.
 * It renders the component, calls the unmount function, and then checks that the
 * container is cleared.
 */
test("HeroSection unmounts without errors", () => {
  const { unmount, container } = render(<HeroSection />);
  unmount();
  expect(container.firstChild).toBeNull();
});
test("HeroSection background container has correct positioning and dimension classes", () => {
  /**
   * This test verifies that the background container in the HeroSection component
   * includes the Tailwind CSS utility classes for positioning (top-0, left-0)
   * and dimension (w-full, h-full) to ensure proper layout.
   */
  render(<HeroSection />);
  const bgContainer = document.querySelector("section > div.absolute");
  expect(bgContainer).toBeInTheDocument();
  expect(bgContainer?.className).toContain("top-0");
  expect(bgContainer?.className).toContain("left-0");
  expect(bgContainer?.className).toContain("w-full");
  expect(bgContainer?.className).toContain("h-full");
});
test("HeroSection button click does not cause errors and maintains its class names and content", () => {
  /**
   * This test simulates a click on the 'Get Started' button and verifies that the 
   * HeroSection component remains in the DOM with the expected class names and text intact.
   */
  render(<HeroSection />);
  const buttonElement = screen.getByRole("button", { name: /Get Started/i });
  expect(buttonElement).toBeInTheDocument();
  // Simulate click on the button
  fireEvent.click(buttonElement);
  // Verify the button still retains its expected class names and text content after the click
  expect(buttonElement).toHaveClass("bg-secondary");
  expect(buttonElement).toHaveClass("hover:bg-secondary-dark");
  expect(buttonElement.textContent).toBe("Get Started");
});
test("HeroSection animated container children are rendered in the correct order", () => {
  /**
   * This test verifies that the animated container (the motion.div with class "container text-center relative z-10")
   * in the HeroSection component contains a heading, paragraph, and button in the expected order.
   */
  render(<HeroSection />);
  const animatedContainer = document.querySelector("div.container.text-center.relative.z-10");
  expect(animatedContainer).toBeInTheDocument();
  const children = animatedContainer?.children;
  expect(children?.length).toBe(3);
  // Verify the order of child elements: h1, p, then button
  expect(children?.[0].tagName).toBe("H1");
  expect(children?.[1].tagName).toBe("P");
  expect(children?.[2].tagName).toBe("BUTTON");
  // Verify the text content of each element
  expect(children?.[0].textContent).toMatch(/Building Future-Ready Solutions/i);
  expect(children?.[1].textContent).toMatch(/Comprehensive MEP Solutions for Sustainable Construction/i);
  expect(children?.[2].textContent).toBe("Get Started");
});