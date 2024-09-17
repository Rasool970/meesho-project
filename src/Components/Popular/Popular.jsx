import React from 'react'
import  '../Popular/Popular.css'
import Product_data from './Popular_data'
import Item from '../Items/Item'
import Sidebar from '../Sidebar/Sidebar'

function Popular() {
  return (

    <>
    <div className='popular'>
        
        <h4>Popular Products</h4>
        <hr/>
        <div className='pop_item'>
            {Product_data.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />

            })}
                
        </div>
    </div>
    <Sidebar/>
    
    </>
  )
}

export default Popular
