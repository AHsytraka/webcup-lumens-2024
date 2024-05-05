import "../styles/DefenseLV.css"
import Modal from "../components/Modal"
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import '../styles/ball.css';
function DefenseLV1() {
    
    let counterBall = 0;
    const ballRef = [useRef(null), useRef(null),useRef(null), useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)];
    function Ball({ delay, id, margina }) {
        const [opacity, setOpacity] = useState(1);
      
        const handleClick = () => {
          setOpacity(0);
          counterBall += 5;
          console.log(counterBall);
        };
        useEffect(() => {
          gsap.to(`#ball-${id}`, {
            y: 700,
            duration: 5,
            marginLeft: margina,
            delay: delay,
            ease: "linear",
            onComplete: () => {
              gsap.set(`#ball-${id}`, {
                opacity: 0
              });
            }
          });
        }, [delay, id, margina]);
      
        return (
          <div id={`ball-${id}`} className="ball" style={{ opacity: opacity, marginLeft: margina }} onClick={handleClick}></div>
        );
      }

   
    return (
        <div className="attacklv1-container">
        <div className="background-divd1"></div>
        <div className="background-divd2"></div>
            <Modal modalDescription={"Bloquez un maximum de balle avant qu'ils n'atteignent la fin de la page"}/>
            <div className="level1-text">
                <div className="defense-level-number">1</div>
                <div className="hero-in-formation">
                    <div className="hero-profil">

                    </div>
                    <div className="hero-name"></div>
                </div>
                <div className="level-name">
                    Bloc Technics
                </div>
                <div className="hero-score">
                    <div className="level-timer">
                        <p>Time</p>
                        <p className="level-value">00:00MS</p>
                    </div>
                    <div className="level-score">
                        <p>Score</p>
                        <p className="level-value" >{counterBall} PTS</p>
                    </div>
                </div>
                <div className="bottom-level">
                    <button className="defense-level-button">
                        <div className="button-text">Start Game</div>
                    </button>
                </div>
            </div>
            <div className="level1-3d">
                <div>
                    <Ball ref={ballRef} delay={5} id={1} margina={300}/>
                    <Ball ref={ballRef} delay={1} id={2} margina={10}/>
                    <Ball ref={ballRef} delay={3} id={3} margina={50}/>
                    <Ball ref={ballRef} delay={2} id={4} margina={100}/>
                    <Ball ref={ballRef} delay={4} id={5} margina={200}/>
                    <Ball ref={ballRef} delay={4} id={6} margina={40}/>
                    <Ball ref={ballRef} delay={6} id={7} margina={250}/>
                    <Ball ref={ballRef} delay={1} id={8} margina={350}/>
                    <Ball ref={ballRef} delay={5} id={9} margina={450}/>
                </div>
                <div className="level-content">
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

export default DefenseLV1