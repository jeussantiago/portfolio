import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "./Carousel";

const topics = [
    {
        text: "Project Description",
        topic: "Project Description",
    },
    { text: "Tech Stack", topic: "Tech Stack" },
    {
        text: "Problems",
        topic: "Problems",
    },
    { text: "My Approach", topic: "My Approach" },
    {
        text: "Further Improvement",
        topic: "Further Improvement",
    },
];

function ProjectCard({ projectData }) {
    const [selectedTopic, setSelectedTopic] = useState("Project Description");
    const project = projectData;

    return (
        <div className="project-card-container">
            <Carousel name={project.name} images={project.images} />
            <Row className="project-card-table">
                <Col sm={4} className="project-card-left">
                    <ul className="list-unstyled">
                        {topics.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => setSelectedTopic(item.topic)}
                                className={
                                    selectedTopic === item.topic ? "active" : ""
                                }
                            >
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col sm={8} className="project-card-right">
                    <div>
                        {selectedTopic === "Project Description" && (
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: project.projectDescription,
                                }}
                            />
                        )}
                        {selectedTopic === "Tech Stack" && (
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: project.techStack,
                                }}
                            />
                        )}
                        {selectedTopic === "Problems" && (
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: project.problems,
                                }}
                            />
                        )}
                        {selectedTopic === "My Approach" && (
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: project.myApproach,
                                }}
                            />
                        )}
                        {selectedTopic === "Further Improvement" && (
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: project.furtherImprovement,
                                }}
                            />
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ProjectCard;
