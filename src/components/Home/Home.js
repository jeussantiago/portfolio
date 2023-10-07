import React from "react";

import About from "../About/About";
import ProjectsSection from "../Projects/ProjectsSection";
import Home2 from "./Home2";

function Home() {
    return (
        <div>
            <Home2 />
            <About />
            <ProjectsSection />
        </div>
    );
}

export default Home;
