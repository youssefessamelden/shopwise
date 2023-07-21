import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Singlepro.css'
import '../media/Singlepro.css'
import { useDispatch } from 'react-redux'
import cardslice from '../redux/cardslice'

export const Singlepro = () => {

    
    const [product , setProduct] = useState()
    
    const params = useParams()
    
    const pit = params.id
    
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${pit}`).then((resp)=>setProduct(resp.data))
    },[])
    
    console.log(product)
    
    const dispatch = useDispatch()

    return (
        <div className='one-co'>
            <div className='one'>
                <img src={product?.image} alt='picture'/>
                <div className='information'>
                    <h3 className='title'>{product?.title}</h3>
                    <p className='price'>CATEGORY : <span>{product?.category}</span></p>
                    <p className='price'>description : <span className='descrption'>{product?.description}</span></p>
                    <p className='price'>price : <del className='del'>${product?.price+20.01}</del> <span>${product?.price}</span></p>
                    <button 
                        className='add'
                        onClick={(e)=>{
                        dispatch(cardslice.actions.addtocard(product))
                        }}>
                            ADD TO CARD
                    </button>
                </div>
            </div> 
        </div>
    )
}
