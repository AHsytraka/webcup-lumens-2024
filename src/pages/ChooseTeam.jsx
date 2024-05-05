import "../styles/Certificat.css"
import team1 from "../assets/images/team1.png"
import team2 from "../assets/images/team2.png"
import team3 from "../assets/images/team3.png"
import mate1 from "../assets/images/mate1.jpg"
import mate2 from "../assets/images/mate2.jpg"
import mate3 from "../assets/images/mate3.jpg"
import TeamCard from "../components/TeamCard"

function ChooseTeam() {
    return (
        <div className="certificat-container">
            <div className="top-certificat">
                <div className="certificate-name">HeroMe</div>
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
                <div className="chooseteam-little-text">Choisissez parmis la liste la team qui vous convient</div>
            </div>
            <div className="team-list">
                <TeamCard teamname={"X-Force"} teamphoto={team1} mate1={mate1} mate2={mate2} mate3={mate3} />
                <TeamCard teamname={"Guardians United"} teamphoto={team2} mate1={mate1} mate2={mate2} mate3={mate3} />
                <TeamCard teamname={"Eclipse Squadron"} teamphoto={team3} mate1={mate1} mate2={mate2} mate3={mate3} />
            </div>
        </div>
    )
}

export default ChooseTeam