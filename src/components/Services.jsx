import { motion } from "framer-motion";

function Services() {
    const services = [
        {
            title: "UI/UX",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="3" y="4" width="18" height="14" rx="2" />
                    <path d="M7 8h10M7 12h6" />
                </svg>
            ),
            description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
        },
        {
            title: "Web Design",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="4" y="3" width="16" height="18" rx="2" />
                    <path d="M8 7h8M8 11h8M8 15h4" />
                </svg>
            ),
            description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
        },
        {
            title: "App Design",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="7" y="2" width="10" height="20" rx="2" />
                    <path d="M11 18h2" />
                </svg>
            ),
            description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
        },
        {
            title: "Graphic Design",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                </svg>
            ),
            description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
        },
    ];

    return (
        <div className="text-center px-4 md:px-20 py-10 mt-16">
            <h1 className="text-4xl md:text-5xl font-bold">Services</h1>

            <p className="mt-6 md:mt-10 max-w-3xl mx-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sed,
                porro aliquid cum ipsa magni, quibusdam modi officia perspiciatis animi
                consectetur repellendus nobis quae dolor vitae aut molestiae! Velit,
                enim!
            </p>

            <div className="max-w-6xl mx-auto px-2 md:px-6 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            className="bg-[#f8f8f8] rounded-xl p-6 shadow-sm hover:shadow-md transition"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                        >
                            <div className="mb-4 flex justify-center md:justify-start">
                                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-orange-50 text-orange-500">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-500 text-sm">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;
