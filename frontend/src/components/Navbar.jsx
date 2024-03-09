import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiFillInfoCircle,
  AiFillHome,
  AiFillBank,
  AiFillCarryOut,
  AiFillBulb,
  AiFillFile,
} from "react-icons/ai";
import headerLogo from "../assets/header-logo.webp";
import "../App.css";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsScrolled(!isTop);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebarHandler = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      {/* Mobile menu button */}
      <div className={`fixed top-0 duration-200 right-0 block p-2 mr-2 z-10 mt-8 md:hidden bg-[#004b23] rounded-full ${isScrolled ? "opacity-100" : "opacity-45"}`}>
        <button onClick={toggleSidebarHandler}>
          <svg
            className="w-6 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Main Navbar (hidden on mobile) */}
      <div className={`z-40 backdrop-blur-md duration-200 justify-center hidden gap-5 p-3 text-lg font-semibold text-white bg-[#004b23] md:flex ${isScrolled ? "bg-opacity-50" : "bg-opacity-75"}`}>
        <Link to="/beranda" className="nav-link hover:text-gray-200">
          Beranda
        </Link>
        <Link to="/kegiatan" className="nav-link hover:text-gray-200">
          Kegiatan
        </Link>
        <Link to="/umkm" className="nav-link hover:text-gray-200">
          UMKM
        </Link>
        <Link to="/apdes" className="nav-link hover:text-gray-200">
          APDES
        </Link>
        <Link to="/dokumen" className="nav-link hover:text-gray-200">
          Dokumen
        </Link>
        <Link to="/tentang" className="nav-link hover:text-gray-200">
          Tentang
        </Link>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed z-50 top-0 left-0 h-full backdrop-blur-sm w-64 bg-[#051804] md:hidden bg-opacity-65 text-white p-6 transition-all duration-300 ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <img src={headerLogo} className="w-12 md:w-14" alt="Header Logo" />
        <div className="flex flex-col gap-8 mt-8">
          <Link to="/beranda" className="flex items-center gap-3 text-xl">
            <AiFillHome />
            Beranda
          </Link>
          <Link to="/kegiatan" className="flex items-center gap-3 text-xl">
            <AiFillCarryOut />
            Kegiatan
          </Link>
          <Link to="/dokumen" className="flex items-center gap-3 text-xl">
            <AiFillFile />
            Dokumen
          </Link>
          <Link to="/umkm" className="flex items-center gap-3 text-xl">
            <AiFillBulb />
            UMKM
          </Link>
          <Link to="/apdes" className="flex items-center gap-3 text-xl">
            <AiFillBank />
            APDES
          </Link>
          <Link to="/tentang" className="flex items-center gap-3 text-xl">
            <AiFillInfoCircle /> Tentang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
