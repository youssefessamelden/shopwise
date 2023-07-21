import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Productstitle.css'

function Productstitle() {
return (
    <div>
        <h1>Exclusive Products</h1>
        <div className='product-links'>
            <NavLink className='pl' to='/product'>New Arrival</NavLink>
            <NavLink className='pl' to='/product'>Best Sellers</NavLink>
            <NavLink className='pl' to='/product'>Featured</NavLink>
            <NavLink className='pl' to='/product'>Special Offer</NavLink>
        </div>
    </div>
)
}

export default Productstitle