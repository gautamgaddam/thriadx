import { ContactSection } from "./contact";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";

// (No additional imports needed as all required imports are already provided in the test file)
// No additional imports are needed because React, render, screen, userEvent, and ContactSection are already imported.
// No additional imports are required, as React, render, screen, userEvent, and jest-dom are already imported in the test file.
/**
 * Test to verify that the ContactSection component renders correctly,
 * including all form elements (Name, Email, Message, and Send Message Button),
 * and that the output matches its snapshot.
 */
test("renders ContactSection with all form elements and matches snapshot", () => {
  const { container } = render(<ContactSection />);
  // Verify the section title is rendered.
  expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument();
  // Verify the input fields for Name and Email are rendered.
  expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  // Verify the textarea for Message is rendered.
  expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
  // Verify the submit button is rendered.
  expect(screen.getByRole("button", { name: /Send Message/i })).toBeInTheDocument();
  // Snapshot test to ensure rendering consistency.
  expect(container).toMatchSnapshot();
});
/**
 * Test to simulate user typing into the ContactSection form fields
 * and ensure that the input values update as expected.
 */
test("allows users to fill in form fields", async () => {
  const user = userEvent.setup();
  render(<ContactSection />);
  // Get the input fields and the textarea by their placeholder text.
  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const messageInput = screen.getByPlaceholderText("Message");
  // Simulate user typing into the input fields and textarea.
  await user.type(nameInput, "John Doe");
  await user.type(emailInput, "john@example.com");
  await user.type(messageInput, "Hello, this is a test message.");
  // Assert that the values have been updated accordingly.
  expect(nameInput).toHaveValue("John Doe");
  expect(emailInput).toHaveValue("john@example.com");
  expect(messageInput).toHaveValue("Hello, this is a test message.");
});
/**
 * Test to ensure that the ContactSection's wrapper section element has the correct styling classes.
 */
test("renders ContactSection with correct section styling", () => {
  const { container } = render(<ContactSection />);
  const sectionElement = container.querySelector("section");
  expect(sectionElement).toBeInTheDocument();
  // Verify that the section element has the intended styling classes.
  expect(sectionElement).toHaveClass("py-20", "bg-primary", "text-white");
});
/**
 * Test to verify the structure of the form element within ContactSection.
 * It checks that the form contains a div for the two input fields, a textarea, and a submit button,
 * and that these elements have the correct classes and attributes.
 */
test("renders ContactSection form structure properly", () => {
  const { container } = render(<ContactSection />);
  const formElement = container.querySelector("form");
  expect(formElement).toBeInTheDocument();
  // The form is expected to have three children:
  // 1. A container div with two input elements.
  // 2. A textarea element.
  // 3. A submit button.
  const formChildren = formElement?.children;
  expect(formChildren?.length).toBe(3);
  // Verify that the first child is a grid container with inputs.
  const inputContainer = formChildren?.item(0);
  expect(inputContainer).toHaveClass("grid", "md:grid-cols-2", "gap-6");
  expect(inputContainer?.querySelectorAll("input").length).toBe(2);
  // Verify that the textarea exists.
  const textareaElement = formElement?.querySelector("textarea");
  expect(textareaElement).toBeInTheDocument();
  // Verify that the submit button is present and of type "submit".
  const buttonElement = formElement?.querySelector("button");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement?.getAttribute("type")).toBe("submit");
});
/**
 * Test to verify that after submitting the form, the input values are retained.
 * This ensures that the form submission does not trigger any unintended behavior
 * such as clearing the input values in the absence of an explicit submit handler.
 */
test("retains form input values after submission", async () => {
  const user = userEvent.setup();
  render(<ContactSection />);
  // Get input fields and textarea by their placeholder text.
  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const messageInput = screen.getByPlaceholderText("Message");
  // Simulate user typing into the input fields.
  await user.type(nameInput, "Alice");
  await user.type(emailInput, "alice@example.com");
  await user.type(messageInput, "Test message");
  // Simulate clicking the submit button.
  const submitButton = screen.getByRole("button", { name: /Send Message/i });
  await user.click(submitButton);
  // Assert that the input values are unchanged after form submission.
  expect(nameInput).toHaveValue("Alice");
  expect(emailInput).toHaveValue("alice@example.com");
  expect(messageInput).toHaveValue("Test message");
});
/**
 * Test to verify that the Input and Textarea components within ContactSection
 * have the expected styling classes ("bg-white/10" and "border-none").
 */
test("renders form inputs with correct styling classes", () => {
  render(<ContactSection />);
  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const messageTextarea = screen.getByPlaceholderText("Message");
  // Verify that the Name input has the correct styling classes.
  expect(nameInput).toHaveClass("bg-white/10", "border-none");
  // Verify that the Email input has the correct styling classes.
  expect(emailInput).toHaveClass("bg-white/10", "border-none");
  // Verify that the Message textarea has the correct styling classes.
  expect(messageTextarea).toHaveClass("bg-white/10", "border-none");
});
/**
 * Test to verify that the Send Message button in the ContactSection component
 * has the correct styling classes ("w-full", "bg-secondary", "hover:bg-secondary-dark").
 */
test("renders Send Message button with correct styling classes", () => {
  render(<ContactSection />);
  const sendButton = screen.getByRole("button", { name: /Send Message/i });
  expect(sendButton).toBeInTheDocument();
  expect(sendButton).toHaveClass("w-full", "bg-secondary", "hover:bg-secondary-dark");
});
/**
 * Test to ensure that the inner animated container (the motion.div element)
 * renders with the correct layout classes ("max-w-2xl" and "mx-auto") ensuring proper width and centering.
 */
test("renders inner animated container with correct layout classes", () => {
  const { container } = render(<ContactSection />);
  // Query the inner container rendered by the motion.div by its Tailwind CSS classes.
  const animatedContainer = container.querySelector("div.max-w-2xl.mx-auto");
  expect(animatedContainer).toBeInTheDocument();
  // Verify that the container has both "max-w-2xl" and "mx-auto" classes.
  expect(animatedContainer).toHaveClass("max-w-2xl");
  expect(animatedContainer).toHaveClass("mx-auto");
});
/**
 * Test to verify that the outer container div with class "container" is rendered within the section element.
 */
test("renders outer container with correct class 'container'", () => {
  const { container } = render(<ContactSection />);
  // Query the wrapper section element
  const sectionElement = container.querySelector("section");
  expect(sectionElement).toBeInTheDocument();
  // Query for the container div inside the section element.
  const outerContainer = sectionElement?.querySelector("div.container");
  expect(outerContainer).toBeInTheDocument();
});
/**
 * Test to ensure that the form fields (Name, Email, Message) are empty by default when the component renders.
 */
test("ensures form fields are empty by default", () => {
  render(<ContactSection />);
  // Get the input fields and textarea by their placeholder text.
  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const messageTextarea = screen.getByPlaceholderText("Message");
  // Verify that the inputs and textarea are empty initially.
  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
  expect(messageTextarea).toHaveValue("");
});