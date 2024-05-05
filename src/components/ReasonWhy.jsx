import "../styles/ReasonWhy.css"

function ReasonWhy({reasonIcon,reasonTitle,reasonDescript}) {
    return (
        <div className="ReasonWhy-container">
            <div className="reasonIcon">
                <img src={reasonIcon} alt="reason1" className="reasonIcon"/>
            </div>
            <p className="reasonTitle">{reasonTitle}</p>
            <p className="reasonDescript">{reasonDescript}</p>
        </div>
    )
}

export default ReasonWhy