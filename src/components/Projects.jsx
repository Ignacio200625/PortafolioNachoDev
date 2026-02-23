import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import bootstrap from '../assets/SBUIKit.png';
import StrangerThings from '../assets/StrangerThings.png';
import ZetaBot from '../assets/ZetaBot.png';
import NexxusCommerce from '../assets/NexusCommerce.png';
import NuriaPage from '../assets/NuriaPage.png';
import NexusTech from "../assets/NexusTech.png"

function Projects() {
    const projects = [
        { img: bootstrap, link: "https://github.com/Ignacio200625/BootstrapProject" },
        { img: StrangerThings, link: "https://github.com/Ignacio200625/StrangerThings" },
        { img: ZetaBot, link: "https://github.com/Ignacio200625/ZetaBot" },
        { img: NexxusCommerce, link: "https://nexus-ecommerce-ten.vercel.app/" }, // Pon tu enlace aquí
        { img: NuriaPage, link: "https://nuria-olias.vercel.app/" },      // Pon tu enlace aquí
        { img: NexusTech, link: "https://proyectof-final-diw.vercel.app/" },      // Pon tu enlace aquí
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center py-16 px-4 bg-gray-50">
            <h1 className="text-5xl font-bold text-orange-600">Mis Proyectos</h1>
            <p className="mt-6 max-w-2xl mx-auto text-gray-700">
                Haz clic en cada proyecto para ver más.
            </p>

            <div className="mt-12 relative w-full max-w-4xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.7 }}
                        className="rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={projects[currentIndex].img}
                                alt={`Proyecto ${currentIndex + 1}`}
                                className="w-full h-auto sm:h-[400px] md:h-[450px] lg:h-[500px] object-contain sm:object-cover transition-all duration-500"
                            />
                        </a>
                    </motion.div>
                </AnimatePresence>

                {/* Botones */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-3 -translate-y-1/2 bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 transition"
                >◀</button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-3 -translate-y-1/2 bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 transition"
                >▶</button>

                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                    {projects.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-orange-500' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;