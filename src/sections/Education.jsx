import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useRef } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { myCertifications } from '../constants';
import Paper from '../components/paper';
import { useFrame } from '@react-three/fiber'
import PropTypes from 'prop-types';

const Education = () => {
    const [selectedCertificationIndex, setSelectedCertificationIndex] = useState(0);
    const [rotationZ, setRotationZ] = useState(0);
    const dragging = useRef(false);
    const lastX = useRef(0);
    const velocity = useRef(0);

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
            velocity.current = deltaX * 0.01; // Actualiza la velocidad
            lastX.current = e.clientX;
        }
    };

    const currentCertification = myCertifications[selectedCertificationIndex];

    return (
        <section className="c-space my-20" id="education">
            <div className="w-full text-white-600">
                <h3 className="head-text">My Education</h3>
                <div className="education-container">
                    {/* Columna Izquierda: 3D Paper */}
                    <div className="education-content flex items-center justify-center border bg-black-200 border-black-300 rounded-lg h-full">
                      <div
                        className="w-full h-full p-0 m-0 flex"
                        onPointerDown={handlePointerDown}
                        onPointerUp={handlePointerUp}
                        onPointerLeave={handlePointerUp}
                        onPointerMove={handlePointerMove}
                        style={{ cursor: dragging.current ? 'grabbing' : 'grab' }}
                      >
                        <Canvas
                            camera={{ position: [0, 0, 10] }}
                            style={{ width: '100%', height: '100%' }}
                        >
                            <ambientLight intensity={Math.PI} />
                            <directionalLight position={[10, 10, 5]} />
                            <InertiaController
                                dragging={dragging}
                                velocity={velocity}
                                setRotationZ={setRotationZ}
                                setVelocity={v => (velocity.current = v)}
                            />
                            <Suspense fallback={<CanvasLoader />}>
                                <group
                                  scale={12}
                                  position={[0, 0, 0]}
                                  rotation={[-Math.PI / 2, 0, 0]}
                                >
                                  <Paper texture={currentCertification.texture} rotationZ={rotationZ} />
                                </group>
                            </Suspense>
                        </Canvas>
                      </div>
                    </div>
                    
                    {/* Columna Derecha: Info del certificado */}
                    <div className="education-content flex flex-col bg-black-200 border border-black-300 rounded-lg h-full">
                      <div className="sm:py-10 py-4 sm:px-5 px-2.5 flex flex-col h-full flex-1">
                        <div className="flex flex-col h-min pl-10 py-2">
                          <div className={`education-content_logo ${currentCertification.logoBg || "bg-black-600"}`}>
                            <img className="w-full h-full" src={currentCertification.logo || "/assets/udemy-logo.png"} alt="logo" />
                          </div>
                        </div>
                        <div className="education-content_container flex-1">
                          <div className="sm:p-5 px-2.5 py-5 flex-1">
                            <p className="font-bold text-white-800">{currentCertification.title}</p>
                            <p className="text-sm mb-5">{currentCertification.institution} -- {currentCertification.date}</p>
                            <div className="mb-6">
                              <h5 className="text-lg font-semibold mb-2 text-white">Lo que aprendí:</h5>
                              <p>{currentCertification.summary}</p>
                            </div>
                          </div>
                        </div>
                        {/* Botones de navegación en la parte inferior y extremos */}
                        <div className="flex justify-between items-center w-full px-8 py-4 mt-auto">
                          <button
                            className="arrow-btn"
                            onClick={() =>
                              setSelectedCertificationIndex(
                                selectedCertificationIndex === 0
                                  ? myCertifications.length - 1
                                  : selectedCertificationIndex - 1
                              )
                            }
                          >
                            <img className="w-4 h-4" src="/assets/left-arrow.png" alt="left arrow" />
                          </button>
                          <button
                            className="arrow-btn"
                            onClick={() =>
                              setSelectedCertificationIndex(
                                selectedCertificationIndex === myCertifications.length - 1
                                  ? 0
                                  : selectedCertificationIndex + 1
                              )
                            }
                          >
                            <img className="w-4 h-4" src="/assets/right-arrow.png" alt="right arrow" />
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
                
                {/* Navegación entre certificados */}
                <div className="flex justify-center mt-8 gap-4">
                    {myCertifications.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedCertificationIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === selectedCertificationIndex 
                                    ? 'bg-white' 
                                    : 'bg-gray-500'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function InertiaController({ dragging, velocity, setRotationZ, setVelocity }) {
    useFrame(() => {
        if (!dragging.current && Math.abs(velocity.current) > 0.0001) {
            setRotationZ(prev => prev + velocity.current);
            velocity.current *= 0.95; // factor de frenado (ajusta para más o menos inercia)
            setVelocity(velocity.current);
        }
    });
    return null;
}

InertiaController.propTypes = {
    dragging: PropTypes.shape({ current: PropTypes.bool }).isRequired,
    velocity: PropTypes.shape({ current: PropTypes.number }).isRequired,
    setRotationZ: PropTypes.func.isRequired,
    setVelocity: PropTypes.func.isRequired,
};

export default Education