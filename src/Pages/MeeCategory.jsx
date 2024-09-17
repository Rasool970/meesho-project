import React, { useContext } from 'react'
import { MeeshoContext } from '../Context/MeeshoContext'
import Item from '../Components/Items/Item'


import '../Components/Sidebar/Sidebar.css'
// // import AllProducts from '../Context/All_data'
// import drop_down from '../Components/Assets/images/dropdown_icon.png'
import { Link } from 'react-router-dom'
import Sidebar from '../Components/Sidebar/Sidebar'
function MeeCategory(props) {
    let {AllProducts}=useContext(MeeshoContext)
  return (
    <>
    <Sidebar/>
    
    <div className='mee-cate'>
        <div className='mee-index'>
            <p><span>Showing 1-12 products</span>out of 240</p>
            
        </div>
        
        <div className='mee-products'>
            {AllProducts.map((item,id)=>{
                if(props.category===item.category){
                    return <Item key={id} id={item.id}  image={item.image} name={item.name} new_price={item.new_price}  />

                }
                else{
                    return null
                }
            })}
           
            <div className='more'>
              <Link to='/more'>  Explore More..</Link>

            </div>
           
        </div>
       
        
    </div>
    
    
    
    </>
  )
}

export default MeeCategory