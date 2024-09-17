import React from 'react'
import '../Footer/Footer.css'
import Google from '../Assets/images/playbutton.webp'
import Apple from '../Assets/images/applebutton.webp'
import Profile from '../../Pages/Loginpage'
import Pay from '../Assets/images/applebutton.webp'
import Pay1 from '../Assets/images/playyyy.webp'
import Face from '../Assets/images/facebook.webp'
import Insta from '../Assets/images/insta.webp'
import Youtube from '../Assets/images/youtube.webp'
import Twitter from '../Assets/images/twitter.webp'

export default function Footer() {
  return (
    
//    <div className='footer'>
//     <div className='para'>
//     <h3>Shop Non-Stop on Meesho</h3>
//             <h5>Trusted by more than 1 Crore Indians 
//             Cash on Delivery | Free Delivery</h5>
//             <img src={Google} alt='gplay' className='image1'/>
//             <img src={Apple} alt='appl' className='image2'/>
//     </div>
//     <ul className='lists'>
//             <li>Careers</li>
//             <li>Become a Supplair</li>
//             <li>Hall of Fame</li>
//             <li>sitemap</li>
//             </ul>
//         {/* <Profile/>     */}
//    </div>
   <div className='footer'>
        <div className='fot-title'>
                <h3>Shop Non-Stop on Meesho</h3>
                <h6>Trusted by more than 1 Crore Indians
                Cash on Delivery | Free Delivery</h6>
                <a href='https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow'><img src={Pay1} alt=''className='img2'/></a>
                <a href='https://apps.apple.com/us/app/meesho-online-shopping/id1457958492'><img src={Pay} alt=''className='img2'/></a>
        </div>
        <div className='footer_list'>
                <ul>
                        <li>Careers</li>
                        <li>Become a Supplaier</li>
                        <li>Hall of Fame</li>
                        <li>Sitemap</li>
                </ul>
        </div>
        <div className='footer_list1'>
                <ul>
                        <li><a href='https://www.meesho.com/legal?embed=true'>Legal and Policies</a></li>
                        <li><a href='https://www.meesho.io/blog?utm_medium=footer&utm_source=meesho_website&utm_campaign=blogpagepromotion'>Meesho Tech Blog</a></li>
                        <li><a href='https://www.meesho.com/notices_and_returns?embed=true'>Notices and Returns</a></li>
                        
                </ul>
                
        </div>
        {/* <div className='rech'>
                <h4>Contact Us</h4>
                <p>Fashnear Technologies Private Limited</p>
                <p>CIN: U74900KA2015PTC082263
                3rd Floor, Wing-E, </p>
                <p>Helios Business Park,Kadubeesanahalli Village, Varthur Hobli, </p>
                <p>Outer Ring Road Bellandur, Bangalore,</p>
                <p> Bangalore South, Karnataka, India, 560103</p>
                <p>E-mail address: query@meesho.com© 2015-2024 Meesho.com</p>
        <h6>Reach Out to Us</h6>
        <img src={Face} alt=''/>
        <img src={Insta} alt=''/>
        <img src={Youtube} alt=''/>
        <img src={Twitter} alt=''/>

        
        </div> */}
        

   </div>
   
    
  )
}
