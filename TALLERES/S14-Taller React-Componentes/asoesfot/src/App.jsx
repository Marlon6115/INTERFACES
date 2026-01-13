import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from 'aos'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";


function App() {
 useEffect(() => {
  AOS.init({
    duration:1000,
    once:false,
  }) 
}, [])

return (
  <BrowserRouter>
  <Routes>
    <Route index element = {<Landing/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='services' element={<Services/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='register' element={<Register/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>
)
}
export default App
