import "../componentStyles/QuizLevel.css"

function QuizLevel() {
    return (
        <div className="quiz-container">
            <div className="top-quiz">
                <div className="quiz-number">1- Question</div>
                <svg width="32" height="32" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.1763 1.96257C17.8925 0.644026 15.269 0.0323144 12.6376 0.204788C10.0061 0.377261 7.48494 1.32617 5.3928 2.93153C3.30066 4.53688 1.73154 6.72658 0.883881 9.22371C0.0362178 11.7208 -0.0519226 14.4133 0.630605 16.9605C1.31313 19.5077 2.73567 21.7954 4.71834 23.5341C6.701 25.2729 9.15474 26.3846 11.7693 26.7288C14.3838 27.073 17.0417 26.6342 19.4068 25.4679C21.7719 24.3015 23.7381 22.46 25.0566 20.1762C26.8247 17.1138 27.3039 13.4744 26.3886 10.0587C25.4734 6.64293 23.2387 3.73068 20.1763 1.96257ZM19.4623 16.5326C19.1605 16.6099 18.8405 16.566 18.5707 16.4102C18.3009 16.2545 18.1028 15.9992 18.0189 15.6992L16.6033 10.4845L10.7116 20.6891C10.5569 20.9571 10.3021 21.1526 10.0032 21.2327C9.70436 21.3128 9.38591 21.2709 9.11795 21.1162C8.84998 20.9615 8.65445 20.7066 8.57437 20.4078C8.49429 20.1089 8.53621 19.7904 8.69092 19.5225L14.5243 9.41884L9.48134 10.7701C9.17943 10.851 8.85775 10.8086 8.58707 10.6523C8.31638 10.4961 8.11886 10.2387 8.03797 9.93675C7.95707 9.63484 7.99942 9.31316 8.1557 9.04247C8.31198 8.77179 8.56939 8.57427 8.8713 8.49337L17.859 6.10952L20.2873 15.1036C20.3269 15.2516 20.3371 15.406 20.3171 15.5579C20.2971 15.7098 20.2474 15.8563 20.1708 15.989C20.0941 16.1217 19.9921 16.238 19.8706 16.3312C19.749 16.4245 19.6103 16.4929 19.4623 16.5326Z" fill="#FFC047" />
                </svg>
            </div>
            <div className="question">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem commodi doloribus qui magnam ex, enim, quod consectetur, blanditiis rem accusantium repellat optio cum ipsum! Iusto voluptatum velit aliquid cupiditate sunt.
            </div>
            <div className="answer">
                <textarea name="" id="" cols="30" rows="10" placeholder="Votre réponse"></textarea>
            </div>
            {/* <div className="check-answer">
                <div className="responses">
                    <div className="row-response">
                        <div className="checkbox"></div>
                        <div className="response-text">Sortir la poubelle</div>
                    </div>
                    <div className="row-response">
                        <div className="checkbox"></div>
                        <div className="response-text">Sortir la poubelle</div>
                    </div>
                    <div className="row-response">
                        <div className="checkbox"></div>
                        <div className="response-text">Sortir la poubelle</div>
                    </div>
                </div>
            </div> */}
            <div className="bottom-quiz">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.53125 16.125L3.90625 10.5L9.53125 4.875M4.6875 10.5H16.0938" stroke="#1D1B1B" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className="navigation-quiz">
                    <div className="littleround" id="current"></div>
                    <div className="littleround"></div>
                    <div className="littleround"></div>
                    <div className="littleround"></div>
                </div>
            </div>
        </div>
    )
}

export default QuizLevel