import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Cart from './Pages/Cart';

import Loginpage from './Pages/Loginpage';
import Navbar2 from './Components/Navbar/Navbar2';

import WomenEthentic from './Pages/WomenEthentic';
import Men from './Pages/Men';
import WomenWestren from './Pages/WomenWestren';
import Kids from './Pages/Kids';
import HomeKitchen from './Pages/HomeKitchen';
import Beauty from './Pages/Beauty';
import Electronics from './Pages/Electronics';
import Jewellary from './Pages/Jwellary';
import Bags from './Pages/Bags';
import ExistLogin from './Pages/ExistLogin';
import FormSubmition from './Pages/FormSubmition';
import Footer from './Components/Footer/Footer';
import Product from './Pages/Product';
import Men_Sec from './Components/Sidebar/Men_section'
import Women_sec from './Components/Sidebar/Women_section'
import Kids_sec from './Components/Sidebar/Kids_section'

import MeeCategory from './Pages/MeeCategory';
import AppDownload from './Components/Navbar/AppDownload';
import WelcomePage from './Pages/WelcomePage';
import Payment from './Pages/Payment';
import Verify from './Pages/Verify';

// import Rating from './Components/Rating/Rating';
function App() {
  return (
    
    <div>
    
<BrowserRouter>
<Navbar/>

<Navbar2/>








<Routes>

<Route path='/' element={<Home/>}/>


<Route path='/Ethentic' element={<WomenEthentic />}/>
<Route path='/Westren' element={<WomenWestren  />}/>
<Route path='/Men' element={<Men/>}/>
<Route path='/Kids' element={<Kids />}/>
<Route path='/Home & Kitchen' element={<HomeKitchen/>}/>
<Route path='/Beauty & Health' element={<Beauty />}/>
<Route path='/Electronics' element={<Electronics/>}/>
<Route path='/Bags' element={<Bags />}/>
<Route path='/Jewallary' element={<Jewellary />}/>


<Route path='/allm' element={<MeeCategory category='mall'/>}/>
<Route path='/mshirts' element={<MeeCategory category='mshirts'/>}/>
<Route path='/mbags' element={<MeeCategory category='mbags'/>}/>
<Route path='/mwallet' element={<MeeCategory category='mwallet'/>}/>
<Route path='/mtrack' element={<MeeCategory category='mtrack'/>}/>
<Route path='/mentsh' element={<MeeCategory category='mentsh'/>}/>
<Route path='/womens' element={<MeeCategory category='women'/>}/>
<Route path='/womenall' element={<MeeCategory category='womenall'/>}/>
<Route path='/wtop' element={<MeeCategory category='wTop'/>}/>
<Route path='/wdress' element={<MeeCategory category='wdress'/>}/>
<Route path='/wbottom' element={<MeeCategory category='wbottom'/>}/>
<Route path='/wbag' element={<MeeCategory category='wbag'/>}/>
<Route path='/wwatch' element={<MeeCategory category='wwatch'/>}/>
<Route path='/sarees' element={<MeeCategory category='saree'/>}/>
<Route path='/silksaree' element={<MeeCategory category='silksaree'/>}/>
<Route path='/wjns' element={<MeeCategory category='wjens'/>}/>
<Route path='/kidcare' element={<MeeCategory category='kidcare'/>}/>
<Route path='/toy' element={<MeeCategory category='toy'/>}/>
<Route path='/womenall' element={<MeeCategory category='womenall'/>}/>
<Route path='/more' element={<MeeCategory category='more'/>}/>
<Route path='/bed' element={<MeeCategory category='bed'/>}/>
<Route path='/mat' element={<MeeCategory category='mat'/>}/>
<Route path='/buty' element={<MeeCategory category='face'/>}/>
<Route path='/eye' element={<MeeCategory category='eye'/>}/>
<Route path='/jw' element={<MeeCategory category='jwl'/>}/>
<Route path='/product/:productId' element={<Product/>}/>
<Route path='/mensec' element={<Men_Sec/>}/>
<Route path='/womensec' element={<Women_sec/>}/>
<Route path='/kidsec' element={<Kids_sec/>}/>
<Route path='/appl' element={<AppDownload/>}/>
<Route path='/wel' element={<WelcomePage/>}/>
<Route path='/pay' element={<Payment/>}/>
<Route path='/veri' element={<Verify/>}/>


<Route/>
<Route path='/ExistLogin' element={<ExistLogin/>}/>
<Route path='/submition' element={<FormSubmition/>}/>



<Route path='/Cart' element={<Cart/>}/>
<Route path='/Login' element={<Loginpage/>}/>






</Routes>

<Footer/>

</BrowserRouter>

</div>

);


}

export default App;
