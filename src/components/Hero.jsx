import hombre from '../assets/Hero1.jpg'
import hombre2 from '../assets/Hero2.jpg'

function Hero() {
    return (
        <>

            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-16 gap-10">
                <section className="text-center md:text-left">
                    <p className="font-bold">Hi I am</p>
                    <h2 className="text-orange-500 font-bold text-xl">
                        Ignacio Martin Bravo
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold">Web Application</h1>
                    <h1 className="text-4xl md:text-5xl font-bold md:ml-48">
                        Developer
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
                </section>

                <section className="flex justify-center">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1">
                        <img
                            src={hombre}
                            alt="Avatar"
                            className="w-full h-full rounded-full object-cover shadow-lg shadow-orange-500/50 bg-white"
                        />
                    </div>
                </section>
            </div>

            {/* ABOUT */}
            <div className="w-full flex flex-col md:flex-row  items-center mt-16 gap-10">
                <section className="flex md:w-1/2">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1">
                        <img
                            src={hombre2}
                            alt="Avatar"
                            className="w-full h-full rounded-full object-cover shadow-lg shadow-orange-500/50 bg-white"
                        />
                    </div>
                </section>

                <section className="md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
                        About me
                    </h1>

                    <div className="space-y-6 max-w-lg mx-auto md:mx-0">
                        {[
                            { label: 'HTML & CSS', value: '100%' },
                            { label: 'Javascript', value: '85%' },
                            { label: 'React', value: '80%' },
                            { label: 'Tailwdind', value: '80%' },
                            { label: 'Java', value: '90%' },
                        ].map((skill) => (
                            <div key={skill.label}>
                                <p className="text-sm font-medium mb-2">
                                    {skill.label}
                                </p>
                                <div className="relative h-1 bg-gray-200 rounded-full">
                                    <div
                                        className="absolute left-0 top-0 h-1 bg-orange-500 rounded-full"
                                        style={{ width: skill.value }}
                                    >
                                        <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-orange-500 rounded-full"></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Hero
