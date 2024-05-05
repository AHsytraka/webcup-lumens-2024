import "../styles/NavBar.css"
import { Link } from 'react-router-dom';
import "../styles/HomeGsap.css"

function FloatBar() {

    return (
        <div className="floatBar-container">
            <div className="floatLogo">
                Lumens
            </div>
            <div className="float">
                <div className="floatList">
                    <Link to="/signin">
                        <div className="floatLink">Join us</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FloatBar
