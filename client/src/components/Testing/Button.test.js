import React, { useContext }from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../game/Button';

// Mock SocketContext values
jest.mock('./SocketContext', () => ({
  useContext: jest.fn(),
}));

describe('Button', () => {
  test('emits room:create on button click', () => {
    // Mock the useContext hook response
    const socket = {
      emit: jest.fn(),
    };
    const navigate = jest.fn();
    useContext.mockReturnValue({ socket, navigate });

    // Render the component
    render(<Button type="playWithFriend" />);

    // Click the "Start game" button
    const startButton = screen.getByText('Start game');
    fireEvent.click(startButton);

    // Check if socket.emit was called with the expected arguments
    expect(socket.emit).toHaveBeenCalledWith(
      'room:create',
      { type: 'someType' },
      expect.any(Function)
    );

    // Simulate the callback from socket.emit
    const mockRoomId = 'mockRoomId';
    socket.emit.mock.calls[0][2](null, mockRoomId);

    // Check if navigate was called with the expected route
    expect(navigate).toHaveBeenCalledWith(`/room/${mockRoomId}`);
  });
});
