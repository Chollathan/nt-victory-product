import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.get('http://localhost:5000/api/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);  // ตั้งค่า products จาก response
      } catch (error) {
        setError('ไม่สามารถโหลดข้อมูลสินค้าได้ กรุณาเข้าสู่ระบบ');
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      {/* Error Message */}
      {error && (
        <div className="bg-red-500 text-white px-4 py-3 rounded mb-6">
          <p>{error}</p>
        </div>
      )}

      {/* Header and Add Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">รายการสินค้า</h2>
        <Link
          to="/createproduct"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow-sm"
        >
          + เพิ่มสินค้า
        </Link>
      </div>

      {/* Product Table */}
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-6 py-3">รูปภาพ</th>
              <th className="px-6 py-3">SKU</th>
              <th className="px-6 py-3">ชื่อสินค้า</th>
              <th className="px-6 py-3">สี</th>
              <th className="px-6 py-3">จำนวน</th>
              <th className="px-6 py-3">ราคา</th>
              <th className="px-6 py-3">หมวดหมู่</th>
              <th className="px-6 py-3">การจัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    {product.image_url ? (
                      <img
                        src={`http://localhost:5000/uploads/product_images/${product.image_url}`}
                        alt="Product"
                        className="w-20 h-20 object-cover rounded"
                      />
                    ) : (
                      <span className="text-gray-400">ไม่มีรูป</span>
                    )}
                  </td>
                  <td className="px-6 py-4">{product.sku}</td>
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">{product.color}</td>
                  <td className="px-6 py-4">{product.quantity}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4">{product.category || '—'}</td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                      onClick={() => console.log('แก้ไขสินค้า', product.id)}
                    >
                      แก้ไข
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                  ไม่มีข้อมูลสินค้า
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
