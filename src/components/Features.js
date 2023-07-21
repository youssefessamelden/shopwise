import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FcShipped} from 'react-icons/fc'
import {GiTakeMyMoney} from 'react-icons/gi'
import {MdSupportAgent} from 'react-icons/md'
import '../css/Futures.css'

function Features() {
return (
    <div className='card'>
        <Container>
            <Row className='card-co'>
                <Col className='card-1'>
                    <span className='icon'><FcShipped/></span>
                    <h3>Free Delivery</h3>
                    <p>if you goaing to use of Lorem, you need to be sure there anything</p>
                </Col>

                <Col className='card-1'>
                    <span className='icon'><GiTakeMyMoney/></span>
                    <h3>30 Day Return</h3>
                    <p>if you goaing to use of Lorem, you need to be sure there anything</p>
                </Col>

                <Col className='card-1'>
                    <span className='icon'><MdSupportAgent /></span>
                    <h3>27/4 Support</h3>
                    <p>if you goaing to use of Lorem, you need to be sure there anything</p>
                </Col>
            </Row>
        </Container>
    </div>
)
}

export default Features