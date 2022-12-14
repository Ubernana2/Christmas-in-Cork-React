import React, {useState, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Navibar() {
  const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 100
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])



    return (
        <Navbar collapseOnSelect expand="lg" fixed='top' style={{ transition: '0.5s ease',backgroundColor: navBackground ? 'white' : 'transparent'}} className={'navcss'} >
          <Container>
          <Container>
            <Navbar.Brand href="#home" style={{transition: '0.5s ease',color: navBackground ? 'black' : 'white'}}>
              <img
                alt=""
                src="./misc_img/ccc_logo.png"
                width="70"
                height="70"
                className="d-inline-block align-middle"
              />{' '}
              Cork City Christmas
            </Navbar.Brand>
          </Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#about" style={{transition: '0.5s ease',color: navBackground ? 'black' : 'white'}}>About</Nav.Link>
                <Nav.Link href="#gallery" style={{transition: '0.5s ease',color: navBackground ? 'black' : 'white'}}>Photos</Nav.Link>
                <Nav.Link href="#videos" style={{transition: '0.5s ease',color: navBackground ? 'black' : 'white'}}>Videos</Nav.Link>
                <Nav.Link href="#posters" style={{transition: '0.5s ease',color: navBackground ? 'black' : 'white'}}>Posters</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
  }

export default Navibar;