import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NotFoundIllustration from '../assets/notfound_illustration.svg'; // Import your illustration or use an icon library

const NoPage = () => {
    return (
        <div>
            <Header />
            <div className="sticky top-0 z-10 w-full bg-green-950">
                <Navbar />
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen mx-10 md:mx-0">
                <img src={NotFoundIllustration} alt="404 Not Found" className="h-auto mb-8 w-80" />
                <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">Halaman Tidak Ditemukan</h1>
                <p className="mb-8 text-lg text-center text-gray-600">Halaman yang Anda cari mungkin telah dihapus atau tidak tersedia untuk sementara waktu.</p>
                <a href="/" className="text-lg text-[#004b23] hover:underline">Kembali ke Beranda</a>
            </div>
            <Footer />
        </div>
    );
};

export default NoPage;
