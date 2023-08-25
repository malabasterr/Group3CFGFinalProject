import React, { useState } from 'react';
import "./game.css";
import BackHome from './BackHome';

const Results = (props) => {

    const [showResult, setShowResult] = useState(false);

    const handleShowResultButtonClick = () => {
        setShowResult(true);
    };

    return (
        <div className='result'>
            {showResult ? (
                <>
                    <p className='resultText'>Final Result = {props.finalScore}</p>
                    <BackHome />
                </>
            ) : (
                <button className="showResultButton" onClick={handleShowResultButtonClick}>Show our result!</button>
            )}
        </div>
    );
}

export default Results;

