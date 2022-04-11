import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Project from "../cards/Project";
import Title from "../text/Title";

const Projects = () => {
    const projects = [
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
          category: "fullstack react",
      },
    ];
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

                    <div className="grid grid-cols-1 place-content-center place-items-center gap-4 md:grid-cols-2">
                        {projects.map((project) => (
                            <Project key={project.title} {...project} />
                        ))}
                    </div>
                </div>
            </MainLayout>
        </div>
    );
};

export default Projects;
