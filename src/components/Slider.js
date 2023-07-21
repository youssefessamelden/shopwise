import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Slider.css'
import '../media/Slider.css'

function Slider() {
return (
    <div>
        <Carousel className='header-co' slide={false}>
            <Carousel.Item className='header'>
                <img
                    className="d-block w-100"
                    src="https://bestwebcreator.com/shopwise/demo/assets/images/banner2.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className='caption'>
                    <p>50% off in all products</p>
                    <h1>Man Fashion</h1>
                    <button className='shop-btn' type="submit">Shop Now</button>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item className='header'>
                <img
                    className="d-block w-100"
                    src="https://bestwebcreator.com/shopwise/demo/assets/images/banner1.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className='caption'>
                    <h1 className='btm'>Womam Fashion</h1>
                    <button className='shop-btn' type="submit">Shop Now</button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='header'>
                <img
                    className="d-block w-100"
                    src="https://bestwebcreator.com/shopwise/demo/assets/images/banner3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className='caption'>
                    <p>Taking Your Experence To Next Level</p>
                    <h1>Summer Sale</h1>
                    <button className='shop-btn' type="submit">Shop Now</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
)
}

export default Slider