import React, { useState } from "react";
import { IoGridSharp } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="flex justify-center items-center bg-neutral-900 fixed top-0 w-full z-50">
            <nav className="responsive-container text-neutral-100 flex justify-between items-center">
                <h1 className="font-bold text-4xl">
                    i<span className="text-pink-700">Electro</span>
                </h1>
                <IoGridSharp
                    onClick={() => setIsOpen(!isOpen)}
                    className={
                        !isOpen
                            ? "text-neutral-100 text-4xl cursor-pointer lg:hidden"
                            : "text-pink-700 text-4xl cursor-pointer lg:hidden"
                    }
                />
                <div className="bg-neutral-900 text-neutral-100 flex-row justify-center items-center p-2 hidden gap-10 lg:flex">
                    <a onClick={()=> setIsOpen(false)} href="#welcome" className="font-bold hover:text-sky-500 cursor-pointer">
                        Welcome
                    </a>
                    <a onClick={()=> setIsOpen(false)} href="#about" className="font-bold hover:text-sky-500 cursor-pointer">
                        About
                    </a>
                    <a onClick={()=> setIsOpen(false)} href="#projects" className="font-bold hover:text-sky-500 cursor-pointer">
                        Projects
                    </a>
                    <a onClick={()=> setIsOpen(false)} href="#contact" className="font-bold hover:text-sky-500 cursor-pointer">
                        Contact
                    </a>
                </div>
            </nav>
            {isOpen && (
                <div className="bg-neutral-900 text-neutral-100 flex flex-col justify-center items-center p-2 absolute top-full w-full lg:hidden">
                    <a onClick={()=> setIsOpen(false)} href="#welcome" className="text-xl font-bold hover:text-sky-500 cursor-pointer">
                        Welcome
                    </a>
                    <a onClick={()=> setIsOpen(false)} href="#about" className="text-xl font-bold hover:text-sky-500 cursor-pointer">
                        About
                    </a>
                    <a onClick={()=> setIsOpen(false)} href="#projects" className="text-xl font-bold hover:text-sky-500 cursor-pointer">
                        Projects
                    </a>
                    <a onClick={()=> setIsOpen(false)} href="#contact" className="text-xl font-bold hover:text-sky-500 cursor-pointer">
                        Contact
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
