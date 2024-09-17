import React from 'react'
import '../Pages/Pages.css'
import { Link } from 'react-router-dom'
import Sidebar from '../Components/Sidebar/Sidebar'

function HomeKitchen() {
  return (
    <div className='container-fluid'>
      <div className='home'>
        <h6>Home Furnishing</h6>
        <Link to='/bed' className='deletelist'><li>Bedsheets</li></Link>
        <Link to='/mat'><li>Doormats</li></Link>
      </div>
      
      

    </div>
    
  )
}

export default HomeKitchen