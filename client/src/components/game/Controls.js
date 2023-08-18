import { useState, useContext, useEffect } from "react";
import { SocketContext } from "./SocketContext";
import greenDragon from "./images/greenDragon.avif";
import purpleDragon from "./images/purpleDragon.png";
import "./game.css";

function Controls() {
  const [option, setOption] = useState("");
  const { socket, room } = useContext(SocketContext);

  useEffect(() => {
    if (room.players[socket.id].optionLock) {
      setOption(room.players[socket.id].option);
    } else {
      setOption("");
    }
  }, [room]);

  const handleChange = ({ currentTarget: input }) => {
    setOption(input.value);
    room.players[socket.id].option = input.value;
    room.players[socket.id].optionLock = true;
    socket.emit("room:update", room);
  };

  return (
    <div className='controlsContainer'>
      <button
        disabled={room.players[socket.id].optionLock}
        className={
          option === "green"
            ? `optionButtonActive`
            : 'optionButton'
        }
        onClick={handleChange}
        value="green"
      >
        <img
          src={greenDragon}
          alt="green dragon"
          className='optionButtonImg'
        />
        <p className="playerName">Player 1</p>
      </button>
      <button
        disabled={room.players[socket.id].optionLock}
        className={
          option === "purple"
            ? `optionButtonActive`
            : 'optionButton'
        }
        onClick={handleChange}
        value="purple"
      >
        <img
          src={purpleDragon}
          alt="purple dragon"
          className='optionButtonImg'
        />
        <p className="playerName">Player 2</p>
      </button>
    </div>
  );
}

export default Controls;
