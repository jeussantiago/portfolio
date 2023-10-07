import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import laptopImg from "../../Assets/about.png";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
// import Github from "./Github";
import myImg from "../../Assets/avatar.svg";
import Techstack from "./Techstack";

function About() {
    return (
        <Container fluid className="about-section" id="about-section">
            <Particle />
            <Container>
                <Row
                    style={{
                        justifyContent: "center",
                        padding: "10px",
                        marginBottom: "75px",
                    }}
                >
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1
                            style={{ fontSize: "2.1em", paddingBottom: "20px" }}
                        >
                            Know Who <strong className="purple">I Am</strong>
                        </h1>
                        <Aboutcard />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "70px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        {/* <img
                            src={laptopImg}
                            alt="about"
                            className="img-fluid"
                        /> */}

                        <img src={myImg} className="img-fluid" alt="avatar" />
                    </Col>
                </Row>

                <Techstack />
                {/* <Github /> */}
            </Container>
        </Container>
    );
}

export default About;
