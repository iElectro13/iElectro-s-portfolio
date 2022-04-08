import React from "react";
import Navbar from "../sections/Navbar";
import Welcome from "../sections/Welcome";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

const Landing = () => {
    return (
        <div>
            <Navbar />
            <Welcome />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default Landing;
