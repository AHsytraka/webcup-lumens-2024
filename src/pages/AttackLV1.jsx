import React, { useState, useEffect } from "react";
import "../styles/AttackLV1.css";
import Modal from "../components/Modal";
import { Canvas } from "@react-three/fiber";
import { PunchBagScene } from "../components/PunchBagScene.jsx";
import { Physics } from "@react-three/cannon";

function AttackLV1() {

    const [timeRemaining, setTimeRemaining] = useState(10); // Temps initial du compte à rebours en secondes
    const [gameStarted, setGameStarted] = useState(false); // Variable booléenne pour indiquer si le jeu a commencé ou non
    const [inc, setInc] = useState(0); // État local pour stocker la valeur de inc

    // Cette fonction démarre le compte à rebours et met à jour gameStarted
    const [buttonDisabled, setButtonDisabled] = useState(false); // État pour gérer la désactivation du bouton

    const startGame = () => {
        setTimeRemaining(10); // Réinitialise le temps restant à sa valeur initiale
        setGameStarted(true);
        setButtonDisabled(true); // Désactiver le bouton au démarrage du jeu
        document.getElementById('start').className = 'level-button-hidden';
    };

    const updateInc = (newInc) => {
        setInc(inc+newInc*10);
    };

    // Cette fonction arrête le jeu, réinitialise gameStarted et arrête le compte à rebours
    const stopGame = () => {
        setGameStarted(false);
        document.getElementById("next").className = "next-button-active";
    };

    // Cette fonction met à jour le temps restant toutes les secondes
    useEffect(() => {
        let timerInterval;
        if (gameStarted) {
            timerInterval = setInterval(() => {
                setTimeRemaining((prevTime) => {
                    if (prevTime > 0) {
                        return prevTime - 1;
                    } else {
                        stopGame(); // Arrête le jeu lorsque le temps restant atteint 0
                        return 0;
                    }
                });
            }, 1000);
        }
        // Nettoie l'intervalle lorsque le composant est démonté ou lorsque le jeu est arrêté
        return () => clearInterval(timerInterval);
    }, [gameStarted]);

    // Cette fonction formate le temps restant en format MM:SS
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    return (
        <div className="attacklv1-container">
            <div className="background-diva1"></div>
            <div className="background-diva2"></div>
            <Modal modalDescription={"Le but est de taper le plus possible sur le punching bag durant le temps impartis, ne vous retenez pas et surpassez-vous! C'est ici que débute votre formation"}/>
            <div className="level1-text">
                <div className="level-number">1</div>
                <div >
                    <div >
                    </div>
                    <div className="hero-name"></div>
                </div>
                <div className="level-name">
                    Technique de frappe
                </div>
                <div className="hero-score">
                    <div className="level-timer">
                        <p>Time</p>
                        <p className="level-value">{formatTime(timeRemaining)}</p>
                    </div>
                    <div className="level-score">
                        <p>Score</p>
                        <p className="level-value">{inc}PTS</p>
                    </div>
                </div>
                <div className="bottom-level">
                    <button className="level-button" id="start" onClick={startGame} disabled={buttonDisabled}>
                        <div className="button-text">Start Game</div>
                    </button>
                </div>
            </div>
            <div className="level1-3d">
                <div className="level-content">
                    <Canvas>
                        <Physics>
                            <PunchBagScene gameStarted={gameStarted} updateInc={updateInc} />
                        </Physics>
                    </Canvas>
                </div>
                <div className="attack-bottom-content">
                    <button className="next-button" id="next">
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

export default AttackLV1