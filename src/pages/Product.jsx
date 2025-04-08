import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RackBlack from '../assets/RackBlack.jpg';
import RackBlue from '../assets/RackBlue.jpg';
import RackWhite from '../assets/RackWhite.jpg';
import RackOrange from '../assets/RackOrange.jpg';
import Banner from '../assets/Banner.jpg';

const Product = () => {
  const [selectedSize, setSelectedSize] = useState('เล็ก');
  const [selectedColor, setSelectedColor] = useState('ดำ');

  const sizes = ['เล็ก', 'กลาง', 'ใหญ่'];
  const colors = ['ดำ', 'ขาว', 'น้ำเงิน', 'ส้ม'];

  // ตัวอย่างการใช้งานภาพจากไฟล์ในตัวแปร productImages
  const productImages = {
    เล็ก: {
      ดำ: RackBlack,
      ขาว: RackWhite,
      น้ำเงิน: RackBlue,
      ส้ม: RackOrange,
    },
    กลาง: {
      ดำ: RackBlack,
      ขาว: RackWhite,
      น้ำเงิน: RackBlue,
      ส้ม: RackOrange,
    },
    ใหญ่: {
      ดำ: RackBlack,
      ขาว: RackWhite,
      น้ำเงิน: RackBlue,
      ส้ม: RackOrange,
    },
  };

  // คำอธิบายสำหรับแต่ละขนาด
  const sizeDescriptions = {
    เล็ก: (
      <>
        ขนาดเล็กเหมาะสำหรับใช้ในพื้นที่จำกัดหรือห้องที่มีขนาดไม่ใหญ่เกินไป. 
        สามารถเก็บของเบาๆ และอุปกรณ์ขนาดเล็กได้.
        <ul className="mt-2 text-gray-600 font-Kanit">
          <li>ขนาด: 107 x 40 x 200 cm</li>
          <li>ขนาด: 150 x 50 x 200 cm</li>
          <li>ขนาด: 150 x 60 x 200 cm</li>
          <li>รับน้ำหนักสูงสุด: 200 KG</li>
        </ul>
      </>
    ),
    กลาง: (
      <>
        ขนาดกลางเป็นตัวเลือกที่นิยม สามารถใช้งานได้หลากหลายพื้นที่ และสามารถเก็บของได้มากขึ้นจากขนาดเล็ก.
        <ul className="mt-2 text-gray-600 font-Kanit">
          <li>ขนาด: 200 x 60 x 200 cm</li>
          <li>รับน้ำหนักสูงสุด: 200 KG</li>
        </ul>
      </>
    ),
    ใหญ่: (
      <>
      <p>ขนาดใหญ่เหมาะสำหรับการใช้งานในพื้นที่กว้าง มีพื้นที่เก็บของมากเหมาะกับธุรกิจที่ต้องการการจัดเก็บสินค้าในปริมาณมาก.</p>
      </>
    )
  };

  return (
    <>
      {/* แบนเนอร์ */}
      <img src={Banner} alt="Banner" className="w-full h-auto mb-8" />
      
      <div className="container mx-auto p-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-Kanit text-gray-900">ชั้นวางของอุตสาหกรรม</h1>
          <p className="text-xl text-gray-600 font-Kanit">เลือกซื้อชั้นวางของอุตสาหกรรมในหลายขนาดและสี</p>
        </header>

        {/* Product Details */}
        <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-12 md:space-y-0">
          {/* Product Image */}
          <div className="flex-1">
            <img
              src={productImages[selectedSize][selectedColor]}
              alt={`ชั้นวางขนาด ${selectedSize} สี ${selectedColor}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Product Options */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-Kanit text-gray-800 mb-4">เลือกขนาด</h2>
              <div className="flex space-x-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg ${
                      selectedSize === size ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {/* ข้อความคำอธิบายของขนาดที่เลือก */}
              <div className="mt-4">{sizeDescriptions[selectedSize]}</div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-Kanit text-gray-800 mb-4">เลือกสี</h2>
              <div className="flex space-x-4">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg ${
                      selectedColor === color ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <a className="py-3 pr-5 pl-5 bg-green-500 text-white rounded-lg text-xl font-Kanit hover:bg-green-700 " href="#">สนใจติดต่อสอบถาม </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
