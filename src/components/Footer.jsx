import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ส่วนที่ 1: ข้อมูลเกี่ยวกับเว็บไซต์ */}
          <div>
            <h3 className="text-xl font-semibold mb-4">ที่อยู่</h3>
            <p>39/99 หมู่2 ตำบลคูคต อำเภอลำลูกกา จังหวัดปทุมธานี 12130</p>
          </div>

          {/* ส่วนที่ 2: ลิงก์ต่างๆ */}
          <div>
            <h3 className="text-xl font-semibold mb-4">เมนูด่วน</h3>
            <ul className=" font-Kanit ">
              <li><Link to="/" className='hover:underline'>หน้าแรก</Link></li>
              <li><Link to="/product" className='hover:underline'>สินค้า</Link></li>
              <li><Link to="/contact" className='hover:underline'>ติดต่อเรา</Link></li>
              <li><Link to="/about" className='hover:underline'>เกี่ยวกับ</Link></li>
              <li><Link to="/blog" className='hover:underline'>สาระน่ารู้</Link></li>
              {/* <li><Link to="/login" className='hover:underline'>ล็อกอิน</Link></li> */}
            </ul>
          </div>

          {/* ส่วนที่ 3: ข้อมูลการติดต่อ */}
          <div>
            <h3 className="text-xl font-semibold mb-4">ติดต่อเรา</h3>
            <a href="tel:0612353532" className="hover:underline block">061-235-3532</a>
            <a href="mailto:rukwongnattawat@gmail.com" className="hover:underline block">rukwongnattawat@gmail.com</a>
          </div>
        </div>

        {/* ส่วนสุดท้าย: ลิขสิทธิ์และโซเชียลมีเดีย */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2025 NT VICTORY PRODUCT Co.,Ltd. All rights reserved.</p>
          <div className="mt-4">
            <a href="https://www.facebook.com/profile.php?id=61574573745470" className="text-white hover:text-gray-400 mx-2">Facebook</a>
            <a href="https://lin.ee/ph7rGso" className="text-white hover:text-gray-400 mx-2">Line</a>
            <a href="tel:0612353532" className="text-white hover:text-gray-400 mx-2">Call</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
