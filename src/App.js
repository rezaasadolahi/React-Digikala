import React from 'react'
import { Routes, Route } from 'react-router-dom'
//* Components
import Header from './Components/Heade/Heade'
import Product from './Components/Product/Product'
import ProductDetail from './Components/ProductDetail/ProductDetail'
import Signup from './Components/Sign/Sign up/Sign-up'
import Signin from './Components/Sign/Sign in/Sign-in'
import Profile from './Components/Profile/Profile'
import Lists from './Components/Lists/Lists'





function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signup/Login" element={<Signin />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Profile/Lists" element={<Lists />} />
      </Routes>
    </>
  )
}


export default App