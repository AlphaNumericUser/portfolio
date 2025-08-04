import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react"

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("alfredo.diaz.dev@gmail.com")
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    return (
        <section className="c-space my-20" id="about" >
            <div className="grid xl:grid-cols-3 l:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-5 h-full" >

                <div className="col-span-1 xl:col-span-1" >
                    <div className="grid-container" >
                        <img className="w-full sm:h-[276px] h-fit object-contain" src="/assets/grid1.png" alt="image" />
                        <div>
                            <p className="grid-headtext" >
                                Hi, I&apos;m Alfredo
                            </p>
                            <p className="grid-subtext" >
                                With 3 years of experience in the field of web development, I have worked with various technologies and frameworks. I am a self-taught developer who is passionate about learning new things and solving problems.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-2" >
                    <div className="grid-container" >
                        <img className="w-full sm:h-[266px] h-fit object-contain" src="/assets/grid-2.png" alt="image" />
                        <div>
                            <p className="grid-headtext" >
                                Tech Stack
                            </p>
                            <p className="grid-subtext" >
                                I specialize in Javascript and Typescript, with a focus on the React ecosystem, including libraries like React Three Fiber, Redux, and GSAP. I am also proficient in Node.js for building server-side applications and have experience integrating APIs.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3" >
                    <div className="grid-container" >
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center" >
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl={"//unpkg.com/three-globe/example/img/earth-night.jpg"}
                                bumpImageUrl={"//unpkg.com/three-globe/example/img/earth-topology.png"}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext" >
                                I work remotly across most timezones
                            </p>
                            <p className="grid-subtext" >
                                I based in Mexico, with remote work available.
                            </p>
                            <Button name="Contact me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3" >
                    <div className="grid-container" >
                        <img className="w-full sm:h-[266px] h-fit object-contain" src="/assets/grid3.png" alt="image" />
                        <div>
                            <p className="grid-headtext" >
                                My passion for coding
                            </p>
                            <p className="grid-subtext" >
                                I love solving problems and buildings things with code. Coding isn&apos;t just my profession, it&apos;s my passion.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2" >
                    <div className="grid-container" >
                        <img className="w-full md:h-[126px] sm:-[276px] h-fit object-cover sm:object-top" src="/assets/grid4.png" alt="image" />
                        <div className="space-y-2" >
                            <p className="grid-subtext text-center" >Contact me</p>
                            <div className="copy-container" onClick={handleCopy} >
                                <img src={ hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white" >alfredo.diaz.dev@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About