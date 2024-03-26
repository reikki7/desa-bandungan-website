// AdminDashboard.jsx
import { Routes, Route } from "react-router-dom";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminKegiatan from "./AdminKegiatan";
import AdminUmkm from "./AdminUmkm";
import AdminDokumen from "./AdminDokumen";
import AdminDokumenEdit from "./AdminDokumenEdit";
import AdminKegiatanEdit from "./AdminKegiatanEdit";
import AdminUmkmEdit from "./AdminUmkmEdit";
import AdminApdes from "./AdminApdes";
import AdminApdesEdit from "./AdminApdesEdit";

const AdminMain = () => {
  return (
    <div className="flex bg-[#f3f4f6]">
      {" "}
      {/* Center horizontally */}
      <AdminSidebar />
      <div className="p-10 w-full mx-24">
        <Routes>
          <Route path="/" element={<AdminKegiatan />} />
          <Route path="/kegiatan" element={<AdminKegiatan />} />
          <Route path="/umkm" element={<AdminUmkm />} />
          <Route path="/dokumen" element={<AdminDokumen />} />
          <Route path="/apdes" element={<AdminApdes />} />
          <Route path="/kegiatan/:id" element={<AdminKegiatanEdit />} />
          <Route path="/umkm/:id" element={<AdminUmkmEdit />} />
          <Route path="/dokumen/:id" element={<AdminDokumenEdit />} />
          <Route path="/apdes/:id" element={<AdminApdesEdit />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminMain;
