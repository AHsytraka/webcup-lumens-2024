import "../componentStyles/Modal.css"
import { gsap } from "gsap";

function Modal({ modalDescription }) {

    const modalup = () => {
        gsap.to(".modal-container", {
            y: "-110vh",
            duration: 2,
            ease: "back.out"
        })
    }

    return (
        <div className="modal-container">
            <div className="modal-title">Description</div>
            <div className="modal-description">
                {modalDescription}
            </div>
            <div className="bottom-modal">
                <button className="signin-button" onClick={modalup}>
                    <div className="button-text-signin">Next</div>
                </button>
            </div>
        </div>
    )
}

export default Modal