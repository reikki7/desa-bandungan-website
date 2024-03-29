// AdminLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin" && password === "admin") {
      navigate("/admin");
    } else {
      console.log("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#051804]">
      <div className="max-w-md w-[1200px] mx-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-[#051804]">Admin Panel</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-gray-700">
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <a href="#" className="text-[#051804] hover:text-gray-600">
              Lupa Sandi?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#051804] rounded-md hover:bg-[#092c0a] transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
