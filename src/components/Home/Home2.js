import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import teachGif from "../../Assets/home-person.png";
import Type from "./Type";

function Home2() {
    return (
        <Container fluid className="home-section" id="home">
            <Container className="home-content">
                <Row>
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Hi There!{" "}
                            <span
                                className="wave"
                                role="img"
                                aria-labelledby="wave"
                            >
                                👋🏻
                            </span>
                        </h1>

                        <h1 className="heading-name">
                            I'M
                            <strong className="main-name">
                                {" "}
                                JEUS SANTIAGO
                            </strong>
                        </h1>

                        <div
                            style={{
                                paddingTop: 50,
                                paddingLeft: 50,
                                textAlign: "left",
                            }}
                        >
                            <Type />
                        </div>
                        <div
                            style={{
                                paddingTop: 50,
                                paddingLeft: 50,
                                textAlign: "left",
                            }}
                        >
                            <p>
                                Feel free to{" "}
                                <span className="purple">connect </span>
                                with me
                            </p>
                            <ul className="home-about-social-links">
                                <li className="social-icons">
                                    <a
                                        href="https://github.com/jeussantiago"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  home-social-icons"
                                    >
                                        <AiFillGithub />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="https://www.linkedin.com/in/jeussantiago/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  home-social-icons"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="mailto:jeus1santiago@gmail.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="icon-colour  home-social-icons"
                                    >
                                        <MdEmail />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col md={5} style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <img
                            src={teachGif}
                            alt="home pic"
                            className="img-fluid"
                            style={{ maxHeight: "500px" }}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
