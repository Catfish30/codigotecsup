import React from 'react'
import { Navbar,Container,Nav,Image,Button } from 'react-bootstrap'
import logo from '../assets/logo-vizcaya.png'
import { Link } from 'react-router-dom'
import Cookies  from 'universal-cookie'
import { Component } from 'react'


const cookies = new Cookies();


class NavTop extends Component {

    
    cerrarSesion=()=>{
        
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido_paterno', {path: "/"});
        cookies.remove('apellido_materno', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});

    }

    
    // componentDidMount() {
    //     if(!cookies.get('username')){
    //         window.location.href="/login/alumnos";
    //     }
    // }

    // mostrarSalir= () => {

    //     let x = document.getElementById('salir').style.display
    //     if( x === 'none'){
    //         document.getElementById('salir').style.display = "block"
    //         document.getElementById('ingresar').style.display = "none"
    //     }else{
    //         document.getElementById('salir').style.display = "none"
    //         document.getElementById('ingresar').style.display = "block"
    //     }
        
    // }

render() {

    

    return (


        <div>
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand>
                <Image src={logo} rounded style={{height:'50px'}} />
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="ps-4">
                <Nav className="me-auto">
                    <Nav.Item>
                        <Link to='/' className='nav-link'>
                            Inicio
                        </Link>
                    </Nav.Item>     
            
                </Nav>
                <Link className="btn btn-danger ingresar" id="ingresar"  to='/login'>Ingresar</Link>
                <Link className="btn btn-danger ms-1" id="salir" style={{display:'none'}}  onClick={()=>this.cerrarSesion()} to='/'>Salir</Link>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
}

export default NavTop
