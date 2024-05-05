import ServiceCard from "../components/ServiceCards.jsx";
import reasonIcon1 from "../assets/images/reason2.png";
import reasonIcon2 from "../assets/images/reason3.png";
import reasonIcon3 from "../assets/images/reason4.png";
import reasonIcon4 from "../assets/images/reason1.png";
import NavBar from "../components/NavBar.jsx";
import FloatBar from "../components/FloatBar.jsx";
import ReasonWhy from "../components/ReasonWhy.jsx";
import LumensFooter from "../components/LumensFooter.jsx";
import {Suspense, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../styles/HomeGsap.css"
import "../styles/Home.css"
import "../styles/Home3D.css"
import { useGSAP } from "@gsap/react";
import { addSy, removeSy, addNat, removeNat, addRon, removeRon, addBoussa, removeBoussa } from "../hooks/AddRemove.jsx";
import {Canvas} from "@react-three/fiber";
import {WelcomScene} from "../components/WelcomScene.jsx";


const Accueil = () => {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".lumensLogo", {
            yPercent: -80,
            ease: 'back',
            duration: 0.60,
            scrollTrigger: {
                trigger: ".welcome",
                toggleActions: "play reverse restart reverse",
                start: "top 80%",
                end: "64% 60%",
            }
        });

        gsap.from(".list", {
            yPercent: -80,
            ease: 'back',
            duration: 1,
            scrollTrigger: {
                trigger: ".welcome",
                toggleActions: "play reverse restart reverse",
                start: "top 80%",
                end: "64% 60%",
                // markers: true,
            },
        });

        gsap.to(".floatBar-container", {
            marginTop: "0px",
            ease: "back.inOut",
            duration: 1,
            scrollTrigger: {
                trigger: ".welcome",
                toggleActions: "restart reverse restart reverse",
                start: "68% 60%",
                end: "384% 80%",
                // markers: true,
            }
        })

        gsap.from(".homeText1", {
            yPercent: 300,
            ease: 'back',
            duration: 0.80,
            scrollTrigger: {
                trigger: ".welcome",
                toggleActions: "play reverse restart reverse",
                start: "top 80%",
                end: "100% 60%",
                // markers: true,
            },
        });

        gsap.from(".homeText2", {
            yPercent: 300,
            ease: 'back',
            duration: 0.80,
            scrollTrigger: {
                trigger: ".welcome",
                toggleActions: "play reverse restart reverse",
                start: "top 80%",
                end: "100% 60%",
                // markers: true,
            }
        });

        gsap.from(".cardBigTitle", {
            yPercent: 150,
            ease: 'back.out',
            duration: 1,
            scrollTrigger: {
                trigger: ".cards",
                toggleActions: "restart reverse restart reverse",
                start: "25% 80%",
                end: "100% 60%",
            },
        });

        gsap.from(".cardsText2", {
            yPercent: 400,
            ease: 'back.out',
            duration: 0.80,
            scrollTrigger: {
                trigger: ".cards",
                toggleActions: "restart reverse restart reverse",
                start: "25% 80%",
                end: "100% 60%",
            },
        });

        gsap.from(".cardList .listOfCard", {
            yPercent: 100,
            ease: "back",
            duration: 0.5,
            scale: 0.8,
            stagger: 0.1,
            autoAlpha: 0.5,
            scrollTrigger: {
                trigger: ".cards",
                toggleActions: "restart reverse restart reverse",
                start: "70% 80%",
                end: "100% 60%",
                // markers: true,
            },
        });
    });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".textLogo", {
            width: 0,
            overflow: "hidden",
            xPercent: -100,
            ease: "back.inOut",
            duration: 1,
            scrollTrigger: {
                trigger: ".advantages",
                toggleActions: "restart none none reverse",
                start: "-45% top",
                // markers: true,
            }
        });

        gsap.to(".textLoop", {
            width: "100%",
            overflow: "hidden",
            ease: "back.inOut",
            duration: 1,
            scrollTrigger: {
                trigger: ".advantages",
                toggleActions: "restart none none reverse",
                start: "-45% top",
                // markers: true,
            }
        });

    }, []);
    
    addSy()
    removeSy()
    addNat()
    removeNat()
    addRon()
    removeRon()
    addBoussa()
    removeBoussa()

    return (
        <div id="smooth-wrappers">
            <div id="smooth-contents">
                <div className="welcome">
                    <FloatBar/>
                    <NavBar/>

                    <div className="welcome-scene">
                        <Canvas shadows camera={{position: [0, 1, 10], fov: 15}}>
                            <Suspense fallback={null}>
                                <fog attach="fog" args={['#0f0f0f', 8.5, 12]}/>
                                <WelcomScene/>
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="homeText">
                        {/*<div className="clip unselect">*/}
                        {/*    <p className="homeText1">*/}
                        {/*        Welcome to Lumens! We are a dynamic and <br/>*/}
                        {/*        innovative Students specializing in Web Design <br/>*/}
                        {/*        who just want the best for all of YOU <br/>*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        <div className="clip unselect">
                            <p className="homeText2">
                                 Devenez un <br/>
                                Super Hero NEXT GEN
                            </p>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="cardsParallax">
                        <div className="cardsText">
                            <div className="clip">
                                <div className="cardBigTitle">
                                    <div className="star">
                                    </div>
                                    <p className="cardTitle cardBigText">NEXT GEN ?</p>
                                </div>
                            </div>
                            <div className="clip">
                                <p className="cardsText2">
                                    Nos Supers Heros sont les meilleurs ...
                                </p>
                            </div>
                        </div>
                        <div className="cardList">
                            <div className="listOfCard" data-lag="2">
                                <ServiceCard iconUrl={1} tag={""} MiniTitle={""} miniText={"Super attaquant"} />
                            </div>
                            <div className="listOfCard" data-lag="1.75">
                                <ServiceCard iconUrl={2} tag={""} MiniTitle={""} miniText={"Super defenseur"} />
                            </div>
                            <div className="listOfCard" data-lag="1.5">
                                <ServiceCard iconUrl={3} tag={""} MiniTitle={""} miniText={"Super stratège"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="parallaxSection">
                    <div className="advantages">
                        <div className="chooseUs">
                            <p className="chooseTitle"> Avoir des pouvoirs?</p>
                            <p className="theReasonWhy">
                                Avoir des pouvoirs implique effectivement d'avoir des responsabilités. Cela signifie que chaque action entreprise avec ces pouvoirs doit être mesurée et réfléchie, car les conséquences peuvent affecter non seulement l'individu qui les détient, mais aussi ceux qui l'entourent.</p>
                        </div>
                        <div className="reasonIllustration">
                            <div className="mediumFlame">
                                <img src="" alt="" className="mediumFlameSize" />
                            </div>
                            <div className="reasonList">
                                <div className="reasonCard">
                                    <ReasonWhy reasonIcon={reasonIcon1} reasonTitle={"Responsable"} reasonDescript={""} />
                                </div>
                                <div className="reasonCard">
                                    <ReasonWhy reasonIcon={reasonIcon2} reasonTitle={"Dynamique"} reasonDescript={""} />
                                </div>
                                <div className="reasonCard">
                                    <ReasonWhy reasonIcon={reasonIcon3} reasonTitle={"Sobre"} reasonDescript={""} />
                                </div>
                                <div className="reasonCard">
                                    <ReasonWhy reasonIcon={reasonIcon4} reasonTitle={"Energique"} reasonDescript={""} />
                                </div>
                            </div>
                        </div>
                        <div className="textLoopContent">
                            <p className="textLogo">Lumens</p>
                            <div className="textLoop">
                                <div className="allText">
                                    <span className="animSpan">Responsable</span>
                                    <span className="animSpan">Dynamique</span>
                                    <span className="animSpan">Sobre</span>
                                    <span className="animSpan">Calme</span>
                                    <span className="animSpan">Energique</span>
                                    <span className="animSpan">Responsable</span>
                                    <span className="animSpan">Dynamique</span>
                                    <span className="animSpan">Sobre</span>
                                    <span className="animSpan">Calme</span>
                                    <span className="animSpan">Energique</span>
                                    <span className="animSpan">Responsable</span>
                                    <span className="animSpan">Dynamique</span>
                                    <span className="animSpan">Sobre</span>
                                    <span className="animSpan">Calme</span>
                                    <span className="animSpan">Energique</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div><LumensFooter /></div>
                </div>
            </div>
        </div>
    );
}

export default Accueil;
