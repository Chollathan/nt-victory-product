import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const Profile = () => {
  const [user, setUser] = useState({
    full_name: "",
    email: "",
    username: "",
    phone_number: "",
    profile_image: "",
    role_name: "",
  });
  const navigate = useNavigate(); 

  useEffect(() => {
    // ฟังก์ชันดึงข้อมูลโปรไฟล์ของผู้ใช้ที่ล็อกอินอยู่
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user profile", error);
        navigate("/login"); 
      }
    };
    fetchUserProfile();
  }, [navigate]);

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 border rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-5">My Profile</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">Full Name</label>
        <p className="text-lg">{user.full_name}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Email</label>
        <p className="text-lg">{user.email}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Username</label>
        <p className="text-lg">{user.username}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Phone Number</label>
        <p className="text-lg">{user.phone_number}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Profile Image</label>
        {user.profile_image ? (
          <img
            src={`http://localhost:5000/uploads/profile_images/${user.profile_image}`}
            alt="Profile"
            className="mt-2 w-20 h-20 object-cover rounded-full"
          />
        ) : (
          <p>No profile image available</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Role</label>
        <p className="text-lg">{user.role_name}</p>
      </div>

      <div className="mb-4">
        <button
          onClick={() => navigate("/admin/edit-profile")}
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
