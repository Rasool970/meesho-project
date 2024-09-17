import React, { useContext, useState } from 'react'
import '../Navbar/Navbar.css'
import Logo from '../Assets/images/meeshoLogo.svg'
import Cart from '../Assets/images/cart.svg'
import {Link,Outlet} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Play from '../Assets/images/applebutton.webp'
import Play1 from '../Assets/images/playyyy.webp'
import Sidebar from '../Sidebar/Sidebar'
import SecurityUpdateIcon from '@mui/icons-material/SecurityUpdate';
import { MeeshoContext } from '../../Context/MeeshoContext'

 const Navbar = () => {
    let{CartCount}=useContext(MeeshoContext)
    
    
  return (
    <nav className='navbar'>
        <div className='nav-logo'>
            
        
            <img src={Logo} alt='logomee'/>

        </div>
        <div className='searchbar'>
           
        
            <Link  onClick={(to)=>to='/sarees'}><input type='text' placeholder='Try Sarees,Kurties or Search by Code'/></Link>
        </div>
       <div className='dropdownmenu'>
        <ul>
            
            <li>Download App
                <ul id='sub_menu'>
                    <li style={{textAlign:'center',fontSize:'20px',fontWeight:'500'}}>Download From</li>
                    <li><a href='https://play.google.com/store/apps/details?id=com.meesho.supply&hl=en_IN'><img src={Play1} alt='' className='list_logo'/></a></li>
                    <li><a href='https://play.google.com/store/apps/details?id=com.meesho.supply&hl=en_IN'><img src={Play} alt='' className='list_logo'/></a></li>
                </ul>
                <SecurityUpdateIcon/>
                <div className='barrr'>
                    
                </div>
            </li>
            
            
            <li><a href='https://supplier.meesho.com/?utm_source=meesho&utm_medium=website&utm_campaign=header'>Become a Supplaier</a></li>
            <li><a href='https://www.meesho.io/news'>Newsroom</a></li>
            <li>Profile
                <ul id='sub_menu'>
                    <li>Hello User</li>
               
                    <Link to='/Login'><li className='sig'>Sign Up</li></Link>
                    <hr/>
                    <Link to='/Cart'><li>My Orders</li></Link>
                    <hr/>
                    <Link to='/Login'><li>Delete Account</li></Link>

                </ul>
            </li>
            <div className='nav-log-cart'>
            
           <Link to='/cart'><img src={Cart} alt=''/></Link>
            <div className='nav-cart-count'>{CartCount()}</div>
        </div>
       
        </ul>
       </div>
        
        <Outlet/>

    </nav>
  )
}
export default Navbar