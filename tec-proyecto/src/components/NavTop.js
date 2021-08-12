import React from 'react'
import { Navbar,Container,Nav,Image,Button } from 'react-bootstrap'
import logo from '../assets/logo-vizcaya.png'
import { Link } from 'react-router-dom'

export default function NavTop() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Image src={logo} rounded style={{height:'50px'}} />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="ps-4">
                <Nav>
                    <Nav.Item>
                        <Link to='/' className='nav-link'>
                            Inicio
                        </Link>
                    </Nav.Item>                
                </Nav>
                </Navbar.Collapse>
                <Button variant="danger">Salir</Button>
            </Container>
            </Navbar>
        </div>
    )
}
