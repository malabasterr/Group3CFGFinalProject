import { useEffect, useState, createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { io } from "socket.io-client";

// Create a context to hold the socket-related states and functions
const SocketContext = createContext();

// Create a provider component that encapsulates the socket-related logic
const SocketContextProvider = ({ children }) => {

  const [socket, setSocket] = useState({});
  const [room, setRoom] = useState({});
  const [player_1, setPlayer_1] = useState("");
  const [player_2, setPlayer_2] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Create a socket instance and set it to the state
    const socket = io(process.env.REACT_APP_SOCKET_URL);
    setSocket(socket);

    // Set up the event listener to update room data
    socket.on("room:get", (payload) => {
      setRoom(payload);

      // Determine player 1 and player 2 based on socket IDs
      let play_1 = Object.keys(payload.players)[0];
      let play_2 = Object.keys(payload.players)[1];

      // Set player 1 and player 2 states accordingly
      if (play_1 === socket.id) {
        setPlayer_1(play_1);
        setPlayer_2(play_2);
      } else {
        setPlayer_1(play_2);
        setPlayer_2(play_1);
      }

    });
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
        room,
        setRoom,
        player_1,
        player_2,
        navigate,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContextProvider, SocketContext };
