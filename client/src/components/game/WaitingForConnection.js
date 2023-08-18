import { useContext } from "react";
import { SocketContext } from "./SocketContext";
import "./game.css";

const WaitingForConnection = () => {

  const { player_2 } = useContext(SocketContext);

  return (
    <div className='playerContainer'>
      {!player_2 && (
        <div className='opponentContainer'>
          <p className='connectionText'>waiting for opponent connection...</p>
        </div>
      )}
    </div>
  );
};

export default WaitingForConnection;