import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Controls from '../game/Controls';

// Mock SocketContext values
jest.mock('./SocketContext', () => ({
  __esModule: true,
  useContext: jest.fn(),
}));

describe('Controls', () => {
  test('updates option on button click and emits room:update', () => {
    // Mock the useContext hook response
    const socket = {
      id: 'mockSocketId',
      emit: jest.fn(),
    };
    const room = {
      players: {
        mockSocketId: {
          option: '',
          optionLock: false,
        },
      },
    };
    const contextValue = { socket, room };
    useContext.mockReturnValue(contextValue);

    // Render the component
    render(<Controls />);

    // Click the "Player 1" button
    const player1Button = screen.getByAltText('Player One');
    fireEvent.click(player1Button);

    // Check if the option was updated in the room data
    expect(room.players[socket.id].option).toBe('purple');
    expect(room.players[socket.id].optionLock).toBe(true);

    // Check if socket.emit was called with the expected arguments
    expect(socket.emit).toHaveBeenCalledWith('room:update', room);

    // Reset mock functions
    socket.emit.mockReset();
    useContext.mockReset();
  });
});
