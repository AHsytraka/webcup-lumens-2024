import "../styles/SupportLV.css"
import Modal from "../components/Modal"

function SupportLV1() {
    return (
        <div className="attacklv1-container">
        <div className="background-divs1"></div>
        <div className="background-divs2"></div>
        <Modal modalDescription={"Un quiz porté sur ce que vous blebleblebelebeblblablabbalablab"}/>
            <div className="level1-text">
                <div className="support-level-number">1</div>
                <div className="hero-in-formation">
                    <div>
                    </div>
                    <div className="hero-name"></div>
                </div>
                <div className="level-name">
                    Analyse de Situation
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
                    <button className="support-level-button">
                        <div className="button-text">Start Game</div>
                    </button>
                </div>
            </div>
            <div className="level1-3d">
                <div className="level-content"></div>
                <div className="bottom-content">
                    <button className="support-next-button">
                        <div className="next-text">
                            <div className="next-text">
                                next
                                <img src="src\assets\images\support-next.png" alt="next" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SupportLV1