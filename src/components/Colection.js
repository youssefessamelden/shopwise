import React from 'react'
import '../css/Collection.css'

function Colection() {
return (
    <div className='collection'>
        <div className='container'>
            <div class="row align-items-center flex-row-reverse collection">
                <div class="col-md-6 offset-md-1">
                    <div class="medium_divider d-none d-md-block clearfix"></div>
                    <div class="trand_banner_text text-center text-md-left">
                        <div class="heading_s1 mb-3">
                            <span class="sub_heading">New season trends!</span>
                            <h2>Best Summer Collection</h2>
                        </div>
                        <h5 class="mb-4">Sale Get up to 50% Off</h5>
                        <a href="shop-left-sidebar.html" class="btn btn-fill-out rounded-0">Shop Now</a>
                    </div>
                    <div class="medium_divider clearfix"></div>
                </div>
                <div class="col-md-5">
                    <div class="text-center trading_img">
                        <img src="https://bestwebcreator.com/shopwise/demo/assets//images/tranding_img.png" alt="tranding_img"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Colection