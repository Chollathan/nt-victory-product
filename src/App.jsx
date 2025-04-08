import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/contact';
import Blog from './pages/Blog'
import TopBar from './components/Topbar';
import Chatbutton from './components/Chatbutton';
import Footer from './components/Footer';





function App() {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <Chatbutton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
   
  )
}

export default App
