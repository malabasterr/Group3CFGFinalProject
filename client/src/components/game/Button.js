import { useContext } from "react";
import { SocketContext } from "./SocketContext";
import "./game.css";

const Button = ({ type }) => {
  const { socket, navigate } = useContext(SocketContext);

  const handleChange = (type) => {
    socket.emit("room:create", { type }, (err, roomId) => {
      navigate(`/room/${roomId}`);
    });
  };

  return (
    <button className='startButton' onClick={() => handleChange(type)}>Start game</button>
  );
};

export default Button;
