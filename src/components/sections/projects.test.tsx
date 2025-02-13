import { ProjectsSection } from "./projects";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

// Test to verify that all project cards render with correct details.
test("ProjectsSection renders all project cards with correct details", () => {
  render(<ProjectsSection />);
  // Check that the section heading is rendered
  expect(
    screen.getByRole("heading", { name: /featured projects/i })
  ).toBeInTheDocument();
  // Check that each project title is rendered
  expect(
    screen.getByRole("heading", { name: /green tower complex/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /hospital modernization/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /data center campus/i })
  ).toBeInTheDocument();
  // Check that there are three "View Details" buttons (one for each card)
  const viewDetailsButtons = screen.getAllByRole("button", {
    name: /view details/i,
  });
  expect(viewDetailsButtons).toHaveLength(3);
  // Check that each project image has the correct alt attribute
  expect(
    screen.getByAltText(/green tower complex/i)
  ).toBeInTheDocument();
  // Check that at least one badge is present (for the tags)
  expect(screen.getByText(/hvac/i)).toBeInTheDocument();
});

// Test to verify that project descriptions and gradient overlays are rendered for each card.
test("ProjectsSection displays project descriptions and gradient overlay for each card", () => {
  const { container } = render(<ProjectsSection />);
  // Verify each project description is rendered
  expect(
    screen.getByText(
      /Full MEP implementation for LEED Platinum certified commercial tower/i
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      /Critical systems upgrade for 500-bed tertiary care facility/i
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      /Mission-critical cooling and power systems for hyperscale DC/i
    )
  ).toBeInTheDocument();
  // Verify each project card contains a gradient overlay div by checking for the class substring "bg-gradient-to-t"
  const gradientOverlays = container.querySelectorAll(
    'div[class*="bg-gradient-to-t"]'
  );
  expect(gradientOverlays.length).toBe(3);
});

// Test to verify that the ProjectsSection renders as a section with proper classes.
test("ProjectsSection renders as a section with proper classes", () => {
  const { container } = render(<ProjectsSection />);
  const sectionElement = container.querySelector("section");
  expect(sectionElement).toBeInTheDocument();
  expect(sectionElement).toHaveClass("py-20", "bg-gray-50");
});

// Test to verify that all project tags are rendered correctly.
test("ProjectsSection renders all project tags correctly", () => {
  render(<ProjectsSection />);
  // List all expected tags from the projects data.
  const expectedTags = [
    "HVAC",
    "Electrical",
    "Plumbing",
    "Fire Safety",
    "Medical Gas",
    "BMS",
    "Cooling",
    "Power Backup",
    "SCADA",
  ];
  expectedTags.forEach((tag) => {
    expect(screen.getByText(tag)).toBeInTheDocument();
  });
});

// Test to verify that the ProjectsSection renders a grid layout container with exactly three project cards.
test("ProjectsSection renders project grid container with exactly three project cards", () => {
  const { container } = render(<ProjectsSection />);
  // Query for the grid container using substrings of its class names.
  const gridContainer = container.querySelector(
    "div[class*='grid-cols-3'][class*='gap-8']"
  );
  expect(gridContainer).toBeInTheDocument();
  // Check that there are exactly 3 project cards rendered as children in the grid container.
  expect(gridContainer.children.length).toBe(3);
});

// Test to verify that the main container div with the 'container' class is rendered.
test("ProjectsSection renders the main container div with the 'container' class", () => {
  const { container } = render(<ProjectsSection />);
  const mainContainer = container.querySelector("div.container");
  expect(mainContainer).toBeInTheDocument();
});

// Test to verify that each project card's content area has proper padding.
test("ProjectsSection renders each project card with content area having proper padding classes", () => {
  const { container } = render(<ProjectsSection />);
  const cardContentDivs = container.querySelectorAll("div.p-6");
  expect(cardContentDivs.length).toBe(3);
});

// Test to verify that each project's image overlay has proper absolute positioning.
test("ProjectsSection renders image overlay with proper absolute positioning", () => {
  const { container } = render(<ProjectsSection />);
  const overlayDivs = container.querySelectorAll("div.absolute.inset-0");
  expect(overlayDivs.length).toBe(3);
});

// Test to verify that the image container structure includes an AspectRatio wrapper and a gradient overlay.
test("ProjectsSection image container structure includes AspectRatio and gradient overlay", () => {
  const { container } = render(<ProjectsSection />);
  const imageContainers = container.querySelectorAll(
    "div.relative.overflow-hidden.rounded-t-lg"
  );
  // Ensure that there are exactly three image containers (one for each project)
  expect(imageContainers.length).toBe(3);
  imageContainers.forEach((imageContainer) => {
    // Check that the image container has at least two children (the AspectRatio wrapper and the gradient overlay)
    expect(imageContainer.children.length).toBeGreaterThanOrEqual(2);
    // Query within the container for the gradient overlay div with the required classes
    const overlayDiv = imageContainer.querySelector(
      "div.absolute.inset-0.bg-gradient-to-t"
    );
    expect(overlayDiv).toBeInTheDocument();
  });
});

// Test to verify that each project's gradient overlay has the exact background gradient classes applied.
test("ProjectsSection gradient overlay has correct background gradient classes", () => {
  const { container } = render(<ProjectsSection />);
  // Query for all gradient overlay divs including the required classes.
  const gradientOverlays = container.querySelectorAll(
    'div.absolute.inset-0.bg-gradient-to-t'
  );
  // Ensure each gradient overlay contains "from-primary/60" and "to-transparent" in their class list.
  gradientOverlays.forEach((overlay) => {
    expect(overlay.className).toMatch(/from-primary\/60/);
    expect(overlay.className).toMatch(/to-transparent/);
  });
});
