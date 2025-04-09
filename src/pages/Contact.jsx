import React from 'react'

function Contact() {
  return (
   <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-Kanit mb-10 text-center">ติดต่อเรา</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ฟอร์มติดต่อ */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-Kanit mb-1">ชื่อ - สกุล</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="กรอกชื่อ - สกุล"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-Kanit mb-1">บริษัท</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ชื่อบริษัท (ถ้ามี)"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-Kanit mb-1">เบอร์ติดต่อ</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="กรอกเบอร์โทรศัพท์"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-Kanit mb-1">รายละเอียดที่ต้องการติดต่อ</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="รายละเอียดเพิ่มเติม เช่น ต้องการสอบถามสินค้า, ขอใบเสนอราคา ฯลฯ"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>

          {/* ข้อมูลที่อยู่บริษัท */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-Kanit mb-4">ที่อยู่บริษัท</h3>
            <p className="text-gray-700 font-Kanit">
            บริษัท เอ็นเอ วิคตอรี่ โปรดักส์ จำกัด<br />
              139/99 หมู่2 ตำบลคูคต<br />
              อำเภอลำลูกกา จังหวัดปทุมธานี 12130<br />
            
            </p>

            <div className="mt-6">
              <h4 className="font-Kanit font-semibold mb-1">โทร:</h4>
              <a href="tel:0612353532" className="hover:underline">061-235-3532</a>

              <h4 className="font-Kanit font-semibold mt-4 mb-1">อีเมล:</h4>
              <a href="mailto:rukwongnattawat@gmail.com" className="hover:underline">rukwongnattawat@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact