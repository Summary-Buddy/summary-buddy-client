import './Header.css';
import { Navbar as BootstrapNavbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Link 컴포넌트 가져오기

export default function Header() {
    return (
        <BootstrapNavbar expand="lg" className="navbar-custom">
            <Container fluid>
                <BootstrapNavbar.Brand href="#">Summary Buddy</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="navbarScroll" />
                <BootstrapNavbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link> {/* 링크 수정 */}
                        <Nav.Link as={Link} to="/Record">Record</Nav.Link>
                        <Nav.Link as={Link} to="/Mypage">MyPage</Nav.Link>
                        
                       
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-success">Sign In</Button>
                        <Button variant="outline-success">Sign Up</Button>
                    </Form>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}
