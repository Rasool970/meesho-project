import React, { useContext } from 'react'
import '../CartItems/CartItem.css'
import { MeeshoContext } from '../../Context/MeeshoContext'
import Remove from '../Assets/images/remove_icon3.png'
import Add from '../Assets/images/addItem.jpg'
import { Link } from 'react-router-dom'

function CartItems() {
    let{TotalCartAmount,AllProducts,items,removeFromCart,addToCart}=useContext(MeeshoContext)
  return (
    <div className='cartitem'>
        <div className='cartitem_main'>
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Add</p>
            <p>Quantity</p>
            <p>Remove</p>
            
            <p>Total</p>
           
        </div>
        <hr/>
        {AllProducts.map((el)=>{
            if(items[el.id]>0){
                return <div >
            <div className='cart_format cartitem_main'>
                <img src={el.image} alt='' className='carticon'/>
                <p>{el.name}</p>
                <p>${el.new_price}</p>
               <img src={Add}  onClick={()=>{addToCart(el.id)}} alt='' className='remove'/>
                <button className='cart_quantity'>{items[el.id]}</button>
                <img src={Remove }  onClick={()=>{removeFromCart(el.id)}} alt='' className='remove'/>
                <p>${el.new_price*items[el.id]}</p>
                
                
            </div>
            <hr/>
        </div>
            }
            return null
        })}
        <div className='cart_down'>
            <div className='cart_total'>
                <h5> Cart Total</h5>
                <div>
                    <div className='cart_item_total'>
                        <p>Sub Total</p>
                        <p>${TotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className='cart_item_total'>
                        <p>Shipping Fee</p>
                        <p>Free Delevery</p>
                    </div>
                    <hr/>
                    <div className='cart_item_total'>
                        <h5>Total</h5>
                        <h5>${TotalCartAmount()}</h5>
                    </div>
                </div>
                <Link to='/pay'><button>PROOCEED TO PLACE ORDER</button></Link>
            </div>
            
        </div>
    </div>
  )
}

export default CartItems