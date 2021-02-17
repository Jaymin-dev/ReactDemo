import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../HomeComponent/middle.css';
import { Card, CardActionArea, Chip, Button, Container, Grid, Typography, CardMedia, CardContent, CardActions, } from '@material-ui/core';
import service_1 from '../../assets/service-1.png';
import service_2 from '../../assets/service-2.png';
import service_3 from '../../assets/service-3.png';
import Image from 'react-bootstrap/Image'
import ParticlesBg from 'particles-bg'

const middle = () => {
    const width = window.innerWidth;
    return (
        <div className="middle" disableGutters={true}>

            <Container>
                <p
                    className="computerRepair"
                >
                    Computer Repair Services For Your Computer

            </p>
                <p className="desc">
                    Compurox offers you tech services anywhere and
                    anytime via the internet. Our techies are reliable,
                    attentive and patient. We offer you reliable secure
                    remote tech assistance. We have served more than 1000
                    computers in USA. We guarantee an outstanding experience.
                    tomer's satisfaction is our ultimate goaal. Our specialist
                    techies will diagnose and resolve your computer issues.
            </p>
                <div className='cards'>
                    <Card
                        className="root"
                    >
                        <CardActionArea>
                            <CardMedia
                                className="cardImage"
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={service_1}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography
                                    className='innerCard'
                                    gutterBottom variant="h6" component="h2" align='center'>
                                    Mac & PC Repairs
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p"
                                    align='center'
                                >
                                    We guarantee an outstanding experience.
                                    Customer's satisfaction is our ultimate goaal. Our specialist techies.

          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions
                        >
                            <a
                                className="button"
                                size="small" color="primary">
                                Read More
        </a>

                        </CardActions>
                    </Card>

                    {/* second Card */}
                    <Card className={"root"}>
                        <CardActionArea>
                            <CardMedia
                                className="cardImage"
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={service_2}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography
                                    className='innerCard'
                                    gutterBottom variant="h6" component="h2" align='center'>
                                    Virus Removal
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p"
                                    align='center'
                                >
                                    We guarantee an outstanding experience.
                                    Customer's satisfaction is our ultimate goaal. Our specialist techies.

          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a
                                className="button"
                                size="small" color="primary">
                                Read More
        </a>
                        </CardActions>
                    </Card>

                    {/* Third Card */}

                    <Card className={"root"}>
                        <CardActionArea>
                            <CardMedia
                                className="cardImage"
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={service_3}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography
                                    className='innerCard'
                                    gutterBottom variant="h6" component="h2" align='center'>
                                    Data Revoery
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p"
                                    align='center'
                                >
                                    We guarantee an outstanding experience.
                                    Customer's satisfaction is our ultimate goaal. Our specialist techies.

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <a
                                className="button"
                                size="small" color="primary">
                                Read More
                         </a>

                        </CardActions>
                    </Card>
                </div>
            </Container>

        </div>

    );
}

export default middle; 