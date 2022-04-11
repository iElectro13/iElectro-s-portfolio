import React, { useState } from "react";
import { IoGridSharp } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="flex justify-center items-center bg-neutral-900 fixed top-0 w-full">
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
                    <span className="font-bold hover:text-sky-500 cursor-pointer">
                        Home
                    </span>
                    <span className="font-bold hover:text-sky-500 cursor-pointer">
                        About
                    </span>
                    <span className="font-bold hover:text-sky-500 cursor-pointer">
                        Portfolio
                    </span>
                    <span className="font-bold hover:text-sky-500 cursor-pointer">
                        Contact
                    </span>
                </div>
            </nav>
            {isOpen && (
                <div className="bg-neutral-900 text-neutral-100 flex flex-col justify-center items-center p-2 absolute top-full w-full lg:hidden">
                    <span className="font-bold hover:text-sky-500 cursor-pointer">
                        Home
                    </span>
                    <span className="font-bold hover:text-sky-500 cursor-pointer">
                        About
                    </span>
                    <span className="font-bold hover:text-sky-500 cursor-pointer">
                        Portfolio
                    </span>
                    <span className="font-bold hover:text-sky-500 cursor-pointer">
                        Contact
                    </span>
                </div>
            )}
        </header>
    );
};

export default Navbar;
