import React from 'react'
import Banner from '../assets/Banner.jpg'


function About() {
  return (
<>
{/* แบนเนอร์ด้านบน */}
<img src={Banner} alt="Banner" className="w-full h-auto object-cover" />
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">เกี่ยวกับเรา</h2>
      <p className="text-lg text-gray-700 mb-8">
        <strong>บริษัท เอ็นเอ วิคตอรี่ โปรดักส์ จำกัด</strong>  
        เราคือผู้นำในด้านการจำหน่าย <strong>ชั้นวางสินค้าอุตสาหกรรม</strong> ที่มีคุณภาพสูง มุ่งเน้นให้บริการแก่ธุรกิจในหลากหลายอุตสาหกรรมที่ต้องการการจัดระเบียบและการจัดเก็บสินค้าที่มีประสิทธิภาพ
      </p>
      
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">วิสัยทัศน์</h3>
      <p className="text-lg text-gray-700 mb-8">
        เรามุ่งหวังที่จะเป็นผู้นำในการจัดจำหน่ายชั้นวางสินค้าที่ดีที่สุดในประเทศไทย พร้อมทั้งนำเสนอผลิตภัณฑ์ที่ตอบโจทย์และสามารถรองรับความต้องการของลูกค้าได้อย่างครบถ้วนและมีคุณภาพ
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">พันธกิจ</h3>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
        <li>ให้บริการชั้นวางสินค้าอุตสาหกรรมที่มีคุณภาพและคุ้มค่า</li>
        <li>ตอบสนองความต้องการของลูกค้าด้วยผลิตภัณฑ์ที่หลากหลายและใช้งานได้จริง</li>
        <li>พัฒนาผลิตภัณฑ์และบริการเพื่อยกระดับมาตรฐานของธุรกิจและอุตสาหกรรมในประเทศไทย</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">ผลิตภัณฑ์ของเรา</h3>
      <p className="text-lg text-gray-700 mb-8">
        เราจำหน่าย <strong>ชั้นวางสินค้าอุตสาหกรรม</strong> ที่มีหลายประเภท เช่น  
        - ชั้นวางสินค้าแบบปรับระดับได้  
        - ชั้นวางเหล็กเกรดพิเศษสำหรับงานหนัก  
        - ระบบการจัดเก็บสินค้าอัจฉริยะ  
        - ชั้นวางสำหรับคลังสินค้าและอุตสาหกรรมทั่วไป
      </p>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">ติดต่อเรา</h3>
      <p className="text-lg text-gray-700">
        หากคุณกำลังมองหาผลิตภัณฑ์ที่มีคุณภาพและการบริการที่เป็นเลิศ เราพร้อมที่จะให้บริการคุณเสมอ
      </p>
      <div className='mt-10'>
      <button
                  onClick={() => window.open('https://lin.ee/ph7rGso', '_blank', 'noopener,noreferrer')}
                  className="mt-auto mr-5 w-full md:w-auto px-6 py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm md:text-base"
                >
                  Facebook
                </button>
                <button
                  onClick={() => window.open('https://lin.ee/ph7rGso', '_blank', 'noopener,noreferrer')}
                  className="mt-auto mr-5 w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm md:text-base"
                >
                  Line
                </button>
                <button
                  onClick={() => window.open('https://lin.ee/ph7rGso', '_blank', 'noopener,noreferrer')}
                  className="mt-auto w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm md:text-base"
                >
                  Call
                </button>
                </div>
    </div>
  </div>
  </>
  )
}

export default About