import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SocketContext } from '../game/SocketContext';
import StartGameButton from '../game/StartGameButton';

describe('StartGameButton', () => {
  test('handles starting the game', () => {
    // Mock SocketContext values
    const socket = {
      emit: jest.fn(),
    };
    const navigate = jest.fn();
    const contextValue = { socket, navigate };

    // Render the component with MemoryRouter and SocketContext
    render(
      <MemoryRouter>
        <SocketContext.Provider value={contextValue}>
          <StartGameButton type="friend" />
        </SocketContext.Provider>
      </MemoryRouter>
    );

    // Simulate clicking the "Start Game" button using getByTestId
    // eslint-disable-next-line no-restricted-globals
    fireEvent.click(screen.getByTestId('start-game-button'));

    // Check if socket.emit was called with the expected arguments
    expect(socket.emit).toHaveBeenCalledWith(
      'room:create',
      { type: 'friend' },
      expect.any(Function)
    );

    // Simulate the callback from socket.emit
    const mockRoomId = 'mockRoomId';
    socket.emit.mock.calls[0][2](null, mockRoomId);

    // Check if navigate was called with the expected route
    expect(navigate).toHaveBeenCalledWith(`/room/${mockRoomId}`);
  });
});
