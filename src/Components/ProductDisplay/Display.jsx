import React, { useContext } from 'react'
import '../ProductDisplay/Display.css'
import star_icon from '../Assets/images/star_icon.png'
import star_dull_icon from '../Assets/images/star_dull_icon.png'
import { MeeshoContext } from '../../Context/MeeshoContext'
import Rupee from '../Assets/images/rupee.png'
import { colors, Rating } from '@mui/material'
import { Link } from 'react-router-dom'
function Display(props) {
    let {product}=props
    let {addToCart}=useContext(MeeshoContext)
  return (
    <div className='product_display'>
        <div className='display_left'>
            <div className='display_list'>
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            </div>
            <div className='display_image'>
                <img className='main_image'  src={product.image} alt=''/>
            </div>
        </div>
        <div className='display_right'>
            <h6>{product.name}</h6>
            <div className='display_star'>  
                <Rating/>
            </div>
            <div className='display-price'>
                <div className='price1'>${product.new_price}</div>
            </div>
            <div className='descrip'>{product.description}
            </div>
            <div className='sizes'>
                <h5>Select Sizes</h5>
                <div className='diff_sizes'>
         <div><input type='radio'/>S</div>
              <div><input type='radio'/>M</div>
                <div><input type='radio' />L</div>
                <div><input type='radio'/>XL</div>
                <div><input type='radio'/>XXL</div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                
            </div>
        </div>
    </div>
  )
}

export default Display
