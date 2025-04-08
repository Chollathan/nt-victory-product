import React from 'react'
import { Link } from "react-router-dom";
import Rack from '../assets/Rack.jpg'
import RackBlack from '../assets/RackBlack.jpg'
import RackBlue from '../assets/RackBlue.jpg'
import RackWhite from '../assets/RackWhite.jpg'
import Banner from '../assets/Banner.jpg'


function Home() {
  return (
    <>
      <img src={Banner} alt="" />
      {/* Header Section */}
      <header className="bg-gray-800 text-white p-8 text-center ">

        <p className="text-lg font-Kanit">NT VICTORY PRODUCT ผู้นำด้าน ชั้นวางอุตสาหกรรม ครบวงจร</p>
        <h1 className="mt-4 text-2xl font-Kanit">ประสบการณ์กว่า 20 ปีในการออกแบบและติดตั้งชั้นวางอุตสาหกรรม ชั้นวางของ rack ในโรงงานอุตสาหกรรม</h1>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-6 font-Kanit">ผลิตภัณฑ์ของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={RackWhite}
                alt="ชั้นวางของขนาดเล็ก"
                className="w-full h-100 object-cover rounded-t-lg"
              />
              <h3 className="text-xl mt-4 font-Kanit">ชั้นวางของขนาดเล็ก</h3>
              <p className="mt-2 text-gray-700 font-Kanit">ขนาดเล็กเหมาะสำหรับใช้ในพื้นที่จำกัดหรือห้องที่มีขนาดไม่ใหญ่เกินไป. สามารถเก็บของเบาๆ และอุปกรณ์ขนาดเล็กได้.</p>

              <button
                onClick={() => window.open('https://line.me/ti/p/@your-line-id', '_blank', 'noopener,noreferrer')}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                สอบถาม
              </button>

            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={RackBlack}
                alt="ชั้นวางของขนาดกลาง"
                className="w-full h-100 object-cover rounded-t-lg"
              />
              <h3 className="text-xl mt-4 font-Kanit">ชั้นวางของขนาดกลาง</h3>
              <p className="mt-2 text-gray-700 font-Kanit">ขนาดกลางเป็นตัวเลือกที่นิยม สามารถใช้งานได้หลากหลายพื้นที่ และสามารถเก็บของได้มากขึ้นจากขนาดเล็ก.</p>
              <button
                onClick={() => window.open('https://line.me/ti/p/@your-line-id', '_blank', 'noopener,noreferrer')}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                สอบถาม
              </button>

            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={RackBlue}
                alt="ชั้นวางของขนาดใหญ่"
                className="w-full h-100 object-cover rounded-t-lg"
              />
              <h3 className="text-xl mt-4 font-Kanit">ชั้นวางของขนาดใหญ่</h3>
              <p className="mt-2 text-gray-700 font-Kanit">ขนาดใหญ่เหมาะสำหรับการใช้งานในพื้นที่กว้าง มีพื้นที่เก็บของมากเหมาะกับธุรกิจที่ต้องการการจัดเก็บสินค้าในปริมาณมาก.</p>
              <button
                onClick={() => window.open('https://line.me/ti/p/@your-line-id', '_blank', 'noopener,noreferrer')}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                สอบถาม
              </button>

            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl  mb-6 font-Kanit">ทำไมเลือกเรา?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl  mb-4 font-Kanit">ทนทานและแข็งแรง</h3>
              <p className="text-gray-700 font-Kanit">ผลิตจากวัสดุคุณภาพสูง สามารถรับน้ำหนักได้มาก และใช้งานได้ยาวนาน</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl  mb-4 font-Kanit">ปรับขนาดได้</h3>
              <p className="text-gray-700 font-Kanit">ชั้นวางสามารถปรับขนาดได้ตามความต้องการของธุรกิจแต่ละประเภท</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl  mb-4 font-Kanit">ราคาคุ้มค่า</h3>
              <p className="text-gray-700 font-Kanit">เราเสนอราคาที่แข่งขันได้พร้อมการรับประกันคุณภาพสินค้า</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">ติดต่อเรา</h2>
          <p className="text-xl mb-4">หากคุณต้องการข้อมูลเพิ่มเติมเกี่ยวกับผลิตภัณฑ์ของเรา หรือขอคำปรึกษาเกี่ยวกับการเลือกชั้นวางที่เหมาะสมกับธุรกิจของคุณ</p>
          <a href="mailto:info@example.com" className="bg-green-500 px-6 py-3 rounded-full text-white hover:bg-green-600">ส่งอีเมลถึงเรา</a>
        </div>
      </section> */}

    </>
  )
}

export default Home