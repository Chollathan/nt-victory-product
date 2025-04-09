import React from 'react'
import Rack from '../assets/Rack.jpg'
import RackBlack from '../assets/RackBlack.jpg'
import RackBlue from '../assets/RackBlue.jpg'
import RackWhite from '../assets/RackWhite.jpg'
import Banner from '../assets/Banner.jpg'

function Home() {
  return (
    <>
      {/* แบนเนอร์ด้านบน */}
      <img src={Banner} alt="Banner" className="w-full h-auto object-cover" />

      {/* Header Section */}
      <header className="bg-gray-800 text-white p-8 text-center">
        <p className="text-base md:text-lg font-Kanit">บริษัท เอ็นเอ วิคตอรี่ โปรดักส์ จำกัด ผู้นำด้าน ชั้นวางอุตสาหกรรม ครบวงจร</p>
        <h1 className="mt-4 text-xl md:text-2xl lg:text-3xl font-Kanit">
          ประสบการณ์กว่า 20 ปีในการออกแบบและติดตั้งชั้นวางอุตสาหกรรม ชั้นวางของ rack ในโรงงานอุตสาหกรรม
        </h1>
      </header>

      {/* Hero Section - สินค้า */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl mb-6 font-Kanit">ผลิตภัณฑ์ของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* รายการสินค้า */}
            {[{
              img: RackWhite,
              title: "ชั้นวางของขนาดเล็ก",
              desc: "ขนาดเล็กเหมาะสำหรับใช้ในพื้นที่จำกัดหรือห้องที่มีขนาดไม่ใหญ่เกินไป. สามารถเก็บของเบาๆ และอุปกรณ์ขนาดเล็กได้."
            }, {
              img: RackBlack,
              title: "ชั้นวางของขนาดกลาง",
              desc: "ขนาดกลางเป็นตัวเลือกที่นิยม สามารถใช้งานได้หลากหลายพื้นที่ และสามารถเก็บของได้มากขึ้นจากขนาดเล็ก."
            }, {
              img: RackBlue,
              title: "ชั้นวางของขนาดใหญ่",
              desc: "ขนาดใหญ่เหมาะสำหรับการใช้งานในพื้นที่กว้าง มีพื้นที่เก็บของมากเหมาะกับธุรกิจที่ต้องการการจัดเก็บสินค้าในปริมาณมาก."
            }].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover rounded-t-lg"
                />
                <h3 className="text-lg md:text-xl mt-4 font-Kanit">{item.title}</h3>
                <p className="mt-2 text-gray-700 font-Kanit text-sm md:text-base">{item.desc}</p>
                <button
                  onClick={() => window.open('https://lin.ee/ph7rGso', '_blank', 'noopener,noreferrer')}
                  className="mt-auto w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm md:text-base"
                >
                  สอบถาม
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl mb-6 font-Kanit">ทำไมเลือกเรา?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "ทนทานและแข็งแรง", desc: "ผลิตจากวัสดุคุณภาพสูง สามารถรับน้ำหนักได้มาก และใช้งานได้ยาวนาน" },
              { title: "ปรับขนาดได้", desc: "ชั้นวางสามารถปรับขนาดได้ตามความต้องการของธุรกิจแต่ละประเภท" },
              { title: "ราคาคุ้มค่า", desc: "เราเสนอราคาที่แข่งขันได้พร้อมการรับประกันคุณภาพสินค้า" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg md:text-xl mb-4 font-Kanit">{item.title}</h3>
                <p className="text-gray-700 font-Kanit text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
