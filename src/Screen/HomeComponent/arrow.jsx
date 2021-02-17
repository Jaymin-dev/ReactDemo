import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../HomeComponent/third.css';
import { Divider, CardActionArea, Chip, Button, Container, Grid, Typography, CardMedia, CardContent, CardActions, } from '@material-ui/core';
import "react-multi-carousel/lib/styles.css";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Arrow = (props) => {
    const { onRightClick, onLeftClick } = props;
    return (
        <div className="arrow">
            <div
                onClick={onRightClick}
                className="arrowOutter"
            > <ArrowRightAltIcon
                    className="iconArrow"
                /></div>
            <div
                onClick={onLeftClick}
                className="arrowInner"
            > <ArrowRightAltIcon
                    className="iconArrow"
                /></div>
        </div>
    );
}

export default Arrow;