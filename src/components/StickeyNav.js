import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/Stickeynav.css'
import '../media/Navbar.css'
import { NavLink } from 'react-router-dom';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { PiShoppingCartLight } from 'react-icons/pi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useSelector } from 'react-redux';

function StickeyNav() {

    const numbitems = useSelector((num)=>num.cart.items)
    const numberflter = numbitems.filter((value,index,self)=>
    index === self.findIndex((t)=>t.id=== value.id))
    
    const top = ()=>{
        window.scrollTo(0,0);
    };
    
return (
    <div>
        <button onClick={top} className="scroll"> UP</button>
        <Navbar expand="lg" className="bg-body-tertiary stickey">
            <Container>
                <Navbar.Brand href="#"><img src='https://bestwebcreator.com/shopwise/demo/assets/images/logo_dark.png' alt='img'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    
                    <NavDropdown title="Home" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#"><NavLink to='/home' className={'clothes'}>
                                        Fashion 1
                                        </NavLink></NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        Fashion 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        Furniture 1
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        Furniture 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        Electronics 1
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        Electronics 2
                    </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Pages" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#">
                        About Us
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        Contact Us
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        Faq
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        404Errorpage
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        <NavLink to="/login" className={'clothes'}>Login</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        <NavLink to='/Signin' className={'clothes'}>Register</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        Term And Conditions
                    </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Products" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#" className='pro'>
                    <div className='pro-co'>

                        <ul className='pro-1'>
                            <p>WOMEN'S</p>
                            <li>Vestibulum Sed</li>
                            <li>Donec Portitor</li>
                            <li>Danec Vitage Facilisis</li>
                            <li>Curabitur Tempus</li>
                            <li>Vivamus In Tortor</li>
                        </ul>

                        <ul className='pro-1'>
                            <p>MEN'S</p>
                            <li>Donec Vitae Ante Ante</li>
                            <li>Etaim Ac Rutrum</li>
                            <li>Quisque Condimentum</li>
                            <li>Curabitur Laoreet</li>
                            <li>Vivamus In Tortor</li>
                        </ul>

                        <ul className='pro-1'>
                            <p>kid'S</p>
                            <li>Donec Vitae Facilisis</li>
                            <li>Quisque Condimentum</li>
                            <li>Etiam Ac Retrum</li>
                            <li>Donec Vitae Ante Ante</li>
                            <li>Donec Porttitor</li>                                        
                        </ul>

                        <ul className='pro-2 pro-1'>
                            <p>ACCESSORIES</p>
                            <li>Donec Vitae Facilisis</li>
                            <li>Quisque Condimentum</li>
                            <li>Etiam Ac Retrum</li>
                            <li>Donec Vitae Ante Ante</li>
                            <li>Donec Porttitor</li>  
                        </ul>

                        <div className='pro-3'>

                        <div className='new-arr pro-4'>
                        <img src='https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/hero.png' alt='img'/>
                            <div className='arrive'>
                                <p className='arrive-1'>10% off</p>
                                <p className='arrive-2'>New Arrival</p>
                                <p className='arrive-3'>Shop Now</p>
                            </div>
                        </div>

                        <div className='men-fash pro-4'>
                        <img src='https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/hero.png'alt='img'/>
                            <div className='arrive'>
                                <p className='arrive-1'>15% off</p>
                                <p className='arrive-2'>Men's Fashion</p>
                                <p className='arrive-3'>Shop Now</p>
                            </div>
                        </div>

                        <div className='kid-fash pro-4'>
                        <img src='https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/hero.png' alt='img'/>
                            <div className='arrive'>
                                <p className='arrive-1'>23% off</p>
                                <p className='arrive-2'>kids Fashion</p>
                                <p className='arrive-3'>Shop Now</p>
                            </div>
                        </div>
                        </div>                             
                        </div>
                    </NavDropdown.Item>
                    </NavDropdown>
                                            {/* blog */}
                    <NavDropdown title="Blog" id="navbarScrollingDropdown">
                        
                        <div className="mb-2">
                            {[ 'end'].map(
                                (direction) => (
                                <DropdownButton
                                    key={direction}
                                    id={`dropdown-button-drop-${direction}`}
                                    drop={direction}
                                    variant="secondary"
                                    title={` Grids `}
                                    className='blog-btn'
                                >
                                <Dropdown.Item eventKey="1">3Columns</Dropdown.Item>
                                <Dropdown.Item eventKey="2">4Columns</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Left Sidebar</Dropdown.Item>
                                <Dropdown.Item eventKey="4">Right Sidebar</Dropdown.Item>
                                <Dropdown.Item eventKey="5">standard Left Sidebar</Dropdown.Item>
                                <Dropdown.Item eventKey="6">standard Right Sidebar</Dropdown.Item>
                                </DropdownButton>
                            ),)}
                        </div>
                            
                        <div className="mb-2">
                            {[ 'end'].map(
                                (direction) => (
                                <DropdownButton
                                    key={direction}
                                    id={`dropdown-button-drop-${direction}`}
                                    drop={direction}
                                    variant="secondary"
                                    title={` Masonry `}
                                    className='blog-btn'
                                >
                                <Dropdown.Item eventKey="1">3Columns</Dropdown.Item>
                                <Dropdown.Item eventKey="2">4Columns</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Left Sidebar</Dropdown.Item>
                                <Dropdown.Item eventKey="4">Right Sidebar</Dropdown.Item>
                                </DropdownButton>
                            ),)}
                        </div>

                        <div className="mb-2">
                            {[ 'end'].map(
                                (direction) => (
                                <DropdownButton
                                    key={direction}
                                    id={`dropdown-button-drop-${direction}`}
                                    drop={direction}
                                    variant="secondary"
                                    title={` Post `}
                                    className='blog-btn'
                                >
                                <Dropdown.Item eventKey="1">Default</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Left Sidebar</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Slide Post</Dropdown.Item>
                                <Dropdown.Item eventKey="4">Video Post</Dropdown.Item>
                                <Dropdown.Item eventKey="5">Audio Post</Dropdown.Item>
                                </DropdownButton>
                            ),)}
                        </div>
                            
                        <div className="mb-2">
                            {[ 'end'].map(
                                (direction) => (
                                <DropdownButton
                                    key={direction}
                                    id={`dropdown-button-drop-${direction}`}
                                    drop={direction}
                                    variant="secondary"
                                    title={` List `}
                                    className='blog-btn'
                                >
                                <Dropdown.Item eventKey="1">Left Sidebar</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Right Sidebar</Dropdown.Item>
                                </DropdownButton>
                            ),)}
                        </div>
                    </NavDropdown>

                                        {/* shop */}

                <NavDropdown title="Shop" id="navbarScrollingDropdown" className='shop-co'>
                    <NavDropdown.Item href="#" className='shp'>
                        <div className='shop'>

                            <ul className='shop-1'>
                                <p>SHOP PAGE</p>
                                <li>Shop List View</li>
                                <li>Shop List Left Sidebar</li>
                                <li>Shop List Right Sidebar</li>
                                <li>Left Sidebar</li>
                                <li>Right Sidebar</li>
                                <li>Shop Load More</li>
                            </ul>

                            <ul className='shop-1'>
                                <p>OTHER PAGES</p>
                                <li>Cart</li>
                                <li>Checkkout</li>
                                <li>My Account</li>
                                <li>Wishlist</li>
                                <li>Compare</li>
                                <li>Order Completed</li>
                            </ul>

                            <ul className='shop-1'>
                                <p>PRODUCT PAGES</p>
                                <li>Default</li>
                                <li>Left Sidebar</li>
                                <li>Right Sidebar</li>
                                <li>Thumbnails Left</li>
                                <li></li>
                                <li></li>
                            </ul>

                            <div className='sale-shop'>
                                <span className='opacity'>
                                    <div>
                                        <span className='p1'>NEW COLLECTION</span>
                                        <span className='p2'>SALES 30% OFF</span>
                                        <a className='btn-shop' href='#'>SHOP NOW</a>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Contact Us" id="navbarScrollingDropdown" className='contact'></NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <span className='icon-shop'><span><FontAwesomeIcon icon={faMagnifyingGlass} /></span></span>
                <NavLink className={'cc'} to='/cart'><span className='icon-shop nn'><PiShoppingCartLight/><div className='number'>{numberflter.length}</div></span></NavLink>
            </Container>
        </Navbar>
    </div>
)
}

// let btn = window.document.querySelector('.scroll');

// window.addEventListener('scroll', ()=>{

//     if(window.scrollY >=500){
//         btn.style.display = "block";
//     }else{
//         btn.style.display = "none";
//         nav.style.position = "relative";
//     }
// })

export default StickeyNav