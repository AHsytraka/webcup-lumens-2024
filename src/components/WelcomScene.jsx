import {CameraControls, Environment, MeshReflectorMaterial, OrbitControls, ScrollControls} from "@react-three/drei";
import {useEffect,useRef} from "react";
import { geometry } from 'maath';
import {extend} from "@react-three/fiber";
import {Carousel, Rig} from "./Rig.jsx";

extend({RoundedPlaneGeometry: geometry.RoundedPlaneGeometry})
export function WelcomScene() {
    const camControlRef = useRef();

    return (
        <>
            {/*<CameraControls ref={camControlRef}/>*/}

            <directionalLight position={[0,10,0]} intensity={3}/>
            <ScrollControls infinite>
                <Rig rotation={[0,0,0]}>
                    <Carousel/>
                </Rig>
            </ScrollControls>
            {/*<Environment preset="dawn" background blur={0.5} />*/}


            {/*ground*/}
            <mesh position-y={-0.47} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[500, 500]}/>
                <MeshReflectorMaterial
                    blur={[100, 100]} // Blur ground reflections (width, height), 0 skips blur
                    mixBlur={10} // How much blur mixes with surface roughness (default = 1)
                    roughness={1}
                    mirror={1}
                    mixStrength={10} // Strength of the reflections
                    resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
                    depthScale={1} // Scale the depth factor (0 = no depth, default = 0)
                    opacity={0.4}
                    transparent
                    minDepthThreshold={0.4} // Lower edge for the depthTexture interpolation (default = 0)
                    maxDepthThreshold={1.4} // Upper edge for the depthTexture interpolation (default = 0)
                    color={"#3a3a3a"}
                    metalness={0.5}
                />
            </mesh>
        </>
    )
}