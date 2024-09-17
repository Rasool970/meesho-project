import React from 'react'
import '../RelatedProducts/RelatedProducts.css'
import AllProducts from '../../Context/All_data'
import Item from '../Items/Item'

function RelatedProducts() {
  return (
    <div className='related'>
        <h4>RelatedProducts</h4>
        <hr/>
        <div className='related_items'>
            {AllProducts.map((item,id)=>{
                return <Item key={id} id={item.id}  image={item.image} name={item.name} new_price={item.new_price}/>
            })}

        </div>

    </div>
  )
}

export default RelatedProducts