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
      <div className="md:p-10 p-0 mx-0 w-full md:mx-24 overflow-auto">
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
          <Route path="/kegiatan/baru" element={<AdminKegiatanEdit />} />
          <Route path="/umkm/baru" element={<AdminUmkmEdit />} />
          <Route path="/dokumen/baru" element={<AdminDokumenEdit />} />
          <Route path="/apdes/baru" element={<AdminApdesEdit />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminMain;
