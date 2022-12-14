import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './posters.css'

export function Posters() {

  return (
    <div className='posterbg' id='posters'>
      <Container>
        <Row>
          <Col className='mb-5'><div className='ps-3 postertxt'><h1>Poster Gallery</h1></div></Col>
        </Row>
        <Row className='row-height'>
              <Col className='mb-5 pb-5 col-lg-4'>
                  <video
                      className="poster-section"
                      loop
                      muted
                      autoPlay>
                      <source
                        src="./cian/poster_glow.mp4" type="video/mp4"
                      />
                  </video>
                  <Row className='mx-1'>By Cian</Row>
              </Col>
              <Col className='col-lg-4'><video
                      className="poster-section"
                      loop
                      muted
                      autoPlay>
                      <source
                        src="./cian/poster_op.mp4" type="video/mp4"
                      />
                  </video>
                  </Col>
              <Col className='mb-5 col-lg-4'>
              <video
                      className="poster-section"
                      loop
                      muted
                      autoPlay>
                      <source
                        src="./cian/poster_patrick.mp4" type="video/mp4"
                      />
                  </video>
              </Col>
          </Row>
      </Container>
         
    </div>
  );
}

export default Posters;