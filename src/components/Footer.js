import React from 'react'
import '../css/Footer.css'
import {BiLogoFacebook} from "react-icons/bi";
import {TfiGoogle , TfiEmail ,TfiMobile} from "react-icons/tfi";
import {PiYoutubeLogo} from "react-icons/pi";
import {FaTwitter} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {CiLocationOn} from "react-icons/ci";
import '../media/Footer.css'

function Footer() {
    return (
        <div className='form-container'>
                                     {/* form */}
            <div className='form'>
                <span>Subscribe Our Newsletter</span>
                <div className='email'>
                    <form>
                        <input type="email" placeholder='Enter Email Address'/>
                    </form>
                    <button className='btn'>Subscribe</button>
                </div>
                
            </div>

                            {/* second footer */}

            <div className='foot'>
                <div className='foot-1'>
                    <ul className='wise'>
                    <a class="basket-shop"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/logo_light.png" /></a>
                        <p>If you are going to use of lorem ipsum need to be sure there isn't hidden of text</p>
                        <div className='brand'>
                        <a src='#'><BiLogoFacebook /></a>
                        <a src='#'><FaTwitter/></a>
                        <a src='#'><TfiGoogle /></a>
                        <a src='#'><PiYoutubeLogo/></a>
                        <a src='#'><AiFillInstagram/></a>                
                        </div>
                    </ul>
                    
                    <div className='cat'>
                        <ul>
                            <p>Useful Links</p>
                            <li>About Us</li>
                            <li>FAQ</li>
                            <li>Location</li>
                            <li>Affiliates</li>
                            <li>Contact</li>
                        </ul>

                        <ul>
                            <p>Category</p>
                            <li>Men</li>
                            <li>Women</li>
                            <li>kids</li>
                            <li>Best Soller</li>
                            <li>New Arrivals</li>
                        </ul>
                    
                        <ul>
                            <p>My Account</p>
                            <li>My Account</li>
                            <li>Discount</li>
                            <li>Returns</li>
                            <li>Orders History</li>
                            <li>Order Tracking</li>
                        </ul>

                        <ul>
                            <p>Contact Info</p>
                            <span><CiLocationOn />123 Streer, Old Trafford, New South London, UK</span>
                            <span><TfiEmail/><span className='tfiemail'>info@sitename.com</span></span>
                            <span><TfiMobile />   +457 789 789 65</span>
                        </ul>
                    </div>
                </div>
                
            </div>

                                                {/* third footer */}

            <div className='finish'>
                <div className='finish-1'>
                    <span>&copy; 2020 All Rights Reserved by Bestwebcreator</span>

                    <span className='brands'>
                    <img src='https://bestwebcreator.com/shopwise/demo/assets/images/visa.png'></img>
                    <img src='https://bestwebcreator.com/shopwise/demo/assets/images/discover.png'></img>
                    <img src='https://bestwebcreator.com/shopwise/demo/assets/images/master_card.png'></img>
                    <img src='https://bestwebcreator.com/shopwise/demo/assets/images/paypal.png'></img>
                    <img src='https://bestwebcreator.com/shopwise/demo/assets/images/amarican_express.png'></img>
                    </span>
                </div>
                
            </div>

        </div>
    )
}

export default Footer