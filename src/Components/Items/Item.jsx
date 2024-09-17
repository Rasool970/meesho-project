import React from 'react'
import '../Items/Item.css'
import { Link } from 'react-router-dom'

export default function Item(props) {
  return (
    <div className='item'>
      
       <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)}    src={props.image} alt='' className='imag'/></Link>
        <p>{props.name}</p>
        
        <div className='itemPrice'>
            
                ${props.new_price}
            
        </div>
        
        {/* <div className='oldPrice'>
            
                ${props.old_price}
            
        </div> */}
        {/* <div className="category">
                {props.category}

            </div>
            */}
        <div className="description">
                {props.description}

            </div>
           
        

    </div>
  )
}
