import React, { useState } from 'react'
import Header from '../Component/Header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import './style.css';
import { Container } from '@material-ui/core';
import First from './HomeComponent/first';
import Middle from './HomeComponent/middle';
import Third from './HomeComponent/third';
import Footer from './HomeComponent/footer';
import Proton from 'proton-engine';
import ParticlesBg from 'particles-bg'
const Home = () => {
    const width = window.innerWidth;
    let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [5, 30000000],
        v: [2, 5],
        tha: [-40, 40],
        // body: "./img/icon.png", // Whether to render pictures
        // rotate: [0, 20],
        alpha: [0.6, 0],
        scale: [1, 0.1],
        position: "center", // all or center or {x:1,y:1,width:100,height:100}
        color: ["random", "#ff0000"],
        cross: "dead", // cross or bround
        random: 15,  // or null,
        g: 5,    // gravity
        // f: [2, -1], // force
        onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
        }
    };
    return (
        <div >
            <div className='part1'>
                <ParticlesBg
                    type="cobweb" bg={true} />
                <Container className='headerUpper' >
                    <div className='divForUpper'>
                        <p className='uppderHeaderText'>
                            <LocationOnOutlinedIcon style={{ fontSize: 25, color: '#fff', fontWeight: '10px' }} />
                            2864 Highway 54 Suite A, Peachtree City, GA 30268
                        </p>
                        <p className='innerText'>
                            <p style={{ color: "white" }}> Call us for inquiry : </p>
                            <p className="no">
                                <a className="no" href="skype:echo123?call" >{" 1800.879.5247 "}</a>
                            </p>
                        </p>

                    </div>
                </Container>
                <Header disableGutters={width > 500 ? false : true} />
                <First />
            </div>

            <Middle />
            <Third />
            <Footer />
        </div >
    );
}

export default Home;