import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../css/Pro.css'
import { useDispatch } from 'react-redux'
import cardslice from '../redux/cardslice'
import { Link } from 'react-router-dom'

export const Pro = () => {

    const [prooo,Setprooo] = useState()

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>Setprooo(res.data))
    },[])

    const dispatch = useDispatch()

    const added = (t)=>{
        t.classList.add('clicked')
    }

    return (
        <div className='cart-co'>
            <div className='cart'>
            {
            prooo?.map((dataa)=>
            <div className='Products-cont'  key={dataa.id}>
            <div className='products'>
            <div className='single-product'>
            <div className='opacity'>
            <div className='ic'>
                <button 
                onClick={(e)=>{
                    dispatch(cardslice.actions.addtocard(dataa))
                    added(e.target)
                    }}>
                    ADD TO CARD
                </button>
                <Link to={`/product/${dataa.id}`}>View Product</Link>
            </div>
            </div>
            <div className='ic-2'>
                <span className='color-1'></span>
                <span className='color-2'></span>
                <span className='color-3'></span>
            </div>
            <img src={dataa.image} alt='picture'/>
            <h3 className='title'>{dataa.title}</h3>
            <p className='price'>CATEGORY : <span>{dataa.category}</span></p>
            <p className='price'>price : <del className='del'>${dataa.price+20.01}</del> <span>${dataa.price}</span></p>
        </div> 
        </div>
        </div>
            )}
        </div>
        </div>
    )
}





