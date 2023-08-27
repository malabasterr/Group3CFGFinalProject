// Import required utilities and component
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlipCard from '../flipCard/FlipCard';

// Test suite for the <FlipCard /> component
describe('<FlipCard />', () => {

    // Test rendering without errors
    test('it renders without crashing', () => {
        render(<FlipCard />);
    });

    // Test for correct name display
    test('it displays the names correctly', () => {
        const { getAllByRole } = render(<FlipCard />);
        
        // Fetch all heading elements
        const headers = getAllByRole('heading');
        
        // Assert each name's presence
        expect(headers[0]).toHaveTextContent('Maddy');
        expect(headers[1]).toHaveTextContent('Kudzai');
        expect(headers[2]).toHaveTextContent('Niki');
        expect(headers[3]).toHaveTextContent('Megan');
        expect(headers[4]).toHaveTextContent('Eleri');
    });
});
