import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { SocketContext } from '../game/SocketContext'
import GameRoom from '../game/GameRoom';
import Controls from '../game/Controls';
import QuizSlider from '../game/QuizSlider/QuizSlider';
import Results from '../game/Results';

jest.mock('../quizSlider/QuizSlider', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../Controls', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../Results', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('GameRoom', () => {
  test('renders components and handles state changes', async () => {
    // Mock SocketContext values
    const socket = {
      id: 'mockSocketId',
      emit: jest.fn(),
    };
    const room = {
      players: {
        mockPlayer1: {
          option: '',
          optionLock: false,
          score: 0,
        },
        mockPlayer2: {
          option: '',
          optionLock: false,
          score: 0,
        },
      },
    };
    const player_1 = 'mockPlayer1';
    const player_2 = 'mockPlayer2';
    const contextValue = { socket, room, player_1, player_2 };
    
    // Mock QuizSlider and Controls
    QuizSlider.mockReturnValue(<div data-testid="mock-quiz-slider" />);
    Controls.mockReturnValue(<div data-testid="mock-controls" />);
    
    // Mock Results
    Results.mockReturnValue(<div data-testid="mock-results" />);
    
    // Render the component with MemoryRouter and Route
    render(
      <MemoryRouter initialEntries={['/room/mockRoomId']}>
        <Route path="/room/:roomId">
          <SocketContext.Provider value={contextValue}>
            <GameRoom />
          </SocketContext.Provider>
        </Route>
      </MemoryRouter>
    );

    // Check if WaitingForConnection component is rendered
    expect(screen.getByTestId('waiting-for-connection')).toBeInTheDocument();

    // Mock useEffect for room:join
    await waitFor(() => {
      expect(socket.emit).toHaveBeenCalledWith(
        'room:join',
        { roomId: 'mockRoomId' },
        expect.any(Function)
      );
    });

    // Mock QuizSlider and Controls rendering
    expect(QuizSlider).toHaveBeenCalled();
    expect(Controls).toHaveBeenCalled();

    // Simulate options selection
    fireEvent.click(screen.getByAltText('Player One'));
    fireEvent.click(screen.getByAltText('Player Two'));

    // Mock useEffect for calculating results and updating state
    await waitFor(() => {
      expect(socket.emit).toHaveBeenCalledWith('room:update', room);
    });

    // Mock handling next question button click
    fireEvent.click(screen.getByText('NEXT QUESTION'));

    // Check if QuizSlider and Controls are displayed again
    expect(QuizSlider).toHaveBeenCalledTimes(2);
    expect(Controls).toHaveBeenCalledTimes(2);

    // Mock final results rendering
    fireEvent.click(screen.getByText('NEXT QUESTION'));
    expect(Results).toHaveBeenCalled();
  });
});
