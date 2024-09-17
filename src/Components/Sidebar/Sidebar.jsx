// import React from 'react'
// import '../Sidebar/Sidebar.css'
// import Category from './Category/Category'
// import Colors from './Colors/Colors'
// import Price from './Price/Price'
// import Men_section from './Men_section'
// import Women_section from './Women_section'
// import Kids_section from './Kids_section'

// function Sidebar() {
//   return (
//     <>
//     <section className='sidebar'>
//       <h6>Filters</h6>
//       <Category/>
//       <Colors/>
//       <Price/>
      
//     </section>




//     </>
//   )
// }

// export default Sidebar


import React from 'react'
import '../Sidebar/Sidebar.css'

import { Link } from 'react-router-dom';
import HomeKitchen from '../../Pages/HomeKitchen';
import Men from '../../Pages/Men';

function Sidebar() {
  return (
    <div className='sidebar'>
     <section className='sidebar_section'>
      <div className='side_title'>
        <h2>Products For You</h2>
      </div>
      <div className='side_search'>
        <label for='dropdown1'>Sort by:</label>
        <select name='search' id='dropdown' onChange="window.location.href=this.value;" >
       
        <option value=''> <li>Relevance</li></option>
        <option value='relevance'>Price (High to Low)</option>
        <option value='relevance'>Price (Low to High)</option>
        <option value='relevance'>Discount</option>
      </select>
      
        

      </div>
      <div className='filter'>
        <h4>Filters</h4>
        <p>1000+ Products</p>
        <hr/>
        <div className='cate'>
          <h4>Category</h4>
          <div className='serh'>
          
          <input type='text' placeholder='Search'/>
          

          </div>
          <hr/>
          <div className='gender'>
      <h5>Gender</h5>
      <li>Men
        <ul  className='remv'>
          <li><Link to='/allm' className='rmv1'>Topwear</Link></li>
          <Link to='/mshirts' className='rmv1'><li>Shirts</li></Link>
          <Link to='/mentsh' className='rmv1'><li>T-Shirts</li></Link>
          <Link to='/mtrack' className='rmv1'><li>Tracks</li></Link>
        </ul>
      </li>
      <li>Women
        <ul  className='remv'>
         <Link to='/sarees' className='rmv1'> <li>Sarees</li></Link>
         <Link to='/silksaree' className='rmv1'> <li>SilkSarees</li></Link>
          <Link to='/wdress' className='rmv1'><li>Dresses</li></Link>
        </ul>
      </li>
      <li>Kids
        <ul className='remv'>
          <Link to='/toy' className='rmv1'><li>Toys</li></Link>
          <Link to='/kidcare' className='rmv1'><li>KidCare</li></Link>
        </ul>
      </li>
      
      
        

      </div>
        </div>
       
      </div>
      
    </section>
    
    
    </div>
   
  )
}

export default Sidebar