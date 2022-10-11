import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navs.css'

function Navs() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className='nav-title'>Educational Quizs Making</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-items">
            <Link to='/'>Home</Link>
            <Link to='/'>Quiz</Link>
            <Link to='/'>Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;