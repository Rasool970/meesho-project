import React from 'react'
import '../Pages/Pages.css'
import { Link } from 'react-router-dom'
import Home from './Home'

function WomenWestren() {
  return (
    <div className='container-fluid'>
      <div className='womenWestren'>
        <h6>Topwear</h6>
        <Link to='/wtop' className='deletelink'><li>Tops</li></Link>
        <Link to='/wdress' className='deletelink'><li>Dresses</li></Link>
      </div>
      <div className='bott'>
        <h6>Bottomwears</h6>
        <ul>
          <Link to='/wjns' className='deletelink'><li>Jeans</li></Link>
         
        </ul>
      </div>
      <Home/>

    </div>
  )
}

export default WomenWestren