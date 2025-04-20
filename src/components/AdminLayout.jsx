import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/admin/dashboard" className="hover:text-blue-400">📊 Dashboard</Link>
          <Link to="/admin/productslist" className="hover:text-blue-400">📦 จัดการสินค้า</Link>
          <Link to="/admin/createproduct" className="hover:text-blue-400">➕ เพิ่มสินค้า</Link>
          <Link to="/admin/profile" className="hover:text-blue-400">🙍‍♂️ โปรไฟล์</Link>
          <Link to="/admin/edit-profile" className="hover:text-blue-400">⚙️ แก้ไขโปรไฟล์</Link>
        </nav>

        <div className="mt-auto">
          <p className="mt-6 text-sm">👋 ยินดีต้อนรับ: <span className="font-semibold">{user?.username}</span></p>
          <button onClick={handleLogout} className="text-red-400 mt-2 hover:underline">ออกจากระบบ</button>
        </div>
      </aside>

      {/* เนื้อหาหลัก */}
      <main className="flex-1 bg-gray-50 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
