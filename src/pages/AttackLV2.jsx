import "../styles/AttackLV1.css"
import Modal from "../components/Modal"
import Motionn from "../components/motion.jsx";
import React, { useEffect, useState } from "react";

function AttackLV2() {
    const [score, setScore] = useState(0);

    // Function to update the score
    const updateScore = (newScore) => {
      setScore(newScore);
    };
    return (
        <div className="attacklv1-container">
        <div className="background-diva1"></div>
        <div className="background-diva2"></div>
            <Modal modalDescription={"Suivez le cercle avec la souris, restez au dessus et obtenez des points!"}/>
            <div className="level1-text">
                <div className="level-number">2</div>
                <div className="hero-in-formation">
                    <div >

                    </div>
                    <div className="hero-name"></div>
                </div>
                <div className="level-name">
                    Mouvement <br/> Training
                </div>
                <div className="hero-score">
                    <div className="level-timer">
                        <p>Time</p>
                        <p className="level-value">00:00MS</p>
                    </div>
                    <div className="level-score">
                        <p>Score</p>
                        <p className="level-value">{score}PTS</p>
                    </div>
                </div>
                <div className="bottom-level">
                    <button className="level-button">
                        <div className="button-text">Start Game</div>
                    </button>
                </div>
            </div>
            <div className="level1-3d">
                <div className="level-content">
                    <Motionn updateScore={updateScore}/>
                </div>
                <div className="bottom-content">
                    <button className="next-button">
                        <div className="next-text">
                            <div className="next-text">
                                next
                                <img src="src\assets\images\next.png" alt="next" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AttackLV2