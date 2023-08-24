import React from 'react';
import './FlipCard.css';
import rainbow from '../images/rainbowwelsh.png'; // sample path

function FlipCard({ children }) {
    return (
        <div className="container">
              <div className="row row-cols-5">
                  <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={rainbow} alt="Kudzai" className='Kudzai' />      
                            </div>
                                <div className="flip-card-back">
                                    <h6 className='namePadding'>Maddy</h6>
                                    <p>She loves to Sing!</p>
                                </div>
                        </div>
                    </div>
                   </div>
                   <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={rainbow} alt="Kudzai" className='Kudzai' />      
                            </div>
                                <div className="flip-card-back">
                                    <h6 className='namePadding'>Kudzai</h6>
                                    <p>Login to your personal account.</p>
                                </div>
                        </div>
                    </div>
                   </div>
                   <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={rainbow} alt="Kudzai" className='Kudzai' />      
                            </div>
                                <div className="flip-card-back">
                                    <h6 className='namePadding'>Niki</h6>
                                    <p>Login to your personal account.</p>
                                </div>
                        </div>
                    </div>
                   </div>
                   <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={rainbow} alt="Kudzai" className='Kudzai' />      
                            </div>
                                <div className="flip-card-back">
                                    <h6 className='namePadding'>Megan</h6>
                                    <p>Login to your personal account.</p>
                                </div>
                        </div>
                    </div>
                   </div>
                   <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={rainbow} alt="Kudzai" className='Kudzai' />      
                            </div>
                                <div className="flip-card-back">
                                    <h6 className='namePadding'>Eleri</h6>
                                    <p>Login to your personal account.</p>
                                </div>
                        </div>
                    </div>
                   </div>
            </div>
        </div>
    );
}

export default FlipCard;

