import '../App.css'
import marca from "../assets/IconoPortfolio.jpg"
import { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router';

import Curriculum from "../Files/Curriculum_Ignacio_Martin_Bravo.pdf"
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='px-20 py-10 '>
            <nav>
                <button
                    className="md:hidden text-black focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                <div className="flex justify-between hidden md:flex gap-10 items-center">

                    <div className="div">
                        <img src={marca} alt="" className=" h-15 w-15 object-contain shadow-lg shadow-orange-500/50" />
                    </div>
                    <div className="div flex gap-5 whitespace-nowrap">
                        <Link to={"/"} className='hover:text-orange-500'>Home</Link>
                        <Link to={"https://github.com/Ignacio200625?tab=repositories"} className='hover:text-orange-500'>Projects</Link>
                        <Link to={"/About"} className='hover:text-orange-500'>Sobre mi</Link>
                    </div>
                    <div className="div">
                        <a href={Curriculum} download>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-sm cursor-pointer hover:bg-orange-700 ">Download CV</button>

                        </a>
                    </div>

                </div>
                {isOpen && (
                    <div className="flex flex-col md:hidden gap-10 items-center">

                        <div className="div">
                            <img src={marca} alt="" className=" h-15 w-15 object-contain shadow-lg shadow-orange-500/50" />
                        </div>
                        <div className="div flex gap-5 whitespace-nowrap">
                            <Link to={"/"} className='hover:text-orange-500'>Home</Link>
                            <Link to={"https://github.com/Ignacio200625?tab=repositories"} className='hover:text-orange-500'>Projects</Link>
                            <Link to={"/About"} className='hover:text-orange-500'>Sobre mi</Link>
                        </div>
                        <div className="div">
                            <a
                                href={Curriculum}
                                download
                                className="bg-orange-500 text-white px-4 py-2 rounded-sm cursor-pointer hover:bg-orange-700"
                            >
                                Descargar CV
                            </a>
                        </div>

                    </div>
                )}
            </nav>
        </header>

    )
}

export default Header;