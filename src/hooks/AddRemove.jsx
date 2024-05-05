import gsap from "gsap/gsap-core"    
    
    export const addSy = () => {
        gsap.to("#SyName", {
            scale: 1,
            duration: 0.2,
            rotate: "-10deg",
        })

        gsap.to("#Sy", {
            duration: 0.8,
            ease: "back.out",
            borderColor: "#E4875F",
        })
    }

    export const removeSy = () => {
        gsap.to("#SyName", {
            scale: 0,
            duration: 0.2,
        })

        gsap.to("#Sy", {
            duration: 0.8,
            ease: "back.out",
            borderColor: "#000000",
        })
    }

    export const addNat = () => {
        gsap.to("#NatName", {
            scale: 1,
            duration: 0.2,
        })

        gsap.to("#Nat", {
            duration: 0.8,
            ease: "back.out",
            borderColor: "#63C6B7",
        })
    }

    export const removeNat = () => {
        gsap.to("#NatName", {
            scale: 0,
            duration: 0.2,
        })

        gsap.to("#Nat", {
            duration: 0.8,
            ease: "back.out",
            borderColor: "#000000",
        })
    }

    export const addRon = () => {
        gsap.to("#RonName", {
            scale: 1,
            duration: 0.2,
            rotate: "6deg",
        })

        gsap.to("#Ron", {
            duration: 0.8,
            ease: "back.out",
            borderColor: "#BF77FF",
        })
    }

    export const removeRon = () => {
        gsap.to("#RonName", {
            scale: 0,
            duration: 0.2,
        })

        gsap.to("#Ron", {
            duration: 0.8,
            ease: "back.out",
            borderColor: "#000000",
        })
    }

    export const addBoussa = () => {
        gsap.to("#BoussaName", {
            scale: 1,
            duration: 0.2,
            rotate: "10deg",
        })

        gsap.to("#Boussa", {
            duration: 0.8,
            ease: "back.out",
            borderColor: "#76E572",
        })
    }

    export const removeBoussa = () => {
        gsap.to("#BoussaName", {
            scale: 0,
            duration: 0.2,
        })

        gsap.to("#Boussa", {
            duration: 0.8,
            ease: "back.out",
            borderColor: "#000000",
        })
    }