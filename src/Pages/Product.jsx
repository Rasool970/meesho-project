import React, { useContext } from 'react'
import { MeeshoContext } from '../Context/MeeshoContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import Display from '../Components/ProductDisplay/Display'
import Description from '../Components/DescriptionBox/Description'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'


function Product() {

  let {AllProducts}=useContext(MeeshoContext)
  let {productId}=useParams()
  let product=AllProducts.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product1={product} />
      <Display product={product}/>
      

    </div>
  )
}

export default Product