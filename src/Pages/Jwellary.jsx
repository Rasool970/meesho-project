import React from 'react'
import Navbar2 from '../Components/Navbar/Navbar2'
import { Link } from 'react-router-dom'

function Jewellary() {
  return (
    <div className='container-fluid'>
      <div className='jewel'>
        <h6>Jewellery</h6>
       <Link to='/jw'> <li>Jewellery Set</li></Link>
        <li>Earrings</li>
      </div>
      <div className='acce'>
        <h6>Women Accessory</h6>
        <ul>
          <li>Bags</li>
          <li>Watches</li>
          
        </ul>
      </div>

    </div>
  )
}

export default Jewellary