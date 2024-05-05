import "../styles/Certificat.css"
import gsap from "gsap/gsap-core"

function CertificatSupport() {

    gsap.to("body", {
        overflowY: "hidden",
    })

    return (
        <div className="certificat-container">
            <div className="top-certificat">
                <div className="certificate-name">HeroMe</div>
                <div className="certificate-hero-name">Deku Midory</div>
                <div className="about-certification">
                    <div className="hero-certified">
                        <img src="src\assets\images\score.png" alt="" />
                        <div>129000</div>
                    </div>
                    <div className="certificat-profil">
                        <img src="" alt="" className="profilImage" />
                    </div>
                </div>
            </div>
            <div className="certificat-text">
                <div className="certificat-little-text">Certificat de fin de</div>
                <div className="certificat-big-text">Formation en 
                    <span className="hero-type-support"> Support</span>
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

export default CertificatSupport