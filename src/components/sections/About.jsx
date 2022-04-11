import React from "react";
import Title from "../text/Title";
import MainLayout from "../../layouts/MainLayout";
import Skill from "../cards/Skill";
import Subtitle from "../text/Subtitle";

const About = () => {
    return (
        <div id="about" className="flex flex-col justify-center items-center">
            <MainLayout>
                <div className="flex flex-col justify-center items-center xl:flex-row gap-8">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Title title={"ABOUT"} />
                        <div className="grid grid-cols-2 gap-4 place-items-start">
                            <Skill
                                title="Clean code"
                                text="I use good programming practices"
                            />
                            <Skill title="REST API" />
                            <Skill
                                title="Responsive"
                                text="My app's and websites works in any device or screen"
                            />
                            <Skill
                                title="Fast learning"
                                text="I can switch between diferents technologies easily"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Subtitle title="Who is iElectro?" />
                        <p className="text-neutral-600 text-center">
                            I'm a{" "}
                            <span className="font-bold text-pink-700">
                                fullstack
                            </span>{" "}
                            developer. I have a serious passion for building
                            things from scratch. I also like to discuss about
                            which technologies are the best for an specific
                            project.
                        </p>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <span className="text-sky-500 font-bold text-xl">
                                My favorites technologies are:
                            </span>
                            <div className="grid grid-cols-2 gap-4 place-items-start">
                                <span className="text-2xl text-neutral-700 font-bold text-center w-full">
                                    Django Rest Framework
                                </span>
                                <span className="text-2xl text-neutral-700 font-bold text-center w-full">
                                    PostgreSQL
                                </span>
                                <span className="text-2xl text-neutral-700 font-bold text-center w-full">
                                    MongoDB
                                </span>
                                <span className="text-2xl text-neutral-700 font-bold text-center w-full">
                                    ReactJS
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
};

export default About;
