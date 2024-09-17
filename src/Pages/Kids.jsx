import React from 'react'
import '../Pages/Pages.css'
import { Link } from 'react-router-dom'

function Kids() {
  return (
    <div className='container-fluid '>
      <div className='kids'>
        <h6>Boys & Girls 2+ Years</h6>
        <Link to='/toy' className='deletelink'><li>Toys</li></Link>
       
      </div>
      <div className='bott'>
        <h6>Infant 0-2 Years</h6>
        <ul>
          <Link to='/kidcare' className='deletelink'><li>Kid Care</li></Link>
          
        </ul>
      </div>

    </div>
  )
}

export default Kids