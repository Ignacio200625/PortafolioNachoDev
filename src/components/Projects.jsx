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
            <h1 className="text-4xl md:text-5xl font-bold">My Projects</h1>
            <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi beatae eum saepe dolor tempore provident quis maiores ipsum cupiditate quas doloremque, atque odio, omnis minima praesentium architecto sit earum totam.
            </p>

            <div className="flex justify-center w-full gap-10 mt-10">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        className="w-[33%]"
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
