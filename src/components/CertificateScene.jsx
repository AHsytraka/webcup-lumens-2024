export function CertificateScene({ position = [0, 0, 0] }) {
    return (
        <>
            <group position={position}>
                <mesh>
                    <planeGeometry/>
                    <meshNormalMaterial/>
                </mesh>
            </group>
        </>
    )
}