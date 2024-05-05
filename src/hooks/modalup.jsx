import { gsap } from "gsap";

export const modalup = () => {
    gsap.to(".modal-container", {
        yPercent: "-110vh",
        duration: 1,
        ease: "back.out"
    })
}