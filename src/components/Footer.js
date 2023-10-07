import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillInstagram,
    AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <div className="footer-container">
                {/* <Col md="4" className="footer-copywright">
                    <h3>Designed and Developed by Soumyajit Behera</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} SB</h3>
                </Col> */}
                <div className="footer-body">
                    <h3>
                        Feel free to <span className="purple">connect </span>
                        with me
                    </h3>
                    <ul className="footer-icons">
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
                    </ul>
                </div>
            </div>
        </Container>
    );
}

export default Footer;
