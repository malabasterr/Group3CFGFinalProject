import React from 'react';
import { render } from '@testing-library/react';
import { io } from 'socket.io-client';
import { MemoryRouter } from 'react-router-dom';
import { SocketContextProvider, SocketContext } from '../game/SocketContext';

// Mock socket.io-client
jest.mock('socket.io-client');

describe('SocketContextProvider', () => {
  test('sets up socket and context values', () => {
    // Mock socket instance
    const mockSocket = {
      id: 'mockSocketId',
      on: jest.fn(),
    };
    io.mockReturnValue(mockSocket);

    // Render the component with MemoryRouter
    render(
      <MemoryRouter>
        <SocketContextProvider>
          <SocketContext.Consumer>
            {(contextValue) => {
              // Check if socket and navigate are in the context value
              expect(contextValue.socket).toBe(mockSocket);
              expect(contextValue.navigate).toBeDefined();
              return null;
            }}
          </SocketContext.Consumer>
        </SocketContextProvider>
      </MemoryRouter>
    );

    // Check if socket instance is created and event listener is set up
    expect(io).toHaveBeenCalledWith(process.env.REACT_APP_SOCKET_URL);
    expect(mockSocket.on).toHaveBeenCalledWith('room:get', expect.any(Function));
  });
});
