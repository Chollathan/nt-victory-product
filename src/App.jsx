import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import TopBar from './components/Topbar';
import Chatbutton from './components/Chatbutton';
import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';
import { useAuth } from './context/AuthContext';
import EditProfile from './pages/EditProfile';
import CreateProduct from './pages/CreateProduct';
import ProductList from './pages/ProductList';
import AdminLayout from './components/AdminLayout';



function App() {
  const { user } = useAuth(); // ดึงข้อมูลผู้ใช้จาก context

  return (
    <>
      <TopBar />
      <Navbar user={user} /> {/* ส่ง user ไปที่ Navbar */}
      <Chatbutton />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes with AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="productslist" element={<ProductList />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="createproduct" element={<CreateProduct />} />
        </Route>
      </Routes>


      <Footer />
    </>
  );
}

export default App;
