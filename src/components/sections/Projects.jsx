import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Title from "../text/Title";

const Projects = () => {
    return (
        <div
            id="projects"
            className="w-full flex flex-col justify-center items-center"
        >
            <MainLayout>
                <Title title="PROJECTS" />
                <div className="flex flex-wrap w-full justify-center items-center gap-2">
                    <button className="py-1 px-3 text-neutral-600 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors focus:bg-pink-700 focus:text-neutral-100">
                        ALL
                    </button>
                    <button className="py-1 px-3 text-neutral-600 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors focus:bg-pink-700 focus:text-neutral-100">
                        FULL-STACK
                    </button>
                    <button className="py-1 px-3 text-neutral-600 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors focus:bg-pink-700 focus:text-neutral-100">
                        DJANGO
                    </button>
                    <button className="py-1 px-3 text-neutral-600 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors focus:bg-pink-700 focus:text-neutral-100">
                        REACT-JS
                    </button>
                </div>
            </MainLayout>
        </div>
    );
};

export default Projects;
