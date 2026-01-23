import { motion } from "framer-motion";
import hombre from '../assets/Hero1.jpg'
import hombre2 from '../assets/Hero2.jpg'

function Hero() {
    const skillList = [
        { label: 'HTML & CSS', value: '100%' },
        { label: 'Javascript', value: '85%' },
        { label: 'React', value: '80%' },
        { label: 'Tailwind', value: '80%' },
        { label: 'Java', value: '90%' },
    ];

    return (
        <>
            {/* HERO */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-16 gap-10">
                <motion.section
                    className="text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="font-bold">Hola yo soy</p>
                    <h2 className="text-orange-500 font-bold text-xl">
                        Ignacio Martin Bravo
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold"> Desarrollador de</h1>
                    <h1 className="text-4xl md:text-5xl font-bold md:ml-48">
                        Aplicaciones Web
                    </h1>
                    <br />
                    <p className="max-w-xl">
                        Soy un desarrollador web apasionado por JavaScript, HTML y CSS,
                        con experiencia en frameworks de todo tipo. He estudiado Java,
                        Python, SQL, DAW, etc, lo que me permite combinar lógica sólida con
                        diseño funcional y atractivo. Para mí, programar no es solo un
                        trabajo, es un estilo de vida y una forma de crear experiencias
                        que impactan.
                    </p>
                </motion.section>

                <motion.section
                    className="flex justify-center"
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
            </div>

            {/* ABOUT */}
            <div className="w-full flex flex-col-reverse md:flex-row items-center mt-16 gap-10">
                <motion.section
                    className="flex md:w-1/2 "
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1">
                        <img
                            src={hombre2}
                            alt="Avatar"
                            className="w-full h-full rounded-full object-cover shadow-lg shadow-orange-500/50 bg-white"
                        />
                    </div>
                </motion.section>
                <motion.section
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
                        Sobre mi
                    </h1>

                    <div className="space-y-6 max-w-lg mx-auto md:mx-0">
                        {skillList.map((skill, i) => (
                            <div key={skill.label}>
                                <p className="text-sm font-medium mb-2">{skill.label}</p>
                                <div className="relative h-1 bg-gray-200 rounded-full">
                                    <motion.div
                                        className="absolute left-0 top-0 h-1 bg-orange-500 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.value }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: i * 0.3 }}
                                    >
                                        <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-orange-500 rounded-full"></span>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>


            </div>

        </>
    )
}

export default Hero
