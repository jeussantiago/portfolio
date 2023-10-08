import React from "react";
import About from "../About/About";
import Particle from "../Particle";
import ProjectsSection from "../Projects/ProjectsSection";
import Home2 from "./Home2";

function Home() {
    return (
        <div>
            <Particle />
            <Home2 />
            <About />
            <ProjectsSection />
        </div>
    );
}

export default Home;
