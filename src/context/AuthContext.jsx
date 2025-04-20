import React, { createContext, useState, useContext, useEffect } from 'react';

// สร้าง context
export const AuthContext = createContext();

// สร้าง hook สำหรับดึงข้อมูล
export const useAuth = () => {
  return useContext(AuthContext);
};

// สร้าง AuthProvider ที่จัดการสถานะของผู้ใช้
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // สถานะการโหลด

  useEffect(() => {
    // เช็ค localStorage เมื่อโหลดคอมโพเนนต์
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // ฟังก์ชันการเข้าสู่ระบบ
  const login = async (credentials) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      // บันทึกข้อมูลผู้ใช้ใน localStorage
      localStorage.setItem('user', JSON.stringify(data.user));
      setUser(data.user);
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  // ฟังก์ชันการออกจากระบบ
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // ฟังก์ชันอัปเดตข้อมูลผู้ใช้
  const updateUserProfile = async (updatedUser) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const data = await response.json();

      // อัปเดตข้อมูลใน localStorage
      localStorage.setItem('user', JSON.stringify(data.user));
      setUser(data.user);
    } catch (error) {
      console.error('Update Profile Error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUserProfile }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
