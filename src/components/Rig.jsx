import {useRef, useState} from "react";
import {useScroll, Image} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";
import * as THREE from "three";
import "../util.jsx"

export function Rig(props) {
    const ref = useRef();
    const scroll = useScroll();

    useFrame((state,delta)=> {
        ref.current.rotation.y=-scroll.offset*(Math.PI*2) //rotate content
        state.events.update() // Raycasts every frame rather than on pointer-move
        easing.damp2(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 20], 0.3, delta) // Move camera
        state.camera.lookAt(0, 0, 0) // Look at center
    })
    return <group ref={ref} {...props}/>
}

export function Carousel({ radius = 1.4, count = 6 }) {
    return Array.from({ length: count }, (_, i) => (
        <Card
            key={i}
            url={`/images/img${Math.floor(i % 10) + 1}_.jpg`}
            position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
            rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
        />
    ))
}

export function Card({ url, ...props }) {
    const ref = useRef()
    const [hovered, hover] = useState(false)
    const pointerOver = (e) => (e.stopPropagation(), hover(true))
    const pointerOut = () => hover(false)
    useFrame((state, delta) => {
        easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta)
        easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta)
        easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta)
    })
    return (
        <Image ref={ref} url={url} transparent side={THREE.DoubleSide} onPointerOver={pointerOver} onPointerOut={pointerOut} {...props}>
            <bentPlaneGeometry args={[0.1, 1, 1, 15, 20]} />
        </Image>
    )
}