import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './videos.css'

export function Videos() {

  return (
    <div className='videos' id='videos'>
      <Container>
        <Row>
          <Col className='mb-5'><div className='ps-3 videotxt'><h1>Video Gallery</h1></div></Col>
        </Row>
        <Row>
              <Col className='mb-5'>
                  <video
                      className="video-section"
                      controls>
                      <source
                        src="./darragh/darragh.mp4" type="video/mp4"
                      />
                  </video>
                  <Row className='mx-1'>By Darragh</Row>
              </Col>
          </Row>
          <Row>
              <Col className='mb-5'>
                  <video
                      className="video-section"
                      controls>
                      <source
                        src="./adam/CCC.mp4" type="video/mp4"
                      />
                  </video>
                  <Row className='mx-1'>By Adam</Row>
              </Col>
          </Row>
      </Container>
         
    </div>
  );
}

export default Videos;