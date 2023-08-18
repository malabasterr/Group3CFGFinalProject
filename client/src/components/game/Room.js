import { useEffect, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SocketContext } from "./SocketContext";
import WaitingForConnection from "./WaitingForConnection";
import Controls from "./Controls";
import match from "./images/match.png";
import noMatch from "./images/noMatch.png";
import "./game.css";
import star from "./images/star.svg";

const Room = () => {
  const [result, setResult] = useState({
    rotate: 0,
    show: false,
    reset: false,
  });
  const [resultText, setResultText] = useState("");
  const { socket, room, player_1, player_2 } = useContext(SocketContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [finalScore, setFinalScore] = useState(0);
  const [roundsPlayed, setRoundsPlayed] = useState(0);

  useEffect(() => {
    let roomId = location.pathname.split("/")[2];
    let size = Object.keys(socket).length;

    if (size > 0) {
      socket.emit("room:join", { roomId }, (err, room) => {
        if (err) navigate("/");
      });
    }
  }, [location.pathname, navigate, socket]);

  useEffect(() => {
    const calculateResults = async () => {
      const players = room?.players;
      if (
        players &&
        players[player_1]?.optionLock === true &&
        players[player_2]?.optionLock === true
      ) {
        let result = { score: [1, 1], text: "Match" };
        if (players[player_1].option !== players[player_2].option) {
          result = validateOptions(
            `${players[player_1].option} ${players[player_2].option}`
          );
        }

        room.players[player_1].score += result.score[0];
        room.players[player_2].score += result.score[1];

        matchOrNoMatch(result.text, result.score);

        room.players[player_1].optionLock = false;
        room.players[player_2].optionLock = false;

        socket.emit("room:update", room);

        setRoundsPlayed(roundsPlayed + 1);
      }
    };
    calculateResults();
  }, [room, socket, player_1, player_2, roundsPlayed]);

  const validateOptions = (value) => {
    switch (value) {
      case "green purple":
        return { score: [0, 0], text: "No Match" };
      case "purple green":
        return { score: [0, 0], text: "No Match" };
      case "purple purple":
        return { score: [1, 1], text: "Match" };
      case "green green":
          return { score: [1, 1], text: "Match" };
      default:
        return { score: [0, 0], text: "No Match" };
    }
  };

  const matchOrNoMatch = (text, score) => {
    setResultText(text);

    setTimeout(() => {
      setResultText("");
    }, 1500);

    const updatedScore = [
      room.players[player_1].score + score[0],
      room.players[player_2].score + score[1]
    ];

    const calculatedFinalScore = Math.floor(updatedScore[0] / 2);
    setFinalScore(calculatedFinalScore);
  
    socket.emit("room:update", room);
  };

  return (
    <div className="roomContainer">
      {player_2 && (
      <div className='starContainer'>
          {[...Array(10).keys()].map((ele, index) =>
            index + 1 <= finalScore ? (
              <img
                src={star}
                alt="1 point star"
                className='activeStar'
              />
            ) : (
              <img 
                src={star}
                alt="Empty star"
                className='star'
              />
            )
          )}
      </div>
      )}
      <WaitingForConnection />
      {player_2 && <Controls />}
      {resultText === "Match" && (
        <img src={match} alt="Match" className='match' />
      )}
      {resultText === "No Match" && (
        <img src={noMatch} alt="No Match" className='noMatch' />
      )}
    </div>
  );
};

export default Room;
