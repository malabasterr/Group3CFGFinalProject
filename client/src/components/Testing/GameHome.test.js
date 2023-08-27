import React from 'react';
import { render, screen } from '@testing-library/react';
import GameHome from '../game/GameHome';
import UsernameDisplay from '../login/UsernameDisplay';
import QuizSlider from '../game/QuizSlider/QuizSlider';
import StartGameButton from '../game/StartGameButton';

jest.mock('../login/UsernameDisplay', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../quizSlider/QuizSlider', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../StartGameButton', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('GameHome', () => {
  test('renders components correctly', () => {
    // Mock components
    UsernameDisplay.mockReturnValue(<div data-testid="mock-username-display" />);
    QuizSlider.mockReturnValue(<div data-testid="mock-quiz-slider" />);
    StartGameButton.mockReturnValue(<div data-testid="mock-start-game-button" />);

    // Render the component
    render(<GameHome />);

    // Check if the mocked components are rendered
    expect(screen.getByTestId('mock-username-display')).toBeInTheDocument();
    expect(screen.getByTestId('mock-quiz-slider')).toBeInTheDocument();
    expect(screen.getByTestId('mock-start-game-button')).toBeInTheDocument();

    // Reset mock functions
    UsernameDisplay.mockReset();
    QuizSlider.mockReset();
    StartGameButton.mockReset();
  });
});
