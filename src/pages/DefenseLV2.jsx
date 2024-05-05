import "../styles/DefenseLV.css"
import QuizLevel from "../components/QuizLevel"
import Modal from "../components/Modal.jsx";
import React from "react";

function DefenseLV2() {
    return (
        <div className="attacklv1-container">
            <div className="background-divd1"></div>
            <div className="background-divd2"></div>
            <Modal modalDescription={""}/>

            <div className="level1-text">
                <div className="defense-level-number">2</div>
                <div className="hero-in-formation">
                    <div>
                    </div>
                    <div className="hero-name"></div>
                </div>
                <div className="level-name">
                    Position Quiz
                </div>
                <div className="hero-score">
                    <div className="level-timer">
                        <p>Time</p>
                        <p className="level-value">00:00MS</p>
                    </div>
                    <div className="level-score">
                        <p>Score</p>
                        <p className="level-value">0PTS</p>
                    </div>
                </div>
                <div className="bottom-level">
                    <button className="defense-level-button">
                        <div className="button-text">Start Game</div>
                    </button>
                </div>
            </div>
            <div className="level1-3d">
                <div className="level-content">
                    <QuizLevel />
                </div>
                <div className="bottom-content">
                    <button className="defense-next-button">
                        <div className="next-text">
                            <div className="next-text">
                                next
                                <img src="src\assets\images\defence-next.png" alt="next" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DefenseLV2