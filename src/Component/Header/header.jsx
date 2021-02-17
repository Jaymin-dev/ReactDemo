import { Container, FormControl } from '@material-ui/core';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Nav, Navbar, NavDropdown, Button, Image } from 'react-bootstrap';
import './style.css';
import imageLogo from '../../assets/logo.png'
const index = (props) => {
    const { style, disableGutters } = props
    return (
        <Container className='div' style={style} disableGutters={disableGutters}>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <Navbar bg="#007bff" expand='sm' >
                <Navbar.Brand href="#home" className='Image'>
                    <Image src={imageLogo} fluid />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "#ffff" }} />
                <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>
                    <Nav className="mr-2">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#About Us">About Us</Nav.Link>
                        <NavDropdown
                            title="Services" renderMenuOnMount={true} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Testimonials" renderMenuOnMount={true}

                            className={'fade-item'} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/4.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/4.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/4.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/4.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#Blog">Blog</Nav.Link>
                        <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-danger" href="/SignIn">Login</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default index;