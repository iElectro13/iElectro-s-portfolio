import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { FaArrowRight } from "react-icons/fa";


const Welcome = () => {
    return (
        <div
            id="welcome"
            className="bg-neutral-900 text-neutral-100 flex flex-col justify-center items-center"
        >
            <MainLayout>
                <h2 className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                    Hello, I'm{" "}
                    <span className="font-bold text-pink-700">
                        Enmanuel Pereira.
                    </span>
                    <br />
                    I'm full-stack developer.
                </h2>
                <a href="#about" className="btn btn-ghost transition-colors">
                    View my work
                    <FaArrowRight className="ml-2" />
                </a>
            </MainLayout>
        </div>
    );
};

export default Welcome;
