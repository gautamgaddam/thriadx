import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SlideUp from './slide-up';
import { waitFor } from '@testing-library/react';
describe('SlideUp Animation', () => {
    /**
    * Test to assert that the SlideUp component renders its children correctly.
    */
    it('renders children correctly', () => {
    const childText = 'Hello, SlideUp!';
    const { getByText } = render(<SlideUp>{childText}</SlideUp>);
    expect(getByText(childText)).toBeInTheDocument();
    });

    /**
    * Test to assert that the rendered motion div is present in the DOM
    * and eventually applies the expected style (opacity: 1) from the animation.
    */
    it('renders the motion div with expected styles', async () => {
    const childText = 'Test Motion Div';
    const { container, getByText } = render(<SlideUp>{childText}</SlideUp>);
    const motionDiv = container.firstChild;
    expect(motionDiv).not.toBeNull();
    // As framer-motion automates the transition, we can check for the final style
    // This assumes that the animations have completed synchronously in the test environment.
    await waitFor(() => expect(motionDiv).toHaveStyle('opacity: 1'));
    expect(getByText(childText)).toBeInTheDocument();
    });
    /**
        * Snapshot test for the SlideUp component with child text.
        */
    it('matches snapshot', () => {
        const { container } = render(<SlideUp><div>Snapshot Test</div></SlideUp>);
        expect(container.firstChild).toMatchSnapshot();
    });

    /**
        * Test to assert that the SlideUp component handles null children gracefully.
        */
    it('renders without children when null is provided', () => {
        const { container } = render(<SlideUp>{null}</SlideUp>);
        expect(container.firstChild).toBeInTheDocument();
        // The component should render an empty div if no children provided
        expect(container.firstChild.textContent).toBe('');
    });

    /**
        * Test to assert SlideUp correctly renders multiple children elements.
        */
    it('renders multiple children elements correctly', () => {
        const childOne = 'Child One';
        const childTwo = 'Child Two';
        const { getByText } = render(
        <SlideUp>
            <div>{childOne}</div>
            <div>{childTwo}</div>
        </SlideUp>
        );
        expect(getByText(childOne)).toBeInTheDocument();
        expect(getByText(childTwo)).toBeInTheDocument();
    });
    /**
        * Test to assert that SlideUp handles undefined children gracefully.
        */
    it('renders without children when undefined is provided', () => {
        const { container } = render(<SlideUp>{undefined}</SlideUp>);
        expect(container.firstChild).toBeInTheDocument();
        expect(container.firstChild.textContent).toBe('');
    });

    /**
        * Test to assert that SlideUp correctly renders numeric children.
        */
    it('renders numeric children correctly', () => {
        const numericChild = 0;
        const { getByText } = render(<SlideUp>{numericChild}</SlideUp>);
        expect(getByText('0')).toBeInTheDocument();
    });

    /**
        * Test to assert that SlideUp correctly renders a function component as child.
        */
    it('renders function component children correctly', () => {
        const Dummy = () => <div>Dummy Component</div>;
        const { getByText } = render(
            <SlideUp>
                <Dummy />
            </SlideUp>
        );
        expect(getByText('Dummy Component')).toBeInTheDocument();
    });
    /**
        * Test to assert that SlideUp correctly updates its rendered children.
        * This test verifies that when SlideUp is re-rendered with different children,
        * the component updates the content in the DOM.
        */
    it('updates rendered children when re-rendered', () => {
        const { getByText, queryByText, rerender } = render(<SlideUp>Initial Content</SlideUp>);
        expect(getByText('Initial Content')).toBeInTheDocument();
        // Re-render the component with new child content
        rerender(<SlideUp>Updated Content</SlideUp>);
        // The initial content should no longer be in the document
        expect(queryByText('Initial Content')).toBeNull();
        expect(getByText('Updated Content')).toBeInTheDocument();
    });

    /**
        * Test to assert that SlideUp handles an array of mixed children types correctly.
        * This test passes a mix of booleans, numbers, and strings as children and ensures
        * that only the renderable text is displayed.
        */
    it('renders an array of mixed children (booleans, numbers, and strings) correctly', () => {
        const mixedChildren = [false, 'Alpha', 123, true, 'Beta'];
        const { container, getByText } = render(<SlideUp>{mixedChildren}</SlideUp>);
        // Check that string and number values are rendered
        expect(getByText(/Alpha/)).toBeInTheDocument();
        expect(getByText(/123/)).toBeInTheDocument();
        expect(getByText(/Beta/)).toBeInTheDocument();
        // Ensure that the boolean values are not rendered as text
        expect(container.textContent).not.toMatch(/true/);
        expect(container.textContent).not.toMatch(/false/);
    });
});