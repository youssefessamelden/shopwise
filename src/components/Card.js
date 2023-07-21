import React from 'react'
import '../css/Card.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../media/Card.css'

function Card() {
return (
    <div className='card'>
        <Container>
            <Row className='card-co card-picture'>
                <Col className='card-1'>
                    <img src='https://bestwebcreator.com/shopwise/demo/assets/images/shop_banner_img1.jpg'/>
                    <div className='text'>
                        <p className='p'>Super Sale</p>
                        <h3>New Collection</h3>
                        <a className='btn' src='#'>Shop Now</a>
                    </div>
                </Col>

                <Col className='card-1'>
                    <img src='https://bestwebcreator.com/shopwise/demo/assets/images/shop_banner_img2.jpg'/>
                    <div className='text'>
                        <h3>New Season</h3>
                        <p className='p'>Sale 40% Off</p>
                        <a className='btn' src='#'>Shop Now</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)
}

export default Card