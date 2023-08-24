import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import QuizSlider from './QuizSlider';

// Mock axios to avoid actual network requests during testing
jest.mock('axios');

describe('QuizSlider', () => {
  test('renders loading state', () => {
    // Render the component
    render(<QuizSlider />);

    // Check if the loading text is displayed
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });

  test('displays next question on button click', async () => {
    // Mock axios response
    const mockData = [
      { text: 'Question 1' },
      { text: 'Question 2' },
      // ... other questions
    ];
    axios.get.mockResolvedValue({ data: { questions: mockData } });

    // Render the component
    render(<QuizSlider />);

    // Wait for questions to load
    await screen.findByText('Question 1');

    // Click the "Next Question" button
    const nextButton = screen.getByText('Next Question');
    fireEvent.click(nextButton);

    // Check if the next question is displayed
    const nextQuestion = screen.getByText('Question 2');
    expect(nextQuestion).toBeInTheDocument();
  });
});
