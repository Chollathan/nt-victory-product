import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // นำเข้า useAuth
import Logo from '../assets/Logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth(); // ดึงข้อมูลจาก context

  const handleLogout = () => {
    logout(); // ออกจากระบบ
  };

  return (
    <nav className="bg-white text-zinc-900 px-4 py-3 shadow-md">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img className="h-12 md:h-16 object-contain" src={Logo} alt="Logo" />
        </Link>

        {/* เมนูบนมือถือ */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* เมนูหลัก */}
        <ul className="hidden md:flex gap-6 font-Kanit text-base">
          <li><Link to="/">หน้าแรก</Link></li>
          <li><Link to="/product">สินค้า</Link></li>
          <li><Link to="/contact">ติดต่อเรา</Link></li>
          <li><Link to="/about">เกี่ยวกับ</Link></li>
          <li><Link to="/blog">สาระน่ารู้</Link></li>
          
          {user && user.role === "admin" && (
            <li>
              <Link to="/admin/dashboard" className="text-blue-600 font-semibold">
                🔐 ไปหลังบ้าน
              </Link>
            </li>
          )}
          
          {/* ข้อมูลผู้ใช้ */}
          {user ? (
            <li>
              <button onClick={handleLogout} className="text-red-500 hover:underline">
                กลับไปยังหน้า Admin
              </button>
            </li>
          ) : (
            <li><Link to="/login">เข้าสู่ระบบ</Link></li>
          )}
        </ul>
      </div>

      {/* เมนูมือถือ */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4">
          <ul className="space-y-4 text-center">
            <li><Link to="/">หน้าแรก</Link></li>
            <li><Link to="/products">สินค้า</Link></li>
            <li><Link to="/contact">ติดต่อเรา</Link></li>
            <li><Link to="/about">เกี่ยวกับ</Link></li>
            <li><Link to="/blog">สาระน่ารู้</Link></li>
            {user && user.role === "admin" && (
              <li>
                <Link to="/admin/dashboard" className="text-blue-600 font-semibold">
                  🔐 ไปหลังบ้าน
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
