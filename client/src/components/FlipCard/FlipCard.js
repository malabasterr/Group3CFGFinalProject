import React from 'react';
import './FlipCard.css';
import eleri from './images/AvatarMaker.png';
import maddy from './images/MadsMaker.png';
import kudzai from './images/KudzaiMaker.png';
import megan from './images/MegMaker.png';
import niki from './images/NikiAvatar.png';




function FlipCard({ children }) {
    return (
        <div className="container">
              <div className="row row-cols-5">
                  <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={maddy} alt="Kudzai" />      
                            </div>
                                <div className="flip-card-back">
                                    <h6 className="flip-card-header">Maddy</h6>
                                    <p className="flip-card-subhead">Game Creator Guru</p>
                                </div>
                        </div>
                    </div>
                   </div>
                   <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={kudzai} alt="Kudzai" />      
                            </div>
                                <div className="flip-card-back">
                                    <h6 className="flip-card-header">Kudzai</h6>
                                    <p className="flip-card-subhead">The Database Darling</p>
                                </div>
                        </div>
                    </div>
                   </div>
                   <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={niki} alt="Niki" />      
                            </div>
                                <div className="flip-card-back">
                                    <h6 className="flip-card-header">Niki</h6>
                                    <p className="flip-card-subhead">The Login Legend</p>
                                </div>
                        </div>
                    </div>
                   </div>
                   <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={megan} alt="Kudzai"/>      
                            </div>
                                <div className="flip-card-back">
                                    <h6 className="flip-card-header">Megan</h6>
                                    <p className="flip-card-subhead">Carousel Queen</p>
                                </div>
                        </div>
                    </div>
                   </div>
                   <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={eleri} alt="Eleri"/>      
                            </div>
                                <div className="flip-card-back">
                                    <h6 className="flip-card-header">Eleri</h6>
                                    <p className="flip-card-subhead">GitHub Merger Monster</p>
                                </div>
                        </div>
                    </div>
                   </div>
            </div>
        </div>
    );
}

export default FlipCard;

