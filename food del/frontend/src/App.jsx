import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Pages/Cart/Cart'
import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder'
import Home from './components/Pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Suc from './components/Pages/Suc'
import Pay from './components/Pages/Payment/Pay'

const App = () => {

  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/order' element={<PlaceOrder/>}/>
    <Route path='/payment' element={<Pay/>}/>
    <Route path='/success' element={<Suc/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
  )
}
export default App
