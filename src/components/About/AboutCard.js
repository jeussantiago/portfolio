import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Welcome to my corner of the web. I'm{" "}
                        <span className="purple">Jeus Santiago</span>, a web
                        developer who's equally passionate about crafting code
                        and exploring the world. I specialize in web
                        development, both frontend and backend, and I've delved
                        into the fascinating realm of blockchain. During my
                        studies, I focused on data science, where I delved into
                        uncovering insights from complex data sets.
                        <br />
                        <br />
                        Beyond the digital realm, I find solace in rock climbing
                        and feed my wanderlust through travel. Thanks for
                        stopping by; I look forward to sharing my experiences
                        and creations with you."
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
