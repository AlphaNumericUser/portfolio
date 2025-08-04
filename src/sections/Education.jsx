import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useRef } from "react";
import { Center } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import { myCertifications } from '../constants';
import Paper from '../components/paper';

const Education = () => {
    const [selectedCertificationIndex, setSelectedCertificationIndex] = useState(0);
    const [rotationZ, setRotationZ] = useState(0);
    const dragging = useRef(false);
    const lastX = useRef(0);

    const handlePointerDown = (e) => {
        dragging.current = true;
        lastX.current = e.clientX;
    };

    const handlePointerUp = () => {
        dragging.current = false;
    };

    const handlePointerMove = (e) => {
        if (dragging.current) {
            const deltaX = e.clientX - lastX.current;
            setRotationZ((prev) => prev + deltaX * 0.01); // Ajusta la sensibilidad aquí
            lastX.current = e.clientX;
        }
    };

    const currentProject = myCertifications[selectedCertificationIndex];

    return (
        <section className="c-space my-20" id="education">
            <div className="w-full text-white-600" >
                <h3 className="head-text" >
                    My Education
                </h3>
                <div
                    className='border-2 border-white rounded-lg p-4 h-[30rem]'
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                    onPointerMove={handlePointerMove}
                    style={{ cursor: dragging.current ? 'grabbing' : 'grab' }}
                >
                    <Canvas camera={{ position: [0, 0, 5] }}>
                        <ambientLight intensity={ Math.PI } />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={ <CanvasLoader /> } >
                                <group
                                    scale={7}
                                    position={[1, -0.5, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                >
                                    <Paper texture={ currentProject.texture } rotationZ={rotationZ} />
                                </group>
                            </Suspense>
                        </Center>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Education