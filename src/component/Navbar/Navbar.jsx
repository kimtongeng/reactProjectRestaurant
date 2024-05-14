import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets/assets'
import "./navbar.css"
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount}= useContext(StoreContext);
  return (
    <div className="navbar">
        <Link to={'/'}><img src={assets.logo} alt="" className='logo'/></Link>
        <ul className="navbar-menu">
            <Link to={"/"} className={(menu==="home")? "active":null} onClick={()=>setMenu("home")}>Home</Link>
            <a href='#explore-menu' className={(menu==="menu")? "active":null} onClick={()=>setMenu("menu")}>Menu</a>
            <a href='#app-download' className={(menu==="mobile")? "active":null} onClick={()=>setMenu("mobile")}>Mobile-app</a>
            <a href='#footer' className={(menu==="contact")? "active":null} onClick={()=>setMenu("contact")}>Contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to={"/cart"}>
                    <img src={assets.basket_icon} alt="" />
                    <div className={(!getTotalCartAmount()?"":"dot")}></div>
                </Link>
            </div>
            <button onClick={()=>{setShowLogin(true)}}>Sing in</button>
        </div>
    </div>
  )
}

export default Navbar