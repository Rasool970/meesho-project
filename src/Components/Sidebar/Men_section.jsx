import React from 'react'
// import '../Sidebar/dropdown.css'
import { Link } from 'react-router-dom'
function Men_section() {
  return (
    <div>
      <label for='dropdown'>Men_Section</label>
      <select name='items' id='dropdown'>
     
     
         <option value='shirts'><Link to='/mshirts'>Shirts</Link></option>
               <Link to='/mwallet'><option value='wallets'>Wallets</option></Link>
               <Link to='/mentsh'><option value='T-shirts'>T-Shirts</option></Link>
               <Link to='/mtrack'><option value='tracks'>Tracks</option></Link>
               <Link to='/mbags'><option value='bags'>Bags</option></Link>
    
        
       
      </select>


    </div>
  )
}

export default Men_section