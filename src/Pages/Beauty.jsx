import React from 'react'
import '../Pages/Pages.css'
import { Link } from 'react-router-dom'

function Beauty() {
  return (
    <div className='container-fluid'>
      <div className='beauty'>
        <h6>Make up</h6>
        <Link to='/buty'><li>Face</li></Link>
        <Link to='/eye'><li>Eyes</li></Link>
      </div>
      

    </div>
  )
}

export default Beauty