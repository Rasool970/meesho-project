import React from 'react'
import '../Pages/Pages.css'
import { Link } from 'react-router-dom'
import Home from './Home'

function WomenEthentic() {
  return (
    <div className='container-fluid'>
      <div className='womenall'>
        <h6>All Women Ethnics</h6>
        <Link to='/w' className='deletelink'><li>View All</li></Link>
      </div>
      <div className='sarees'>
        <h6>Sarees</h6>
        <ul>
          <Link to='/sarees' className='deletelink'><li>All Sarees</li></Link>
          <Link to='/silksaree' className='deletelink'><li>Silk Sarees</li></Link>
        </ul>
      </div>
      <Home/>

    </div>
  )
}

export default WomenEthentic