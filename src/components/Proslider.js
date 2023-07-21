import React, { Component,useEffect, useState } from "react";
import Slider from "react-slick";
import { useDispatch } from 'react-redux'
import cardslice from '../redux/cardslice'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/Sliderpro.css"

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
        />
    );
}

function Proslider() {

    const [prooo,Setprooo] = useState()

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products?limit=8').then((res)=>Setprooo(res.data))
    },[])

    const dispatch = useDispatch()

    const added = (t)=>{
        t.classList.add('clicked')
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
        {
            breakpoint: 1245,
            settings: {
            slidesToShow: 3,
            }
        },
        {
            breakpoint: 950,
            settings: {
            slidesToShow: 2,
            }
        },
        {
            breakpoint: 635,
            settings: {
            slidesToShow: 1,
            }
        }
        ]
    };

    return (
        <div className="proo-cont">
        <Slider {...settings}>
            {
                prooo?.map((dataa)=>
                    <div>
                        <div className="proo-details">
                            <img src={dataa.image} alt='picture'/>
                            <div className="proo-titles">
                                <h3 className='title'>{dataa.title}</h3>
                                <p className='price'>CATEGORY : <span>{dataa.category}</span></p>
                                <p className='price'>price : <del className='del'>${dataa.price+20.01}</del> <span>${dataa.price}</span></p>
                                <div className='adding'>
                                    <button 
                                        onClick={(e)=>{
                                        dispatch(cardslice.actions.addtocard(dataa))
                                        added(e.target)
                                        }} className='addingbtm'>
                                        ADD TO CARD
                                    </button>
                                    <Link className='addingbtm' to={`/product/${dataa.id}`}>View Product</Link>
                                </div>        
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
        </div>
    )
}

export default Proslider