import React from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import cardslice from '../redux/cardslice'

const Cart = () => {

    const productdata = useSelector((state)=>state.cart.items)

    
    const arr = productdata.filter((value,index,self)=>
    index === self.findIndex((t)=>t.id=== value.id))
    
    const dispatch =useDispatch()
    
    return (
        <div className='cart-co'>
            <div className='cart'>
                {
                    productdata.length == 0 ? <p className='nothing'>Nothing Found</p> :
                    arr.map((r)=>
                    <div className='Productscont' key={r.id}>
                        <div className='products'>
                        <div className='single-product'>
                        <img src={r.image} alt='picture'/>
                        <h3 className='title'>{r.title}</h3>
                        <p className='price'>CATEGORY : <span>{r.category}</span></p>
                        <p className='price'>price : <del className='del'>${r.price+20.01}</del> <span>${r.price}</span></p>
                        <button className='cart-btn' onClick={()=>dispatch(cardslice.actions.removeFromCart(r))} >Remove</button><br/>
                    </div> 
                    </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cart