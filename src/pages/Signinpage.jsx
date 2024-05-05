import "../styles/Loginpage.css"
import useSignIn from "react-auth-kit/hooks/useSignIn";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Signinpage() {

    const signOut = useSignOut();
    const signIn = useSignIn();
    const navigate = useNavigate();

    const [heroname, setHeroname] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        signOut();
    }, []);

    const toRegister = () => {
        navigate('/register');
    }

    const handleSignin = async () => {
        const superHero = {heroname,password}

        if(!superHero || !heroname || !password) {
            alert("remplir les champs");
            return;
        }

        try {
            const res = await  axios.post("https://lumens.madagascar.webcup.hodi.host/api/token", superHero);

            if (signIn({
                auth: {
                    token: res.data.token,
                    type: 'Bearer'
                },
                userState: {
                    email:res.data.email
                }
            })) {
                navigate('/formation');
            }

        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className="signin-container">
            <div className="login-form">
                <div className="top-login">
                    <p className="login-big-text">Sign in</p>
                    <div className="redirection">
                        <p className="redirection-text">No account?</p>
                        <p className="redirection-link" onClick={toRegister}>Sign up</p>
                    </div>
                </div>
                <div className="field-content">
                    <div className="field">
                        <p className="text-field">Name</p>
                        <div className="field-field">
                            <input type="text" placeholder="Great Explosion Murder God" value={heroname} onChange={e => setHeroname(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field">
                        <p className="text-field">password</p>
                        <div className="field-field">
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="forgot">
                        Forgot password?
                    </div>
                </div>
                <button className="login-button" onClick={handleSignin}>
                    Sign in
                </button>
            </div>
        </div>
    )
}

export default Signinpage