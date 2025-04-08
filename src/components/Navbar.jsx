import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png';


function Navbar() {
  return (
    <>
    <nav className="bg-white pr-5 text-zinc-900 flex justify-evenly">
    <Link to="/" className='hover:text-zinc-900 '><img className='h-30 md:h-25 object-contain' src={Logo} alt="Logo" /></Link>
    
      <ul className="flex gap-4  mt-10 font-Kanit ">
        <li><Link to="/" className='hover:underline'>หน้าแรก</Link></li>
        <li><Link to="/product" className='hover:underline'>สินค้า</Link></li>
        <li><Link to="/contact" className='hover:underline'>ติดต่อเรา</Link></li>
        <li><Link to="/about" className='hover:underline'>เกี่ยวกับ</Link></li>
        <li><Link to="/blog" className='hover:underline'>สาระน่ารู้</Link></li>
        {/* <li><Link to="/login" className='hover:underline'>ล็อกอิน</Link></li> */}
      </ul>
    </nav>
    </>
  )
}

export default Navbar