import {MeshReflectorMaterial} from "@react-three/drei";

export function ReflexiveGround() {
    return(
        <>
            <mesh position-y={-0.5} rotation-x={-Math.PI / 2}>
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
                    color={"#1e1e1e"}
                    metalness={0.5}
                />
            </mesh>
        </>
    )
}