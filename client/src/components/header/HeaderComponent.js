import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import '../header/HeaderComponent.css';
// import logo from './ITNIT_Logo_.png';

function HeaderComponent() {
  return (
    <Navbar className='background'>
      <Container>
        <Row className="w-100">
          <Col xs={8} md={4}>
            {/* <Navbar.Brand href="#home"><img src={logo} alt="Dragon"></img></Navbar.Brand> */}
          </Col>
          <Col xs={4} md={8}>
            <Nav className="justify-content-end">
              <Nav.Link href="/" className='.navButton'>Home</Nav.Link>
              <Nav.Link href="/SigninLoginPage.js" className='.navButton'>Login</Nav.Link>
              <div className='signupButton'>
              <Nav.Link href="/SigninLoginPage.js">SIGN-UP</Nav.Link>
              </div>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
