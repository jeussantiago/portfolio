import React from "react";
import { Container } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <Container fluid className="footer">
            <div className="footer-container">
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
