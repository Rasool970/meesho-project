import React from "react";
import '../Banners/Banner.css'
import Pic1 from '../Assets/images/meeshopic2.webp'

import Women1 from '../Assets/images/wom1.webp'
import Men1 from '../Assets/images/men1.webp'
import Play from '../Assets/images/playstore.png'
import Kids from '../Assets/images/kids.webp'
import Banner_icon1 from '../Assets/images/b_icon1.svg'
import Banner_icon2 from '../Assets/images/b_icon2.svg'
import Banner_icon3 from '../Assets/images/b_icon3.svg'
import Meebanar from '../Assets/images/meeeebanner.jfif'
import Lady from '../Assets/images/ladybanner.webp'

import Sidebar from "../Sidebar/Sidebar";
// import { Link } from "react-router-dom";



let Banner=()=>{
    return(
        <>
        
<div className="row">
        <div className="col-md-9">
        <div className="banner background">
            
                <div className="para">
                    <div>
                    <h1 style={{fontSize:'50px'}}>Lowest Prices
                    Best Quality Shopping</h1>
                    </div>
                    <div className="card">
                       <div className="row">
                        <div className="col-1 d-flex ">
                            {/* <LocalShippingIcon className="symbol" /> */}
                            <img src={Banner_icon1} alt="icon1" className="symbol"/>
                            <h6 className="tag1">Free Delevery</h6>
                            <img src={Banner_icon2} alt="icon2" className="symbol"/>
                            <h6 className="tag2">Cash on Delevery</h6>
                            <img src={Banner_icon3} alt="icon3" className="symbol"/>
                            <h6 className="tag3">Easy Returns</h6>

                        </div>
                        
                       </div>
                    </div>
                    <div className="card2 d-flex">
                        <img src={Play} alt="play" className="play"/>
                        <li ><a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=407247374">Download the Mesho App</a></li>
                        
                    </div>
               
                
                </div>
                
                <img src={Pic1} alt="pic" className="pp1"/>
                </div>
        </div>
        <div className="container">
            <h1>Top Categories to choose from</h1>
            
            
        </div>
       
        <div className="bigbanar">
        <h1 className="fashion">Be fashion forward</h1>
        <img src={Women1} alt="women" className="womepic"/>
        <img src={Men1} alt="men" className="mepic"/>
        <img src={Kids} alt="kids" className="kid"/>
        
        </div>
<img src={Lady} alt="" className="meeeb"/>

                
            </div>
            <div>

<img src={Meebanar} alt="" className="meeeb"/>

                
            </div>
           
      {/* <Sidebar/> */}
        
        </>
    )
}
export default Banner