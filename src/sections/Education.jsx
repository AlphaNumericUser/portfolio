import { workExperiences } from "../constants"

const Education = () => {

    return (
        <section className="c-space my-20" id="education">
            <div className="w-full text-white-600" >

                <h3 className="head-text" >
                    My Education
                </h3>

                <div className="work-container" >

                    <div className="work-content" >
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5 h-full flex flex-col" >
                            {
                                workExperiences.map(({ id, name, position, duration, title, icon }) => (

                                    <div 
                                        key={id} 
                                        className="work-content_container group flex-1"
                                        >
                                        <div className="flex flex-col h-full justify-start items-center py-2" >
                                            <div className="work-content_logo" >
                                                <img className="w-full h-full" src={ icon } alt="logo" />
                                            </div>
                                            <div className="work-content_bar" />
                                        </div>

                                        <div className="sm:p-5 px-2.5 py-5 flex-1" >
                                            <p className="font-bold text-white-800" >{ name }</p>
                                            <p className="text-sm mb-5" >{ position } -- { duration }</p>
                                            <p className="group-hover:text-white transition ease-in-out duration-500" >{ title }</p>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Education