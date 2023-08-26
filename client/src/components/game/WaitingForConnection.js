import { useContext } from "react";
import { SocketContext } from "./SocketContext";
import JoinLink from "./JoinLink";
import "./game.css";

const WaitingForConnection = () => {

  // Access room and player_2 from the context
  const { room, player_2 } = useContext(SocketContext);

  return (
    <div className='waitingContainer'>
      {!player_2 && room.type === "friend" && (
        <JoinLink
          link={`localhost:3000/room/${room.roomId}`}
        />
      )};
      {!player_2 && (
        <div className='waitingForOpponentContainer'>
          <p className='connectionText'>waiting for opponent connection...</p>
        </div>
      )}
    </div>
  );
};

export default WaitingForConnection;