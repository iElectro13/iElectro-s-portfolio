import React, { useState, useRef, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import Project from "../cards/Project";
import Title from "../text/Title";

const Projects = () => {
    const allRef = useRef();
    const [filter, setFilter] = useState("all");
    const projects = [
        {
            url: "https://vased-web.vercel.app/",
            img: "/assets/images/vased-project.png",
            title: "Fullstack LMS with Express and React",
            category: "fullstack react express",
        },
        {
            url: "https://em-hechoamano.vercel.app/",
            img: "/assets/images/em-project.png",
            title: "Em-HechoAmano: e-commerce",
            category: "react",
        },
        {
            url: "https://ielectro13.github.io/impacto-covid/",
            img: "/assets/images/covid-project.png",
            title: "Covid-19 tracker",
            category: "javascript",
        },
        {
            url: "https://crud-o.vercel.app/",
            img: "/assets/images/crudo-project.png",
            title: "CRUD-O. Fullstack todo with PHP and ReactJS",
            category: "fullstack react php",
        },
        {
            url: "https://my-first-todo-app.vercel.app/",
            img: "/assets/images/todo-project.png",
            title: "Fullstack todo with Express and React",
            category: "fullstack react express",
        },
    ];

    return (
        <div
            id="projects"
            className="w-full flex flex-col justify-center items-center"
            onClick={(e) => e.target.id === "projects" && setFilter("all")}
        >
            <MainLayout>
                <Title title="PROJECTS" />
                <div className="flex flex-wrap w-full justify-center items-center gap-2">
                    <button
                        onClick={() => setFilter("all")}
                        className="py-1 px-3 text-neutral-600 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors focus:bg-pink-700 focus:text-neutral-100"
                        ref={allRef}
                    >
                        ALL
                    </button>
                    <button
                        onClick={() => setFilter("fullstack")}
                        className="py-1 px-3 text-neutral-600 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors focus:bg-pink-700 focus:text-neutral-100"
                    >
                        FULL-STACK
                    </button>
                    <button
                        onClick={() => setFilter("php")}
                        className="py-1 px-3 text-neutral-600 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors focus:bg-pink-700 focus:text-neutral-100"
                    >
                        PHP
                    </button>
                    <button
                        onClick={() => setFilter("react")}
                        className="py-1 px-3 text-neutral-600 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors focus:bg-pink-700 focus:text-neutral-100"
                    >
                        REACT-JS
                    </button>
                    <button
                        onClick={() => setFilter("express")}
                        className="py-1 px-3 text-neutral-600 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors focus:bg-pink-700 focus:text-neutral-100"
                    >
                        EXPRESS
                    </button>
                    <button
                        onClick={() => setFilter("javascript")}
                        className="py-1 px-3 text-neutral-600 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors focus:bg-pink-700 focus:text-neutral-100"
                    >
                        JAVASCRIPT
                    </button>
                </div>

                <div className="grid grid-cols-1 place-content-center place-items-center gap-4 sm:grid-cols-2">
                    {projects.map(
                        (project) =>
                            (project.category.includes(filter) ||
                                filter === "all") && (
                                <Project key={project.title} {...project} />
                            )
                    )}
                </div>
            </MainLayout>
        </div>
    );
};

export default Projects;
