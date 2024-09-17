import React from 'react'
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import '../Pages/Login.css'
import { Link } from 'react-router-dom'

function ExistLogin() {
  return (
    <div className='profile'>
        <div className='login-container'>
        {/* <PersonOutlineIcon/> */}
        <h6>Profile</h6>
       <div className='login-fields'>
        <input type='email' placeholder='enter your email' required/>
        <input type='password' placeholder='enter password' required/> 
       </div>
       <Link to='/submition'><button>Submit</button></Link>
       
       <div className='agree'>
        <input type='checkbox' name='box' id='check'/>
       </div>
        </div>


    </div>
  )
}

export default ExistLogin