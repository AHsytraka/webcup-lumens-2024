import "../styles/Loginpage.css"
import "../styles/ChooseType.css"
import {useEffect, useState} from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function ChooseType() {

    const navigate = useNavigate();
    const authUser = useAuthUser();

    const email = authUser.email;


    // const [attaque, setAttaque] = useState("");
    // const [defense, setDefense] = useState("");
    // const [support, setSupport] = useState("");
    const [category, setCategory] = useState("");
    const [powerdescription, setPowerDescription] = useState("");

    const chooseAtk = () => {
        setCategory("attaque");
    }

    const chooseDfs = () => {
        setCategory("defense");
    }

    const chooseSpt = () => {
        setCategory("support");
    }

    useEffect(() => {

    }, [category]);

    const handleHeroCategory = () => {

        const dataToUpdate = {category, powerdescription};

        if(!dataToUpdate || !category|| !powerdescription) {
            alert("completez");
            return;
        }


        try {
            const res = axios.post(`https://lumens.madagascar.webcup.hodi.host/api/heroes/${email}/update`, dataToUpdate);
                if(category ==="attaque") {
                    navigate("/formation/attaque")
                }
                else if(category === "defense")
                {
                    navigate("/formation/defense")

                } else {
                    navigate("/formation/support")
                }
        } catch (e)
        {
            console.error(e)
        }
    }


    return (
        <div className="choose-type-container">
            <div className="top-login">
                <p className="login-big-text">Description</p>
                <div className="redirection">
                    <svg width="32" height="32" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1763 1.94328C17.8925 0.624739 15.269 0.0130272 12.6376 0.185501C10.0061 0.357974 7.48494 1.30689 5.3928 2.91224C3.30066 4.5176 1.73154 6.70729 0.883881 9.20443C0.0362181 11.7016 -0.0519229 14.394 0.630605 16.9412C1.31313 19.4884 2.73567 21.7761 4.71834 23.5148C6.701 25.2536 9.15474 26.3653 11.7693 26.7096C14.3838 27.0538 17.0417 26.6149 19.4068 25.4486C21.7719 24.2822 23.7381 22.4407 25.0566 20.157C26.8247 17.0945 27.3039 13.4551 26.3886 10.0394C25.4734 6.62364 23.2387 3.71139 20.1763 1.94328ZM19.4623 16.5133C19.1605 16.5906 18.8405 16.5467 18.5707 16.3909C18.3009 16.2352 18.1028 15.98 18.0189 15.68L16.6033 10.4652L10.7116 20.6698C10.5569 20.9378 10.3021 21.1333 10.0032 21.2134C9.70436 21.2935 9.38591 21.2516 9.11795 21.0969C8.84998 20.9422 8.65445 20.6873 8.57437 20.3885C8.49429 20.0896 8.53621 19.7711 8.69092 19.5032L14.5243 9.39955L9.48134 10.7508C9.17943 10.8317 8.85775 10.7893 8.58707 10.6331C8.31638 10.4768 8.11886 10.2194 8.03797 9.91746C7.95707 9.61555 7.99942 9.29387 8.1557 9.02318C8.31198 8.7525 8.56939 8.55498 8.8713 8.47409L17.859 6.09024L20.2873 15.0844C20.3269 15.2323 20.3371 15.3867 20.3171 15.5386C20.2971 15.6905 20.2474 15.837 20.1708 15.9697C20.0941 16.1024 19.9921 16.2187 19.8706 16.312C19.749 16.4052 19.6103 16.4736 19.4623 16.5133Z" fill="black" />
                    </svg>
                </div>
            </div>
            <div className="choose-type-choice">
                <div className="choice"
                     onClick={chooseAtk}>
                    <div className="top-choice" >
                        <img src="src\assets\images\attack.png" alt="attack"/>
                        <svg className="arrow" width="52" height="52" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.4873 29.3172C10.5927 26.515 8.90088 20.2921 11.703 15.3974C14.5052 10.5028 20.7281 8.81098 25.6228 11.6131C30.5174 14.4153 32.2092 20.6382 29.4071 25.5329C26.6049 30.4275 20.382 32.1193 15.4873 29.3172ZM25.0266 12.6545C20.7047 10.1803 15.2187 11.6718 12.7444 15.9936C10.2702 20.3155 11.7617 25.8015 16.0835 28.2758C20.4054 30.75 25.8914 29.2585 28.3657 24.9367C30.8399 20.6148 29.3484 15.1288 25.0266 12.6545Z" fill="black" />
                            <path d="M24.3701 23.8246L22.5224 17.0285L15.7263 18.8761L15.4147 17.7298L23.3571 15.5705L25.5164 23.513L24.3701 23.8246Z" fill="black" />
                            <path d="M22.4191 16.0012L23.4605 16.5974L18.3928 25.4494L17.3513 24.8532L22.4191 16.0012Z" fill="black" />
                        </svg>
                    </div>
                    <div className="bottom-choice">
                        <p className="big-choice-text">Attaquant</p>
                        <p className="choice-text">lorem ipsum dolor sit armet, consect</p>
                    </div>
                </div>
                <div className="choice"
                     onClick={chooseDfs}>
                    <div className="top-choice">
                        <img src="src\assets\images\defence.png" alt="attack" />
                        <svg className="arrow" width="52" height="52" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.4873 29.3172C10.5927 26.515 8.90088 20.2921 11.703 15.3974C14.5052 10.5028 20.7281 8.81098 25.6228 11.6131C30.5174 14.4153 32.2092 20.6382 29.4071 25.5329C26.6049 30.4275 20.382 32.1193 15.4873 29.3172ZM25.0266 12.6545C20.7047 10.1803 15.2187 11.6718 12.7444 15.9936C10.2702 20.3155 11.7617 25.8015 16.0835 28.2758C20.4054 30.75 25.8914 29.2585 28.3657 24.9367C30.8399 20.6148 29.3484 15.1288 25.0266 12.6545Z" fill="black" />
                            <path d="M24.3701 23.8246L22.5224 17.0285L15.7263 18.8761L15.4147 17.7298L23.3571 15.5705L25.5164 23.513L24.3701 23.8246Z" fill="black" />
                            <path d="M22.4191 16.0012L23.4605 16.5974L18.3928 25.4494L17.3513 24.8532L22.4191 16.0012Z" fill="black" />
                        </svg>
                    </div>
                    <div className="bottom-choice">
                        <p className="big-choice-text">Défenceur</p>
                        <p className="choice-text">lorem ipsum dolor sit armet, consect</p>
                    </div>
                </div>
                <div className="choice"
                     onClick={chooseSpt}>
                    <div className="top-choice">
                        <img src="src\assets\images\support.png" alt="attack" />
                        <svg className="arrow" width="52" height="52" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.4873 29.3172C10.5927 26.515 8.90088 20.2921 11.703 15.3974C14.5052 10.5028 20.7281 8.81098 25.6228 11.6131C30.5174 14.4153 32.2092 20.6382 29.4071 25.5329C26.6049 30.4275 20.382 32.1193 15.4873 29.3172ZM25.0266 12.6545C20.7047 10.1803 15.2187 11.6718 12.7444 15.9936C10.2702 20.3155 11.7617 25.8015 16.0835 28.2758C20.4054 30.75 25.8914 29.2585 28.3657 24.9367C30.8399 20.6148 29.3484 15.1288 25.0266 12.6545Z" fill="black" />
                            <path d="M24.3701 23.8246L22.5224 17.0285L15.7263 18.8761L15.4147 17.7298L23.3571 15.5705L25.5164 23.513L24.3701 23.8246Z" fill="black" />
                            <path d="M22.4191 16.0012L23.4605 16.5974L18.3928 25.4494L17.3513 24.8532L22.4191 16.0012Z" fill="black" />
                        </svg>
                    </div>
                    <div className="bottom-choice">
                        <p className="big-choice-text">Support</p>
                        <p className="choice-text">lorem ipsum dolor sit armet, consect</p>
                    </div>
                </div>
            </div>

            <div className="description-container">
                <div className="top-login">
                    <p className="login-big-text">Description</p>
                    <div className="redirection" onClick={handleHeroCategory}>
                        <svg width="32" height="32" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.1763 1.94328C17.8925 0.624739 15.269 0.0130272 12.6376 0.185501C10.0061 0.357974 7.48494 1.30689 5.3928 2.91224C3.30066 4.5176 1.73154 6.70729 0.883881 9.20443C0.0362181 11.7016 -0.0519229 14.394 0.630605 16.9412C1.31313 19.4884 2.73567 21.7761 4.71834 23.5148C6.701 25.2536 9.15474 26.3653 11.7693 26.7096C14.3838 27.0538 17.0417 26.6149 19.4068 25.4486C21.7719 24.2822 23.7381 22.4407 25.0566 20.157C26.8247 17.0945 27.3039 13.4551 26.3886 10.0394C25.4734 6.62364 23.2387 3.71139 20.1763 1.94328ZM19.4623 16.5133C19.1605 16.5906 18.8405 16.5467 18.5707 16.3909C18.3009 16.2352 18.1028 15.98 18.0189 15.68L16.6033 10.4652L10.7116 20.6698C10.5569 20.9378 10.3021 21.1333 10.0032 21.2134C9.70436 21.2935 9.38591 21.2516 9.11795 21.0969C8.84998 20.9422 8.65445 20.6873 8.57437 20.3885C8.49429 20.0896 8.53621 19.7711 8.69092 19.5032L14.5243 9.39955L9.48134 10.7508C9.17943 10.8317 8.85775 10.7893 8.58707 10.6331C8.31638 10.4768 8.11886 10.2194 8.03797 9.91746C7.95707 9.61555 7.99942 9.29387 8.1557 9.02318C8.31198 8.7525 8.56939 8.55498 8.8713 8.47409L17.859 6.09024L20.2873 15.0844C20.3269 15.2323 20.3371 15.3867 20.3171 15.5386C20.2971 15.6905 20.2474 15.837 20.1708 15.9697C20.0941 16.1024 19.9921 16.2187 19.8706 16.312C19.749 16.4052 19.6103 16.4736 19.4623 16.5133Z"
                                fill="black"/>
                        </svg>
                    </div>
                </div>
                <div className="field-content">
                    <div className="field decription-field">
                        <textarea type="text" placeholder="My name is ..." value={powerdescription} onChange={e=> setPowerDescription(e.target.value)}></textarea>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChooseType