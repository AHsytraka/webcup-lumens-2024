import "../styles/AttackLV1.css"
import Modal from "../components/Modal"
import {Physics} from "@react-three/cannon";
import {PunchBagScene} from "../components/PunchBagScene.jsx";
import {Canvas} from "@react-three/fiber";
import {MazeScene} from "../components/MazeScene.jsx";

function AttackLV3() {
    return (
        <div className="attacklv1-container">
        <div className="background-diva1"></div>
        <div className="background-diva2"></div>
            <Modal modalDescription={"Restez attentif et observez bien l'image pour reperez tout les éléments incrustés!"}/>
            <div className="level1-text">
                <div className="level-number">1</div>
                <div >
                    <div >

                    </div>
                    <div className="hero-name"></div>
                </div>
                <div className="level-name">
                    Analyse Rapide
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
                    <button className="level-button">
                        <div className="button-text">Start Game</div>
                    </button>
                </div>
            </div>
            <div className="level1-3d">
                <div className="level-content">
                    <Canvas>
                        <MazeScene/>
                    </Canvas>
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

export default AttackLV3