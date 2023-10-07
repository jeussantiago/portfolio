import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
    AiOutlineFundProjectionScreen,
    AiOutlineHome,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const location = useLocation();
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container className="px-5">
                <Navbar.Brand href="/portfolio" className="d-flex navbar-brand">
                    <h2>JS</h2>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        {location.pathname === "/resume" && (
                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/portfolio"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <AiOutlineHome
                                        style={{ marginBottom: "2px" }}
                                    />{" "}
                                    Home
                                </Nav.Link>
                            </Nav.Item>
                        )}

                        {location.pathname !== "/resume" && (
                            <>
                                <Nav.Item>
                                    <Nav.Link
                                        href="#home"
                                        onClick={() => updateExpanded(false)}
                                    >
                                        <AiOutlineHome
                                            style={{ marginBottom: "2px" }}
                                        />{" "}
                                        Home
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        href="#about-section"
                                        onClick={() => updateExpanded(false)}
                                    >
                                        <AiOutlineUser
                                            style={{ marginBottom: "2px" }}
                                        />{" "}
                                        About
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link
                                        href="#project-section"
                                        onClick={() => updateExpanded(false)}
                                    >
                                        <AiOutlineFundProjectionScreen
                                            style={{ marginBottom: "2px" }}
                                        />{" "}
                                        Projects
                                    </Nav.Link>
                                </Nav.Item>
                            </>
                        )}

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/resume"
                                onClick={() => updateExpanded(false)}
                            >
                                <CgFileDocument
                                    style={{ marginBottom: "2px" }}
                                />{" "}
                                Resume
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
