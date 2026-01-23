import { motion } from "framer-motion";
import bootstrap from '../assets/SBUIKit.png'
import StrangerThings from '../assets/StrangerThings.png'
import ZetaBot from '../assets/ZetaBot.png'

function Projects() {
    const projects = [
        { img: bootstrap, link: "https://github.com/Ignacio200625/BootstrapProject" },
        { img: StrangerThings, link: "https://github.com/Ignacio200625/StrangerThings" },
        { img: ZetaBot, link: "https://github.com/Ignacio200625/ZetaBot" },
    ];

    return (
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Mis Proyectos</h1>
            <p className="mt-10">
                He ralizado varios proyectos de diseño como ZetaBot una empresa inventada por mi , o SB UI Kit Pro que es un proyecto bastante grande, desarrollado en bootstrap de una pagina de paginas de pago , ademas de esto realice proyectos en  javascript como la pagina de STranger things que se conecta con una api  y java (si quiere saber sobre proyetos de esta teconologia contactame)
            </p>

            <div className="flex flex-col sm:flex-row justify-center w-full gap-10 mt-10">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        className="w-full sm:w-[33%]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                    >
                        <a href={project.link}>
                            <img
                                src={project.img}
                                alt=""
                                className='w-full rounded-2xl hover:shadow-orange-500/50 shadow-lg transition-transform duration-300'
                            />
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
