import "../styles/Certificat.css"
import gsap from "gsap/gsap-core"
import axios from "axios";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {useEffect, useState} from "react";

function Certificat() {

    const authUser = useAuthUser();

    const email = authUser.email;

    const [heroname, setHeroname] = useState();

    gsap.to("body", {
        overflowY: "hidden",
    })

    const fetchName = async () => {
        try {
            const res = await axios.get(`https://lumens.madagascar.webcup.hodi.host/api/heroes/${email}/infos/heroname`);
            setHeroname(res.data.heroname)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchName();
    }, []);

    return (
        <div className="certificat-container">
            <div className="top-certificat">
                <div className="certificate-name">HeroMe</div>
                <div className="certificate-hero-name">{heroname}</div>
                <div className="about-certification">

                </div>
            </div>
            <div className="certificat-text">
                <div className="certificat-little-text">Certificat de fin de</div>
                <div className="certificat-big-text">Formation en <br/>
                    <span className="hero-type"> SUPER HERO</span>
                </div>
            </div>
            <div className="five-cards">
                <div className="hero-card" id="one-card"></div>
                <div className="hero-card" id="two-card"></div>
                <div className="hero-card" id="three-card"></div>
                <div className="hero-card" id="four-card"></div>
                <div className="hero-card" id="five-card"></div>
            </div>
        </div>
    )
}

export default Certificat