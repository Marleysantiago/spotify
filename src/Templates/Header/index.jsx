import React from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
import './Header.css'


export default function Header(){
    return(
        <>
            
            
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" className="navbar">
                <Container>
                    <Navbar.Brand href="#home"><img className="logo" src={process.env.PUBLIC_URL + 'img/logo.jpg'} alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle bg="light" variant="dark" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse bg="light" variant="light" id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            
                        </Nav>
                        <Nav className="text">
                            <Nav.Link href="#deets"><div>Premium</div></Nav.Link>
                            <Nav.Link href="#deets"><div>Suporte</div></Nav.Link>
                            <Nav.Link href="#deets"><div>Baixar</div></Nav.Link>
                            <Nav.Link className="dis"><p>|</p></Nav.Link>
                            <Nav.Link href="#deets"><div>Inscrever-se</div></Nav.Link>
                            <Nav.Link href="#memes"><div>Entrar</div></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
