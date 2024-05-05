import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function PunchBag({ gameStarted ,updateInc, ...props }) {
    const { nodes, materials } = useGLTF('/models/PunchBag.glb');
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 1, 0] }));

    let inc = 1;

    const applyForce = (event) => {
        const direction = event.intersections[0].face.normal;
        api.applyForce([direction.x * 60, direction.y * 60, direction.z * 60], [0, 0, 0]);
        if (gameStarted) {
            updateInc(inc++);
        }
    };

    return (
        <group {...props} dispose={null} ref={ref} onClick={applyForce}>
            <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.lambert4SG} position={[0, -1, 0]} />
            <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.lambert3SG} position={[0, -1, 0]} />
            <mesh geometry={nodes['Node-Mesh_2'].geometry} material={materials.lambert2SG} position={[0, -1, 0]} />
        </group>
    );
}
