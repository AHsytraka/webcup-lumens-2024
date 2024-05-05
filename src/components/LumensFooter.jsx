import "../styles/LumensFooter.css"

function LumensFooter() {
    return (
        <div className="LumensFooter-container">
            <div className="section0">
                <div className="lumensLogoFooter">
                </div>
                {/*<p className="thanks">Thanks a lot for scrolling till the end and reading this text</p>*/}
                <p className="love">Nous t'attendons</p>
                <img src="src\assets\images\reason2.png" alt="round" className="footerIcon"/>
                <img src="src\assets\images\reason3.png" alt="round" className="footerIcon"/>
                <img src="src\assets\images\reason4.png" alt="round" className="footerIcon"/>
                <img src="src\assets\images\reason1.png" alt="round" className="footerIcon"/>
            </div>
            <div className="section1">
                <div className="returnTitle">

                </div>
                <div className="copyright">

                    <p>2024 all right reserved to Lumens</p>
                </div>
            </div>
        </div>
    )
}

export default LumensFooter
