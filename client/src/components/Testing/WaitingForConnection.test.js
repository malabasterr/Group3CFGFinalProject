import React from 'react';
import { render, screen } from '@testing-library/react';
import { SocketContext } from '../game/SocketContext';
import WaitingForConnection from '../game/WaitingForConnection';

describe('WaitingForConnection', () => {
  test('displays "waiting for opponent connection..." when player_2 is not present', () => {
    // Mock SocketContext values
    const contextValue = {
      room: { type: 'friend', roomId: 'mockRoomId' },
      player_2: null,
    };

    // Mock the JoinLink component
    const joinLinkText = 'localhost:3000/room/mockRoomId';
    const joinLinkMock = jest.fn(() => <div data-testid="join-link">{joinLinkText}</div>);
    jest.mock('../JoinLink-component/JoinLink', () => ({
      __esModule: true,
      default: joinLinkMock,
    }));

    // Render the component with SocketContext
    render(
      <SocketContext.Provider value={contextValue}>
        <WaitingForConnection />
      </SocketContext.Provider>
    );

    // Check if "waiting for opponent connection..." text is displayed
    expect(screen.getByText('waiting for opponent connection...')).toBeInTheDocument();
    
    // Check if JoinLink is not displayed
    expect(screen.queryByText(joinLinkText)).not.toBeInTheDocument();

    // Check if JoinLink component is not rendered
    expect(joinLinkMock).not.toHaveBeenCalled();
  });

});
