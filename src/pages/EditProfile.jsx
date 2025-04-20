import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ใช้ useNavigate แทน useHistory

const EditProfile = () => {
  const [user, setUser] = useState({
    full_name: "",
    email: "",
    username: "",
    phone_number: "",
    profile_image: "",
    role_name: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ใช้ useNavigate แทน useHistory

  useEffect(() => {
    // ฟังก์ชันดึงข้อมูลโปรไฟล์ของผู้ใช้ที่ล็อกอินอยู่
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("https://4aa1-2001-fb1-51-66c9-2c8d-44d-7280-e530.ngrok-free.app/api/auth/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user profile", error);
      }
    };
    fetchUserProfile();
  }, []);

  const handleProfileImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("full_name", user.full_name);
    formData.append("phone_number", user.phone_number);
    formData.append("email", user.email);
    formData.append("username", user.username);
    formData.append("role_name", user.role_name);
    if (profileImage) {
      formData.append("profile_image", profileImage);
    }

    try {
      const response = await axios.put(
        "http://localhost:5000/api/auth/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Profile updated successfully");
      navigate("/admin/profile"); // ใช้ navigate แทน history.push
    } catch (error) {
      console.error("Failed to update profile", error);
      alert("Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 border rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-5">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="full_name" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            value={user.full_name}
            onChange={(e) => setUser({ ...user, full_name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            disabled
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone_number" className="block text-sm font-medium">
            Phone Number
          </label>
          <input
            type="text"
            id="phone_number"
            value={user.phone_number}
            onChange={(e) => setUser({ ...user, phone_number: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="profile_image" className="block text-sm font-medium">
            Profile Image
          </label>
          <input
            type="file"
            id="profile_image"
            onChange={handleProfileImageChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {user.profile_image && (
            <img
              src={`http://localhost:5000/uploads/profile_images/${user.profile_image}`}
              alt="Profile"
              className="mt-2 w-20 h-20 object-cover rounded-full"
            />
          )}
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
