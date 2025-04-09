import React from 'react'
import Banner1 from '../assets/Banner1.jpg'

const blogPosts = [
{
  id: 1,
  title: "วิธีเลือกชั้นวางให้เหมาะกับโรงงาน",
  excerpt: "ชั้นวางในโรงงานต้องคำนึงถึงพื้นที่ น้ำหนักที่รับได้ และความสะดวกในการเข้าถึงสินค้า...",
  image: "https://source.unsplash.com/400x300/?shelf,factory",
},
{
  id: 2,
  title: "จัดการคลังสินค้าอย่างไรให้มีประสิทธิภาพ",
  excerpt: "เคล็ดลับการบริหารจัดการคลังสินค้าให้สะดวก ปลอดภัย และประหยัดพื้นที่",
  image: "https://source.unsplash.com/400x300/?warehouse,logistics",
},
{
  id: 3,
  title: "ชั้นวางประเภทต่างๆ และการใช้งาน",
  excerpt: "เปรียบเทียบชั้นวาง Medium Rack, Selective Rack และ Drive-In Rack...",
  image: "https://source.unsplash.com/400x300/?racks,storage",
},
{
  id: 4,
  title: "5 วิธีเพิ่มประสิทธิภาพในโรงงาน",
  excerpt: "ตั้งแต่การจัดวาง layout ไปจนถึงการเลือกอุปกรณ์ที่เหมาะสม",
  image: "https://source.unsplash.com/400x300/?factory,efficiency",
},
{
  id: 5,
  title: "รู้จักกับ Selective Rack",
  excerpt: "หนึ่งในระบบชั้นวางที่นิยมที่สุดในคลังสินค้า เพราะความยืดหยุ่นในการจัดเก็บ",
  image: "https://source.unsplash.com/400x300/?selective,rack",
},
{
  id: 6,
  title: "ประโยชน์ของชั้นวางแบบปรับระดับได้",
  excerpt: "ช่วยให้สามารถปรับเปลี่ยนตามลักษณะสินค้าและความสูงได้ตามต้องการ",
  image: "https://source.unsplash.com/400x300/?adjustable,shelf",
},
{
  id: 7,
  title: "ข้อควรรู้ก่อนติดตั้งชั้นวาง",
  excerpt: "มีอะไรที่ต้องเตรียมก่อนติดตั้ง เช่น พื้นที่ พื้นฐานโครงสร้าง และความสูง",
  image: "https://source.unsplash.com/400x300/?installation,rack",
},
{
  id: 8,
  title: "แนวโน้มคลังสินค้าอัจฉริยะ",
  excerpt: "เทคโนโลยีใหม่ในคลังสินค้า เช่น RFID, IoT, และระบบอัตโนมัติ",
  image: "https://source.unsplash.com/400x300/?smart,warehouse",
},

];
function Blog() {
  return (
    <>
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-Kanit text-center mb-10">บทความสาระน่ารู้</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold font-Kanit">{post.title}</h2>
                <p className="text-gray-600 text-sm mt-2 font-Kanit">{post.excerpt}</p>
                <button className="mt-4 text-blue-500 font-Kanit hover:underline">
                  อ่านต่อ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Blog