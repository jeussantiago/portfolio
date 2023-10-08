import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import myImg from "../../Assets/person-binary.png";
import Aboutcard from "./AboutCard";
import Techstack from "./Techstack";

function About() {
    return (
        <Container fluid className="about-section" id="about-section">
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
                        <img
                            src={myImg}
                            className="img-fluid"
                            alt="avatar"
                            style={{ maxHeight: "400px" }}
                        />
                    </Col>
                </Row>

                <Techstack />
                {/* <Github /> */}
            </Container>
        </Container>
    );
}

export default About;
