import { ServicesSection } from "./services";
import { ServicesSection } from "./services";
import { ServicesSection } from "./services";
import { ServicesSection } from "./services";
import { services } from "@/lib/constants";
import { services } from "@/lib/constants";
import { services } from "@/lib/constants";
import { render, screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import { render } from "@testing-library/react";
import { render } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom";

// No additional imports needed since ServicesSection, services, render, and screen are already imported.
// No additional imports needed.
test('ServicesSection renders all service cards with the correct title and description', () => {
  /**
   * This test ensures that the ServicesSection component renders the section header
   * "Our Services" and that for each service defined in the services constant, the card's
   * title and description are displayed.
   */
  render(<ServicesSection />);
  // Assert that the section header is rendered.
  expect(screen.getByText('Our Services')).toBeInTheDocument();
  // Iterate over the services and verify that each service title and description is rendered.
  services.forEach(service => {
    expect(screen.getByText(service.title)).toBeInTheDocument();
    expect(screen.getByText(service.description)).toBeInTheDocument();
  });
});
test('ServicesSection renders container structure and correct classes', () => {
  /**
   * This test verifies that the ServicesSection component renders the proper container elements
   * with the correct CSS classes. It checks that the section has the "p-20" and "bg-gray-50" classes,
   * that a child container div exists, and that the number of rendered service cards matches the number
   * of entries in the services constant.
   */
  const { container } = render(<ServicesSection />);
  // Ensure the section element is rendered with the correct classes.
  const sectionEl = container.querySelector("section");
  expect(sectionEl).toBeInTheDocument();
  expect(sectionEl).toHaveClass("p-20", "bg-gray-50");
  // Verify that the container div exists inside the section.
  const containerDiv = sectionEl?.querySelector(".container");
  expect(containerDiv).toBeInTheDocument();
  // Check that the number of rendered service cards matches the services array length.
  // The Card component has the class "hover:shadow-lg", but since ":" is a special character in CSS selectors,
  // it must be escaped as ".hover\\:shadow-lg".
  const cardElements = containerDiv?.querySelectorAll(".hover\\:shadow-lg");
  expect(cardElements?.length).toBe(services.length);
});
test('ServicesSection renders the service icons correctly', () => {
  /**
   * This test ensures that each service card renders its associated icon.
   * It checks that the number of elements with the "text-primary" class equals the number
   * of services, confirming that the icon component is rendered for every service.
   */
  const { container } = render(<ServicesSection />);
  // Query for elements with the specific icon class "text-primary"
  const iconElements = container.querySelectorAll('.text-primary');
  // Assert that the number of icon elements matches the number of services.
  expect(iconElements.length).toBe(services.length);
});
test('ServicesSection renders the section header as an h2 element with correct semantic and styling', () => {
  /**
   * This test ensures that the section header "Our Services" is rendered using an h2 element
   * (provided by framer-motion's motion.h2) with the appropriate CSS classes for semantic styling.
   */
  render(<ServicesSection />);
  const heading = screen.getByText(/Our Services/i);
  // Check that the rendered element is an h2 element.
  expect(heading.tagName).toBe("H2");
  // Check that the heading has the expected CSS classes.
  expect(heading).toHaveClass("text-3xl", "font-bold", "text-center", "mb-12");
});
test('ServicesSection matches the snapshot', () => {
  /**
   * This test renders the ServicesSection component and creates a snapshot
   * of its rendered output. It serves as a guard against unintended UI changes,
   * ensuring that the overall DOM structure remains consistent over time.
   */
  const { container } = render(<ServicesSection />);
  expect(container).toMatchSnapshot();
});
test('ServicesSection renders correctly when the services array is empty', () => {
  /**
   * This test verifies that when the services constant is an empty array, the ServicesSection component
   * still renders the section header and container but no service cards. The module is reloaded with the
   * mocked empty services array.
   */
  // Reset modules so that the next import uses our mock
  jest.resetModules();
  jest.doMock('@/lib/constants', () => ({
    services: []  // Provide an empty array for services
  }));
  // Re-import ServicesSection after mocking
  const { ServicesSection } = require('./services');
  const { container } = render(<ServicesSection />);
  // Verify section header is still rendered
  expect(screen.getByText('Our Services')).toBeInTheDocument();
  // Verify that the section container exists
  const sectionEl = container.querySelector("section");
  expect(sectionEl).toBeInTheDocument();
  const containerDiv = sectionEl?.querySelector(".container");
  expect(containerDiv).toBeInTheDocument();
  // Check that no service card elements are rendered
  const cardElements = containerDiv?.querySelectorAll(".hover\\:shadow-lg");
  expect(cardElements?.length).toBe(0);
});
test('ServicesSection applies initial animation styles to service cards', () => {
  /**
   * This test checks that each service card's containing motion.div has initial animation styles set
   * (opacity: 0 and a translateY of 30px), as defined in the component's initial prop.
   */
  const { container } = render(<ServicesSection />);
  // Get all card elements using the distinctive card hover class.
  const cardElements = container.querySelectorAll(".hover\\:shadow-lg");
  // For each card, verify its parent (motion.div) contains the initial animation inline styles.
  cardElements.forEach(card => {
    const motionDiv = card.parentElement;
    expect(motionDiv).toBeInTheDocument();
    // As the initial state is { opacity: 0, y: 30 }, we expect an opacity of "0"
    expect(motionDiv?.style).toHaveProperty("opacity", "0");
    // The transform should contain translateY(30px) (e.g. "translateY(30px)")
    expect(motionDiv?.style.transform).toContain("30px");
  });
});
test('ServicesSection grid container has the correct classes and contains all service cards', () => {
  /**
   * This test ensures that the grid container element in the ServicesSection component
   * has the correct layout classes ("grid", "md:grid-cols-3", "gap-8") and that all
   * rendered service cards (identified by the "hover:shadow-lg" class) are contained within it.
   */
  const { container } = render(<ServicesSection />);
  const sectionEl = container.querySelector("section");
  expect(sectionEl).toBeInTheDocument();
  const containerDiv = sectionEl?.querySelector(".container");
  expect(containerDiv).toBeInTheDocument();
  const gridContainer = containerDiv?.querySelector("div.grid");
  expect(gridContainer).toBeInTheDocument();
  expect(gridContainer).toHaveClass("grid", "md:grid-cols-3", "gap-8");
  // Verify that the number of service cards inside the grid container matches the services array length.
  const cardElements = gridContainer?.querySelectorAll(".hover\\:shadow-lg");
  expect(cardElements?.length).toBe(services.length);
});
test('ServicesSection renders service cards in the correct order based on services array', () => {
  /**
   * This test verifies that the service cards are rendered in the same order as they appear in the services array.
   * It does so by checking that the position in the rendered HTML of each service title occurs in ascending order.
   */
  const { container } = render(<ServicesSection />);
  const htmlContent = container.innerHTML;
  let lastIndex = -1;
  services.forEach((service) => {
    const currentIndex = htmlContent.indexOf(service.title);
    // Ensure that each service title appears after the previous one in the HTML content.
    expect(currentIndex).toBeGreaterThan(lastIndex);
    lastIndex = currentIndex;
  });
});
test('ServicesSection renders service icons with correct sizing and spacing', () => {
  /**
   * This test ensures that each service icon is rendered with the correct sizing and spacing CSS classes.
   * It queries the rendered output for elements that have the "h-12", "w-12", "text-primary", and "mb-4" classes,
   * verifying that the intended visual styling for the icons is applied for every service.
   */
  const { container } = render(<ServicesSection />);
  const iconElements = container.querySelectorAll('.h-12.w-12.text-primary.mb-4');
  expect(iconElements.length).toBe(services.length);
});