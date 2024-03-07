import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tab, Tabs } from "../components/Beranda/Tabs";
import PropTypes from "prop-types";
import { AiFillCaretRight } from "react-icons/ai";

import imgBeranda from "../assets/beranda-background-1.webp";
import Explore from "../components/Beranda/Explore";

const DemographicContent = React.memo(function DemographicContent({ label }) {
  switch (label) {
    case "Agama":
      return (
        <div className="flex flex-col py-4 md:flex-row">
          <DemographicItem
            label="Islam"
            description="Memimpin demografi agama penduduk desa dengan 69%. 13.800 penduduk Desa Kenteng menganut Agama Islam."
          />
          <DemographicItem
            label="Kristen"
            description="Menduduki posisi kedua dengan 29%. 5.800 penduduk Desa Kenteng menganut Agama Kristen Protestan."
          />
          <DemographicItem
            label="Katholik"
            description="400 penduduk Desa Kenteng menganut Agama Kristen Katholik."
          />
        </div>
      );
    case "Usia":
      return (
        <div className="flex flex-col py-4 md:flex-row">
          <DemographicItem
            label="≤ 18 Tahun"
            description="50% dari populasi Desa Kenteng berusia 18 tahun atau kurang."
          />
          <DemographicItem
            label="19 - 59 Tahun"
            description="25% dari populasi Desa Kenteng berusia 19 - 59 tahun."
          />
          <DemographicItem
            label="≥ 60 Tahun"
            description="25% dari populasi Desa Kenteng berusia 60 tahun atau lebih."
          />
        </div>
      );
    case "Pekerjaan":
      return (
        <div className="flex flex-col py-4 md:flex-row">
          <DemographicItem
            label="Pebisnis"
            description="45% dari populasi desa menjalankan bisnis mereka masing-masing untuk bertahan hidup."
          />
          <DemographicItem
            label="Pegawai Negara"
            description="Menjadi pegawai negara juga menjadi opsi yang sering dipilih oleh penduduk desa Kenteng."
          />
          <DemographicItem
            label="Pengangguran / Tidak Terdata"
            description="Hanya 5% yang belum terdata pekerjaannya pada sistem."
          />
        </div>
      );
    case "Pendidikan":
      return (
        <div className="flex flex-col py-4 md:flex-row">
          <DemographicItem
            label="Lulus Kuliah (S1)"
            description="60% penduduk desa sudah resmi lulus kuliah."
          />
          <DemographicItem
            label="Lulus SMA"
            description="75% Sudah lulus SMA / SMK / sederajat."
          />
        </div>
      );
    default:
      return null;
  }
});

DemographicContent.propTypes = {
  label: PropTypes.string.isRequired,
};

const DemographicItem = ({ label, description }) => {
  return (
    <div className="w-full p-5 bg-white rounded-lg">
      <h2 className="mb-2 text-lg font-bold">{label}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

DemographicItem.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Beranda = () => {

  const [activeTab, setActiveTab] = useState("Agama");

  const handleTabChange = (label) => {
    setActiveTab(label);
  };

  return (
    <div>
      <Header />
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>
      <div
        className="flex flex-col items-center justify-center px-6 py-32 md:-mt-[60px] md:py-56"
        style={{
          backgroundImage: `url(${imgBeranda})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-5xl p-8 bg-white rounded-lg bg-opacity-40 backdrop-blur-sm">
          <p className="mb-2 text-lg text-gray-600">Welcome to</p>
          <h1 className="mb-4 text-4xl font-bold text-green-800 md:text-5xl">
            Desa Kenteng
          </h1>
          <p className="mb-6 text-gray-800 text-md md:text-lg">
            Bandungan berasal dari kata &quot;bendungan&quot;. Diceritakan hidup
            pasangan Kyai Sanggem dan Nyai Sanggem. Kedua pasutri tersebut
            bersemedi dan memperoleh wangsit untuk mencari sumur di Gunung
            Ungaran guna memperoleh keturunan. Setelah memperoleh keturunan Kyai
            Sanggem mendapatkan wangsit kembali untuk menutup sumur tersebut
            agar tidak terjadi bencana bagi desa dibawahnya dengan konsekuensi
            tidak ada mata air di desanya. Kemudian Kyai Sanggem menutup sumur
            tersebut dengan gong. Desa tersebut kemudian terkenal dengan nama
            Bandungan.
          </p>
          <button
            className="flex items-center py-3 font-semibold text-white transition duration-300 bg-[#004b23] shadow-md px-5 rounded-xl hover:bg-[#14671a]"
            onClick={() => {
              const exploreSection = document.getElementById("explore");
              if (exploreSection) {
                exploreSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Jelajahi
            <AiFillCaretRight className="ml-1" />
          </button>
        </div>
      </div>

      <div
        className="max-w-5xl px-4 py-16 mx-auto h-[600px] md:h-[400px]"
      >
        <Tabs activeTab={activeTab} handleTabChange={handleTabChange}>
          <Tab label="Agama">
            <DemographicContent label="Agama" />
          </Tab>
          <Tab label="Usia">
            <DemographicContent label="Usia" />
          </Tab>
          <Tab label="Pekerjaan">
            <DemographicContent label="Pekerjaan" />
          </Tab>
          <Tab label="Pendidikan">
            <DemographicContent label="Pendidikan" />
          </Tab>
        </Tabs>
      </div>

      <div id="explore">
        <Explore />
      </div>
      <Footer />
    </div>
  );
};

export default Beranda;
