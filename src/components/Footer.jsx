import Icono from '../assets/IconoPortfolio.jpg'
import { Link } from 'react-router'

function Footer() {

    return (
        <div className="text-center py-20 bg-[#f8f8f8] relative">
            <div className="flex justify-center">
                <img src={Icono} alt="" className=" h-25 w-25 object-contain shadow-lg shadow-orange-500/50" />
            </div>
            <div className="div justify-center flex gap-5 whitespace-nowrap mt-10">
                <Link to={"/"} className='hover:text-orange-500'>Home</Link>
                <Link to={"https://github.com/Ignacio200625?tab=repositories"} className='hover:text-orange-500'>Proyectos</Link>
                <Link to={"/About"} className='hover:text-orange-500'>Sobre mi</Link>
            </div>
            <div className="div justify-center flex gap-5 whitespace-nowrap mt-10 ">
                <div className="flex items-center gap-6 text-black">
                    <a href="#" className="hover:opacity-60 transition">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
                        </svg>
                    </a>

                    <a href="https://x.com/IgnacioDAW" className="hover:opacity-60 transition">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23 3a10.9 10.9 0 0 1-3.1.9A5.4 5.4 0 0 0 22.4 1a10.8 10.8 0 0 1-3.4 1.3A5.4 5.4 0 0 0 9.8 7.1a15.3 15.3 0 0 1-11.1-5.6 5.4 5.4 0 0 0 1.7 7.2A5.3 5.3 0 0 1 .96 8v.1a5.4 5.4 0 0 0 4.3 5.3 5.4 5.4 0 0 1-2.4.1 5.4 5.4 0 0 0 5 3.8A10.9 10.9 0 0 1 0 19.5 15.4 15.4 0 0 0 8.4 22c10.1 0 15.6-8.3 15.6-15.6v-.7A11 11 0 0 0 23 3z" />
                        </svg>
                    </a>

                    <a href="#" className="hover:opacity-60 transition">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.5a4.6 4.6 0 0 1 1.7 1.7c.2.4.4 1 .5 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2a4.6 4.6 0 0 1-1.7 1.7c-.4.2-1 .4-2.2.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5a4.6 4.6 0 0 1-1.7-1.7c-.2-.4-.4-1-.5-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.5-2.2A4.6 4.6 0 0 1 4.5 3c.4-.2 1-.4 2.2-.5C8.4 2.2 8.8 2.2 12 2.2zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.9a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z" />
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/ignacio-mart%C3%ADn-bravo/" className="hover:opacity-60 transition">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2zM8.3 19H5.7V9h2.6v10zM7 7.7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM19 19h-2.6v-5.1c0-1.2 0-2.7-1.6-2.7-1.6 0-1.9 1.3-1.9 2.6V19h-2.6V9h2.5v1.4h.1a2.7 2.7 0 0 1 2.4-1.3c2.6 0 3.1 1.7 3.1 3.9V19z" />
                        </svg>
                    </a>
                </div>

            </div>
            <div className='w-full bg-[#545454] absolute bottom-0 text-white py-5'>@2026 <span className='text-orange-500'>Ignacio Martin Bravo</span></div>

        </div>
    )

}

export default Footer