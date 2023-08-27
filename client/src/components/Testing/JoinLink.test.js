import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import JoinLink from '../game/JoinLink';

describe('JoinLink', () => {
  test('handles copying to clipboard', async () => {
    // Mock clipboard API
    const clipboardWriteText = jest.fn();
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: clipboardWriteText,
      },
    });

    // Render the component
    render(<JoinLink link="mock-link" />);

    // Check if initial state is correct
    expect(screen.getByText('Click to copy !')).toBeInTheDocument();

    // Simulate clicking the copy link
    fireEvent.click(screen.getByText('Click to copy !'));

    // Check if clipboard.writeText was called with the correct argument
    expect(clipboardWriteText).toHaveBeenCalledWith('mock-link');

    // Check if text changes after copying
    expect(screen.getByText('Copied !')).toBeInTheDocument();
    expect(screen.getByText('mock-link')).toBeInTheDocument();
  });
});
