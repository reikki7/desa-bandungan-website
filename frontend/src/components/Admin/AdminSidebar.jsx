import { useState } from "react";
import { FiLogOut, FiMenu } from "react-icons/fi";
import {
  RiFileList2Line,
  RiShoppingBagLine,
  RiCalendarEventLine,
  RiFileTextLine,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import headerLogo from "../../assets/header-logo.webp";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Perform logout logic here
    navigate("/admin/login");
  };

  return (
    <div className="bg-[#051804] text-white flex h-screen">
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed inset-0 z-20 bg-black opacity-50 transition-opacity lg:hidden`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed lg:static inset-y-0 left-0 z-30 w-64 bg-[#051804] overflow-y-auto transition duration-300 lg:translate-x-0 lg:inset-0`}
      >
        {/* Header */}
        <div className="flex flex-col items-center px-4 py-2 border-b border-gray-700 mt-4">
          <img src={headerLogo} alt="Logo" className="w-16 h-auto" />
          <span className="mt-2 text-xl font-bold mb-4">Admin Panel</span>
        </div>

        {/* Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/admin/kegiatan"
                className="flex items-center px-4 py-2 rounded-md hover:bg-[#004b23] transition-colors duration-200"
              >
                <RiCalendarEventLine size={20} className="mr-2" />
                Kegiatan
              </Link>
            </li>
            <li>
              <Link
                to="/admin/umkm"
                className="flex items-center px-4 py-2 rounded-md hover:bg-[#004b23] transition-colors duration-200"
              >
                <RiShoppingBagLine size={20} className="mr-2" />
                UMKM
              </Link>
            </li>
            <li>
              <Link
                to="/admin/apdes"
                className="flex items-center px-4 py-2 rounded-md hover:bg-[#004b23] transition-colors duration-200"
              >
                <RiFileTextLine size={20} className="mr-2" />
                APDES
              </Link>
            </li>
            <li>
              <Link
                to="/admin/dokumen"
                className="flex items-center px-4 py-2 rounded-md hover:bg-[#004b23] transition-colors duration-200"
              >
                <RiFileList2Line size={20} className="mr-2" />
                Dokumen
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 flex-1 w-full absolute bottom-0">
          <button
            className="w-full flex items-center px-4 py-2 rounded-md hover:bg-[#004b23] transition-colors duration-200"
            onClick={handleLogout}
          >
            <FiLogOut size={20} className="mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Toggle Button */}
      <div className="flex-1 lg:hidden bg-gray-100 p-4">
        <div className="lg:hidden">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={toggleSidebar}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
