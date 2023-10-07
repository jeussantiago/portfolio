import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import homeLogo from "../../Assets/home-main.svg";
import About from "../About/About";
import Particle from "../Particle";
import ProjectsSection from "../Projects/ProjectsSection";
import Home2 from "./Home2";
import Type from "./Type";

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
