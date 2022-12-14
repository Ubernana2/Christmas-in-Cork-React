import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css'

export function Footer() {

  return (
    <div className='footer' id='footer'>
     <Row>
      <Col> <img
                alt=""
                src="./misc_img/ccc_logo.png"
                width="70"
                height="70"
                className="d-inline-block align-middle py-2 px-2"
              />{' '}<b>Cork City Christmas</b></Col>
              <Col className='col-md-2 mt-5'>Website made by Alex</Col>
     </Row>
         
    </div>
  );
}

export default Footer;