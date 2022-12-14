import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './aboutus.css'

export function Aboutus() {
  return (
    <Container id = "about">
      <Row>
        <Col style={{height: '250px'}}><div className='ps-3 aboutus'><h1>About</h1>It is a magical time when Cork adorns its finest decorations. Join us during this wonderful season to experience the beauty and splendor of the city.</div></Col>
      </Row>
    </Container>
  );
}

export default Aboutus;