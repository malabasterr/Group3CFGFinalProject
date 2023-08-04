import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function HeaderComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Row className="w-100">
          <Col xs={8} md={4}>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
          </Col>
          <Col xs={4} md={8}>
            <Nav className="justify-content-end">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Login</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;