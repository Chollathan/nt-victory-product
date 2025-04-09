import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png';
import { Menu, X } from 'lucide-react'; // ใช้ icon จาก lucide-react

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-zinc-900 px-4 py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* โลโก้ */}
        <Link to="/" className="flex items-center">
          <img className="h-12 md:h-16 object-contain" src={Logo} alt="Logo" />
        </Link>

        {/* ปุ่มเมนูบนมือถือ */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* เมนูปกติ (จอใหญ่) */}
        <ul className="hidden md:flex gap-6 font-Kanit text-base">
          <li><Link to="/" className='hover:underline'>หน้าแรก</Link></li>
          <li><Link to="/product" className='hover:underline'>สินค้า</Link></li>
          <li><Link to="/contact" className='hover:underline'>ติดต่อเรา</Link></li>
          <li><Link to="/about" className='hover:underline'>เกี่ยวกับ</Link></li>
          <li><Link to="/blog" className='hover:underline'>สาระน่ารู้</Link></li>
        </ul>
      </div>

      {/* เมนูบนมือถือ (แสดงเมื่อกดปุ่ม) */}
      {isOpen && (
        <ul className="flex flex-col mt-4 gap-3 md:hidden font-Kanit">
          <li><Link to="/" className='hover:underline' onClick={() => setIsOpen(false)}>หน้าแรก</Link></li>
          <li><Link to="/product" className='hover:underline' onClick={() => setIsOpen(false)}>สินค้า</Link></li>
          <li><Link to="/contact" className='hover:underline' onClick={() => setIsOpen(false)}>ติดต่อเรา</Link></li>
          <li><Link to="/about" className='hover:underline' onClick={() => setIsOpen(false)}>เกี่ยวกับ</Link></li>
          <li><Link to="/blog" className='hover:underline' onClick={() => setIsOpen(false)}>สาระน่ารู้</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
