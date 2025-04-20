import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ใช้ useNavigate จาก React Router

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    sku: '',
    name: '',
    price: '',
    quantity: '',
    description: '',
    category_id: '',
    color: 'red', // ค่าปริยาย (สีที่เลือกแรก)
    image: null,
  });
  const [message, setMessage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate(); // เรียกใช้งาน useNavigate

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      setMessage('กรุณาเลือกไฟล์รูปภาพ');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('กรุณาเข้าสู่ระบบ');
      return;
    }

    const data = new FormData();
    data.append('sku', formData.sku);
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('quantity', formData.quantity);
    data.append('description', formData.description);
    data.append('category_id', formData.category_id);
    data.append('color', formData.color); // ส่งข้อมูลสีไปด้วย
    data.append('image', formData.image);

    try {
      const response = await axios.post('http://localhost:5000/api/products', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage('เพิ่มสินค้าสำเร็จ');
      setFormData({
        sku: '',
        name: '',
        price: '',
        quantity: '',
        description: '',
        category_id: '',
        color: 'red', // รีเซ็ตสีให้กลับไปเป็นสีแดง
        image: null,
      });
      setImagePreview(null);

      // เปลี่ยนเส้นทางไปยังหน้า /productlist หลังจากเพิ่มสินค้า
      navigate('/admin/productslist');                            
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        setMessage(error.response.data.message || 'เกิดข้อผิดพลาดในการเพิ่มสินค้า');
      } else {
        setMessage('เกิดข้อผิดพลาดในการเชื่อมต่อ');
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6">เพิ่มสินค้าใหม่</h2>
      {message && (
        <div className="mb-4 p-3 text-white rounded bg-green-500">{message}</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">SKU</label>
          <input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">ชื่อสินค้า</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block mb-1 font-medium">ราคา</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-1 font-medium">จำนวน</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium">รายละเอียด</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">หมวดหมู่สินค้า</label>
          <select
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">เลือกหมวดหมู่</option>
            <option value="1">ชั้นวางขนาดเล็ก</option>
            <option value="2">ชั้นวางขนาดกลาง</option>
            <option value="3">ชั้นวางขนาดใหญ่</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">เลือกสีสินค้า</label>
          <select
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="red">แดง</option>
            <option value="blue">น้ำเงิน</option>
            <option value="green">เขียว</option>
            <option value="yellow">เหลือง</option>
            <option value="black">ดำ</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">รูปภาพสินค้า</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
          {imagePreview && (
            <div className="mt-4">
              <img src={imagePreview} alt="Preview" className="w-full h-64 object-cover rounded" />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          บันทึกสินค้า
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
