import "../styles/NavBar.css"
import "../styles/HomeGsap.css"
import {useNavigate} from "react-router-dom";

function NavBar() {

    const navigate = useNavigate();

    const toSignin = () => {
        navigate("/Signin");
    }

    return (
        <div className="NavBar-container">
            <div className="lumensLogo">
                <h4>L u m e n s</h4>
            </div>
            <div className="list">

                <button className="headButton" onClick={toSignin}>
                    Join Us
                </button>
            </div>
        </div>
    )
}

export default NavBar
