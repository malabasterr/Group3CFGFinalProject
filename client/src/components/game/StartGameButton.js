import { useContext } from "react";
import { SocketContext } from "./SocketContext";
import "./game.css";

const StartGameButton = ({ type }) => {
  const { socket, navigate } = useContext(SocketContext);

  // Function to handle starting the game
  const handleChange = (type) => {
    // Emit room creation and navigate to the new room
    socket.emit("room:create", { type }, (err, roomId) => {
      navigate(`/room/${roomId}`);
    });
  };

  return (
    <button className='startGameButton' onClick={() => handleChange(type)}>Start Game</button>
  );
};

export default StartGameButton;
