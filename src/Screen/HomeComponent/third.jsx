import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../HomeComponent/third.css';
import { Divider, CardActionArea, Chip, Button, Container, Grid, Typography, CardMedia, CardContent, CardActions, } from '@material-ui/core';
import "react-multi-carousel/lib/styles.css";
import Image from 'react-bootstrap/Image';
import Avatar from "../../assets/thumb-1.png";
import Carousel from 'react-bootstrap/Carousel';
import Arrow from '../HomeComponent/arrow';
const Third = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);

    };
    const CarouselContent = () => {
        return (
            <div className="content">

                <Image src={Avatar}
                    className="avatars"
                    roundedCircle />
                <div
                    className="divider"
                />
                <div>
                    <p className="contentParagraph">
                        Nam libero tempore, cum soluta nobis est
                        eligendi optio cumque nihil impedit quo minus
                        id quod maxime placeat facere possimus,
                        omnis voluptas assumenda est, omnis dolor
            repellendus.Temporibus autem quibusdam et aut officiis.</p>
                    <p className="authorName">
                        Michale John

                <p className="postion">
                            General Excutive
                </p>
                    </p>
                </div>
            </div>
        );
    }

    const width = window.innerWidth;
    return (
        <div className="third" disableGutters={true}>
            <div className="color">
                <Arrow
                    onRightClick={() => { setIndex(index > 0 ? (index - 1) : 2) }}
                    onLeftClick={() => { setIndex(index < 2 ? (index + 1) : 0) }}
                />
                <Carousel
                    controls={false}
                    indicators={false}
                    interval={1000000000}
                    className="carousel"
                    activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <CarouselContent />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselContent />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselContent />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    );
}

export default Third;