import marwin from "../marwin.jpg";
import ROC from "../ROC.jfif";
import STI from "../STI.jpg";
import CCC from "../CityCollege.jpg";
import PrimaryButton from "./PrimaryButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
export default function About() {
    return (
        <>
            <section className="flex flex-col md:flex-row justify-between items-center py-10 px-5">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-1/2 mb-5 md:mb-0">
                            <h4 className="font-bold text-lg" style={{ color: "#003056" }}>
                                Hello!
                            </h4>
                            <h1 className="text-4xl font-bold" style={{ color: "#333333" }}>I'm Marwin</h1>
                            <p className="font-semibold" style={{ color: "#003056" }}>
                                Full Stack Web Developer
                            </p>
                            <p className="mt-5 font-semibold" style={{ color: "#333333" }}>
                                Welcome to my website portfolio. A fresh graduate student with
                                a year self-taught experience in web development, I’ve
                                honed my skills in HTML5, JavaScript, PHP, MySQL, database design,
                                and front-end development. Through self-directed learning, I’ve
                                developed a strong foundation in building high-quality websites
                                and identifying opportunities to enhance the user experience.
                            </p>
                            <div className="mt-4">
                                <a
                                    href="/cv.pdf"
                                    download="Marwin_Abaquin_CV.pdf"
                                    className="inline-block"
                                >
                                    <PrimaryButton>
                                        <FontAwesomeIcon icon={faDownload} className="mr-2" />
                                        Download CV
                                    </PrimaryButton>
                                </a>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 text-center">
                            <img
                                src={marwin}
                                alt="Marwin's Photo"
                                className="rounded-full max-w-xs h-80 mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full " style={{ backgroundColor: "#003056" }}>
                <h1 className="text-2xl text-center font-bold text-white py-2">
                    Educational Background
                </h1>
            </div>
            <div className="class mt-10 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className=" p-4  text-center rounded">
                    <img
                        src={STI}
                        alt="Marwin's Photo"
                        className=" max-w-xs h-40 mx-auto"
                    />
                    <h1 className=" font-bold text-sm mt-5" style={{ color: "#333333" }}>STI College Calamba</h1>
                    <p className="mt-2 text-sm font-semibold" style={{ color: "#003056" }}>Science Technology Engineering and Mathematics</p>
                    <p className="text-sm font-semibold" style={{ color: "#333333" }}>2019-2024</p>
                </div>

                <div className=" p-4 text-white text-center rounded">
                    <img
                        src={CCC}
                        alt="City College of Calamba"
                        className=" max-w-xs h-40 mx-auto"
                    />
                    <h1 className=" font-bold text-sm mt-5" style={{ color: "#333333" }}>City College of Calamba</h1>
                    <p className="mt-2 text-sm font-semibold" style={{ color: "#003056" }}>Bachelor of Science In Information Technology</p>
                    <p className="text-sm font-semibold" style={{ color: "#333333" }}>2019-2024 </p>
                </div>

                <div className=" p-4 text-white text-center rounded">
                    <img
                        src={ROC}
                        alt="ROC Digital Marketing and Services"
                        className=" max-w-xs h-40 mx-auto"
                    />
                    <h1 className=" font-bold text-sm mt-5" style={{ color: "#333333" }}>Internship</h1>
                    <p className="mt-2 text-sm font-semibold" style={{ color: "#003056" }}>Full Stack Wordpress Developer</p>
                    <p className="text-sm font-semibold" style={{ color: "#333333" }}>February 2024 - May 2024 </p>
                </div>
            </div>

        </>
    )
}