import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SunLoaders from './loader';

describe('SunLoaders Component', () => {
    test('renders heading correctly', () => {
    render(<SunLoaders />);
    const headingElement = screen.getByText(/Sun & Star Loaders/i);
    expect(headingElement).toBeInTheDocument();
    });

    test('renders correct number of SVG loaders', () => {
    const { container } = render(<SunLoaders />);
    const svgElements = container.querySelectorAll('svg');
    // There should be exactly 10 SVGs for the 10 sun designs
    expect(svgElements.length).toBe(10);
    });

    test('svg elements have animation style applied', () => {
    const { container } = render(<SunLoaders />);
    const svgElement = container.querySelector('svg');
    // Check that the animation is set to run infinitely and with a known animation property
    expect(svgElement).toHaveStyle('animation-iteration-count: infinite');
    });
    test('each SVG element has infinite animation iteration', () => {
        // This test verifies that every SVG has the infinite animation iteration style applied
        const { container } = render(<SunLoaders />);
        const svgElements = container.querySelectorAll('svg');
        svgElements.forEach(svg => {
            expect(svg).toHaveStyle('animation-iteration-count: infinite');
        });
    });

    test('renders correct number of circle elements in loaders', () => {
        // This test confirms that the expected circles across all loader designs are rendered
        const { container } = render(<SunLoaders />);
        const circleElements = container.querySelectorAll('circle');
        // Expecting 8 circles: sun3 (2), sun5 (2), sun7 (1), sun9 (1), sun10 (2)
        expect(circleElements.length).toBe(8);
    });

    test('sun2 SVG has correct strokeWidth on its path elements', () => {
        // This test verifies that the sun2 design (the second SVG element)
        // has 16 path elements and each has the strokeWidth of 3
        const { container } = render(<SunLoaders />);
        const svgElements = container.querySelectorAll('svg');
        // sun2 is the second SVG (index 1)
        const sun2 = svgElements[1];
        const pathElements = sun2.querySelectorAll('path');
        expect(pathElements.length).toBe(16);
        pathElements.forEach(path => {
            expect(path.getAttribute('stroke-width')).toBe('3');
        });
    });

    test('each SVG element has a valid animation duration style set', () => {
        // This test ensures that each SVG has a non-zero animation duration inline style set
        const { container } = render(<SunLoaders />);
        const svgElements = container.querySelectorAll('svg');
        svgElements.forEach(svg => {
            const duration = svg.style.animationDuration;
            expect(duration).toMatch(/\d+s/); // Should be set to a value like "10s", "15s", etc.
            expect(duration).not.toBe('0s');
        });
    });
    test('sun1 SVG renders with correct fill and stroke attributes on its single path', () => {
        // This test verifies that the first SVG (sun1) renders a <path> with the correct fill and stroke colors.
        const { container } = render(<SunLoaders />);
        const svgElements = container.querySelectorAll('svg');
        const sun1 = svgElements[0];
        const pathElement = sun1.querySelector('path');
        expect(pathElement).toBeInTheDocument();
        expect(pathElement?.getAttribute('fill')).toBe('#B87333');
        expect(pathElement?.getAttribute('stroke')).toBe('#B87333');
    });

    test('sun3 SVG renders its outer and inner circles with correct attributes', () => {
        // This test checks that sun3 (the third SVG) renders two circles with the expected properties.
        const { container } = render(<SunLoaders />);
        const svgElements = container.querySelectorAll('svg');
        const sun3 = svgElements[2]; // sun3 is the third design
        const circleElements = sun3.querySelectorAll('circle');
        expect(circleElements.length).toBe(2);
        const outerCircle = circleElements[0];
        const innerCircle = circleElements[1];
        expect(outerCircle.getAttribute('cx')).toBe('50');
        expect(outerCircle.getAttribute('cy')).toBe('50');
        expect(outerCircle.getAttribute('r')).toBe('20');
        expect(outerCircle.getAttribute('stroke')).toBe('#B87333');
        expect(outerCircle.getAttribute('stroke-width')).toBe('2');
        expect(innerCircle.getAttribute('r')).toBe('12');
    });

    test('sun9 SVG renders path elements with correct strokeWidth attribute', () => {
        // This test ensures that sun9 (the ninth SVG) renders its path elements with stroke-width "0.5"
        const { container } = render(<SunLoaders />);
        const svgElements = container.querySelectorAll('svg');
        const sun9 = svgElements[8];
        const pathElements = sun9.querySelectorAll('path');
        expect(pathElements.length).toBeGreaterThan(0);
        pathElements.forEach((path) => {
            expect(path.getAttribute('stroke-width')).toBe('0.5');
        });
    });

    test('every SVG element has the animate-spin-custom class applied', () => {
        // This test confirms that all SVG elements have the custom animation class.
        const { container } = render(<SunLoaders />);
        const svgElements = container.querySelectorAll('svg');
        svgElements.forEach((svg) => {
            expect(svg.classList.contains('animate-spin-custom')).toBe(true);
        });
    });

    test('sun2 SVG path elements have stroke-linecap set to round', () => {
        // This test verifies that each path element in sun2 (the second SVG) has stroke-linecap="round"
        const { container } = render(<SunLoaders />);
        const svgElements = container.querySelectorAll('svg');
        const sun2 = svgElements[1];
        const pathElements = sun2.querySelectorAll('path');
        pathElements.forEach((path) => {
            expect(path.getAttribute('stroke-linecap')).toBe('round');
        });
    });
});