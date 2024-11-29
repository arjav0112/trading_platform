import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/Home'
import About from './about/about';
import Pricing from './pricing/pricing';
import Support from './support/support';
import Signup from './signup/signup';
import Products from './products/products';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
