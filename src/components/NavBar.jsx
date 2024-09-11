import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import './NavBar.css'

function NavBar() {
    return (
        <Navbar expand="lg" className="color-navbar" fixed='top'>
            <Container>
                <Navbar.Brand href="#home">Bezier</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Stickers</Nav.Link>
                        <Nav.Link href="#link">Estampados</Nav.Link>
                        <Nav.Link href="#link">Papeleria</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavBar;