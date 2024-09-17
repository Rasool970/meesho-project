import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../Navbar/Navbar2.css'


let Navbar2 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/Ethentic">Women Ethentic</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Westren">Women Westren</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Men">Men</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Kids">Kids</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/Home & Kitchen" >Home & Kitchen</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Beauty & Health">Beauty & Health</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Jewallary">Jewellary & Accessories</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Bags">Bags & Footers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Electronics">Electronics</Link>
          </li>

        </ul>
      </div>

      </nav>
     
    
      <Outlet />
   


    </>


  )

}
export default Navbar2