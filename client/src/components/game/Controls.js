import { useState, useContext, useEffect } from "react";
import { SocketContext } from "./SocketContext";
import OrangeDragon from "./images/Dragon_Orange.png";
import PurpleDragon from "./images/Dragon_Purple.png";
import "./game.css";

function Controls() {
  const [option, setOption] = useState("");
  const { socket, room } = useContext(SocketContext);

  // Update the option state based on room data
  useEffect(() => {
    if (room.players[socket.id].optionLock) {
      setOption(room.players[socket.id].option);
    } else {
      setOption("");
    }
  }, [room, socket.id]);

  // Function to handle option selection
  const handleChange = ({ currentTarget: input }) => {
    setOption(input.value);
    room.players[socket.id].option = input.value;
    room.players[socket.id].optionLock = true;
    socket.emit("room:update", room);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='controlsContainer'>
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
                src={PurpleDragon}
                alt="Player One"
                className='optionButtonImg'
              />
              <p className="playerName">Player 1</p>
            </button>
            <button
              disabled={room.players[socket.id].optionLock}
              className={
                option === "orange"
                ? `optionButtonActive`
                : 'optionButton'
              }
              onClick={handleChange}
              value="orange"
            >
              <img
                src={OrangeDragon}
                alt="Player Two"
                className='optionButtonImg'
              />
              <p className="playerName">Player 2</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controls;
