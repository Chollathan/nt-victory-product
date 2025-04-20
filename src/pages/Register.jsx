import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    position: "", // <--- เพิ่มตรงนี้
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      <input type="text" name="username" placeholder="Username" onChange={handleChange} required className="mb-2 w-full border p-2 rounded" />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="mb-2 w-full border p-2 rounded" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="mb-2 w-full border p-2 rounded" />
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required className="mb-2 w-full border p-2 rounded" />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required className="mb-2 w-full border p-2 rounded" />

      <input
        type="text"
        name="position"
        placeholder="ตำแหน่ง (เช่น Sales, Admin)"
        onChange={handleChange}
        required
        className="mb-2 w-full border p-2 rounded"
      />

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Register
      </button>
    </form>
  );
};

export default Register;
