import React, { useState, useRef, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import Project from "../cards/Project";
import Title from "../text/Title";

const Projects = () => {
    const [filter, setFilter] = useState("all");
    const projects = [
        {
            url: "https://vased-web.vercel.app/",
            img: "/assets/images/vased-project.png",
            title: "Vased LMS. Fullstack Learning Management System with Express, ReactJS and authentication with JWT",
            category: "fullstack react express best",
        },
        {
            url: "https://em-hechoamano.vercel.app/",
            img: "/assets/images/em-project.png",
            title: "Em-HechoAmano: e-commerce",
            category: "react",
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
        {
            url: "https://ielectro13.github.io/impacto-covid/",
            img: "/assets/images/covid-project.png",
            title: "Covid-19 tracker",
            category: "javascript",
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
                        className={`py-1 px-3 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors ${filter === "all" ? "bg-pink-700 text-neutral-100" : "text-neutral-600"}`}
                    >
                        ALL
                    </button>
                    <button
                        onClick={() => setFilter("best")}
                        className={`py-1 px-3 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors ${filter === "best" ? "bg-pink-700 text-neutral-100" : "text-neutral-600"}`}
                    >
                        BEST PROJECTS
                    </button>
                    <button
                        onClick={() => setFilter("fullstack")}
                        className={`py-1 px-3 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors ${filter === "fullstack" ? "bg-pink-700 text-neutral-100" : "text-neutral-600"}`}
                    >
                        FULL-STACK
                    </button>
                    <button
                        onClick={() => setFilter("php")}
                        className={`py-1 px-3 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors ${filter === "php" ? "bg-pink-700 text-neutral-100" : "text-neutral-600"}`}
                    >
                        PHP
                    </button>
                    <button
                        onClick={() => setFilter("react")}
                        className={`py-1 px-3 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors ${filter === "react" ? "bg-pink-700 text-neutral-100" : "text-neutral-600"}`}
                    >
                        REACT-JS
                    </button>
                    <button
                        onClick={() => setFilter("express")}
                        className={`py-1 px-3 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors ${filter === "express" ? "bg-pink-700 text-neutral-100" : "text-neutral-600"}`}
                    >
                        EXPRESS
                    </button>
                    <button
                        onClick={() => setFilter("javascript")}
                        className={`py-1 px-3 bg-neutral-200 hover:bg-pink-700 hover:text-neutral-100 text-center transition-colors ${filter === "javascript" ? "bg-pink-700 text-neutral-100" : "text-neutral-600"}`}
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
