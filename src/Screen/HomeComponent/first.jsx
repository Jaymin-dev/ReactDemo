import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import '../style.css';
import { Chip, Container, Grid, Typography } from '@material-ui/core';
import { Call } from '@material-ui/icons';
import Image from 'react-bootstrap/Image';
import Man from '../../assets/man.png';
const first = () => {
    const width = window.innerWidth;
    return (

        <Container
        >
            <div
                className="combo"
            >
                <div>
                    <Typography
                        className='typoHeading'
                        variant={width > 500 ? "h4" : "h6"}
                        align={(width > 500) ? 'left' : 'center'}
                    >
                        Looking for
                    </Typography>
                    <Typography
                        className='computerHeading'
                        variant={width > 500 ? "h3" : "h5"}
                        align={(width > 500) ? 'left' : 'center'}
                    >
                        Computer / Laptop Repair
                    </Typography>
                    <Typography
                        style={(width > 500) ? { width: "60%" } : { width: "100%" }}
                        className='des'
                    >
                        {" Our techies will diagnose your computer errors and " +
                            "troubleshoot it and restore your PC to its original state. Call us now to get instant tech support."}

                    </Typography>
                    <p className="italic">
                        {"Computer Repair, Laptop Repair, Printer Repair, On-Site & Online Support"}
                    </p>
                    <div className='call'>
                        <div
                            className='callIcon'
                        >
                            <div className='icon' >

                                <Call
                                    style={{ fontSize: 60, justifyContent: 'center' }}
                                />
                            </div>
                        </div>
                        <div
                            className='callbase'
                        >
                            <p className="tollFree"> TOLL FREE :
                            </p>
                            <p className="number">
                                <a className='calls'
                                    href='tel:1800-879-5247'>
                                    1800.879.5247
                            </a>
                            </p>
                        </div>
                    </div>
                    <p className="answer">
                        Answered in less then 60 seconds
                    </p>

                </div>
                <div className='image'>
                    <Image src={Man} className="avatar" />
                </div>
            </div>
        </Container>

    );
}

export default first;