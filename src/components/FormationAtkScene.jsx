import {PresentationControls, Text} from "@react-three/drei";
import {useNavigate} from "react-router-dom";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import axios from "axios";
import {useEffect, useState} from "react";
import fontUrl from "/fonts/BruceForeverRegular-X3jd2.ttf";
export function FormationAtkScene() {

    const navigate = useNavigate();
    const authUser = useAuthUser();

    const email = authUser.email;
    const [levels, setLevels] = useState([]);
    const [scores, setScores] = useState([]);


    let level1, level2, level3;
    if (levels.length >= 3) {
        level1 = levels[0];
        level2 = levels[1];
        level3 = levels[2];
    }

    let score1, score2, score3;
    if(scores.length >= 3) {
        score1 = scores[0];
        score2 = scores[1];
        score3 = scores[2];
    }

    const fetchHero = async () => {

        try {
            const res = await axios.get(`https://lumens.madagascar.webcup.hodi.host/api/heroes/${email}/infos`);
            console.log(res.data);
            let cat = res.data.category;
            await fetchFormations(cat);
        }catch (e) {
            console.error(e)
        }
    }

    const fetchFormations = async (category) => {
        try {
            const res = await axios.get(`https://lumens.madagascar.webcup.hodi.host/api/level/${category}`);
            // console.log(res.data)
            setLevels(res.data);
        } catch (e) {
            console.error(e)
        }
    }

    const fetchScore = async () => {
        try {
            const res = await axios.get(`https://lumens.madagascar.webcup.hodi.host/api/heroes/${email}/formation`);
            setScores(res.data);
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        console.log(email)
        fetchHero();
        fetchScore();
    }, [email]);

    const ClickAndNavigate = (level) => {
        if(level === level1) {
            navigate("/attack-lv1")
        }

        if(level === level2 && score1 !== 0) {
            navigate("/attack-lv2")
        }

        if(level === level3 && score2 !== 0) {
            navigate("/attack-lv3")
        }
    }




    return (
        <>
            <group>
                <PresentationControls snap global zoom={0.8} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>

                <group position={[-10, 1, 0]} scale={2}>
                    <mesh>
                        <boxGeometry/>
                        <meshStandardMaterial color={'#be5555'}/>
                    </mesh>
                    <Text position={[0, 1, 0]} font={fontUrl} fontSize={0.3} onClick={() => ClickAndNavigate(level1)}>
                        {level1 && level1.leveltitle}
                    </Text>
                </group>

                <group position={[0, 2, 0]} scale={2}>
                    <mesh>
                        <boxGeometry/>
                        <meshStandardMaterial color={'#5576be'}/>
                    </mesh>
                    <Text position={[0, 1, 0]} font={fontUrl} fontSize={0.3} onClick={() => ClickAndNavigate(level2)}>
                        {level2 && level2.leveltitle}
                    </Text>

                </group>

                <group position={[10, 1, 0]} scale={2}>
                    <mesh>
                        <boxGeometry/>
                        <meshStandardMaterial color={'#6cbe55'}/>
                    </mesh>
                    <Text position={[0, 1, 0]} font={fontUrl} fontSize={0.3} onClick={() => ClickAndNavigate(level3)}>
                        {level3 && level3.leveltitle}
                    </Text>
                </group>

                </PresentationControls>
            </group>

        </>
    )
}