import { useEffect, useContext, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SocketContext } from "./SocketContext";
import WaitingForConnection from "./WaitingForConnection";
import Controls from "./Controls";
import match from "./images/match_dragon.png";
import noMatch from "./images/unmatch_dragon.png";
import "./game.css";
import star from "./images/star.svg";
import QuizSlider from "./QuizSlider/QuizSlider";
import Results from "./Results";

const GameRoom = () => {

  // State and context variables
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
  const swiperRef = useRef(null); 
  const [showNextButton, setShowNextButton] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [counter, setCounter] = useState(0);

  // UseEffect to join the room when the component mounts
  useEffect(() => {
    let roomId = location.pathname.split("/")[2];
    let size = Object.keys(socket).length;

    if (size > 0) {
      socket.emit("room:join", { roomId }, (err) => {
        if (err) navigate("/");
      });
    }
  }, [location.pathname, navigate, socket]);

  // UseEffect to calculate results and update game state
  useEffect(() => {
    const calculateResults = async () => {
      const players = room?.players;
      if (
        players &&
        players[player_1]?.optionLock === true &&
        players[player_2]?.optionLock === true
      ) {
        
        // Validate and update scores based on player options
        let result = { score: [1, 1], text: "Match" };
        if (players[player_1].option !== players[player_2].option) {
          result = validateOptions(
            `${players[player_1].option} ${players[player_2].option}`
          );
        }

        // Update player scores, result display, and emit room update
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

  // Check the selected option and update scores
  const validateOptions = (value) => {
    switch (value) {
      case "purple orange":
        return { score: [0, 0], text: "No Match" };
      case "orange purple":
        return { score: [0, 0], text: "No Match" };
      case "orange orange":
        return { score: [1, 1], text: "Match" };
      case "purple purple":
          return { score: [1, 1], text: "Match" };
      default:
        return { score: [0, 0], text: "No Match" };
    }
  };

  // After option buttons are selected, scores updates and states changed
  const matchOrNoMatch = (text, score) => {
    setResultText(text);

    setTimeout(() => {
      setResultText("");
      setShowNextButton(true);
      setShowControls(false);
      setCounter(counter + 1);
    }, 3000);

    const updatedScore = [
      room.players[player_1].score + score[0],
      room.players[player_2].score + score[1]
    ];

    const calculatedFinalScore = Math.floor(updatedScore[0] / 2);
    setFinalScore(calculatedFinalScore);
  
    socket.emit("room:update", room);
  };

  // Handle next question button click
  const handleNextButtonClick = () => {
    setShowNextButton(false);
    goToNextSlide();
    setShowControls(true);
  };

  // Go to the next slide in the swiper
  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="roomContainer">
      <WaitingForConnection />
      {player_2 && (
        <div>
          {counter < 10 && (
            <>
              <QuizSlider showNextButton={showNextButton} swiperRef={swiperRef} />
              {showNextButton && (
                <div className="buttonContainer">
                  <div className='container'>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <button className="nextQuestionButton" onClick={handleNextButtonClick}>
                         NEXT QUESTION
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {showControls && (
                <Controls />
              )}
              {player_2 && (
                <div className='container'>
                 <div className='row'>
                    <div className='col-sm-12'>
                      <div className='starContainer'>
                        {[...Array(10).keys()].map((ele, index) =>
                          index + 1 <= counter ? (
                            <img
                              key={index}
                              src={star}
                              alt="1 point star"
                              className='activeStar'
                            />
                          ) : (
                            <img 
                              key={index}
                              src={star}
                              alt="Empty star"
                              className='star'
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          {counter >= 10 && (
            <div className="resultsContainer">
              <Results finalScore={finalScore} />
            </div>
          )}
          {resultText === "Match" && (
            <img src={match} alt="Match" className='match' />
          )}
          {resultText === "No Match" && (
            <img src={noMatch} alt="No Match" className='noMatch' />
          )}
        </div>
      )}
    </div>
  );  
};

export default GameRoom;
