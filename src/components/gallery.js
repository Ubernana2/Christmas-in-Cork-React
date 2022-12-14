import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhotoAlbum from "react-photo-album";
import './gallery.css'

export function Gallery() {
  const photos = [
    {
      src: "./cian/wheel_wide.JPG",
      width: 3,
      height: 2,
      class: "hover-photo"
    },
    {
      src: "./cian/Glow.JPG",
      width: 3,
      height: 2,
      className:"photo"
    },
    {
      src: "./cian/park_light.JPG",
      width: 3,
      height: 2,
      className:"photo"
    },
    //end row 1
    {
      src: "./cian/christmas1.jpg",
      width: 1200,
      height: 800,
      className:"photo"
    },
    {
      src: "./adam/adam1.JPG",
      width: 2,
      height: 3
    },
    {
      src: "./adam/adam2.JPG",
      width: 2.35,
      height: 3
    },
    {
      src: "./cian/christmas2.jpg",
      width: 3,
      height: 2
    },
    //end row 2
    {
      src: "./darragh/Pic2.jpg",
      width: 3,
      height: 2
    },
    {
      src: "./darragh/Pic6.jpg",
      width: 3,
      height: 2
    },
    {
      src: "./darragh/Pic7.jpg",
      width: 3,
      height: 2
    }
    //end row 3
  ];
  return (
    <div className='gallerycont' id='gallery'>
      <Container>
        <Row>
          <Col className='mb-5'><div className='ps-3 phototxt'><h1>Photo Gallery</h1></div></Col>
        </Row>
      </Container>
      <Row className='mx-5 pb-5'>
        <PhotoAlbum photos={photos} layout="rows"/>
      </Row>
    </div>
  );
}

export default Gallery;