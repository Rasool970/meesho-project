import React from 'react'
import '../Breadcrums/Breadcrum.css'
 import Arrow_icon from '../Assets/images/arrow_icon.png'
// import drop_down from '../Assets/images/dropdown_icon.png'
import Product from '../../Pages/Product';



function Breadcrum(props) {
    let {product1}=props;
  return (
    <div className='breadcrum'>
  {product1.category}
  {product1.name}

    </div>
  )
}

export default Breadcrum