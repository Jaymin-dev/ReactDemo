import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../HomeComponent/footer.css';
import { Card, CardActionArea, Chip, Button, Container, Grid, Typography, CardMedia, CardContent, CardActions, } from '@material-ui/core';
import Logo from '../../assets/footer-logo.png';
import Image from 'react-bootstrap/Image'
import List from './list';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Footer = () => {
    const width = window.innerWidth;
    const info = [
        {
            header: "Quick links",
            item1: "Home",
            item2: "About us",
            item3: "Request Call Back",
            item4: "Testimonials",
            item5: "Contact Us",

        },
        {
            header: "Services",
            item1: "Networking",
            item2: "Custome Build PC",
            item3: "Hardware UPgrade",
            item4: "Virus Removal",
            item5: "Software Installation",

        }
    ];
    return (
        <div className="footer" disableGutters={true}>
            <Container>
                <div
                    className="footerContent"
                >
                    <div
                        className="desWithLogo"
                    >
                        <Image
                            src={Logo}
                        />
                        <p
                            className="logoDes"
                        >
                            Leverage agile frameworks to provide a
                            robust synopsis for high level overviews.
                            Iterative approaches to
                            corporate strategy foster
                            collaborative thinking to further.
                        </p>
                    </div>

                    <div>
                        <List
                            header={info[0].header}
                            item1={info[0].item1}
                            item2={info[0].item2}
                            item3={info[0].item3}
                            item4={info[0].item4}
                            item5={info[0].item5}
                        />
                    </div>

                    <div>
                        <List
                            header={info[1].header}
                            item1={info[1].item1}
                            item2={info[1].item2}
                            item3={info[1].item3}
                            item4={info[1].item4}
                            item5={info[1].item5}
                        />
                    </div>

                    <div className="addressDiv" >
                        <h4 className="headerTitle">Get In Touch</h4>
                        <p className="footerNumber">(1800) 574 9687</p>
                        <p className="address">
                            542, 8 no. Street, New Youk, MAC 5245
                            Compurox@contact.gmail.com
                            </p>
                        <div className="SocialContact">
                            <div className="arrowInner">
                                <FacebookIcon
                                    className="icons"
                                />
                            </div>
                            <div className="arrowInner">
                                <TwitterIcon
                                    className="icons"
                                />
                            </div>
                            <div className="arrowInner">
                                <InstagramIcon
                                    className="icons"
                                />
                            </div>
                            <div className="arrowInner">
                                <LinkedInIcon
                                    className="icons"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div
                        className="dividers"
                    />
                    <div className="footerCopyrightText">
                        <p className="copyrightText">© Copyright Compurox 2019. All right reserved.</p>
                        <p className="copyrightText">Created by : ThemeArc.</p>
                    </div>
                </div>
            </Container>
        </div>

    );
}

export default Footer;