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
                <div className="resultWrapper">
                    <div className="resultWrapperBorder">
                    <p className='resultHeader'>Final Result</p>
                    <p className='resultText'>{props.finalScore} / 10</p>
                    </div>
                    </div>
                    <BackHome />
                </>
            ) : (
                <button className="showResultButton" onClick={handleShowResultButtonClick}>Show your results!</button>
            )}
        </div>
    );
}

export default Results;

