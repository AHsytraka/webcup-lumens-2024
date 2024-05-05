import "../styles/ServiceCards.css"

function ServiceCard({iconUrl,tag,MiniTitle,miniText}) {
    return (

        <div className="back" style={{
        }}>
            <div className="serviceCard-container">
                <div className="TopCard">
                        <p className="cardNumber">{iconUrl}</p>
                    <p className="tag">{tag}</p>
                </div>
                <div className="cardDescription"> 
                    <p className="MiniTitle">{MiniTitle}</p>
                    <p className="minitext">{miniText}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard