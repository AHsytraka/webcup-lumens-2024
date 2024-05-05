import "../styles/Register.css"
import "../styles/Loginpage.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import useSignOut from "react-auth-kit/hooks/useSignOut";

export function Register() {

    const signIn = useSignIn();
    const signOut = useSignOut();
    const navigate = useNavigate();

    const [heroname, setHeroname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [powerdescription, setPowerdescription] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        signOut();
    }, []);

    const toSignin = () => {
        navigate("/signin")
    }

    const handleRegister = async () => {
        const superHero = {heroname, powerdescription, category,password}

        if(!superHero || !heroname || !email || !password) {
            alert("remplir les champs");
            return;
        }

        try {
            const res = await  axios.post(`https://lumens.madagascar.webcup.hodi.host/api/registration/${email}`, superHero);

            if (signIn({
                auth: {
                    token: res.data.token,
                    type: 'Bearer'
                },
                userState: {
                    // name: heroname,
                    email:email
                }
            })) {
                navigate('/choosetype');
            }

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className="register-container">
                <section>
                    <div className="login-form">

                        <div className="top-login">
                            <p className="login-big-text">Register</p>
                            <div className="redirection">
                                <p className="redirection-text">Have an account?</p>
                                <p className="redirection-link" onClick={toSignin}>Sign in</p>
                            </div>
                        </div>
                        <div className="field-content">
                            <div className="field">
                                <p className="text-field">Name</p>
                                <div className="field-field">
                                    <input type="text" placeholder="Great Explosion Murder God" value={heroname}
                                           onChange={e => setHeroname(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field">
                                <p className="text-field">mail</p>
                                <div className="field-field">
                                    <input type="text" placeholder="bakugo.katsuki@gmail.com" value={email}
                                           onChange={e => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field">
                                <p className="text-field">password</p>
                                <div className="field-field">
                                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            {/*<div className="forgot">*/}
                            {/*    Forgot password?*/}
                            {/*</div>*/}
                        </div>
                        <button className="login-button" onClick={handleRegister}>
                            Sign in
                        </button>
                    </div>
                </section>
                    <section className="register-scene-container">
                </section>
            </div>
        </>
    )
}