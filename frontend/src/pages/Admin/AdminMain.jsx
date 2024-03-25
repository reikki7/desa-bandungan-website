// AdminDashboard.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminSidebar from '../../components/Admin/AdminSidebar';
import AdminKegiatan from './AdminKegiatan';
import AdminUmkm from './AdminUmkm';
import AdminDokumen from './AdminDokumen';
import AdminKegiatanEdit from './AdminKegiatanEdit';
import AdminUmkmEdit from './AdminUmkmEdit';

const AdminMain = () => {
    return (
        <div className="flex">
            <AdminSidebar />
            <Routes>
                <Route path="/" element={<AdminKegiatan />} />
                <Route path="/kegiatan" element={<AdminKegiatan />} />
                <Route path="/umkm" element={<AdminUmkm />} />
                <Route path="/dokumen" element={<AdminDokumen />} />
                <Route path="/kegiatan/:id" element={<AdminKegiatanEdit />} />
                <Route path="/umkm/:id" element={<AdminUmkmEdit />} />
            </Routes>
        </div>
    );
};

export default AdminMain;