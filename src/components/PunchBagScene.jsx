import {PunchBag} from "./PunchBag.jsx";
import {usePlane} from "@react-three/cannon";
import {Plane} from "@react-three/drei";
export function PunchBagScene({ gameStarted, updateInc }) {
    return (
        <>
            <ambientLight intensity={5}/>
                <group>
                    <PunchBag gameStarted={gameStarted} updateInc={updateInc} />
                </group>
            <Ground />
        </>
    )
}



function Ground() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
    }))

    return (
        <mesh ref={ref} receiveShadow>
            <Plane args={[500, 500]} receiveShadow>
                <shadowMaterial attach="material" color="#171717" opacity={0.5}/>
            </Plane>
        </mesh>
    )
}