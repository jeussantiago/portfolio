import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiBootstrap,
    DiDjango,
    DiGit,
    DiJavascript1,
    DiMongodb,
    DiPython,
    DiReact,
} from "react-icons/di";
import {
    SiAmazonaws,
    SiCss3,
    SiGithub,
    SiHtml5,
    SiPaypal,
    SiPostgresql,
    SiPostman,
    SiRedux,
    SiSolidity,
    SiVisualstudiocode,
} from "react-icons/si";

const frontendIcons = [
    { icon: <DiJavascript1 />, key: "javascript" },
    { icon: <DiReact />, key: "react" },
    { icon: <SiRedux />, key: "redux" },
    { icon: <SiCss3 />, key: "css" },
    { icon: <SiHtml5 />, key: "html" },
    { icon: <DiBootstrap />, key: "bootstrap" },
    { icon: <SiPaypal />, key: "paypal" },
];

const backendIcons = [
    { icon: <DiPython />, key: "python" },
    { icon: <DiDjango />, key: "django" },
    { icon: <SiPostgresql />, key: "postgresql" },
    { icon: <DiMongodb />, key: "mongodb" },
    { icon: <SiAmazonaws />, key: "AWS" },
    { icon: <SiPostman />, key: "postman" },
];

const otherToolsIcons = [
    { icon: <SiGithub />, key: "github" },
    { icon: <DiGit />, key: "git" },
    { icon: <SiVisualstudiocode />, key: "visualstudiocode" },
    { icon: <SiSolidity />, key: "solidity" },
];

function Techstack() {
    return (
        <div>
            <h1 className="project-heading">
                Frontend <strong className="purple">Tools </strong>
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                {frontendIcons.map((tech) => (
                    <Col xs={4} md={2} className="tech-icons" key={tech.key}>
                        {tech.icon}
                    </Col>
                ))}
            </Row>

            <h1 className="project-heading">
                Backend <strong className="purple">Tools </strong>
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                {backendIcons.map((tech) => (
                    <Col xs={4} md={2} className="tech-icons" key={tech.key}>
                        {tech.icon}
                    </Col>
                ))}
            </Row>

            <h1 className="project-heading">
                Other <strong className="purple">Tools </strong>
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                {otherToolsIcons.map((tech) => (
                    <Col xs={4} md={2} className="tech-icons" key={tech.key}>
                        {tech.icon}
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Techstack;
