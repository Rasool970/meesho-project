// import React from 'react'
// // import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import '../Pages/Login.css'
// import { Link } from 'react-router-dom'

// function Profile1() {
//   return (
//     <div className='profile'>
//         <div className='login-container'>
//         {/* <PersonOutlineIcon/> */}
//         <h6>Profile</h6>
//        <div className='login-fields'>
//         <input type='terxt' placeholder='enter name' required/>
//         <input type='email' placeholder='enter your email' required/>
//         <input type='password' placeholder='enter password' required/>
        
//        </div>
//        <Link to='/submition'><button>Submit</button></Link>
//        <p className='signup'>Already have account?<Link to='/ExistLogin'><span>Login</span></Link></p>
//        <div className='agree'>
//         <input type='checkbox' name='box' id='check'/>
//        </div>
//         </div>


//     </div>
//   )
// }

// export default Profile1


import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { Link } from 'react-router-dom'
import '../Pages/Login.css'
import Pro from '../Components/Assets/images/pro_img.webp'
let Profile1=()=>{
  return(
  
      <div className='profile_cont'>
      <div className='pro_img'>
        <img src={Pro} alt='' />
      </div>
     <div className='second_cont'>
     <div className='sign_text'>
        <h5>Sign Up to View Your Profile</h5>
      </div>
      <div className='count'>
        <p>Country</p>
      </div>
      <div className='line_text'>
        <input type='text' placeholder='IN +91'/>
        <input type='text' placeholder='Phone Number' className='phone'/>
      </div>
      <div className='continue'>
        <Link to='/'><button>Continue</button></Link>
      </div>
     </div>
    </div>
   
  )
}
export default Profile1