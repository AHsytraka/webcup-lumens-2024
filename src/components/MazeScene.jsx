import {Maze} from "./Maze.jsx";
import {degToRad} from "maath/misc";
import {OrbitControls, PresentationControls} from "@react-three/drei";

export function MazeScene() {
    return (
        <>
            <directionalLight position={[3,5,0]} intensity={10}/>
            <PresentationControls snap global zoom={0.8} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
                <group rotation={[degToRad(20), degToRad(-40), 0]} position={[0,0,0]}>
                    <Maze/>
                </group>
            </PresentationControls>
        </>
    )
}