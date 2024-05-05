import "../styles/Formation.css"
import {Canvas} from "@react-three/fiber";
import {FormationAtkScene} from "../components/FormationAtkScene.jsx";
import {ReflexiveGround} from "../components/ReflexiveGround.jsx";
import {useRef, useState} from "react";
import {CertificateScene} from "../components/CertificateScene.jsx";
import {ClickableText} from "../components/ClickableText.jsx";

export function FormationAttack() {
    const [zPos, setZPos] = useState(75); // Initial z position
    const formationRef = useRef();

    return (
        <>
            <Canvas camera={{position: [0, 3, zPos]}}>
                <group>
                    <ambientLight intensity={7}/>

                    <group position={[0, 0, 60]}>
                        <FormationAtkScene/>
                        <ClickableText newZPos={100} setZPos={setZPos} zPos={zPos} position={[0, -0.1, 10]}/>
                    </group>

                    <group>
                        <CertificateScene position={[0, 0, 90]}/>
                    </group>
                    <ReflexiveGround/>
                </group>
            </Canvas>
        </>
    )
}
