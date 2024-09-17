import React from 'react'
import '../Pages/Pages.css'
import { Link } from 'react-router-dom'
import Home from './Home'


function Men() {
  return (
    <div className='container-fluid'>
      <div className='men'>
        <h6 className='hover'>Topwear</h6>
        <Link to='/allm' className='deletelink'><li>All Topwears</li></Link>
        <Link to='/mentsh' className='deletelink'><li>Tshirts</li></Link>
        <Link to='/mshirts' className='deletelink'><li>Shirts</li></Link>
      </div>
      <div className='bott'>
     <h6>Bottomwears</h6>
        <ul>
        <Link to='/mtrack' className='deletelink'><li>Track Pants</li></Link>
          
        </ul>
      </div>
      <Home/>

    </div>
  )
}

export default Men