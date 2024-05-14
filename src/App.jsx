import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Home from "./page/home/Home"
import Cart from './page/cart/Cart'
import PlaceHolder from './page/placeHolder/PlaceHolder'
import Footer from './component/footer/Footer'
import { useState } from 'react'
import LoginPopup from './component/loginPopup/LoginPopup'


function App() {
  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
      {showLogin? <LoginPopup setShowLogin={setShowLogin}></LoginPopup>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/place' element={<PlaceHolder/>}/>
  
        </Routes>
        
      </div>
      
      <Footer></Footer>
    </>
  )
}

export default App
