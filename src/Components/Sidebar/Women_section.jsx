import React from 'react'
import '../Sidebar/dropdown.css'
import { Link } from 'react-router-dom'
function Women_section() {
  return (
    <div className='dropdown'>
        <Link to='/womensec'><h4>Women_section</h4></Link>
        <ul>
        <Link to='/sarees'> <li>Sarees</li></Link>
             <Link to='/womenall'> <li>All items</li></Link>
               <Link to='/silksaree'><li>Silk Sarees</li></Link>
               <Link to='/wbottom'><li>Bottomwear</li></Link>
               <Link to='/wwatch'><li>watches</li></Link>
              <Link to='/wbag'><li>Bags</li></Link>
        </ul>




    </div>
  )
}

export default Women_section