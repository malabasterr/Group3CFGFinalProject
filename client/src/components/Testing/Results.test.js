import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Results from '../path-to-your-component/Results';
import BackHome from '../game/BackHome';

jest.mock('../BackHome', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Results', () => {
  test('shows final result when button is clicked', () => {
    // Mock BackHome component
    BackHome.mockReturnValue(<div data-testid="mock-back-home" />);

    // Render the component
    render(<Results finalScore={8} />);

    // Check if initial state is correct
    expect(screen.getByText('Show your results!')).toBeInTheDocument();
    expect(screen.queryByText('Final Result')).toBeNull();

    // Simulate clicking the show result button
    fireEvent.click(screen.getByText('Show your results!'));

    // Check if final result is shown
    expect(screen.getByText('Final Result')).toBeInTheDocument();
    expect(screen.getByText('8 / 10')).toBeInTheDocument();
    expect(screen.getByTestId('mock-back-home')).toBeInTheDocument();

    // Reset mock function
    BackHome.mockReset();
  });
});
