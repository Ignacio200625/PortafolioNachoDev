import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import hombre from '../assets/Hero1.jpg'
import { Mail } from "lucide-react";
import { Link } from "react-router";
function About() {

    return (
        <>
            <div className=" flex flex-col md:flex-row justify-center items-center px-20 py-10">
                <div className=" w-full md:w-[50%]">
                    <motion.section
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    ><h1 className="text-6xl font-bold mb-6  whitespace-nowrap tex">
                            MI NOMBRE  <br />ES <span className="text-orange-500">IGNACIO <br /> MARTIN  ...</span>
                        </h1>
                        <h2 className="text-2xl font-bold">Desarrollador web</h2>
                        <div className="flex items-center gap-6 text-sm text-gray-700 mt-10">
                            <div className="flex items-center gap-2 whitespace-nowrap">
                                <span>+34 698 96 26 42</span>
                            </div>

                            <span className="h-4 w-px bg-gray-300"></span>

                            <div className="flex items-center gap-2">
                                <span>nachomartinbrvo25@gmail.com</span>
                            </div>
                        </div>

                    </motion.section>

                </div>
                <div className="w-full mt-10 md:mt-0 md:w-[50%] flex items-center justify-between">
                    <motion.section
                        className="flex justify-center md:ml-25"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1">
                            <img
                                src={hombre}
                                alt="Avatar"
                                className="w-full h-full rounded-full object-cover shadow-lg shadow-orange-500/50 bg-white"
                            />
                        </div>

                    </motion.section>
                    <div className="flex  flex-col items-center gap-4">
                        <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">

                            <Link to="#contact">
                                <Mail size={18} />
                            </Link>
                        </button>

                        <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">

                            <a href="https://www.linkedin.com/in/ignacio-mart%C3%ADn-bravo/"><Linkedin size={18} /></a>
                        </button>

                        <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">
                            <a href="https://github.com/Ignacio200625/"><Github size={18} /></a>
                        </button>

                        <span className="w-px h-16 bg-gray-300"></span>
                    </div>
                </div>
            </div>

        </>
    )

}

export default About;