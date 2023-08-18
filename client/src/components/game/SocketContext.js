// Import necessary hooks and components from React and react-router-dom libraries
import { useEffect, useState, createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { io } from "socket.io-client";

// Create a new React Context to manage the socket and related data. a Context provides a way to pass data through the component tree without having to pass props manually at every level. It's a way to share state or other values between components that are not directly connected by the parent-child relationship
const SocketContext = createContext();

// Define a component that wraps its children with a context provider for managing socket and related data
const SocketContextProvider = ({ children }) => {
  // State variables to hold socket, room information, and player data
  const [socket, setSocket] = useState({});
  const [room, setRoom] = useState({});
  const [player_1, setPlayer_1] = useState("");
  const [player_2, setPlayer_2] = useState("");

  // Retrieve navigation functions and current location using custom React hooks
  const navigate = useNavigate();
  const location = useLocation();

  // This effect runs only once when the component mounts
  useEffect(() => {
    // Create a new socket connection using the provided URL from environment variables
    const socket = io(process.env.REACT_APP_SOCKET_URL);
    // Update the state with the socket instance
    setSocket(socket);

    // Set up an event listener to handle updates related to the "room:get" event
    socket.on("room:get", (payload) => {
      // Update the room state with the received payload
      setRoom(payload);

      // Extract player IDs from the room payload
      let play_1 = Object.keys(payload.players)[0];
      let play_2 = Object.keys(payload.players)[1];
      let rounds = Object.keys(payload.players)[2];

      // Determine the roles of the players based on their socket IDs
      if (play_1 === socket.id) {
        setPlayer_1(play_1);
        setPlayer_2(play_2);
      } else {
        setPlayer_1(play_2);
        setPlayer_2(play_1);
      }

      // Check if either player has reached a score of 3 and navigate to the result page if so
      if (
        payload?.players[rounds]?.score === 10
      ) {
        let pathname = "/result";
        // Check if the current path is already the result page before navigating
        if (pathname !== location.pathname) navigate(pathname);
      }

      // Log the player data for debugging purposes
      console.log(payload.players);
    });
  }, []); // The empty dependency array ensures that this effect runs only once after initial mount

  // Provide the socket, room, player data, and navigation functions to the children components via context
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

// Export the context provider and the context itself for other components to use
export { SocketContextProvider, SocketContext };