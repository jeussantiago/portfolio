import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Carousel = ({ name, demoLink, images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const translationStep = 35;
    const minTranslateX = 0;
    const itemWidth = 80;
    const numberOfItems = 8;
    const totalWidth = itemWidth * numberOfItems;
    const carouselWidth = 600;
    const maxTranslateX = -(totalWidth - carouselWidth);

    const moveLeft = () => {
        if (translateX < minTranslateX) {
            setTranslateX(translateX + translationStep);
        }
    };

    const moveRight = () => {
        if (translateX > maxTranslateX) {
            setTranslateX(translateX - translationStep);
        }
    };

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="game-section">
            <div className="project-title-container">
                <div className="line-title">
                    <h2>
                        {name} <br />
                        <a href={demoLink}>(Demo Link)</a>
                    </h2>
                </div>
                {/* <h2 className="line-title">{name} asdasd</h2> */}
            </div>
            <div
                className="owl-carousel custom-carousel owl-theme"
                style={{
                    transform: `translateX(${translateX}%)`,
                }}
            >
                {images.map((data, index) => (
                    <div
                        key={index}
                        className={`item${
                            activeIndex === index ? " active" : ""
                        }`}
                        style={{
                            backgroundImage: `url(${data.image})`,
                        }}
                        onClick={() => handleItemClick(index)}
                    >
                        <div className="item-desc">
                            <h4>{data.description}</h4>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carousel-controls-row">
                <FaArrowAltCircleLeft
                    className="carousel-arrows"
                    onClick={moveLeft}
                    disabled={translateX >= minTranslateX}
                    style={{
                        color: translateX >= minTranslateX ? "grey" : "white",
                        cursor:
                            translateX >= minTranslateX ? "default" : "pointer",
                    }}
                />
                <FaArrowAltCircleRight
                    className="carousel-arrows"
                    onClick={moveRight}
                    disabled={translateX <= maxTranslateX}
                    style={{
                        color: translateX <= maxTranslateX ? "grey" : "white",
                        cursor:
                            translateX <= maxTranslateX ? "default" : "pointer",
                    }}
                />
            </div>
        </section>
    );
};

export default Carousel;
