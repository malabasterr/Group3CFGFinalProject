import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import './HeaderComponent.css';

function HeaderComponent() {
  return (
    <Navbar>
      <Container>
        <Row className="w-100">
          <Col xs={8} md={4}>
            <Navbar.Brand href="#home">INYIM</Navbar.Brand>
          </Col>
          <Col xs={4} md={8}>
            <Nav className="justify-content-end">
              <Nav.Link href="/" className='.navButton'>Home</Nav.Link>
              <Nav.Link href="/login" className='.navButton'>Login</Nav.Link>
              <div className='signupButton'>
              <Nav.Link href="/signup" className='signupButton'>SIGN-UP</Nav.Link>
              </div>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
